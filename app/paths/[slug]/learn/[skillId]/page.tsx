import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkillContent } from "@/components/learning/SkillContent";
import { isAdmin } from '@/lib/permissions';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string; skillId: string }>;
}

export default async function SkillPage({ params }: PageProps) {
  const { slug, skillId } = await params;
  const session = await auth();
  const isUserAdmin = isAdmin(session?.user);

  if (!session?.user?.id) {
    return notFound();
  }

  const userId = session.user.id;

  // Get enrollment with the skill
  let enrollment = await db.enrollment.findFirst({
    where: {
      userId,
      careerPath: { slug },
    },
    include: {
      careerPath: {
        include: {
          levels: {
            orderBy: { order: 'asc' },
            include: {
              skills: {
                orderBy: { order: 'asc' },
                include: {
                  resources: {
                    orderBy: { order: 'asc' },
                  },
                  questions: {
                    orderBy: { order: 'asc' },
                  },
                  projects: {
                    where: { isMiniProject: true },
                  },
                },
              },
            },
          },
        },
      },
      skillProgress: {
        where: { skillId },
      },
    },
  });

  // ADMIN BYPASS: If no enrollment exists but user is Admin, fetch path directly and mock enrollment
  if (!enrollment && isUserAdmin) {
    const path = await db.careerPath.findUnique({
      where: { slug },
      include: {
        levels: {
          orderBy: { order: 'asc' },
          include: {
            skills: {
              orderBy: { order: 'asc' },
              include: {
                resources: {
                  orderBy: { order: 'asc' },
                },
                questions: {
                  orderBy: { order: 'asc' },
                },
                projects: {
                  where: { isMiniProject: true },
                },
              },
            },
          },
        },
      },
    });

    if (!path) return notFound();

    enrollment = {
      id: "admin-view",
      userId,
      careerPathId: path.id,
      status: "ACTIVE",
      careerPath: path,
      skillProgress: [],
    } as any;
  }

  if (!enrollment) {
    notFound();
    return null;
  }

  // Find the skill
  let skill: any = null;
  let level: any = null;

  for (const lvl of enrollment.careerPath.levels) {
    const found = lvl.skills.find((s: any) => s.id === skillId);
    if (found) {
      skill = found;
      level = lvl;
      break;
    }
  }

  if (!skill) {
    notFound();
    return null;
  }

  const progress = enrollment.skillProgress[0];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <SkillContent
          skill={skill}
          level={level}
          enrollment={enrollment}
          progress={progress}
          slug={slug}
        />
      </main>
      <Footer />
    </>
  );
}
