'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';

export function SessionSync() {
    const { update } = useSession();

    const hasUpdated = useRef(false);

    useEffect(() => {
        // Prevent multiple updates or loops
        if (hasUpdated.current) return;
        hasUpdated.current = true;

        // Force a session update to ensure client has latest data
        const timer = setTimeout(() => {
            update();
        }, 50);
        return () => clearTimeout(timer);
    }, [update]);

    return null;
}
