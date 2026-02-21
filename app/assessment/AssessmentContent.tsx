"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
    Brain,
    Target,
    TrendingUp,
    Clock,
    CheckCircle2,
    Star,
    ArrowRight
} from 'lucide-react';
import styles from './page.module.css';

interface Question {
    id: string;
    text: string;
    options: string[];
    type: 'single' | 'multiple' | 'scale';
}

const assessmentQuestions: Question[] = [
    {
        id: 'interest_area',
        text: "Which area interests you most?",
        options: [
            "Software Development & IT",
            "Data Science & Analytics",
            "Design & Creative",
            "Business & Management",
            "Healthcare & Medicine",
            "Education & Training"
        ],
        type: 'single'
    },
    {
        id: 'work_environment',
        text: "What work environment do you prefer?",
        options: [
            "Office/Corporate setting",
            "Remote/Flexible work",
            "Startup/Fast-paced environment",
            "Hands-on/Field work",
            "Research/Academic setting"
        ],
        type: 'single'
    },
    {
        id: 'problem_solving',
        text: "How do you prefer to approach problems?",
        options: [
            "Analytical and data-driven approach",
            "Creative and intuitive solutions",
            "Collaborative team-based approach",
            "Systematic step-by-step process",
            "Experimental and iterative approach"
        ],
        type: 'single'
    },
    {
        id: 'learning_style',
        text: "What's your preferred learning style?",
        options: [
            "Visual - I learn best through diagrams and demonstrations",
            "Auditory - I prefer verbal explanations and discussions",
            "Reading/Writing - I learn best through text and notes",
            "Hands-on - I learn best by doing and practicing"
        ],
        type: 'single'
    },
    {
        id: 'skill_importance',
        text: "Rate the importance of these factors in your career choice",
        options: [
            "High salary potential",
            "Work-life balance",
            "Creative expression",
            "Job security/stability",
            "Helping others/making impact"
        ],
        type: 'multiple'
    },
    {
        id: 'experience_level',
        text: "What's your current experience level?",
        options: [
            "Student/Beginner",
            "1-2 years experience",
            "3-5 years experience",
            "5-10 years experience",
            "10+ years experience"
        ],
        type: 'single'
    }
];

