import React from 'react';
import { ExternalLink, CheckCircle, Lock, Circle } from 'lucide-react';
import styles from './ProjectBoard.module.css';

interface ProjectBoardProps {
    projects: any[];
}

export const ProjectBoard = ({ projects }: ProjectBoardProps) => {
    return (
        <section className={styles.projectBoard}>
            <div className={styles.sectionHeader}>
                <h2>🛠 Required Projects</h2>
                <p>Build these to prove your readiness for the next level.</p>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.statusIcon}>
                                {project.status === 'COMPLETED' ? (
                                    <CheckCircle size={24} className={styles.completed} />
                                ) : project.status === 'LOCKED' ? (
                                    <Lock size={22} className={styles.locked} />
                                ) : (
                                    <Circle size={24} className={styles.inProgress} />
                                )}
                            </div>
                            <h3>{project.title}</h3>
                        </div>
                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.footer}>
                            <div className={styles.validation}>
                                <span className={styles.label}>Validation:</span>
                                <span className={styles.rule}>{project.validationRule}</span>
                            </div>

                            {project.status !== 'LOCKED' && (
                                <button className={styles.actionBtn}>
                                    {project.githubUrl ? 'View Submission' : 'Submit Project'}
                                    <ExternalLink size={14} className="ml-2" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
