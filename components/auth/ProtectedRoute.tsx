"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    session?: any; // Add session prop
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    fallback = null,
    session: initialSession
}) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Use either the client session or the initial server session
    const currentSession = session || initialSession;
    const isAuthenticated = !!currentSession;

    useEffect(() => {
        // Prevent back button access to protected routes when logged out
        if (status === 'unauthenticated' && !initialSession) {
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
    }, [status, router, initialSession]);

    // If user is not authenticated, show fallback or redirect
    if (status === 'loading' && !initialSession) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated && status !== 'loading') {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};