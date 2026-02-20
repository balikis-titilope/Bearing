'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AssessmentIntro } from './AssessmentIntro';
import { AssessmentRunner } from './AssessmentRunner';
import { AssessmentResult } from './AssessmentResult';
import { saveSkillScore } from '@/actions/assessment';
import styles from './Assessment.module.css';

interface QuizWrapperProps {
    skill: any;
    enrollment: any;
    progress: any;
    slug: string;
}

export function QuizWrapper({ skill, enrollment, progress, slug }: QuizWrapperProps) {
    const router = useRouter();
    const [isAssessmentStarted, setIsAssessmentStarted] = useState(false);
    const [isAssessmentFinished, setIsAssessmentFinished] = useState(false);
    const [assessmentScore, setAssessmentScore] = useState(0);

    const handleAssessmentComplete = async (score: number) => {
        setAssessmentScore(score);
        setIsAssessmentFinished(true);

        // Save score
        await saveSkillScore(enrollment.id, skill.id, score);
    };

    const handleBack = () => {
        router.push(`/paths/${slug}/learn/${skill.id}`);
    };

    return (
        <div className={styles.quizWrapper}>
            <header className={styles.quizHeader}>
                <Button variant="ghost" size="sm" onClick={handleBack} className={styles.backBtn}>
                    <ArrowLeft size={16} />
                    Back to Skill
                </Button>
                <div className={styles.quizInfo}>
                    <span className={styles.skillLabel}>Practice Exercise</span>
                    <h1 className={styles.skillTitle}>{skill.title}</h1>
                </div>
            </header>

            <div className={styles.assessmentContainer}>
                {!isAssessmentStarted ? (
                    <AssessmentIntro
                        onStart={() => setIsAssessmentStarted(true)}
                        questionCount={skill.questions.length}
                        bestScore={progress?.bestScore || 0}
                    />
                ) : !isAssessmentFinished ? (
                    <AssessmentRunner
                        questions={skill.questions}
                        onComplete={handleAssessmentComplete}
                    />
                ) : (
                    <AssessmentResult
                        score={assessmentScore}
                        passed={assessmentScore >= 70}
                        bestScore={progress?.bestScore || 0}
                        onRetake={() => {
                            setIsAssessmentStarted(false);
                            setIsAssessmentFinished(false);
                            setAssessmentScore(0);
                        }}
                    />
                )}
            </div>

            {isAssessmentFinished && (
                <div className={styles.quizFooter}>
                    <Button onClick={handleBack} variant="outline" size="sm">
                        <CheckCircle size={16} />
                        Return to Learning
                    </Button>
                </div>
            )}
        </div>
    );
}
