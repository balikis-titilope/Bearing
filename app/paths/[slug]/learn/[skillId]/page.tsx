import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkillContent } from "@/components/learning/SkillContent";
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string; skillId: string }>;
}

export default async function SkillPage({ params }: PageProps) {
  const { slug, skillId } = await params;
  const session = await auth();
  
  if (!session?.user?.id) {
    return notFound();
  }

  const userId = session.user.id;

  // Get enrollment with the skill
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
            include: {
              skills: {
                orderBy: { order: 'asc' },
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

  if (!enrollment) {
    return notFound();
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
    return notFound();
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
        />
      </main>
      <Footer />
    </>
  );
}
