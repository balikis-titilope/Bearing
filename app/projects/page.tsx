import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Folder } from 'lucide-react';
import { AuthCard } from "@/components/auth/AuthCard";
import { auth } from "@/auth";
import { ProjectsContent } from "./ProjectsContent";
import styles from './page.module.css';

export default async function Projects() {
  const session = await auth();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <ProtectedRoute
          session={session}
          fallback={
            <div className="container">
              <AuthCard
                title="Authentication Required"
                description="Please log in to access your projects."
                backHref="/login"
                backLabel="Go to Login"
              >
                <div className={styles.authRequired}>
                  <Folder size={48} className={styles.authIcon} />
                </div>
              </AuthCard>
            </div>
          }
        >
          <ProjectsContent />
        </ProtectedRoute>
      </main>
      <Footer />
    </>
  );
}