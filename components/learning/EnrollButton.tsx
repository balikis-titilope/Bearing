'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

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
  const [error, setError] = useState<string | null>(null);

  const handleEnroll = async () => {
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
        body: JSON.stringify({ careerPathId, userId }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsEnrolled(true);
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
    <div>
      <Button
        variant="primary"
        size={variant === 'large' ? 'lg' : 'md'}
        onClick={handleEnroll}
        disabled={isLoading}
      >
        {isLoading ? 'Enrolling...' : userId ? 'Enroll Now' : 'Sign in to Enroll'}
      </Button>
      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.5rem' }}>{error}</p>
      )}
    </div>
  );
}
