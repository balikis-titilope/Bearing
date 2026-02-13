'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import styles from './AsyncErrorBoundary.module.css';

interface AsyncErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface AsyncErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class AsyncErrorBoundary extends React.Component<AsyncErrorBoundaryProps, AsyncErrorBoundaryState> {
    constructor(props: AsyncErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): AsyncErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Async Error Boundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className={styles.asyncErrorBoundary}>
                    <AlertTriangle size={24} />
                    <span>Failed to load content</span>
                </div>
            );
        }

        return this.props.children;
    }
}