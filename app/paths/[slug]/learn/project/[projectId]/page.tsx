import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ProjectSubmissionForm } from "@/components/learning/ProjectSubmissionForm";
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string; projectId: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug, projectId } = await params;
  const session = await auth();

  if (!session?.user?.id) {
    return notFound();
  }

  const userId = session.user.id;

  // Get enrollment with the project
  const enrollment = await db.enrollment.findFirst({
    where: {
      userId,
      careerPath: { slug },
    },
    include: {
      careerPath: {
        include: {
          levels: {
            orderBy: { order: 'asc' },
          },
        },
      },
    },
  });

  if (!enrollment) {
    return notFound();
  }

  // Get the project
  const project = await db.project.findFirst({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    return notFound();
  }

  // Mini projects are for practice only, no submission required
  if (project.isMiniProject) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Practice Only</h2>
            <p style={{ color: '#71717a', marginBottom: '2rem' }}>
              This is a mini-project designed for skill-building. No formal submission is required.
            </p>
            <Link href={`/paths/${slug}/learn`}>
              <Button variant="primary">Return to Learning</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get existing submission if any
  const submission = await db.projectSubmission.findFirst({
    where: {
      enrollmentId: enrollment.id,
      projectId: project.id,
    },
  });

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <ProjectSubmissionForm
          project={project}
          enrollment={enrollment}
          submission={submission}
        />
      </main>
      <Footer />
    </>
  );
}
