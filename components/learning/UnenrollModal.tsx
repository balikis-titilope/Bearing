'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, AlertTriangle, ShieldCheck, History, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './UnenrollModal.module.css';

interface UnenrollModalProps {
    enrollment: any;
    path: any;
    isOpen: boolean;
    onClose: () => void;
}

export function UnenrollModal({ enrollment, path, isOpen, onClose }: UnenrollModalProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<{ title: string, message: string } | null>(null);

    if (!isOpen) return null;

    // Calculate Progress
    const totalSkills = path.levels.reduce((acc: number, l: any) => acc + l.skills.length, 0);
    const completedSkills = enrollment.skillProgress?.filter((p: any) => p.status === 'COMPLETED').length || 0;
    const progressPercentage = totalSkills > 0 ? (completedSkills / totalSkills) * 100 : 0;

    // Determine State
    const isGracePeriod = progressPercentage < 20;
    const currentLevel = path.levels.find((l: any) => l.id === enrollment.currentLevelId);
    const currentLevelSkills = currentLevel?.skills || [];
    const completedLevelSkills = enrollment.skillProgress?.filter((p: any) =>
        currentLevelSkills.some((s: any) => s.id === p.skillId) && p.status === 'COMPLETED'
    ).length || 0;

    const levelProject = enrollment.projectProgress?.find((p: any) =>
        currentLevel?.projects.some((proj: any) => proj.id === p.projectId && proj.isFinalProject)
        && p.status === 'PASSED'
    );

    const isLevelCompleted = currentLevelSkills.length > 0 && completedLevelSkills === currentLevelSkills.length && levelProject;

    const handleUnenroll = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/enrollment/unenroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            if (response.ok) {
                onClose();
                router.push('/');
                router.refresh();
            } else {
                setError({
                    title: data.error || 'Switch Blocked',
                    message: data.message || 'We could not process your unenrollment request. Please try again later.'
                });
            }
        } catch (err) {
            console.error('Unenrollment failed:', err);
            setError({
                title: 'System Error',
                message: 'An unexpected error occurred. Please check your connection and try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.modalContent}>
                    <div className={`${styles.iconContainer} ${isLevelCompleted ? styles.milestone : ''}`}>
                        {isLevelCompleted ? <ShieldCheck size={40} /> : <AlertTriangle size={40} />}
                    </div>

                    <h2>Change Career Path?</h2>
                    <p className={styles.description}>
                        You are currently enrolled in <strong>{path.title}</strong>.
                        Before you pivot, please review the path switch terms.
                    </p>

                    <div className={styles.statusCard}>
                        {isGracePeriod ? (
                            <div className={styles.statusItem}>
                                <History size={20} color="#ef4444" />
                                <div>
                                    <span className={styles.statusTitle}>Grace Period Policy</span>
                                    <p>You have less than 20% progress. All current progress and submissions for this path will be <strong>permanently deleted</strong> upon switching.</p>
                                </div>
                            </div>
                        ) : isLevelCompleted ? (
                            <div className={styles.statusItem}>
                                <ShieldCheck size={20} color="#22c55e" />
                                <div>
                                    <span className={styles.statusTitle}>Milestone Achievement</span>
                                    <p>Excellent! You have completed the current level. Your results will be <strong>archived</strong>, allowing you to resume this path later.</p>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.statusItem}>
                                <Info size={20} color="#f59e0b" />
                                <div>
                                    <span className={styles.statusTitle}>Strategic Block</span>
                                    <p>You have significant investment in this level. To prevent "path hopping," you must complete the current level before pivoting.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className={styles.modalError}>
                            <div className={styles.errorTitle}>
                                <AlertTriangle size={16} />
                                <span>{error.title}</span>
                            </div>
                            <p>{error.message}</p>
                        </div>
                    )}

                    <div className={styles.actions}>
                        <Button
                            variant="primary"
                            className={styles.confirmBtn}
                            onClick={handleUnenroll}
                            disabled={isLoading || (!isGracePeriod && !isLevelCompleted)}
                        >
                            {isLoading ? 'Processing...' : 'Yes, Confirm Pivot'}
                        </Button>
                        <Button
                            variant="ghost"
                            className={styles.cancelBtn}
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Keep Learning {path.title}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
