"use client";

import React, { createContext, useContext, useEffect, useRef } from 'react';

type ScrollCallback = (scrollY: number) => void;

interface ScrollContextType {
    subscribe: (callback: ScrollCallback) => () => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const subscribers = useRef<Set<ScrollCallback>>(new Set());
    const scrollY = useRef(0);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            const currentY = window.scrollY;
            subscribers.current.forEach(cb => cb(currentY));
            rafId.current = null;
        };

        const handleScroll = () => {
            if (rafId.current === null) {
                rafId.current = requestAnimationFrame(update);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const subscribe = (callback: ScrollCallback) => {
        subscribers.current.add(callback);
        // Call immediately with current scroll
        callback(window.scrollY);
        return () => {
            subscribers.current.delete(callback);
        };
    };

    return (
        <ScrollContext.Provider value={{ subscribe }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (callback: ScrollCallback) => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }

    useEffect(() => {
        return context.subscribe(callback);
    }, [context, callback]);
};
