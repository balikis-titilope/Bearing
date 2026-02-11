'use client';

import React from "react";
import { AlertCircle } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import styles from "@/app/register/page.module.css";

const AuthErrorPage = () => {
    return (
        <AuthCard
            title="Oops! Something went wrong"
            description="There was an error during authentication"
        >
            <div className="flex items-center w-full justify-center" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                <div className={styles.errorMsg}>
                    <AlertCircle size={16} />
                    <span>Authentication failed. Please try again.</span>
                </div>
            </div>
        </AuthCard>
    );
};

export default AuthErrorPage;
