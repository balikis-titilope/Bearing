import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { auth } from "@/auth";
import { isAdmin } from '@/lib/permissions';
import { EnrollButton } from "@/components/learning/EnrollButton";
import { getCareerPath, getAllCareerPathSlugs } from "@/lib/data/career-paths";
import { db } from "@/lib/db";
import styles from './[slug].module.css';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = await getCareerPath(slug);

  if (!path) return { title: 'Path Not Found | Bearing' };

  return {
    title: `${path.title} Career Path | Bearing`,
    description: path.description,
    openGraph: {
      title: `${path.title} Career Path`,
      description: path.description,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllCareerPathSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CareerPathPage({ params }: PageProps) {
  const { slug } = await params;
  const session = await auth();
  const userId = session?.user?.id;
  const path = await getCareerPath(slug);

  if (!path) {
    notFound();
  }

  let isEnrolled = false;
  if (userId) {
    const enrollment = await db.enrollment.findUnique({
      where: {
        userId_careerPathId: {
          userId,
          careerPathId: path.id,
        },
      },
    });
    isEnrolled = !!enrollment;
  }

  const isUserAdmin = isAdmin(session?.user);
  const totalSkills = path.levels.reduce((acc, level) => acc + level.skills.length, 0);
  const totalProjects = path.levels.reduce((acc, level) => {
    // @ts-ignore - projects are included in the query but the type might need update
    const levelProjects = level.projects?.length || 0;
    // @ts-ignore
    const skillProjects = level.skills.reduce((sAcc, skill) => sAcc + (skill.projects?.length || 0), 0);
    return acc + levelProjects + skillProjects;
  }, 0);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.ambientOverlay}>
              <div className={`${styles.glow} ${styles.glow1}`}></div>
              <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.title} data-delay="1">{path.title}</h1>
              <div className={styles.descriptionWrapper} data-delay="2">
                <span className={styles.descriptionLabel}>Professional Track Overview</span>
                <p className={styles.description}>
                  {path.description}. This executive curriculum is engineered to master the complexities of modern {path.title.toLowerCase()} systems, focused on architectural integrity and enterprise-grade scalability.
                </p>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.stat} data-delay="3">
                  <span className={styles.statNumber}>{path.levels.length}</span>
                  <span className={styles.statLabel}>Levels</span>
                </div>
                <div className={styles.stat} data-delay="3">
                  <span className={styles.statNumber}>{totalSkills}</span>
                  <span className={styles.statLabel}>Skills</span>
                </div>
                <div className={styles.stat} data-delay="3">
                  <span className={styles.statNumber}>{totalProjects}</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
              </div>

              {isUserAdmin && (
                <div className={styles.adminModeInfo} data-delay="4">
                  <div className={styles.adminModeHeader}>
                    <Shield size={20} className={styles.adminShield} />
                    <span>Administrator Access Enabled</span>
                  </div>
                  <p>You can view all curriculum content below without enrolling.</p>
                  <Link href={`/paths/${slug}/learn`} className={styles.adminLearnBtn}>
                    <span>Start Learning (Admin Mode)</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Roadmap Section */}
          <div className={styles.roadmap}>
            <h2 className={styles.sectionTitle}>Learning Roadmap</h2>
            <p className={styles.sectionSubtitle}>
              Follow this structured path to become job-ready at top tech companies
            </p>

            <div className={styles.levels}>
              {path.levels.map((level, levelIndex) => (
                <div key={level.id} className={styles.level}>
                  {/* Level Header */}
                  <div className={styles.levelHeader}>
                    <div className={styles.levelBadge}>
                      <span className={styles.levelNumber}>Level {level.order}</span>
                      <span className={styles.levelTitle}>{level.title}</span>
                    </div>
                    <div className={styles.levelDescription}>
                      {level.description}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className={styles.skillsList}>
                    {level.skills.map((skill, skillIndex) => {
                      const skillContent = (
                        <div key={skill.id} className={`${styles.skill} ${isUserAdmin ? styles.adminSkill : ''}`}>
                          <div className={styles.skillIcon}>
                            <span className={styles.skillNumber}>{level.order}.{skillIndex + 1}</span>
                          </div>
                          <div className={styles.skillContent}>
                            <h3 className={styles.skillTitle}>{skill.title}</h3>
                            <p className={styles.skillDescription}>{skill.description}</p>
                          </div>
                          {isUserAdmin && <ArrowRight className={styles.adminArrow} size={16} />}
                        </div>
                      );

                      if (isUserAdmin) {
                        return (
                          <Link key={skill.id} href={`/paths/${slug}/learn?level=${level.order}`} className={styles.skillLink}>
                            {skillContent}
                          </Link>
                        );
                      }

                      return skillContent;
                    })}
                  </div>

                  {/* Final Project Preview */}
                  <div className={styles.projectPreview}>
                    <div className={styles.projectBadge}>
                      <span className={styles.projectIcon}>🎯</span>
                      <span>Final Project</span>
                    </div>
                    <p className={styles.projectNote}>
                      {isUserAdmin
                        ? "Admin View: You have full access to all projects."
                        : `Complete all ${level.skills.length} skills in this level to unlock the final project`
                      }
                    </p>
                  </div>

                  {/* Connector */}
                  {levelIndex < path.levels.length - 1 && (
                    <div className={styles.connector}>
                      <div className={styles.connectorLine}></div>
                      <div className={styles.connectorArrow}>↓</div>
                      <div className={styles.connectorLine}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Hide for admins */}
          {!isUserAdmin && (
            <div className={styles.cta}>
              <h2>Ready to Start Your Journey?</h2>
              <p>Enroll now and get personalized guidance throughout your learning path.</p>
              <EnrollButton
                careerPathId={path.id}
                userId={userId}
                variant="large"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
