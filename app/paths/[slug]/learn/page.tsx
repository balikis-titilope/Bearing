import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LearningHeader } from "@/components/learning/LearningHeader";
import { SkillCard } from "@/components/learning/SkillCard";
import { ProjectCard } from "@/components/learning/ProjectCard";
import { canAccess } from "@/lib/permissions";
import { getAdminMode } from "@/lib/permissions-server";
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
              projects: {
                where: { isFinalProject: true }
              }
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
  const currentLevelId = enrollment.currentLevelId;
  const currentLevel = path.levels.find(l => l.id === currentLevelId) || path.levels[0];

  // Get all final projects for current level from the pre-fetched data
  const projects = currentLevel.projects;

  const adminMode = await getAdminMode();

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
                Complete all skills to unlock the level's final project
              </p>

              <div className={styles.skillsGrid}>
                {currentLevel.skills.map((skill, index) => {
                  const progress = enrollment.skillProgress.find(
                    p => p.skillId === skill.id
                  );

                  // Sequential level locking: lock if any previous level is not completed
                  const previousLevels = path.levels.filter(l => l.order < currentLevel.order);
                  const isLevelLocked = previousLevels.some(level => {
                    // Check skills
                    const skillsUnfinished = level.skills.some(s => {
                      const p = enrollment.skillProgress.find(sp => sp.skillId === s.id);
                      return p?.status !== 'COMPLETED';
                    });

                    // Check final project
                    const projectUnfinished = level.projects.some(proj => {
                      const p = enrollment.projectProgress.find(pp => pp.projectId === proj.id);
                      return p?.status !== 'COMPLETED';
                    });

                    return skillsUnfinished || projectUnfinished;
                  });

                  return (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                      status={progress?.status || 'NOT_STARTED'}
                      levelOrder={currentLevel.order}
                      enrollmentId={enrollment.id}
                      slug={slug}
                      isLocked={!canAccess(!isLevelLocked, session?.user, adminMode)}
                    />
                  );
                })}
              </div>
            </section>

            {/* Final Project */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Final Project</h2>
              <p className={styles.sectionDescription}>
                Mandatory project to graduate from this level
              </p>

              {projects.map(project => {
                const submission = enrollment.projectProgress.find(
                  p => p.projectId === project.id
                );

                // Lock if any skill in CURRENT level is not completed
                const currentSkillsUnfinished = currentLevel.skills.some(s => {
                  const p = enrollment.skillProgress.find(sp => sp.skillId === s.id);
                  return p?.status !== 'COMPLETED';
                });

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    status={submission?.status || 'NOT_STARTED'}
                    isLocked={!canAccess(!currentSkillsUnfinished, session?.user, adminMode)}
                    slug={slug}
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
                    className={`${styles.progressLevel} ${level.id === currentLevel.id ? styles.current : ''
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
