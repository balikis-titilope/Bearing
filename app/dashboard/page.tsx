import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Compass } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { Suspense } from "react";
import { auth } from "@/auth";
import { DashboardContent } from "./DashboardContent";
import styles from './page.module.css';

export default async function Dashboard() {
  const session = await auth();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Suspense fallback={<div className="container p-8">Loading dashboard...</div>}>
          <ProtectedRoute
            session={session}
            fallback={
              <div className="container">
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
              </div>
            }
          >
            <DashboardContent />
          </ProtectedRoute>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}