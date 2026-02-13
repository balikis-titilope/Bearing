import React from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

import { careerPaths } from '@/data/careerPaths';
import styles from './PathsHero.module.css';

interface PathsHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
    selectedImportance: string[];
    setSelectedImportance: (importance: string[]) => void;
    showFilters: boolean;
    setShowFilters: (show: boolean) => void;
    clearFilters: () => void;
    hasActiveFilters: boolean;
}

export const PathsHero: React.FC<PathsHeroProps> = ({
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    selectedImportance,
    setSelectedImportance,
    showFilters,
    setShowFilters,
    clearFilters,
    hasActiveFilters
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
                        <button 
                            className={`${styles.filterBtn} ${hasActiveFilters ? styles.active : ''}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter size={16} />
                            Filter
                            {hasActiveFilters && (
                                <span className={styles.filterCount}>
                                    {selectedCategories.length + selectedImportance.length}
                                </span>
                            )}
                            <ChevronDown size={14} className={`${styles.chevron} ${showFilters ? styles.open : ''}`} />
                        </button>
                    </div>

                    {showFilters && (
                        <div className={styles.filtersPanel}>
                            <div className={styles.filtersHeader}>
                                <h3>Filters</h3>
                                {hasActiveFilters && (
                                    <button className={styles.clearBtn} onClick={clearFilters}>
                                        <X size={14} />
                                        Clear all
                                    </button>
                                )}
                            </div>
                            
                            <div className={styles.filterGroups}>
                                <div className={styles.filterGroup}>
                                    <h4>Skill Category</h4>
                                    <div className={styles.checkboxGroup}>
                                        {['core', 'supporting', 'optional'].map((category) => (
                                            <label key={category} className={styles.checkboxLabel}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedCategories([...selectedCategories, category]);
                                                        } else {
                                                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                                                        }
                                                    }}
                                                />
                                                <span className={styles.checkmark}></span>
                                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.filterGroup}>
                                    <h4>Skill Importance</h4>
                                    <div className={styles.checkboxGroup}>
                                        {['high', 'medium', 'low'].map((importance) => (
                                            <label key={importance} className={styles.checkboxLabel}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedImportance.includes(importance)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedImportance([...selectedImportance, importance]);
                                                        } else {
                                                            setSelectedImportance(selectedImportance.filter(i => i !== importance));
                                                        }
                                                    }}
                                                />
                                                <span className={styles.checkmark}></span>
                                                {importance.charAt(0).toUpperCase() + importance.slice(1)}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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