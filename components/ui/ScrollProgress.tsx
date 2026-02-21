"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ScrollProgress.module.css';

export const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const noNavbarRoutes = ['/login', '/register', '/contact'];
    const hasNavbar = !noNavbarRoutes.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.container} ${!hasNavbar ? styles.noNavbar : ''}`}>
            <div
                className={styles.bar}
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};
