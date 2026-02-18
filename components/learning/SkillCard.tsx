'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  skill: any;
  index: number;
  status: string;
  levelOrder: number;
  enrollmentId: string;
  slug: string;
  isLocked?: boolean;
}

export function SkillCard({ skill, index, status, levelOrder, enrollmentId, slug, isLocked }: SkillCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const statusConfig: Record<string, { label: string; color: string; bgColor: string }> = {
    NOT_STARTED: { label: 'Start', color: 'var(--primary)', bgColor: 'rgba(14, 165, 233, 0.1)' },
    IN_PROGRESS: { label: 'Continue', color: 'var(--accent)', bgColor: 'rgba(59, 130, 246, 0.1)' },
    COMPLETED: { label: 'Completed', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.1)' },
    LOCKED: { label: 'Locked', color: 'var(--text-muted)', bgColor: 'rgba(0, 0, 0, 0.05)' }
  };

  const config = isLocked ? statusConfig.LOCKED : (statusConfig[status] || statusConfig.NOT_STARTED);

  const handleClick = async () => {
    if (isLocked) return;
    setLoading(true);

    if (status === 'NOT_STARTED') {
      try {
        await fetch('/api/skill-progress', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            skillId: skill.id,
            status: 'IN_PROGRESS'
          }),
        });
      } catch (error) {
        console.error('Failed to update progress:', error);
      }
    }

    router.push(`/paths/${slug}/learn/${skill.id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div
          className={styles.skillNumber}
          style={{ background: config.bgColor, color: config.color }}
        >
          {levelOrder}.{index + 1}
        </div>
        {status === 'COMPLETED' && (
          <div className={styles.completedBadge}>
            <CheckCircle size={16} />
          </div>
        )}
      </div>

      <h3 className={styles.skillTitle}>{skill.title}</h3>
      <p className={styles.skillDescription}>{skill.description}</p>

      <div className={styles.cardFooter}>
        <Button
          variant={isLocked ? 'ghost' : (status === 'COMPLETED' ? 'outline' : 'primary')}
          size="sm"
          className={styles.actionButton}
          onClick={handleClick}
          disabled={loading || isLocked}
        >
          {isLocked ? (
            <>
              <Lock size={16} />
              <span>Locked</span>
            </>
          ) : status === 'COMPLETED' ? (
            <>
              <CheckCircle size={16} />
              <span>Review</span>
            </>
          ) : (
            <>
              <span>{config.label}</span>
              <ArrowRight size={16} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
