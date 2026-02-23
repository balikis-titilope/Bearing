"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Users,
    Layers,
    BarChart3
} from "lucide-react";
import styles from "@/app/(admin)/admin/layout.module.css";

export function SidebarNav() {
    const pathname = usePathname();

    const navItems = [
        {
            href: "/admin",
            label: "Overview",
            icon: BarChart3,
            exact: true
        },
        {
            href: "/admin/users",
            label: "Users",
            icon: Users
        },
        {
            href: "/admin/paths",
            label: "Career Paths",
            icon: Layers
        }
    ];

    return (
        <nav className={styles.sidebarNav}>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.href) && (item.href !== "/admin" || pathname === "/admin");

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    >
                        <Icon className={styles.navIcon} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
