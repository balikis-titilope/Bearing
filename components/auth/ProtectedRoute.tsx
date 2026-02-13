"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
    children, 
    fallback = null 
}) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Prevent back button access to protected routes when logged out
        if (status === 'unauthenticated') {
            const handlePopState = () => {
                router.push('/login');
            };

            // Add event listener for browser back button
            window.addEventListener('popstate', handlePopState);
            
            // Replace history state to prevent going back to protected pages
            if (window.history && window.history.replaceState) {
                window.history.replaceState({ authenticated: false }, '', '/login');
            }

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [status, router]);

    // If user is not authenticated, show fallback or redirect
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};