export function AssessmentContent() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [isCompleted, setIsCompleted] = useState(false);

    const currentQ = assessmentQuestions[currentQuestion];

    const handleAnswer = (questionId: string, answer: any) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleNext = () => {
        if (currentQuestion < assessmentQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const handleComplete = () => {
        setIsCompleted(true);
    };

    const calculateProgress = () => {
        return ((currentQuestion + 1) / assessmentQuestions.length) * 100;
    };

    const renderQuestion = () => {
        switch (currentQ.type) {
            case 'single':
                return (
                    <div className={styles.optionsGrid}>
                        {currentQ.options.map((option, index) => (
                            <button
                                key={index}
                                className={`${styles.optionButton} ${answers[currentQ.id] === option ? styles.selected : ''}`}
                                onClick={() => handleAnswer(currentQ.id, option)}
                            >
                                <span className={styles.optionText}>{option}</span>
                                {answers[currentQ.id] === option && <CheckCircle2 size={20} className={styles.checkIcon} />}
                            </button>
                        ))}
                    </div>
                );

            case 'multiple':
                return (
                    <div className={styles.optionsGrid}>
                        {currentQ.options.map((option, index) => {
                            const isSelected = Array.isArray(answers[currentQ.id]) ?
                                answers[currentQ.id].includes(option) : false;

                            return (
                                <button
                                    key={index}
                                    className={`${styles.optionButton} ${styles.multiSelect} ${isSelected ? styles.selected : ''}`}
                                    onClick={() => {
                                        const currentSelection = Array.isArray(answers[currentQ.id]) ? answers[currentQ.id] : [];
                                        const newSelection = isSelected ?
                                            currentSelection.filter((item: string) => item !== option) :
                                            [...currentSelection, option];
                                        handleAnswer(currentQ.id, newSelection);
                                    }}
                                >
                                    <span className={styles.optionText}>{option}</span>
                                    {isSelected && <CheckCircle2 size={20} className={styles.checkIcon} />}
                                </button>
                            );
                        })}
                    </div>
                );

            default:
                return null;
        }
    };

    const isLastQuestion = currentQuestion === assessmentQuestions.length - 1;
    const hasAnswer = currentQ.type === 'single' ?
        answers[currentQ.id] :
        Array.isArray(answers[currentQ.id]) && answers[currentQ.id].length > 0;

    return (
        <div className="container">
            {/* Progress Indicator */}
            <ScrollReveal direction="up" delay={0}>
                <div className={styles.progressSection}>
                    <div className={styles.progressHeader}>
                        <Brain className={styles.progressIcon} />
                        <div>
                            <h2 className={styles.progressTitle}>Career Assessment</h2>
                            <p className={styles.progressSubtitle}>
                                Discover your ideal career path based on your interests and preferences
                            </p>
                        </div>
                    </div>

                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${calculateProgress()}%` }} />
                        <span className={styles.progressText}>{currentQuestion + 1} of {assessmentQuestions.length}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* Question Content */}
            <ScrollReveal direction="up" delay={200}>
                <div className={styles.questionCard}>
                    <div className={styles.questionHeader}>
                        <div className={styles.questionNumber}>Question {currentQuestion + 1}</div>
                        <div className={styles.questionContent}>
                            <h3 className={styles.questionText}>{currentQ.text}</h3>
                            {currentQ.type === 'multiple' && (
                                <p className={styles.questionHint}>Select all that apply</p>
                            )}
                        </div>
                    </div>

                    {renderQuestion()}
                </div>
            </ScrollReveal>

            {/* Navigation Buttons */}
            <ScrollReveal direction="up" delay={400}>
                <div className={styles.navigationButtons}>
                    <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className={styles.navButton}
                    >
                        Previous
                    </Button>

                    {!isLastQuestion ? (
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            disabled={!hasAnswer}
                            className={styles.navButton}
                        >
                            Next Question
                            <ArrowRight size={18} />
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            onClick={handleComplete}
                            disabled={!hasAnswer}
                            className={styles.completeButton}
                        >
                            Complete Assessment
                            <CheckCircle2 size={18} />
                        </Button>
                    )}
                </div>
            </ScrollReveal>

            {/* Results Section */}
            {isCompleted && (
                <ScrollReveal direction="up" delay={600}>
                    <div className={styles.resultsCard}>
                        <div className={styles.resultsHeader}>
                            <Star className={styles.resultsIcon} />
                            <div>
                                <h2 className={styles.resultsTitle}>Assessment Complete!</h2>
                                <p className={styles.resultsSubtitle}>
                                    Based on your responses, we've identified your ideal career paths
                                </p>
                            </div>
                        </div>

                        <div className={styles.resultsContent}>
                            <h3 className={styles.resultsHeading}>Your Top Career Matches:</h3>
                            <div className={styles.resultsGrid}>
                                <div className={styles.resultItem}>
                                    <h4>Software Development</h4>
                                    <p>Frontend, Backend, Full-Stack opportunities</p>
                                    <div className={styles.matchPercentage}>92% Match</div>
                                </div>
                                <div className={styles.resultItem}>
                                    <h4>Data Science</h4>
                                    <p>Analytics, Machine Learning, AI/ML paths</p>
                                    <div className={styles.matchPercentage}>85% Match</div>
                                </div>
                                <div className={styles.resultItem}>
                                    <h4>UX/UI Design</h4>
                                    <p>Product design, User experience, Interface design</p>
                                    <div className={styles.matchPercentage}>78% Match</div>
                                </div>
                            </div>

                            <div className={styles.resultsActions}>
                                <Link href="/paths">
                                    <Button variant="primary" className={styles.exploreButton}>
                                        Explore Career Paths
                                        <ArrowRight size={18} />
                                    </Button>
                                </Link>
                                <Link href="/dashboard">
                                    <Button variant="outline" className={styles.dashboardButton}>
                                        View Dashboard
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            )}
        </div>
    );
}
