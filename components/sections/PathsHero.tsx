import React from 'react';
import styles from './PathsHero.module.css';

export const PathsHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            {/* Ambient Background Foundation - Same as Hero */}
            <div className={`${styles.ambientOverlay} parallax-bg`} data-speed="0.3">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className={`${styles.container} container hero-content`}>
                <div className={styles.content}>
                    <h1 className="reveal" data-delay="1">
                        Career Paths
                    </h1>
                    <p className={`${styles.description} reveal`} data-delay="2">
                        Choose your journey. Each path is carefully crafted with real-world skills and projects to take you from where you are to where you want to be.
                    </p>
                </div>
            </div>
        </section>
    );
};