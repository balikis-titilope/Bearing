'use client';

import { CheckCircle, Lock, Trophy, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: any;
  status: string;
  isLocked: boolean;
}

export function ProjectCard({ project, status, isLocked }: ProjectCardProps) {
  const statusConfig: Record<string, { label: string; color: string }> = {
    NOT_STARTED: { label: 'Start Project', color: 'var(--primary)' },
    IN_PROGRESS: { label: 'Continue Project', color: 'var(--accent)' },
    SUBMITTED: { label: 'Under Review', color: '#f59e0b' },
    PASSED: { label: 'View Project', color: '#22c55e' },
    FAILED: { label: 'Retry Project', color: '#ef4444' },
  };

  const config = statusConfig[status] || statusConfig.NOT_STARTED;

  if (isLocked && status === 'NOT_STARTED') {
    return (
      <div className={styles.card}>
        <div className={styles.lockedOverlay}>
          <Lock size={32} />
          <span>Complete all skills to unlock</span>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.projectBadge}>
            <Trophy size={20} />
            <span>Final Project</span>
          </div>
          
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>
            Complete all skills in this level to unlock this project.
          </p>
        </div>
      </div>
    );
  }

  let requirements: string[] = [];
  try {
    requirements = project.requirements ? JSON.parse(project.requirements) : [];
  } catch (e) {
    requirements = [];
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.projectBadge}>
            <Trophy size={20} />
            <span>Final Project</span>
          </div>
          {status === 'PASSED' && (
            <div className={styles.passedBadge}>
              <CheckCircle size={16} />
              <span>Passed</span>
            </div>
          )}
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        {requirements.length > 0 && (
          <div className={styles.requirements}>
            <h4>Key Requirements:</h4>
            <ul>
              {requirements.slice(0, 3).map((req: string, i: number) => (
                <li key={i}>{req}</li>
              ))}
              {requirements.length > 3 && (
                <li className={styles.more}>+{requirements.length - 3} more</li>
              )}
            </ul>
          </div>
        )}

        <div className={styles.cardFooter}>
          <Button 
            variant={status === 'PASSED' ? 'outline' : 'primary'}
            className={styles.actionButton}
          >
            <Trophy size={18} />
            <span>{config.label}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
