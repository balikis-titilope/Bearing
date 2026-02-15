import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { updateUserRole, deleteUser } from "@/actions/admin";
import { auth } from "@/auth";
import {
    User,
    Mail,
    Shield,
    Trash2,
    Lock
} from "lucide-react";
import styles from "./users.module.css";

export default async function AdminUsersPage() {
    const session = await auth();
    const isSuperAdmin = session?.user?.role === "SUPER_ADMIN";

    const users = await db.user.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>User Management</h1>
                <p className={styles.subtitle}>Manage user permissions and account status.</p>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Joined</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
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
                                    <span className={`${styles.roleBadge} ${user.role === "SUPER_ADMIN" ? styles.roleSuperAdmin :
                                            user.role === "ADMIN" ? styles.roleAdmin :
                                                styles.roleUser
                                        }`}>
                                        <Shield className={styles.roleIcon} />
                                        {user.role}
                                    </span>
                                </td>
                                <td className={styles.date}>
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        {isSuperAdmin ? (
                                            <>
                                                <form action={async () => {
                                                    "use server";
                                                    const nextRole = user.role === "USER" ? "ADMIN" : "USER";
                                                    await updateUserRole(user.id, nextRole as UserRole);
                                                }}>
                                                    <button className={`${styles.actionBtn} ${styles.actionBtnRole}`} title="Toggle Admin Role">
                                                        <Shield className={styles.actionIcon} />
                                                    </button>
                                                </form>
                                                <form action={async () => {
                                                    "use server";
                                                    await deleteUser(user.id);
                                                }}>
                                                    <button className={`${styles.actionBtn} ${styles.actionBtnDelete}`} title="Delete User">
                                                        <Trash2 className={styles.actionIcon} />
                                                    </button>
                                                </form>
                                            </>
                                        ) : (
                                            <div className={styles.readOnly} title="Super Admin access required for modifications">
                                                <Lock className={styles.lockIcon} />
                                                <span>Read Only</span>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
