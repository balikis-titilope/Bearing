import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/Button';
import { Brain } from 'lucide-react';
import { auth } from "@/auth";
import { AssessmentContent } from "./AssessmentContent";
import styles from './page.module.css';

export default async function Assessment() {
  const session = await auth();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <ProtectedRoute
          session={session}
          fallback={
            <div className="container">
              <div className={styles.authRequired}>
                <Brain size={48} />
                <h2>Authentication Required</h2>
                <p>Please log in to take the career assessment.</p>
                <Button onClick={() => window.location.href = '/login'}>
                  Go to Login
                </Button>
              </div>
            </div>
          }
        >
          <AssessmentContent />
        </ProtectedRoute>
      </main>
      <Footer />
    </>
  );
}