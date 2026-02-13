'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';
import styles from './PathPreview.module.css';
import { careerPaths } from '@/data/careerPaths';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useSession } from 'next-auth/react';

export const PathPreview: React.FC = () => {
    const { data: session } = useSession();
    
    return (
        <section className={styles.section} id="paths">
            {/* Ambient Background Foundation - Parallax Enabled */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.15">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <ScrollReveal direction="up" delay={0}>
                    <div className={styles.header}>
                        <h2>Popular Career Paths</h2>
                        <p>Carefully curated journeys to help you go from zero to hire.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                    <div className={styles.grid}>
                        {careerPaths.map((path, index) => {
                            const IconComponent = Icons[path.icon as keyof typeof Icons] as React.ComponentType<any>;
                            return (
                                <Link 
                                    key={path.slug}
                                    href={`/paths/${path.slug}`}
                                    className={styles.pathCard}
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
                </ScrollReveal>
            </div>
        </section>
    );
};