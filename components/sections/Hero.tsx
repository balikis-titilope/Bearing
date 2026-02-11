import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="hero">
            {/* Ambient Background Foundation - Now Parallax Enabled */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.3">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`${styles.container} container hero-content`}>
                <div className={styles.content}>
                    <h1 className="reveal" data-delay="1">
                        Find Your North Star in Tech
                    </h1>
                    <p className={`${styles.description} reveal`} data-delay="2">
                        Stop learning at random. Bearing helps students and junior professionals discover their ideal career path, identify skill gaps, and build a portfolio that actually gets you hired.
                    </p>
                    <div className={`${styles.actions} reveal`} data-delay="3">
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
                </div>

                <div className={`${styles.imageSection} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    {/* Directional Guidance Lines */}
                    <div className={styles.directionalFlow}>
                        <div className={styles.line} style={{ left: '10%', animationDelay: '0s' }}></div>
                        <div className={styles.line} style={{ left: '30%', animationDelay: '2s' }}></div>
                        <div className={styles.line} style={{ left: '60%', animationDelay: '4s' }}></div>
                        <div className={styles.line} style={{ left: '80%', animationDelay: '1s' }}></div>
                    </div>

                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
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