"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useSession } from "next-auth/react";
import { Compass, User, Clock, CheckCircle, BookOpen, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuthCard } from "@/components/auth/AuthCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from './page.module.css';

interface Enrollment {
  id: string;
  status: string;
  careerPath: {
    id: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
  };
}

function DashboardContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  const isNewUser = searchParams.get('newuser') === 'true';

  useEffect(() => {
    if (session?.user?.id) {
      fetch('/api/enrollment')
        .then(res => res.json())
        .then(data => {
          setEnrollments(data.enrollments || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [session]);

  // Show welcome message for new OAuth users
  if (isNewUser && session?.user) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <div className="container">
            <Card className={styles.welcomeCard}>
              <div className={styles.welcomeContent}>
                <h1>Welcome! Complete Your Registration</h1>
                <p>You&apos;ve signed in with Google. Please complete your profile to get started.</p>
                <Link href="/register">
                  <Button variant="primary" size="lg">Complete Registration</Button>
                </Link>
              </div>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const completedCount = enrollments.filter(e => e.status === 'COMPLETED').length;
  const isServerAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Welcome Section */}
          <div className={styles.welcomeSection}>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h1 className={styles.title}>
                  Welcome back, {session?.user?.name?.split(' ')[0]}!
                </h1>
                <p className={styles.subtitle}>
                  Continue your learning journey and track your progress.
                </p>
              </div>
              {isServerAdmin && (
                <Link href="/admin" className="no-underline">
                  <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white border-none">
                    <ShieldAlert size={18} />
                    <span>Open Admin Hub</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Admin Context Card */}
          {isServerAdmin && (
            <Card className={`${styles.activityCard} mb-8 border-indigo-200 dark:border-indigo-900 bg-indigo-50/30 dark:bg-indigo-950/20`}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                  <ShieldAlert className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Administrator Access</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    You are logged in as a {session.user.role}. You can manage users, paths, and platform content.
                  </p>
                </div>
                <Link href="/admin" className="ml-auto no-underline">
                  <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600 hover:bg-indigo-100">
                    Go to Admin Hub
                  </Button>
                </Link>
              </div>
            </Card>
          )}

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <Card className={styles.statCard}>
              <div className={styles.statHeader}>
                <Compass className={styles.statIcon} />
                <span className={styles.statNumber}>{enrollments.length}</span>
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
                <span className={styles.statNumber}>{completedCount}</span>
              </div>
              <h3 className={styles.statLabel}>Completed</h3>
            </Card>
          </div>

          {/* Enrolled Paths */}
          {loading ? (
            <Card className={styles.activityCard}>
              <p>Loading...</p>
            </Card>
          ) : enrollments.length > 0 ? (
            <Card className={styles.activityCard}>
              <h2 className={styles.sectionTitle}>Your Active Paths</h2>
              <div className={styles.enrolledPaths}>
                {enrollments.map((enrollment) => (
                  <Link
                    key={enrollment.id}
                    href={`/paths/${enrollment.careerPath.slug}/learn`}
                    className={styles.enrolledPathCard}
                  >
                    <BookOpen size={20} className={styles.pathIcon} />
                    <div className={styles.pathInfo}>
                      <h3>{enrollment.careerPath.title}</h3>
                      <p>{enrollment.careerPath.description}</p>
                    </div>
                    <span className={styles.pathStatus}>
                      {enrollment.status === 'COMPLETED' ? 'Completed' : 'In Progress'}
                    </span>
                  </Link>
                ))}
              </div>
            </Card>
          ) : (
            /* Call to Action when no enrollments */
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
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute fallback={
      <AuthCard
        title="Authentication Required"
        description="Please log in to access your dashboard."
        backHref="/login"
        backLabel="Go to Login"
      >
        <div className={styles.authRequired}>
          <Compass size={48} className={styles.authIcon} />
        </div>
      </AuthCard>
    }>
      <DashboardContent />
    </ProtectedRoute>
  );
}