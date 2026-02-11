'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering icons on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={styles.toggle} />;
    }

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            data-theme={theme}
        >
            <Sun className={`${styles.icon} ${styles.sun}`} />
            <Moon className={`${styles.icon} ${styles.moon}`} />
        </button>
    );
};
