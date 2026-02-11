import { notFound } from 'next/navigation';
import { careerPaths } from '@/data/careerPaths';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './[slug].module.css';
import * as Icons from 'lucide-react';
import { CheckCircle, Clock, BookOpen, Target } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CareerPathPage({ params }: PageProps) {
  const { slug } = await params;
  const path = careerPaths.find(p => p.slug === slug);

  if (!path) {
    notFound();
  }

  const IconComponent = (Icons as Record<string, any>)[path.icon] || Icons.HelpCircle;

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <IconComponent size={32} className={styles.icon} />
            </div>
            <h1>{path.title}</h1>
            <p className={styles.description}>{path.description}</p>
            <div className={styles.actions}>
              <Button variant="primary" size="lg">Start This Path</Button>
              <Button variant="outline" size="lg">Save for Later</Button>
            </div>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>What You'll Do</h2>
              <p>Key responsibilities and day-to-day tasks for this role.</p>
              <div className={styles.grid}>
                {path.responsibilities.map((responsibility, index) => (
                  <Card key={index} className={styles.responsibilityCard}>
                    <Target className={styles.cardIcon} />
                    <p>{responsibility}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Career Progression</h2>
              <p>Your potential growth path in this career.</p>
              <div className={styles.progression}>
                {path.progression.map((stage, index) => (
                  <div key={index} className={styles.stage}>
                    <div className={styles.stageNumber}>{index + 1}</div>
                    <div className={styles.stageContent}>
                      <h3>{stage}</h3>
                      <div className={styles.stageDuration}>
                        <Clock size={16} />
                        <span>{index === 0 ? '0-2 years' : index === 1 ? '2-4 years' : index === 2 ? '4-7 years' : '7+ years'}</span>
                      </div>
                    </div>
                    {index < path.progression.length - 1 && <div className={styles.connector} />}
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Skills You'll Learn</h2>
              <p>Essential technologies and competencies for success.</p>
              <div className={styles.skills}>
                <div className={styles.skillCategory}>
                  <h3>Core Skills</h3>
                  <div className={styles.skillList}>
                    {path.skills.filter(skill => skill.category === 'core').map(skill => (
                      <Card key={skill.id} className={styles.skillCard}>
                        <CheckCircle className={styles.checkIcon} />
                        <div className={styles.skillInfo}>
                          <h4>{skill.name}</h4>
                          <p>{skill.description}</p>
                          <span className={`${styles.importance} ${styles.high}`}>Essential</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h3>Supporting Skills</h3>
                  <div className={styles.skillList}>
                    {path.skills.filter(skill => skill.category === 'supporting').map(skill => (
                      <Card key={skill.id} className={styles.skillCard}>
                        <BookOpen className={styles.bookIcon} />
                        <div className={styles.skillInfo}>
                          <h4>{skill.name}</h4>
                          <p>{skill.description}</p>
                          <span className={`${styles.importance} ${skill.importance}`}>{skill.importance}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}