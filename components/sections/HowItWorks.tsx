'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './HowItWorks.module.css';
import { Compass, Map, Target } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <div className={`${styles.content} reveal-on-scroll`}>
                    <h2 className={styles.sectionTitle}>How Bearing Helps You Navigate</h2>
                    <p className={styles.sectionDescription}>
                        We turn career confusion into clarity with a simple, guided process
                        that gets you from lost to hired. Our platform scours the absolute best resources
                        online and organizes them into a logical roadmap tailored to your specific goals.
                        Stop guessing and start making progress on the path that actually leads
                        to your dream tech job.
                    </p>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <Compass className={styles.icon} />
                            </div>
                            <h3>Find Your Direction</h3>
                            <p>
                                Discover paths that match your interests, skills, and career goals
                                through our AI-powered assessment.
                            </p>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <Map className={styles.icon} />
                            </div>
                            <h3>Map Your Journey</h3>
                            <p>
                                Get a step-by-step roadmap with specific skills to learn,
                                projects to build, and milestones to achieve.
                            </p>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <Target className={styles.icon} />
                            </div>
                            <h3>Land Your Dream Role</h3>
                            <p>
                                Build a portfolio that stands out and gain the confidence
                                to apply for and win the jobs you want.
                            </p>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <Link href="/register">
                            <Button variant="primary" size="lg">
                                Get My Bearing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};