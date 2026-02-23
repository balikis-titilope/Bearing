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
import { SidebarNav } from "@/components/admin/SidebarNav";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session || (session.user.role !== "ADMIN" && session.user.role !== "SUPER_ADMIN")) {
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

                <SidebarNav />

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
