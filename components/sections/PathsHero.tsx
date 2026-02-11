import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { careerPaths } from '@/data/careerPaths';
import styles from './PathsHero.module.css';

export const PathsHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            {/* Ambient Background Foundation - Same as Hero */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.3">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`${styles.container} container hero-content`}>
                <div className={styles.content}>
                    <h1 className="reveal" data-delay="1">
                        Career Paths
                    </h1>
                    <p className={`${styles.description} reveal`} data-delay="2">
                        Choose your journey. Each path is carefully crafted with real-world skills and projects to take you from where you are to where you want to be.
                    </p>
                    
                    <div className={styles.searchSection}>
                        <div className={styles.search}>
                            <Search size={20} className={styles.searchIcon} />
                            <input 
                                type="text" 
                                placeholder="Search career paths..." 
                                className={styles.searchInput}
                            />
                        </div>
                        <button className={styles.filterBtn}>
                            <Filter size={16} />
                            Filter
                        </button>
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
                </div>
            </div>
        </section>
    );
};