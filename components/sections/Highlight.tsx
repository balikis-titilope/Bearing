'use client';

import React, { useRef } from 'react';
import styles from './Highlight.module.css';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export const Highlight: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const progress = useSectionScroll(sectionRef, { useViewport: true });

    // Shrink stops at 50% - by the time section reaches 50vh
    const shrinkEndPoint = 0.5;
    const shrinkProgress = Math.min(progress / shrinkEndPoint, 1);
    const scale = 1 - (shrinkProgress * 0.1); // 1 to 0.9 (10% shrink)

    // Parallax: keep foreground and background synced
    const intensity = 120;
    
    // Both move at same speed to keep content inside bg
    const backgroundY = progress * -intensity;
    const foregroundY = progress * -intensity;

    return (
        <section className={styles.highlight} id="highlight" ref={sectionRef}>
            <div
                className={styles.backgroundWrapper}
                style={{
                    transform: `scaleX(${scale})`,
                    borderRadius: `${shrinkProgress * 50}px`,
                    willChange: 'transform, border-radius'
                }}
            >
                <div
                    className={styles.backgroundLayer}
                    style={{
                        transform: `translateY(${backgroundY}px)`,
                        willChange: 'transform'
                    }}
                ></div>
            </div>

            <div
                className={`container ${styles.container}`}
                style={{
                    transform: `translateY(${foregroundY}px)`,
                    willChange: 'transform'
                }}
            >
                <div className={styles.content}>
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
