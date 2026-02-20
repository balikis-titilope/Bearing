import { db } from "@/lib/db";
import {
    Layers,
    Eye,
    EyeOff,
    Plus,
    ArrowRight,
    MoreVertical
} from "lucide-react";
import styles from "./page.module.css";

export default async function AdminPathsPage() {
    const paths = await db.careerPath.findMany({
        include: {
            _count: {
                select: { levels: true, enrollments: true }
            }
        },
        orderBy: { title: "asc" }
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Career Paths</h1>
                    <p className={styles.subtitle}>Review and publish your learning curriculum.</p>
                </div>
                <button className={styles.createBtn}>
                    <Plus size={16} />
                    Create New Path
                </button>
            </div>

            <div className={styles.grid}>
                {paths.map((path) => (
                    <div key={path.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconWrapper}>
                                    <Layers size={24} />
                                </div>
                                <div className={`${styles.badge} ${path.isPublished ? styles.badgePublished : styles.badgeDraft}`}>
                                    {path.isPublished ? "Published" : "Draft"}
                                </div>
                            </div>

                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardTitle}>{path.title}</h3>
                                <p className={styles.cardDesc}>{path.description}</p>
                            </div>

                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>{path._count.levels}</div>
                                    <div className={styles.statLabel}>Levels</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>{path._count.enrollments}</div>
                                    <div className={styles.statLabel}>Students</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <button className={styles.footerBtn}>
                                {path.isPublished ? <EyeOff size={16} /> : <Eye size={16} />}
                                {path.isPublished ? "Unpublish" : "Publish Now"}
                            </button>
                            <button className={styles.moreBtn}>
                                <MoreVertical size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {paths.length === 0 && (
                <div className={styles.emptyState}>
                    <Layers size={48} className={styles.emptyIcon} />
                    <h3 className={styles.emptyTitle}>No Paths Found</h3>
                    <p className={styles.emptyDesc}>Time to create your first learning curriculum.</p>
                </div>
            )}
        </div>
    );
}
