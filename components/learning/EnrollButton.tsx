'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

interface EnrollButtonProps {
  careerPathId: string;
  userId?: string | null;
  variant?: 'default' | 'large';
}

export function EnrollButton({ careerPathId, userId, variant = 'default' }: EnrollButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = async () => {
    if (!userId) {
      router.push('/login');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPathId, userId }),
      });

      if (response.ok) {
        setIsEnrolled(true);
        router.push(`/paths/${careerPathId}/learn`);
      }
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEnrolled) {
    return (
      <Button variant="primary" onClick={() => router.push(`/paths/${careerPathId}/learn`)}>
        Continue Learning
      </Button>
    );
  }

  return (
    <Button
      variant="primary"
      size={variant === 'large' ? 'lg' : 'md'}
      onClick={handleEnroll}
      disabled={isLoading}
    >
      {isLoading ? 'Enrolling...' : userId ? 'Enroll Now' : 'Sign in to Enroll'}
    </Button>
  );
}
