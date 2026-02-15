import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LearningHeader } from "@/components/learning/LearningHeader";
import { SkillCard } from "@/components/learning/SkillCard";
import { ProjectCard } from "@/components/learning/ProjectCard";
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LearnPage({ params }: PageProps) {
  const { slug } = await params;
  const session = await auth();
  
  if (!session?.user?.id) {
    return notFound();
  }

  const userId = session.user.id;

  // Get enrollment with path details
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
      skillProgress: true,
      projectProgress: true,
    },
  });

  if (!enrollment) {
    return notFound();
  }

  const path = enrollment.careerPath;
  const currentLevel = path.levels.find(l => l.id === enrollment.currentLevelId) || path.levels[0];

  // Get all projects for current level
  const projects = await db.project.findMany({
    where: { 
      levelId: currentLevel.id,
      isFinalProject: true,
    },
    orderBy: { order: 'asc' },
  });

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <LearningHeader 
            path={path}
            currentLevel={currentLevel}
            enrollment={enrollment}
          />

          <div className={styles.content}>
            {/* Current Level Skills */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.levelBadge}>Level {currentLevel.order}</span>
                {currentLevel.title} Skills
              </h2>
              <p className={styles.sectionDescription}>
                Complete all skills to unlock the final project
              </p>

              <div className={styles.skillsGrid}>
                {currentLevel.skills.map((skill, index) => {
                  const progress = enrollment.skillProgress.find(
                    p => p.skillId === skill.id
                  );
                  return (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                      status={progress?.status || 'NOT_STARTED'}
                      levelOrder={currentLevel.order}
                      enrollmentId={enrollment.id}
                      slug={slug}
                    />
                  );
                })}
              </div>
            </section>

            {/* Final Project */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Final Project</h2>
              <p className={styles.sectionDescription}>
                Apply everything you've learned in this level
              </p>

              {projects.map(project => {
                const submission = enrollment.projectProgress.find(
                  p => p.projectId === project.id
                );
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    status={submission?.status || 'NOT_STARTED'}
                    isLocked={enrollment.skillProgress.some(
                      p => p.status !== 'COMPLETED'
                    )}
                  />
                );
              })}
            </section>

            {/* Level Progress */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Progress</h2>
              <div className={styles.progressOverview}>
                {path.levels.map((level, index) => (
                  <div 
                    key={level.id} 
                    className={`${styles.progressLevel} ${
                      level.id === currentLevel.id ? styles.current : ''
                    } ${index < path.levels.findIndex(l => l.id === currentLevel.id) ? styles.completed : ''}`}
                  >
                    <div className={styles.progressLevelNumber}>{level.order}</div>
                    <div className={styles.progressLevelTitle}>{level.shortTitle}</div>
                    {index < path.levels.findIndex(l => l.id === currentLevel.id) && (
                      <div className={styles.checkmark}>✓</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
