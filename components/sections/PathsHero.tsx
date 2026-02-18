import React from 'react';
import { Search } from 'lucide-react';

import { careerPaths } from '@/data/careerPaths';
import styles from './PathsHero.module.css';

interface PathsHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    clearFilters: () => void;
}

const categories = ['All', 'Development', 'Data', 'AI', 'Design', 'Security', 'Management', 'Infrastructure', 'QA'];

export const PathsHero: React.FC<PathsHeroProps> = ({
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    clearFilters
}) => {
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.chipsContainer}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.chip} ${activeCategory === category ? styles.activeChip : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <strong>{careerPaths.length}</strong>
                            <span>Available Paths</span>
                        </div>
                        <div className={styles.stat}>
                            <strong>142+</strong>
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