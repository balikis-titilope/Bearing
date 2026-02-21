import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LearningHeader } from "@/components/learning/LearningHeader";
import { SkillCard } from "@/components/learning/SkillCard";
import { ProjectCard } from "@/components/learning/ProjectCard";
import { isAdmin, canAccess } from '@/lib/permissions';
import { getAdminMode } from "@/lib/permissions-server";
import {
  Compass,
  MapPin,
  ChevronRight,
  Trophy,
  Lock,
  Clock,
  CheckCircle,
  Shield,
  AlertCircle
} from 'lucide-react';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ level?: string }>;
}

export default async function LearnPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { level: levelOrderStr } = await searchParams;
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
  const actualCurrentLevel = path.levels.find(l => l.id === currentLevelId) || path.levels[0];

  // Handle level selection from URL
  let viewingLevel = actualCurrentLevel;
  if (levelOrderStr) {
    const order = parseInt(levelOrderStr);
    const requestedLevel = path.levels.find(l => l.order === order);
    // Only allow viewing if it's the current level or a previous one
    if (requestedLevel && requestedLevel.order <= actualCurrentLevel.order) {
      viewingLevel = requestedLevel;
    }
  }

  const currentLevel = viewingLevel;

  // Get all final projects for current level from the pre-fetched data
  const projects = currentLevel.projects;

  const adminMode = await getAdminMode();
  const isAssessing = enrollment.status === 'ASSESSING';

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          {adminMode && isAdmin(session?.user) && (
            <div className={styles.adminBanner}>
              <div className={styles.adminBannerContent}>
                <Shield size={18} />
                <span><strong>Admin Observer Mode:</strong> All learning restrictions and level locks are currently bypassed.</span>
              </div>
            </div>
          )}

          {isAssessing ? (
            <div className={styles.challengeBanner}>
              <div className={styles.challengeContent}>
                <div className={styles.challengeIcon}>
                  <Trophy size={40} />
                </div>
                <div className={styles.challengeText}>
                  <h1>Intermediate Placement Challenge</h1>
                  <p>
                    You've claimed intermediate proficiency. To skip Level 1, you must successfully complete and pass the
                    <strong> Level 1 Final Project</strong>.
                  </p>
                </div>
              </div>
              <div className={styles.challengeAlert}>
                <AlertCircle size={20} />
                <span>Passing this project will instantly promote you to Level 2.</span>
              </div>
            </div>
          ) : (
            <LearningHeader
              path={path}
              currentLevel={currentLevel}
              enrollment={enrollment}
            />
          )}

          <div className={styles.content}>
            {/* Current Level Skills - HIDE if assessing */}
            {!isAssessing && (
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
                    // EXCEPT if we started at a higher level (claimedLevel)
                    const previousLevels = path.levels.filter(l =>
                      l.order < currentLevel.order &&
                      l.order >= (enrollment.claimedLevel || 1)
                    );

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
            )}

            {/* Final Project */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {isAssessing ? 'The Placement Project' : 'Final Project'}
              </h2>
              <p className={styles.sectionDescription}>
                {isAssessing
                  ? 'Complete this project to verify your skills and advance to the next level.'
                  : 'Mandatory project to graduate from this level'}
              </p>

              {projects.map(project => {
                const submission = enrollment.projectProgress.find(
                  p => p.projectId === project.id
                );

                // Lock if any skill in CURRENT level is not completed
                // ALWAYS unlock if in ASSESSING mode and viewing actual current level
                const isViewingActualCurrent = viewingLevel.id === actualCurrentLevel.id;
                const currentSkillsUnfinished = (!isAssessing || !isViewingActualCurrent) && currentLevel.skills.some(s => {
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
                {path.levels.map((level, index) => {
                  const isUnlocked = canAccess(level.order <= actualCurrentLevel.order, session?.user, adminMode);
                  const isViewing = level.id === currentLevel.id;

                  return (
                    <Link
                      key={level.id}
                      href={isUnlocked ? `/paths/${slug}/learn?level=${level.order}` : '#'}
                      className={`${styles.progressLevel} ${isViewing ? styles.current : ''} ${!isUnlocked ? styles.locked : ''
                        } ${level.order < actualCurrentLevel.order ? styles.completed : ''}`}
                      style={{ cursor: isUnlocked ? 'pointer' : 'not-allowed' }}
                    >
                      <div className={styles.progressLevelNumber}>{level.order}</div>
                      <div className={styles.progressLevelTitle}>{level.shortTitle}</div>
                      {level.order < actualCurrentLevel.order && (
                        <div className={styles.checkmark}>✓</div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
