'use client';

import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/Button";
import styles from "@/app/register/page.module.css";

const AuthErrorPage = () => {
    return (
        <AuthCard
            title="Authentication Error"
            description="There was an error during authentication"
        >
            <div className="flex flex-col items-center w-full gap-4" style={{ padding: '1rem 0' }}>
                <div className={styles.errorMsg}>
                    <AlertCircle size={16} />
                    <span>Authentication failed. Please try again.</span>
                </div>
                
                <div className="flex gap-3 w-full">
                    <Link href="/login" className="flex-1">
                        <Button variant="primary" size="md" className="w-full">
                            <RefreshCw size={16} />
                            Try Again
                        </Button>
                    </Link>
                    <Link href="/register" className="flex-1">
                        <Button variant="outline" size="md" className="w-full">
                            Create Account
                        </Button>
                    </Link>
                </div>
                
                <div className="text-center text-sm text-gray-600 mt-4">
                    <p>If the problem persists, please check your network connection and try again.</p>
                </div>
            </div>
        </AuthCard>
    );
};

export default AuthErrorPage;
