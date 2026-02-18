"use client";

import React from 'react';
import { useAdmin } from '@/components/providers/AdminProvider';
import { useSession } from 'next-auth/react';
import { isSuperAdmin } from '@/lib/permissions';
import { Shield, ShieldAlert, Settings } from 'lucide-react';
import styles from './AdminModeToggle.module.css';

export const AdminModeToggle: React.FC = () => {
    const { data: session } = useSession();
    const { adminMode, toggleAdminMode } = useAdmin();

    if (!isSuperAdmin(session?.user)) {
        return null;
    }

    return (
        <button
            onClick={toggleAdminMode}
            className={`${styles.toggle} ${adminMode ? styles.active : ''}`}
            title={adminMode ? "Switch to User Mode" : "Switch to Admin Mode"}
        >
            <div className={styles.iconWrapper}>
                {adminMode ? (
                    <ShieldAlert size={18} className={styles.activeIcon} />
                ) : (
                    <Shield size={18} className={styles.inactiveIcon} />
                )}
            </div>
            <div className={styles.textWrapper}>
                <span className={styles.label}>Admin Mode</span>
                <span className={styles.status}>{adminMode ? "ON" : "OFF"}</span>
            </div>
        </button>
    );
};
