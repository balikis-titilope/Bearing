'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Compass, BookOpen, Trophy, Flame, RefreshCcw } from 'lucide-react';
import { UnenrollModal } from './UnenrollModal';
import styles from './LearningHeader.module.css';

interface LearningHeaderProps {
  path: any;
  currentLevel: any;
  enrollment: any;
}

export function LearningHeader({ path, currentLevel, enrollment }: LearningHeaderProps) {
  const [isUnenrollModalOpen, setIsUnenrollModalOpen] = useState(false);
  const totalSkills = path.levels.reduce((acc: number, level: any) => acc + level.skills.length, 0);
  const completedSkills = enrollment.skillProgress?.filter((p: any) => p.status === 'COMPLETED').length || 0;
  const progressPercentage = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.topContent}>
          <Link href={`/paths/${path.slug}`} className={styles.backLink}>
            <Compass size={20} />
            <span>{path.title}</span>
          </Link>

          <button
            className={styles.pivotBtn}
            onClick={() => setIsUnenrollModalOpen(true)}
          >
            <RefreshCcw size={16} />
            <span>Switch Path</span>
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <Flame size={18} className={styles.statIcon} />
            <span>Day 1</span>
          </div>
          <div className={styles.stat}>
            <Trophy size={18} className={styles.statIcon} />
            <span>{completedSkills} skills</span>
          </div>
        </div>
      </div>

      <div className={styles.headerMain}>
        <div className={styles.levelInfo}>
          <span className={styles.levelLabel}>Current Level</span>
          <h1 className={styles.levelTitle}>{currentLevel.title}</h1>
          <p className={styles.levelDescription}>{currentLevel.description}</p>
        </div>

        <div className={styles.progressCard}>
          <div className={styles.progressHeader}>
            <BookOpen size={20} />
            <span>Your Progress</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className={styles.progressStats}>
            <span>{completedSkills} of {totalSkills} skills completed</span>
            <span>{progressPercentage}%</span>
          </div>
        </div>
      </div>

      <UnenrollModal
        isOpen={isUnenrollModalOpen}
        onClose={() => setIsUnenrollModalOpen(false)}
        enrollment={enrollment}
        path={path}
      />
    </div>
  );
}
