"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    MoreVertical,
    Edit,
    Trash2,
    Loader2
} from "lucide-react";
import { togglePathPublishStatus, deletePath } from "@/actions/path-admin";
import styles from "./page.module.css";
import Link from "next/link";

interface PathActionsProps {
    pathId: string;
    isPublished: boolean;
    slug: string;
}

export function PathActions({ pathId, isPublished, slug }: PathActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onTogglePublish = async () => {
        setIsLoading(true);
        try {
            await togglePathPublishStatus(pathId, isPublished);
        } catch (error) {
            console.error("Failed to toggle publish status", error);
        } finally {
            setIsLoading(false);
        }
    };

    const onDelete = async () => {
        const firstConfirm = confirm("Are you sure you want to delete this path? This action cannot be undone.");
        if (!firstConfirm) return;

        const secondConfirm = confirm("FINAL WARNING: This will permanently delete all curriculum data and enrollments for this path. Proceed with deletion?");
        if (!secondConfirm) return;

        setIsLoading(true);
        try {
            await deletePath(pathId);
        } catch (error) {
            console.error("Failed to delete path", error);
        } finally {
            setIsLoading(false);
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.actions}>
            <button
                className={styles.footerBtn}
                onClick={onTogglePublish}
                disabled={isLoading}
            >
                {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : (
                    isPublished ? <EyeOff size={16} /> : <Eye size={16} />
                )}
                {isPublished ? "Unpublish" : "Publish Now"}
            </button>

            <button
                className={styles.moreBtn}
                onClick={() => setIsOpen(!isOpen)}
                disabled={isLoading}
            >
                <MoreVertical size={16} />
            </button>

            {isOpen && (
                <>
                    <div className={styles.overlay} onClick={() => setIsOpen(false)} />
                    <div className={styles.dropdown}>
                        <Link
                            href={`/paths/${slug}`}
                            className={styles.dropdownItem}
                            onClick={() => setIsOpen(false)}
                        >
                            <Edit size={14} />
                            View/Edit Content
                        </Link>
                        <button
                            className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}
                            onClick={onDelete}
                        >
                            <Trash2 size={14} />
                            Delete Path
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
