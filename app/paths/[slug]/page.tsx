import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DashboardHeader } from "@/components/career/DashboardHeader";
import { RoadmapView } from "@/components/career/RoadmapView";
import { ProjectBoard } from "@/components/career/ProjectBoard";
import { LevelProgression } from "@/components/career/LevelProgression";
import { getCareerReadiness } from "@/lib/engines/ReadinessEngine";
import { getCareerRoadmap } from "@/lib/engines/RoadmapEngine";
import styles from './[slug].module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CareerPathPage({ params }: PageProps) {
  const { slug } = await params;
  const session = await auth();
  const userId = session?.user?.id;

  const path = await db.careerPath.findUnique({
    where: { slug },
    include: {
      levels: { orderBy: { order: "asc" } },
      projects: { orderBy: { order: "asc" } },
    }
  });

  if (!path) {
    notFound();
  }

  // Fetch engine data
  const readiness = await getCareerReadiness(userId || "guest", path.id);
  const roadmap = await getCareerRoadmap(path.id, userId);

  // Determine current level (highest level with some progress or first level)
  const currentLevel = path.levels[0]?.title || "Aspiring";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <DashboardHeader
            title={path.title}
            description={path.description}
            icon={path.icon}
            readiness={readiness}
            currentLevel={currentLevel}
          />

          <div className={styles.dashboardGrid}>
            <div className={styles.mainColumn}>
              <RoadmapView roadmap={roadmap} />
              <ProjectBoard projects={path.projects.map(p => ({
                ...p,
                status: userId ? "IN_PROGRESS" : "LOCKED" // Simple logic for now
              }))} />
            </div>

            <aside className={styles.sidebar}>
              <LevelProgression
                levels={path.levels}
                currentLevelOrder={1}
              />

              <div className={styles.nextAction}>
                <h3>🤖 Next Recommended Action</h3>
                <p>Complete the "Learn Flexbox" subtopic to boost your Junior readiness by 5%.</p>
                <button className={styles.actionBtn}>Resume Learning</button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}