'use client';

import React, { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useScroll } from '@/hooks/useScroll';

interface MotionProviderProps {
    children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
    const pathname = usePathname();

    const handleScroll = useCallback((scrollY: number) => {
        // Global scroll effects removed in favor of section-specific hooks
    }, []);

    useScroll(handleScroll);

    useEffect(() => {
        // Step 1: Intersection Observer for Scroll Reveals
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const refreshObservers = () => {
            const elements = document.querySelectorAll('.reveal, .reveal-on-scroll');
            elements.forEach((el) => {
                revealObserver.observe(el);
            });
        };

        refreshObservers();

        return () => {
            revealObserver.disconnect();
        };
    }, [pathname]);

    return <>{children}</>;
};
