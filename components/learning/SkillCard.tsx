'use client';

import { CheckCircle, PlayCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  skill: any;
  index: number;
  status: string;
  levelOrder: number;
}

export function SkillCard({ skill, index, status, levelOrder }: SkillCardProps) {
  const statusConfig: Record<string, { label: string; color: string; bgColor: string }> = {
    NOT_STARTED: { label: 'Start', color: 'var(--primary)', bgColor: 'rgba(14, 165, 233, 0.1)' },
    IN_PROGRESS: { label: 'Continue', color: 'var(--accent)', bgColor: 'rgba(59, 130, 246, 0.1)' },
    COMPLETED: { label: 'Completed', color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.1)' },
  };

  const config = statusConfig[status] || statusConfig.NOT_STARTED;

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
          variant={status === 'COMPLETED' ? 'outline' : 'primary'}
          size="sm"
          className={styles.actionButton}
        >
          {status === 'COMPLETED' ? (
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
