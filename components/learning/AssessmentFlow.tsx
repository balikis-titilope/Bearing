'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowRight, AlertCircle } from 'lucide-react';
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

const sampleQuestions: Question[] = [
  {
    id: 'q1',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language'
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation: 'HTML stands for Hyper Text Markup Language - the standard markup language for creating web pages.'
  },
  {
    id: 'q2',
    question: 'Which CSS property is used to create space between elements?',
    options: ['margin', 'padding', 'spacing', 'gap'],
    correctAnswer: 'margin',
    explanation: 'Margin creates space OUTSIDE an element, while padding creates space INSIDE an element.'
  },
  {
    id: 'q3',
    question: 'What is the correct way to declare a variable in modern JavaScript?',
    options: [
      'var name = "John"',
      'let name = "John"',
      'variable name = "John"',
      'int name = "John"'
    ],
    correctAnswer: 'let name = "John"',
    explanation: 'In modern JavaScript, use "let" for variables that can change and "const" for constants. Avoid "var".'
  },
  {
    id: 'q4',
    question: 'What React hook is used to manage state in functional components?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useState',
    explanation: 'useState is the primary hook for managing local state in functional components.'
  },
  {
    id: 'q5',
    question: 'What is the purpose of the "key" prop in React lists?',
    options: [
      'Styling purposes',
      'Helps React identify changed items',
      'Accessibility',
      'Data binding'
    ],
    correctAnswer: 'Helps React identify changed items',
    explanation: 'Keys help React identify which items have changed, been added, or removed for efficient re-rendering.'
  }
];

export function AssessmentFlow({ enrollmentId, careerPathSlug }: AssessmentFlowProps) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (answer: string) => {
    const question = sampleQuestions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    sampleQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    
    const score = Math.round((correct / sampleQuestions.length) * 100);
    const passed = score >= 70;
    
    setResult({ score, passed });
    setSubmitted(true);
  };

  const question = sampleQuestions[currentQuestion];
  const hasAnswered = !!answers[question.id];
  const canSubmit = Object.keys(answers).length === sampleQuestions.length;

  if (!started) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Level Assessment</h2>
          <p>Take a quick assessment to verify your current skill level</p>
        </div>
        
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <CheckCircle size={18} />
            <span>{sampleQuestions.length} questions</span>
          </div>
          <div className={styles.infoItem}>
            <CheckCircle size={18} />
            <span>70% required to pass</span>
          </div>
          <div className={styles.infoItem}>
            <CheckCircle size={18} />
            <span>Takes ~5 minutes</span>
          </div>
        </div>

        <div className={styles.warning}>
          <AlertCircle size={18} />
          <span>If you claim a level above your actual skill, you may struggle with the projects.</span>
        </div>

        <Button variant="primary" onClick={handleStart} className={styles.startBtn}>
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
            <CheckCircle size={48} />
          ) : (
            <XCircle size={48} />
          )}
          <h2>{result.passed ? 'Assessment Passed!' : 'Assessment Failed'}</h2>
          <p className={styles.score}>Score: {result.score}%</p>
          <p>{result.passed ? 'You can proceed to the next level!' : 'We recommend starting from Level 1 to build a strong foundation.'}</p>
        </div>
        
        <Button 
          variant="primary" 
          onClick={() => router.push(`/paths/${careerPathSlug}/learn`)}
          className={styles.resultBtn}
        >
          Continue Learning
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.progress}>
        <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
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
              {option}
            </button>
          ))}
        </div>
      </div>

      {hasAnswered && answers[question.id] !== question.correctAnswer && (
        <div className={styles.explanation}>
          <AlertCircle size={16} />
          <span>{question.explanation}</span>
        </div>
      )}

      <div className={styles.actions}>
        <Button 
          variant="outline" 
          onClick={handlePrev}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        
        {currentQuestion < sampleQuestions.length - 1 ? (
          <Button 
            variant="primary" 
            onClick={handleNext}
            disabled={!hasAnswered}
          >
            Next
          </Button>
        ) : (
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            Submit Assessment
          </Button>
        )}
      </div>
    </div>
  );
}
