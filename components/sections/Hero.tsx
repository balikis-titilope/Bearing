"use client";

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    const { data: session } = useSession();

    return (
        <section
            className={styles.hero}
            id="hero"
            aria-labelledby="hero-heading"
        >
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <ScrollReveal direction="up" delay={400}>
                        <h1 id="hero-heading">
                            Find Your North Star in Tech
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={600}>
                        <p className={styles.description}>
                            Stop learning at random. Bearing helps students and junior professionals discover their ideal career path, identify skill gaps, and build a portfolio that actually gets you hired.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={800}>
                        <div className={styles.actions} role="group" aria-label="Primary actions">
                            <Link href={session ? "/dashboard" : "/register"}>
                                <Button variant="primary" size="lg" className={styles.ctaButton}>
                                    {session ? "Go to Dashboard" : "Start Your Journey"}
                                </Button>
                            </Link>
                            <Link href="/paths">
                                <Button variant="outline" size="lg" className={styles.outlineButton}>
                                    Explore Paths
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.imageSection}>
                    <ScrollReveal direction="right" delay={100}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageHoverContainer}>
                                <img
                                    src="/hero-journey.png"
                                    alt="Your Career Journey"
                                    className={styles.heroImage}
                                />
                                <div className={styles.grainOverlay}></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};