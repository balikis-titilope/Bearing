import { db } from "@/lib/db";
import Link from "next/link";
import { auth } from "@/auth";
import { isSuperAdmin } from "@/lib/permissions";
import {
    Users,
    Layers,
    Clock,
    TrendingUp,
    ArrowRight,
    Shield
} from "lucide-react";
import styles from "./page.module.css";

export default async function AdminDashboardPage() {
    const session = await auth();
    const isSuper = isSuperAdmin(session?.user);

    const userCount = await db.user.count();
    const pathCount = await db.careerPath.count();
    const enrollmentCount = await db.enrollment.count();

    const stats = [
        { label: "Total Users", value: userCount, icon: Users, color: "var(--primary)" },
        { label: "Active Paths", value: pathCount, icon: Layers, color: "#9333ea" },
        { label: "Enrollments", value: enrollmentCount, icon: Clock, color: "#ea580c" },
        { label: "Completion Rate", value: "68%", icon: TrendingUp, color: "#16a34a" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Admin Overview</h1>
                <div className={styles.roleBadgeWrapper}>
                    <p className={styles.subtitle}>Manage your system and monitor growth.</p>
                    <div className={`${styles.roleIndicator} ${isSuper ? styles.roleSuper : styles.roleAdmin}`}>
                        <Shield size={12} />
                        <span>{isSuper ? "Super Admin Access" : "Admin Observer Access"}</span>
                    </div>
                </div>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <div className={styles.statIcon} style={{ color: stat.color }}>
                                <stat.icon size={24} />
                            </div>
                            <span className={styles.statLabel}>System Total</span>
                        </div>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statName}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className={styles.toolsGrid}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Content Management</h2>
                    <p className={styles.cardDesc}>Build and refine your data-driven curriculum.</p>
                    <div className={styles.linkList}>
                        <Link href="/admin/paths" className={styles.linkItem}>
                            <span className={styles.linkText}>Career Path Auditor</span>
                            <ArrowRight size={18} className={styles.linkIcon} />
                        </Link>
                        <Link href="/admin/paths" className={styles.linkItem}>
                            <span className={styles.linkText}>Module & Skill Viewer</span>
                            <ArrowRight size={18} className={styles.linkIcon} />
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Simulation & Control</h2>
                    <p className={styles.cardDesc}>Test user flows and manage permissions.</p>
                    <div className={styles.linkList}>
                        <Link href="/dashboard" className={`${styles.linkItem} ${styles.linkItemPrimary}`}>
                            <div className={styles.linkContent}>
                                <span className={styles.linkTextPrimary}>Launch User Dashboard</span>
                                <span className={styles.linkSubtext}>Enable Admin Mode to bypass student locks</span>
                            </div>
                            <ArrowRight size={18} className={styles.linkIconPrimary} />
                        </Link>
                        <Link href="/admin/users" className={styles.linkItem}>
                            <div className={styles.linkRow}>
                                <span className={styles.linkText}>User Role Management</span>
                                {!isSuper && <Shield size={14} className={styles.restrictedIcon} title="Limited Access" />}
                            </div>
                            <ArrowRight size={18} className={styles.linkIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
