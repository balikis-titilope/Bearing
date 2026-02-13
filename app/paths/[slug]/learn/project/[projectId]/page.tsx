import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
      levelId: enrollment.currentLevelId,
    },
  });

  if (!project) {
    return notFound();
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
