import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { updateUserRole, promoteToAdminByEmail } from "@/actions/admin";
import { auth } from "@/auth";
import {
    User,
    Mail,
    Shield,
    Lock,
    UserPlus,
    Activity,
    Flame
} from "lucide-react";
import styles from "./users.module.css";
import { Button } from "@/components/ui/Button";
import { DeleteUserButton } from "./DeleteUserButton";

function formatRelativeTime(date: Date | null) {
    if (!date) return "Never";
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
}

export default async function AdminUsersPage() {
    const session = await auth();
    const isSuperAdmin = session?.user?.role === "SUPER_ADMIN";

    const users = await db.user.findMany({
        include: {
            enrollments: {
                where: { status: "ACTIVE" },
                include: {
                    careerPath: {
                        select: { title: true }
                    },
                    currentLevel: {
                        select: { order: true }
                    }
                },
                take: 1
            }
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>User Management</h1>
                <p className={styles.subtitle}>Manage user permissions and account status.</p>
            </div>

            {isSuperAdmin && (
                <div className={styles.promotionCard}>
                    <div className={styles.promoHeader}>
                        <UserPlus size={20} className={styles.promoIcon} />
                        <h3>Manual Admin Assignment</h3>
                    </div>
                    <p className={styles.promoDesc}>Enter a user's Gmail address to grant them Administrative privileges.</p>
                    <form className={styles.promoForm} action={async (formData) => {
                        "use server";
                        const email = formData.get("email") as string;
                        if (email) await promoteToAdminByEmail(email);
                    }}>
                        <input
                            name="email"
                            type="email"
                            placeholder="user@gmail.com"
                            className={styles.promoInput}
                            required
                        />
                        <Button type="submit" variant="primary">
                            Assign Admin Role
                        </Button>
                    </form>
                </div>
            )}

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Active Path</th>
                            <th>Activity</th>
                            <th>Role</th>
                            {isSuperAdmin && <th style={{ textAlign: 'right' }}>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            const activeEnrollment = user.enrollments[0];
                            return (
                                <tr key={user.id}>
                                    <td>
                                        <div className={styles.userCell}>
                                            <div className={styles.avatar}>
                                                <User className={styles.avatarIcon} />
                                            </div>
                                            <div>
                                                <div className={styles.userName}>{user.name || "Anonymous"}</div>
                                                <div className={styles.userEmail}>
                                                    <Mail className={styles.emailIcon} />
                                                    {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {activeEnrollment ? (
                                            <div className={styles.pathInfo}>
                                                <div className={styles.pathTitle}>{activeEnrollment.careerPath.title}</div>
                                                <div className={styles.levelBadge}>Level {activeEnrollment.currentLevel?.order || 1}</div>
                                            </div>
                                        ) : (
                                            <span className={styles.noPath}>No active path</span>
                                        )}
                                    </td>
                                    <td>
                                        <div className={styles.activityInfo}>
                                            <div className={styles.relativeTime}>
                                                {formatRelativeTime(user.lastActivityAt)}
                                            </div>
                                            {user.streakCount > 0 && (
                                                <div className={styles.streak}>
                                                    <Flame className={styles.streakIcon} />
                                                    <span>{user.streakCount} day streak</span>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.roleBadge} ${user.role === "SUPER_ADMIN" ? styles.roleSuperAdmin :
                                            user.role === "ADMIN" ? styles.roleAdmin :
                                                styles.roleUser
                                            }`}>
                                            <Shield className={styles.roleIcon} />
                                            {user.role}
                                        </span>
                                    </td>
                                    {isSuperAdmin && (
                                        <td>
                                            <div className={styles.actions}>
                                                {user.role !== "SUPER_ADMIN" && (
                                                    <form action={async () => {
                                                        "use server";
                                                        const nextRole = user.role === "USER" ? "ADMIN" : "USER";
                                                        await updateUserRole(user.id, nextRole as UserRole);
                                                    }}>
                                                        <button className={`${styles.actionBtn} ${styles.actionBtnRole}`} title="Toggle Admin Role">
                                                            <Shield className={styles.actionIcon} />
                                                        </button>
                                                    </form>
                                                )}
                                                {user.role !== "SUPER_ADMIN" && (
                                                    <DeleteUserButton
                                                        userId={user.id}
                                                        userName={user.name || user.email || "this user"}
                                                    />
                                                )}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
