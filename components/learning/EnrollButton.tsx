'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Brain, GraduationCap, ArrowRight, X } from 'lucide-react';
import styles from './EnrollButton.module.css';

interface EnrollButtonProps {
  careerPathId: string;
  slug?: string;
  userId?: string | null;
  isEnrolled?: boolean;
  variant?: 'default' | 'large';
}

export function EnrollButton({ careerPathId, slug, userId, isEnrolled: initialIsEnrolled, variant = 'default' }: EnrollButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(initialIsEnrolled || false);
  const [showLevelSelect, setShowLevelSelect] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (showLevelSelect) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLevelSelect]);

  const handleEnroll = async (startLevel: number) => {
    if (!userId) {
      router.push('/login');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPathId, userId, startLevel }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsEnrolled(true);
        setShowLevelSelect(false);
        const redirectPath = slug || careerPathId;
        router.refresh();
        router.push(`/paths/${redirectPath}/learn`);
      } else {
        setError(data.error || 'Failed to enroll');
      }
    } catch (err) {
      console.error('Enrollment failed:', err);
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (isEnrolled) {
    const redirectPath = slug || careerPathId;
    return (
      <Button variant="primary" onClick={() => router.push(`/paths/${redirectPath}/learn`)}>
        Continue Learning
      </Button>
    );
  }

  return (
    <>
      <div>
        <Button
          variant="primary"
          size={variant === 'large' ? 'lg' : 'md'}
          onClick={() => userId ? setShowLevelSelect(true) : router.push('/login')}
          disabled={isLoading}
        >
          {isLoading ? 'Enrolling...' : userId ? 'Enroll Now' : 'Sign in to Enroll'}
        </Button>
        {error && (
          <p style={{ color: 'var(--error, #ef4444)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{error}</p>
        )}
      </div>

      {showLevelSelect && (
        <div className={styles.overlay} onClick={() => setShowLevelSelect(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowLevelSelect(false)}>
              <X size={24} />
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.iconCircle}>
                <GraduationCap size={32} color="var(--primary)" />
              </div>
              <h2>Choose Your Starting Level</h2>
              <p>Select the level that best matches your current expertise.</p>
            </div>

            <div className={styles.options}>
              <div
                className={styles.optionCard}
                onClick={() => handleEnroll(1)}
              >
                <div className={styles.optionIcon}>
                  <Brain size={24} />
                </div>
                <div className={styles.optionContent}>
                  <h3>Beginner</h3>
                  <p>Start from the absolute basics. Perfect if you're new to this career path.</p>
                  <span className={styles.badge}>Level 1</span>
                </div>
                <ArrowRight className={styles.optionArrow} size={20} />
              </div>

              <div
                className={styles.optionCard}
                onClick={() => handleEnroll(2)}
              >
                <div className={styles.optionIcon}>
                  <GraduationCap size={24} />
                </div>
                <div className={styles.optionContent}>
                  <h3>Intermediate</h3>
                  <p>Skip the basics. You'll need to pass a placement task to prove your skills.</p>
                  <span className={styles.badge}>Level 2</span>
                </div>
                <ArrowRight className={styles.optionArrow} size={20} />
              </div>
            </div>

            {error && (
              <div className={styles.modalError}>
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
