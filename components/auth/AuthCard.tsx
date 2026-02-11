'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';
import styles from './AuthCard.module.css';

interface AuthCardProps {
    children: React.ReactNode;
    title: string;
    description?: string;
    backHref?: string;
    backLabel?: string;
}

export const AuthCard = ({
    children,
    title,
    description,
    backHref = "/login",
    backLabel = "Back to login"
}: AuthCardProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/" className={styles.logo}>
                        <Compass size={32} />
                        <span>Bearing</span>
                    </Link>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                </div>

                <div className={styles.content}>
                    {children}
                </div>

                <div className={styles.footer}>
                    <Link href={backHref} className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>{backLabel}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
