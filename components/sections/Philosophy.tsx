'use client';

import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Compass, Target, Rocket, ShieldCheck } from 'lucide-react';
import styles from './Philosophy.module.css';

export const Philosophy: React.FC = () => {
    return (
        <section className={styles.section} id="philosophy">
            <div className="container">
                <div className={styles.intro}>
                    <ScrollReveal direction="up" delay={0}>
                        <span className={styles.label}>Our Philosophy</span>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={200}>
                        <h2 className={styles.title}>More Than Just Learning. <br />Professional Mastery.</h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={400}>
                        <p className={styles.description}>
                            Bearing isn't a content warehouse. We are your career's navigation system,
                            focusing on the vital gap between "knowing" and "executing."
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    <ScrollReveal direction="up" delay={100} className={styles.card}>
                        <Compass className={styles.cardIcon} size={32} />
                        <h3>Guidance Over Randomness</h3>
                        <p>
                            Unlike traditional platforms that leave you drowning in videos,
                            Bearing provides a singular, high-conviction path. We curate only
                            the highest-quality materials so you can stop searching and start growing.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={300} className={styles.card}>
                        <Target className={styles.cardIcon} size={32} />
                        <h3>Execution Over Exposure</h3>
                        <p>
                            Watching a video isn't learning. Our philosophy mandates hands-on
                            validation. Every level is built around real-world projects that
                            simulate the actual challenges you'll face in a top-tier tech role.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={500} className={styles.card}>
                        <Rocket className={styles.cardIcon} size={32} />
                        <h3>Outcome Driven</h3>
                        <p>
                            We don't just teach skills; we prepare you for the arena. From
                            interview preparation to portfolio building, every milestone in
                            the roadmap is a direct step toward employment and professional excellence.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.mvSection}>
                    <div className={styles.mvItem}>
                        <ScrollReveal direction="left" delay={200}>
                            <h4>Our Vision</h4>
                            <p>To be the definitive global standard for career navigation and technical mastery.</p>
                        </ScrollReveal>
                    </div>
                    <div className={styles.mvItem}>
                        <ScrollReveal direction="left" delay={400}>
                            <h4>Our Mission</h4>
                            <p>To empower the next generation of tech leaders by transforming scattered information into structured paths to success.</p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
