'use client';

import { Button } from "@/components/ui/Button";
import { Play, Star, AlertCircle } from "lucide-react";
import styles from "./Assessment.module.css";

interface AssessmentIntroProps {
    onStart: () => void;
    questionCount: number;
    bestScore?: number;
}

export function AssessmentIntro({ onStart, questionCount, bestScore }: AssessmentIntroProps) {
    return (
        <div className={styles.introCard}>
            <div className={styles.iconWrapper}>
                <Star size={48} className={styles.starIcon} />
            </div>
            <h2>Test Your Knowledge</h2>
            <p>
                Ready to prove your skills? This assessment consists of <strong>{questionCount} questions</strong>.
                You need 70% to pass.
            </p>

            {bestScore !== undefined && bestScore > 0 && (
                <div className={styles.bestScore}>
                    <span>Personal Best:</span>
                    <strong>{bestScore}%</strong>
                </div>
            )}

            <div className={styles.rules}>
                <div className={styles.ruleItem}>
                    <AlertCircle size={16} />
                    <span>One question at a time</span>
                </div>
                <div className={styles.ruleItem}>
                    <AlertCircle size={16} />
                    <span>Immediate feedback</span>
                </div>
            </div>

            <Button onClick={onStart} variant="primary" size="lg" className={styles.startBtn}>
                <Play size={20} />
                Start Assessment
            </Button>
        </div>
    );
}
