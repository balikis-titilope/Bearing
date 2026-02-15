import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { auth } from "@/auth";
import { EnrollButton } from "@/components/learning/EnrollButton";
import { getCareerPath, getAllCareerPathSlugs } from "@/lib/data/career-paths";
import { db } from "@/lib/db";
import styles from './[slug].module.css';

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

  const totalSkills = path.levels.reduce((acc, level) => acc + level.skills.length, 0);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{path.title}</h1>
              <p className={styles.description}>{path.description}</p>

              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{path.levels.length}</span>
                  <span className={styles.statLabel}>Levels</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{totalSkills}</span>
                  <span className={styles.statLabel}>Skills</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{path.levels.length}</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
              </div>

              <EnrollButton
                careerPathId={path.id}
                slug={slug}
                userId={userId}
                isEnrolled={isEnrolled}
              />
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
                    {level.skills.map((skill, skillIndex) => (
                      <div key={skill.id} className={styles.skill}>
                        <div className={styles.skillIcon}>
                          <span className={styles.skillNumber}>{level.order}.{skillIndex + 1}</span>
                        </div>
                        <div className={styles.skillContent}>
                          <h3 className={styles.skillTitle}>{skill.title}</h3>
                          <p className={styles.skillDescription}>{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Final Project Preview */}
                  <div className={styles.projectPreview}>
                    <div className={styles.projectBadge}>
                      <span className={styles.projectIcon}>🎯</span>
                      <span>Final Project</span>
                    </div>
                    <p className={styles.projectNote}>
                      Complete all {level.skills.length} skills in this level to unlock the final project
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

          {/* CTA Section */}
          <div className={styles.cta}>
            <h2>Ready to Start Your Journey?</h2>
            <p>Enroll now and get personalized guidance throughout your learning path.</p>
            <EnrollButton
              careerPathId={path.id}
              userId={userId}
              variant="large"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
