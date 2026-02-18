'use client';

import React, { useEffect } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'success' | 'error' | 'info';
}

export default function Modal({ isOpen, onClose, title, message, type = 'success' }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>
                <div className={`${styles.icon} ${styles[type]}`}>
                    {type === 'error' ? <AlertCircle size={48} /> : <CheckCircle size={48} />}
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.message}>{message}</p>
                <button className={styles.actionBtn} onClick={onClose}>
                    Got it
                </button>
            </div>
        </div>
    );
}
