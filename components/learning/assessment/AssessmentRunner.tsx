'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import styles from "./Assessment.module.css";

interface AssessmentRunnerProps {
    questions: any[];
    onComplete: (score: number) => void;
}

export function AssessmentRunner({ questions, onComplete }: AssessmentRunnerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    if (!questions || questions.length === 0) {
        return (
            <div className={styles.emptyQuestions}>
                <AlertCircle size={48} />
                <p>No questions found for this assessment.</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    // Safely parse options (handles potential double-stringification from seed data)
    let options: string[] = [];
    let rawOptions = currentQuestion.options;

    try {
        // Recursive parse in case of double stringification
        while (typeof rawOptions === 'string') {
            const parsed = JSON.parse(rawOptions);
            // If parsing results in the same string or something that's not a string/array, we stop
            if (parsed === rawOptions) break;
            rawOptions = parsed;
        }

        if (Array.isArray(rawOptions)) {
            options = rawOptions;
        }
    } catch (e) {
        console.error("Failed to parse options for question:", currentQuestion.id, e);
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const handleSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedAnswer(option);
        setIsAnswered(true);
        if (option === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            const finalScore = score;
            const percentage = Math.round((finalScore / questions.length) * 100);
            onComplete(percentage);
        }
    };

    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <div className={styles.runnerContainer}>
            <div className={styles.progressHeader}>
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% completed</span>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.questionCard}>
                <h3 className={styles.questionText}>{currentQuestion.question}</h3>

                <div className={styles.optionsGrid}>
                    {options.length > 0 ? (
                        options.map((option: string, idx: number) => {
                            let optionClass = styles.optionBtn;
                            let isSelected = selectedAnswer === option;
                            let isCorrectOption = option === currentQuestion.correctAnswer;

                            if (isAnswered) {
                                if (isCorrectOption) {
                                    optionClass += ` ${styles.optionCorrect}`;
                                } else if (isSelected) {
                                    optionClass += ` ${styles.optionWrong}`;
                                }
                            } else if (isSelected) {
                                optionClass += ` ${styles.optionSelected}`;
                            }

                            return (
                                <button
                                    key={idx}
                                    className={optionClass}
                                    onClick={() => handleSelect(option)}
                                    disabled={isAnswered}
                                >
                                    <span>{option}</span>
                                    {isAnswered && isCorrectOption && <CheckCircle size={20} />}
                                    {isAnswered && isSelected && !isCorrectOption && <XCircle size={20} />}
                                </button>
                            );
                        })
                    ) : (
                        <div className={styles.errorText}>
                            No valid options data found for this question.
                        </div>
                    )}
                </div>

                {isAnswered && (
                    <div className={styles.answerFeedback}>
                        <div className={`${styles.feedback} ${isCorrect ? styles.correct : styles.wrong}`}>
                            <div className={styles.feedbackHeader}>
                                {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
                                <span className={styles.feedbackTitle}>
                                    {isCorrect ? 'Correct!' : 'Incorrect'}
                                </span>
                            </div>
                            {!isCorrect && currentQuestion.explanation && (
                                <p className={styles.explanationText}>{currentQuestion.explanation}</p>
                            )}
                        </div>

                        <div className={styles.navigation}>
                            <Button onClick={handleNext} variant="primary" size="lg" className={styles.nextBtn}>
                                {currentIndex === questions.length - 1 ? 'Complete Assessment' : 'Continue'}
                                <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
