"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ParallaxBackground.module.css';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  className = '',
  speed = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      container.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`${styles.parallaxContainer} ${className}`}>
      {children}
    </div>
  );
};