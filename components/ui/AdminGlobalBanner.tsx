"use client";

import React from 'react';
import { useAdmin } from '@/components/providers/AdminProvider';
import { useSession } from 'next-auth/react';
import { isSuperAdmin } from '@/lib/permissions';
import { ShieldAlert } from 'lucide-react';

export const AdminGlobalBanner: React.FC = () => {
    const { data: session } = useSession();
    const { adminMode } = useAdmin();

    if (!isSuperAdmin(session?.user) || !adminMode) {
        return null;
    }

    return (
        <div className="bg-red-600 text-white py-1 px-4 text-center text-xs font-bold flex items-center justify-center gap-2 sticky top-0 z-[100] border-b border-red-700 shadow-lg animate-pulse">
            <ShieldAlert size={14} />
            <span>ADMIN SIMULATION MODE ACTIVE — CONSTRAINT BYPASS ENABLED</span>
        </div>
    );
};
