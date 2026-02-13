'use client';

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { SessionSync } from "./SessionSync";

interface AuthProviderProps {
    children: React.ReactNode;
    session?: Session | null;
}

export const AuthProvider = ({ children, session }: AuthProviderProps) => {
    return (
        <SessionProvider session={session}>
            <SessionSync />
            {children}
        </SessionProvider>
    );
};
