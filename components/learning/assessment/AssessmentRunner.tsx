'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import styles from "./Assessment.module.css";

interface Question {
    id: string;
    question: string;
    options: string; // JSON string
    correctAnswer: string;
    explanation?: string;
}

interface AssessmentRunnerProps {
    questions: any[];
    onComplete: (score: number) => void;
}

export function AssessmentRunner({ questions, onComplete }: AssessmentRunnerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentIndex];
    const options = JSON.parse(currentQuestion.options);
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
            // Finished
            const finalScore = Math.round(((score + (isCorrect ? 0 : 0)) / questions.length) * 100);
            // Note: isCorrect is for the current question, but score is already updated if correct
            // Wait, score update is async-ish in React state, but here we can just use the state value
            // simpler: calculation at the end.

            // Actually, let's calculate exact score based on correct answers count
            // We need to track total correct answers.
            // Let's use a ref or just rely on state. 
            // state `score` holds count of correct answers so far.

            const totalCorrect = score; // This misses the current one if we just clicked? 
            // No, handleSelect updates score immediately.

            const percentage = Math.round((totalCorrect / questions.length) * 100);
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
                    {options.map((option: string, idx: number) => {
                        let optionClass = styles.optionBtn;
                        if (isAnswered) {
                            if (option === currentQuestion.correctAnswer) {
                                optionClass += ` ${styles.optionCorrect}`;
                            } else if (option === selectedAnswer) {
                                optionClass += ` ${styles.optionWrong}`;
                            } else {
                                optionClass += ` ${styles.optionDisabled}`; // dimmed
                            }
                        } else if (selectedAnswer === option) {
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
                                {isAnswered && option === currentQuestion.correctAnswer && <CheckCircle size={20} />}
                                {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && <XCircle size={20} />}
                            </button>
                        );
                    })}
                </div>

                {isAnswered && (
                    <div className={styles.nextBtnWrapper}>
                        <div className={`styles.feedback ${isCorrect ? styles.correct : styles.wrong}`}>
                            {!isCorrect && (
                                <div className={styles.feedbackMsg}>
                                    <AlertCircle size={16} />
                                    <span>{currentQuestion.explanation}</span>
                                </div>
                            )}
                        </div>

                        <Button onClick={handleNext} variant="primary">
                            {currentIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
