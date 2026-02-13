'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error, errorInfo });
        
        // Log error to console (in production, send to error tracking service)
        console.error('Error Boundary caught an error:', error, errorInfo);
        
        // You could also send to a logging service here
        // logErrorToService(error, errorInfo);
    }

    resetError = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    };

    render() {
        if (this.state.hasError) {
            const FallbackComponent = this.props.fallback || DefaultErrorFallback;
            return <FallbackComponent error={this.state.error} reset={this.resetError} />;
        }

        return this.props.children;
    }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
    return (
        <div className={styles.errorBoundary} role="alert" aria-live="polite">
            <div className={styles.errorContainer}>
                <AlertTriangle size={48} className={styles.errorIcon} />
                <h2 className={styles.errorTitle}>Something went wrong</h2>
                <p className={styles.errorMessage}>
                    We're sorry, but something unexpected happened. Our team has been notified.
                </p>
                
                {process.env.NODE_ENV === 'development' && error && (
                    <details className={styles.errorDetails}>
                        <summary>Error details (development only)</summary>
                        <pre className={styles.errorStack}>
                            {error.stack}
                        </pre>
                    </details>
                )}
                
                <button 
                    onClick={reset}
                    className={styles.resetButton}
                    aria-label="Try again"
                >
                    <RefreshCw size={16} />
                    Try Again
                </button>
            </div>
        </div>
    );
}