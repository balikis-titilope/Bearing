"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const getClasses = () => {
    const baseClasses = `${styles.reveal} ${styles[direction]} ${className}`;
    return isVisible ? `${baseClasses} ${styles.visible}` : baseClasses;
  };

  const inlineStyles = {
    '--delay': `${delay}ms`,
    '--duration': `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div
      ref={elementRef}
      className={getClasses()}
      style={inlineStyles}
    >
      {children}
    </div>
  );
};