'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MotionProviderProps {
    children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
    const pathname = usePathname();

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
                    // Once animated, we don't need to observe it anymore
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Track all reveal elements
        const refreshObservers = () => {
            const elements = document.querySelectorAll('.reveal, .reveal-on-scroll');
            elements.forEach((el) => {
                revealObserver.observe(el);
            });
        };

        // Re-scan for reveal elements
        refreshObservers();

        // Step 2: Scroll-based Parallax and Hero Fade
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Background Parallax
            document.querySelectorAll('.parallax-bg').forEach((el) => {
                const element = el as HTMLElement;
                const speed = parseFloat(element.getAttribute('data-speed') || '0.2');
                element.style.transform = `translateY(${scrollY * speed}px)`;
            });

            // Hero Fade Handoff (makes hero fade as you scroll down)
            const heroContent = document.querySelector('.hero-content') as HTMLElement;
            if (heroContent) {
                const opacity = Math.max(1 - scrollY / 600, 0);
                heroContent.style.opacity = opacity.toString();
                heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial call to set positions
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            revealObserver.disconnect();
        };
    }, [pathname]);

    return <>{children}</>;
};
