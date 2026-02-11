'use client';

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { AlertCircle, CheckCircle } from "lucide-react";

import { newVerification } from "@/actions/new-verification";
import { AuthCard } from "@/components/auth/AuthCard";
import styles from "@/app/register/page.module.css";

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (success || error) return;

        if (!token) {
            setError("Missing token!");
            return;
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError("Something went wrong!");
            });
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <AuthCard
            title="Confirming your verification"
            description="We are verifying your email address"
        >
            <div className="flex items-center w-full justify-center" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                {!success && !error && (
                    <div className={styles.spinner} style={{ borderColor: 'var(--primary)', borderTopColor: 'transparent' }}></div>
                )}
                {success && (
                    <div className={styles.successMsg}>
                        <CheckCircle size={16} />
                        <span>{success}</span>
                    </div>
                )}
                {!success && error && (
                    <div className={styles.errorMsg}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}
            </div>
        </AuthCard>
    );
};

const NewVerificationPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewVerificationForm />
        </Suspense>
    );
};

export default NewVerificationPage;
