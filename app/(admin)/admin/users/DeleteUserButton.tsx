'use client';

import { useState } from 'react';
import { Trash2, AlertTriangle, Loader2 } from 'lucide-react';
import { deleteUser } from '@/actions/admin';
import styles from './users.module.css';

interface DeleteUserButtonProps {
    userId: string;
    userName: string;
}

export function DeleteUserButton({ userId, userName }: DeleteUserButtonProps) {
    const [isConfirming, setIsConfirming] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteUser(userId);
            setIsConfirming(false);
        } catch (error) {
            console.error('Failed to delete user:', error);
            alert('Failed to delete user. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    };

    if (isConfirming) {
        return (
            <div className={styles.confirmOverlay}>
                <div className={styles.confirmModal}>
                    <div className={styles.confirmHeader}>
                        <AlertTriangle className={styles.warningIcon} />
                        <h3>Delete User?</h3>
                    </div>
                    <p className={styles.confirmText}>
                        Are you sure you want to delete <strong>{userName || 'this user'}</strong>?
                        This action cannot be undone and will remove all their progress.
                    </p>
                    <div className={styles.confirmActions}>
                        <button
                            className={styles.cancelBtn}
                            onClick={() => setIsConfirming(false)}
                            disabled={isDeleting}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.confirmBtn}
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
                            {isDeleting ? (
                                <>
                                    <Loader2 className={styles.spin} size={14} />
                                    <span>Deleting...</span>
                                </>
                            ) : (
                                'Yes, Delete'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <button
            className={`${styles.actionBtn} ${styles.actionBtnDelete}`}
            title="Delete User"
            onClick={() => setIsConfirming(true)}
        >
            <Trash2 size={18} />
        </button>
    );
}
