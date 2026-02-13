"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useSession } from "next-auth/react";
import { Compass, User, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from './page.module.css';

function DashboardContent() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Welcome Section */}
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>
              Welcome back, {session?.user?.name?.split(' ')[0]}!
            </h1>
            <p className={styles.subtitle}>
              Continue your learning journey and track your progress.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <Card className={styles.statCard}>
              <div className={styles.statHeader}>
                <Compass className={styles.statIcon} />
                <span className={styles.statNumber}>0</span>
              </div>
              <h3 className={styles.statLabel}>Active Paths</h3>
            </Card>

            <Card className={styles.statCard}>
              <div className={styles.statHeader}>
                <Clock className={styles.statIcon} />
                <span className={styles.statNumber}>0</span>
              </div>
              <h3 className={styles.statLabel}>Hours Learned</h3>
            </Card>

            <Card className={styles.statCard}>
              <div className={styles.statHeader}>
                <CheckCircle className={styles.statIcon} />
                <span className={styles.statNumber}>0</span>
              </div>
              <h3 className={styles.statLabel}>Completed</h3>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className={styles.activityCard}>
            <h2 className={styles.sectionTitle}>Recent Activity</h2>
            <div className={styles.emptyState}>
              <User className={styles.emptyIcon} />
              <p className={styles.emptyText}>
                No recent activity yet. Start your learning journey!
              </p>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to start your career journey?
              </h2>
              <p className={styles.ctaSubtitle}>
                Explore our curated learning paths and take the first step toward your dream career.
              </p>
              <a href="/paths" className={styles.ctaButton}>
                Explore Career Paths
              </a>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute fallback={
      <div className={styles.authRequired}>
        <Compass size={48} />
        <h2>Authentication Required</h2>
        <p>Please log in to access your dashboard.</p>
        <Button onClick={() => window.location.href = '/login'}>
          Go to Login
        </Button>
      </div>
    }>
      <DashboardContent />
    </ProtectedRoute>
  );
}