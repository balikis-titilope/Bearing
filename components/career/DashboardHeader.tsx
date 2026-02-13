import React from 'react';
import * as Icons from 'lucide-react';
import styles from './DashboardHeader.module.css';

interface DashboardHeaderProps {
    title: string;
    description: string;
    icon: string;
    readiness: {
        overallReadiness: number;
        skillProgress: { completed: number; total: number; percentage: number };
        projectProgress: { completed: number; total: number; percentage: number };
    };
    currentLevel: string;
}

export const DashboardHeader = ({ title, description, icon, readiness, currentLevel }: DashboardHeaderProps) => {
    const IconComponent = (Icons as Record<string, any>)[icon] || Icons.HelpCircle;

    return (
        <header className={styles.header}>
            <div className={styles.mainInfo}>
                <div className={styles.iconWrapper}>
                    <IconComponent size={40} className={styles.icon} />
                </div>
                <div className={styles.text}>
                    <h1>{title} Dashboard</h1>
                    <p>{description}</p>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.levelCard}>
                    <span className={styles.label}>Your Current Level</span>
                    <span className={styles.value}>{currentLevel || "Aspiring"}</span>
                </div>

                <div className={styles.progressSection}>
                    <div className={styles.radialProgress}>
                        <div className={styles.circularChart}>
                            <svg viewBox="0 0 36 36" className={styles.circularChartSvg}>
                                <path className={styles.circleBg}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={styles.circle}
                                    strokeDasharray={`${readiness.overallReadiness}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" className={styles.percentage}>{readiness.overallReadiness}%</text>
                            </svg>
                        </div>
                        <span className={styles.progressLabel}>Overall Readiness</span>
                    </div>

                    <div className={styles.miniStats}>
                        <div className={styles.miniStat}>
                            <span className={styles.miniLabel}>Skills</span>
                            <div className={styles.miniProgressBar}>
                                <div className={styles.miniProgressFill} style={{ width: `${readiness.skillProgress.percentage}%` }} />
                            </div>
                            <span className={styles.miniValue}>{readiness.skillProgress.completed}/{readiness.skillProgress.total}</span>
                        </div>
                        <div className={styles.miniStat}>
                            <span className={styles.miniLabel}>Projects</span>
                            <div className={styles.miniProgressBar}>
                                <div className={styles.miniProgressFill} style={{ width: `${readiness.projectProgress.percentage}%` }} />
                            </div>
                            <span className={styles.miniValue}>{readiness.projectProgress.completed}/{readiness.projectProgress.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
