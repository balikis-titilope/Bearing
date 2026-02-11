'use client';

import React from 'react';
import styles from './Highlight.module.css';
import { useInView } from '@/hooks/useInView';

export const Highlight: React.FC = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className={styles.highlight} id="highlight" ref={ref}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content} reveal-on-scroll ${isInView ? 'is-visible' : ''}`}>
                    <h2 className={styles.title}>
                        Navigate Your Career. <br />
                        Own Your Future.
                    </h2>

                    <p className={styles.description}>
                        Degree programs aren't the only path to success. Bearing maps out the exact skills,
                        projects, and certifications required for specific tech roles, showing you
                        the most direct route to a career that actually fits your ambition and lifestyle.
                    </p>

                    <div className={styles.action}>
                        <a href="/paths" className={styles.link}>
                            Explore What's Possible
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
