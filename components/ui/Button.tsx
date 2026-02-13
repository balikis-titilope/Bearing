import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className,
    disabled,
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`;

    return (
        <button 
            className={buttonClass} 
            disabled={disabled}
            aria-disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
