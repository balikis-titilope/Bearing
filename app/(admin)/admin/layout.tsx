import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
    Users,
    Layers,
    BarChart3,
    ExternalLink,
    ShieldCheck
} from "lucide-react";
import styles from "./layout.module.css";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session || session.user.role !== "SUPER_ADMIN") {
        redirect("/");
    }

    return (
        <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <ShieldCheck className={styles.logoIcon} />
                    <span className={styles.logoText}>Admin Hub</span>
                </div>
                <nav className={styles.sidebarNav}>
                    <Link
                        href="/admin"
                        className={styles.navLink}
                    >
                        <BarChart3 className={styles.navIcon} />
                        <span>Overview</span>
                    </Link>
                    <Link
                        href="/admin/users"
                        className={styles.navLink}
                    >
                        <Users className={styles.navIcon} />
                        <span>Users</span>
                    </Link>
                    <Link
                        href="/admin/paths"
                        className={styles.navLink}
                    >
                        <Layers className={styles.navIcon} />
                        <span>Career Paths</span>
                    </Link>
                </nav>
                <div className={styles.sidebarFooter}>
                    <Link
                        href="/"
                        className={styles.backLink}
                    >
                        <ExternalLink className={styles.navIcon} />
                        <span>Back to Site</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
