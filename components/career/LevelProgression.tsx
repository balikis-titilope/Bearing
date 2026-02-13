import React from 'react';
import { Target, ArrowRight, CheckCircle } from 'lucide-react';
import styles from './LevelProgression.module.css';

interface LevelProgressionProps {
    levels: any[];
    currentLevelOrder: number;
}

export const LevelProgression = ({ levels, currentLevelOrder }: LevelProgressionProps) => {
    return (
        <section className={styles.progression}>
            <div className={styles.sectionHeader}>
                <h2>📈 Career Milestones</h2>
                <p>What changes as you grow and what's required to level up.</p>
            </div>

            <div className={styles.levelsGrid}>
                {levels.map((level, index) => {
                    const isCurrent = level.order === currentLevelOrder;
                    const isCompleted = level.order < currentLevelOrder;

                    return (
                        <div key={level.id} className={`${styles.levelCard} ${isCurrent ? styles.current : ''} ${isCompleted ? styles.completed : ''}`}>
                            <div className={styles.levelHeader}>
                                <div className={styles.badge}>
                                    {isCompleted ? <CheckCircle size={16} /> : <span>Level {level.order}</span>}
                                </div>
                                <h3>{level.title}</h3>
                            </div>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>The Role:</span>
                                    <p>{level.description}</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>What Changes:</span>
                                    <p>{level.whatChanges}</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Requirements:</span>
                                    <p className={styles.reqs}>{level.requirements}</p>
                                </div>
                            </div>

                            {isCurrent && (
                                <div className={styles.currentIndicator}>
                                    <Target size={14} />
                                    <span>Current Level</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
