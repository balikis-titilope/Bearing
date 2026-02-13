import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
            {/* Ambient Background Foundation - Now Parallax Enabled */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.3" aria-hidden="true">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`${styles.container} container hero-content`}>
                <div className={styles.content}>
                    <ScrollReveal direction="up" delay={0}>
                        <h1 id="hero-heading">
                            Find Your North Star in Tech
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={200}>
                        <p className={styles.description}>
                            Stop learning at random. Bearing helps students and junior professionals discover their ideal career path, identify skill gaps, and build a portfolio that actually gets you hired.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={400}>
                        <div className={styles.actions} role="group" aria-label="Primary actions">
                            <Link href="/register">
                                <Button variant="primary" size="lg" className={styles.ctaButton}>
                                    Start Your Journey
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
                    {/* Directional Guidance Lines */}
                    <div className={styles.directionalFlow}>
                        <div className={styles.line} style={{ left: '10%', animationDelay: '0s' }}></div>
                        <div className={styles.line} style={{ left: '30%', animationDelay: '2s' }}></div>
                        <div className={styles.line} style={{ left: '60%', animationDelay: '4s' }}></div>
                        <div className={styles.line} style={{ left: '80%', animationDelay: '1s' }}></div>
                    </div>

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
                </div>
            </div>
        </section>
    );
};