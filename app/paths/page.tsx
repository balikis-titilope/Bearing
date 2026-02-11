'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';
import { careerPaths } from '@/data/careerPaths';
import * as Icons from 'lucide-react';
import { ChevronRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function CareerPathsPage() {
    const { data: session } = useSession();
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <h1>Career Paths</h1>
            <p>Choose your journey. Each path is carefully crafted with real-world skills and projects.</p>
            <div className={styles.filters}>
              <div className={styles.search}>
                <Search size={20} className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="Search career paths..." 
                  className={styles.searchInput}
                />
              </div>
              <Button variant="outline" className={styles.filterBtn}>
                <Filter size={16} />
                Filter
              </Button>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>{careerPaths.length}</strong>
              <span>Available Paths</span>
            </div>
            <div className={styles.stat}>
              <strong>{careerPaths.reduce((acc, path) => acc + path.skills.length, 0)}</strong>
              <span>Skills to Learn</span>
            </div>
            <div className={styles.stat}>
              <strong>{careerPaths.reduce((acc, path) => acc + path.responsibilities.length, 0)}</strong>
              <span>Real-World Tasks</span>
            </div>
          </div>

          <div className={styles.grid}>
            {careerPaths.map((path) => {
              const IconComponent = (Icons as any)[path.icon] || Icons.HelpCircle;
              
              return (
                <Link href={session ? `/paths/${path.slug}` : "/register"} key={path.id}>
                  <Card className={styles.pathCard}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={24} className={styles.icon} />
                    </div>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                    
                    <div className={styles.skills}>
                      {path.skills.slice(0, 3).map((skill) => (
                        <span key={skill.id} className={`${styles.skill} ${styles[skill.category]}`}>
                          {skill.name}
                        </span>
                      ))}
                      {path.skills.length > 3 && (
                        <span className={styles.moreSkills}>+{path.skills.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className={styles.footer}>
                      <div className={styles.meta}>
                        <span>{path.skills.length} skills</span>
                        <span>{path.responsibilities.length} responsibilities</span>
                      </div>
                      <ChevronRight size={18} className={styles.arrow} />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className={styles.cta}>
            <h2>Not sure which path to choose?</h2>
            <p>Take our quick assessment to get personalized recommendations based on your interests and goals.</p>
            <Button variant="primary" size="lg">Take Assessment</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}