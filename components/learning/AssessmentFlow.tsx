'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './AssessmentFlow.module.css';

interface AssessmentFlowProps {
  enrollmentId: string;
  careerPathSlug: string;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export function AssessmentFlow({ enrollmentId, careerPathSlug }: AssessmentFlowProps) {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`/api/assessment/questions?slug=${careerPathSlug}`);
        if (res.ok) {
          const data = await res.json();
          // Take a random set or first 5 for placement
          setQuestions(data.questions.slice(0, 5));
        }
      } catch (err) {
        console.error('Failed to fetch questions:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [careerPathSlug]);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= 60; // Slightly lower bar for placement

    try {
      const res = await fetch('/api/enrollment/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enrollmentId, passed, score }),
      });

      if (res.ok) {
        setResult({ score, passed });
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Failed to submit results:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingState}>
        <Loader2 className={styles.spinner} />
        <p>Preparing your assessment...</p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Intermediate Placement Assessment</h2>
          <p>Prove your skills to unlock the intermediate level immediately.</p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <CheckCircle size={18} color="var(--primary)" />
            <span>{questions.length} core engineering questions</span>
          </div>
          <div className={styles.infoItem}>
            <CheckCircle size={18} color="var(--primary)" />
            <span>Passing score: 60%</span>
          </div>
          <div className={styles.infoItem}>
            <CheckCircle size={18} color="var(--primary)" />
            <span>Review past levels anytime if you pass</span>
          </div>
        </div>

        <div className={styles.warning}>
          <AlertCircle size={20} />
          <p>If you don't pass, you'll start from Level 1 to ensure you have all foundations covered.</p>
        </div>

        <Button variant="primary" onClick={handleStart} className={styles.startBtn} size="lg">
          Start Assessment
          <ArrowRight size={18} />
        </Button>
      </div>
    );
  }

  if (submitted && result) {
    return (
      <div className={styles.card}>
        <div className={`${styles.result} ${result.passed ? styles.passed : styles.failed}`}>
          {result.passed ? (
            <div className={styles.resultIconSuccess}><CheckCircle size={64} /></div>
          ) : (
            <div className={styles.resultIconError}><XCircle size={64} /></div>
          )}
          <h2>{result.passed ? 'Level 2 Unlocked!' : 'Foundation Suggested'}</h2>
          <div className={styles.scoreBadge}>{result.score}% Score</div>
          <p className={styles.resultText}>
            {result.passed
              ? 'Great job! You\'ve proven your proficiency. You now have access to Intermediate skills and projects.'
              : 'You were close, but we recommend mastering the basics in Level 1 first to ensure long-term success.'}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => {
            router.refresh();
            router.push(`/paths/${careerPathSlug}/learn`);
          }}
          className={styles.resultBtn}
          size="lg"
        >
          {result.passed ? 'Enter Intermediate Level' : 'Start from Level 1'}
        </Button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasAnswered = !!answers[question.id];
  const canSubmit = Object.keys(answers).length === questions.length;

  return (
    <div className={styles.card}>
      <div className={styles.progress}>
        <div className={styles.progressHeader}>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className={styles.percentage}>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={styles.question}>
        <h3>{question.question}</h3>

        <div className={styles.options}>
          {question.options.map(option => (
            <button
              key={option}
              className={`${styles.option} ${answers[question.id] === option ? styles.selected : ''}`}
              onClick={() => handleAnswer(option)}
            >
              <div className={styles.optionCircle} />
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>

        {currentQuestion < questions.length - 1 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!hasAnswered}
          >
            Next Question
            <ArrowRight size={18} />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!canSubmit || isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Submit Assessment'}
          </Button>
        )}
      </div>
    </div>
  );
}
