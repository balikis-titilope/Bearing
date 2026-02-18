"use client";

import { useCallback, useRef, useState } from 'react';
import { useScroll } from './useScroll';

interface SectionScrollProgress {
    progress: number;
    scrollY: number;
    sectionTop: number;
    sectionHeight: number;
}

export const useSectionScroll = (
    ref: React.RefObject<HTMLElement | null>,
    options: {
        startOffset?: number; // offset from top of section
        range?: number; // scroll distance for the animation
        useViewport?: boolean; // if true, 0 is when bottom of section enters, 1 is when top leaves
    } = {}
) => {
    const [progress, setProgress] = useState(0);

    // Use a ref for progress to avoid excessive re-renders if we're doing direct DOM manipulation
    // but for simple React state it's easier to use useState. 
    // Given the requirement "Use requestAnimationFrame for render loop", 
    // the useScroll already handles that.

    const handleScroll = useCallback((scrollY: number) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        let p = 0;
        if (options.useViewport) {
            // 0 when section top enters from bottom
            // 1 when section bottom leaves from top
            p = (windowHeight - rect.top) / (windowHeight + sectionHeight);
        } else {
            // 0 when scroll is at section top (or offset)
            // 1 when scroll has moved 'range' pixels
            const start = sectionTop + (options.startOffset || 0);
            const range = options.range || sectionHeight;
            p = (scrollY - (start - windowHeight * 0.5)) / range; // Start animating when it's halfway in

            // If it's the Hero (at the top), we want it visible at start
            if (sectionTop < 10) {
                // Special case for hero: reveal finishes as we scroll down
                p = scrollY / (options.range || 300);
                // Wait, if they want translateX -200 -> 0, and progress 0 -> 1...
                // Let's just make it so progress is 1 at scroll 0 for hero?
                // No, they said "Hero image enters...". 
            }
        }

        const clampedProgress = Math.min(Math.max(p, 0), 1);
        setProgress(clampedProgress);
    }, [ref, options.startOffset, options.range, options.useViewport]);

    useScroll(handleScroll);

    return progress;
};
