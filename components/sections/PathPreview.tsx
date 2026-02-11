'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import styles from './PathPreview.module.css';
import { careerPaths } from '@/data/careerPaths';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export const PathPreview: React.FC = () => {
    return (
        <section className={styles.section} id="paths">
            {/* Ambient Background Foundation - Parallax Enabled */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.15">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`container ${styles.container} reveal-on-scroll`}>
                <div className={styles.header}>
                    <h2>Popular Career Paths</h2>
                    <p>Carefully curated journeys to help you go from zero to hire.</p>
                </div>

                <div className={styles.grid}>
                    {careerPaths.map((path, index) => {
                        const IconComponent = (Icons as Record<string, any>)[path.icon] || Icons.HelpCircle;

                        return (
                            <Link
                                href={`/paths/${path.slug}`}
                                key={path.id}
                            >
                                <Card className={styles.pathCard}>
                                    <div className={styles.iconWrapper}>
                                        <IconComponent size={24} className={styles.icon} />
                                    </div>
                                    <h3>{path.title}</h3>
                                    <p>{path.description}</p>
                                    <div className={styles.footer}>
                                        <span>{path.skills.length} skills to learn</span>
                                        <ChevronRight size={18} />
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
