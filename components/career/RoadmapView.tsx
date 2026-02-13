"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, CheckCircle2, Circle } from 'lucide-react';
import styles from './RoadmapView.module.css';

interface RoadmapViewProps {
    roadmap: any[];
}

export const RoadmapView = ({ roadmap }: RoadmapViewProps) => {
    const [expandedResponsibility, setExpandedResponsibility] = useState<string | null>(roadmap[0]?.id || null);

    return (
        <section className={styles.roadmap}>
            <div className={styles.sectionHeader}>
                <h2>🧭 Your Skills Roadmap</h2>
                <p>Everything you need to master, step-by-step.</p>
            </div>

            <div className={styles.tracks}>
                {roadmap.map((track) => (
                    <div
                        key={track.id}
                        className={`${styles.track} ${expandedResponsibility === track.id ? styles.active : ''}`}
                    >
                        <button
                            className={styles.trackHeader}
                            onClick={() => setExpandedResponsibility(expandedResponsibility === track.id ? null : track.id)}
                        >
                            <div className={styles.trackTitle}>
                                <Target size={20} className={styles.trackIcon} />
                                <h3>{track.title}</h3>
                            </div>
                            {expandedResponsibility === track.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        <div className={styles.trackContent}>
                            {track.steps.map((step: any, sIdx: number) => (
                                <div key={step.id} className={styles.step}>
                                    <div className={styles.stepIndicator}>
                                        <div className={styles.stepNumber}>{sIdx + 1}</div>
                                        {sIdx < track.steps.length - 1 && <div className={styles.stepLine} />}
                                    </div>
                                    <div className={styles.stepBody}>
                                        <h4>{step.title}</h4>
                                        <div className={styles.subtopics}>
                                            {step.subtopics.map((subtopic: any) => (
                                                <div key={subtopic.id} className={styles.subtopic}>
                                                    {subtopic.isCompleted ? (
                                                        <CheckCircle2 size={16} className={styles.checkIcon} />
                                                    ) : (
                                                        <Circle size={16} className={styles.circleIcon} />
                                                    )}
                                                    <span>{subtopic.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
