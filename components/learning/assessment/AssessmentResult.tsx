'use client';

import { Button } from "@/components/ui/Button";
import { RefreshCcw, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import styles from "./Assessment.module.css";
import Link from 'next/link';

interface AssessmentResultProps {
    score: number;
    passed: boolean;
    onRetake: () => void;
    bestScore?: number;
}

export function AssessmentResult({ score, passed, onRetake, bestScore }: AssessmentResultProps) {
    return (
        <div className={styles.resultCard}>
            <div className={`${styles.scoreCircle} ${passed ? styles.passed : styles.failed}`}>
                <span className={styles.scoreVal}>{score}%</span>
                <span className={styles.scoreLabel}>Score</span>
            </div>

            <h2>{passed ? 'Assessment Passed!' : 'Nice Try!'}</h2>
            <p>
                {passed
                    ? 'Great work! You have verified your specialized skills.'
                    : 'You need 70% to pass. Review the material and try again.'}
            </p>

            {bestScore !== undefined && (
                <p className={styles.bestScoreText}>Your Best: <strong>{Math.max(bestScore, score)}%</strong></p>
            )}

            <div className={styles.actions}>
                <Button onClick={onRetake} variant="outline" size="sm">
                    <RefreshCcw size={16} />
                    Retake Assessment
                </Button>
            </div>
        </div>
    );
}
