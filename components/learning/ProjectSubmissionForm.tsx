'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, GitBranch, ArrowLeft, ExternalLink, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './ProjectSubmissionForm.module.css';

interface ProjectSubmissionFormProps {
  project: any;
  enrollment: any;
  submission: any;
}

export function ProjectSubmissionForm({ project, enrollment, submission }: ProjectSubmissionFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [githubUrl, setGithubUrl] = useState(submission?.githubUrl || '');
  const [deployedUrl, setDeployedUrl] = useState(submission?.deployedUrl || '');
  const [notes, setNotes] = useState(submission?.notes || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/project/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId: enrollment.id,
          projectId: project.id,
          githubUrl,
          deployedUrl,
          notes,
        }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to submit project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const safeParse = (data: any, fallback: any = []) => {
    if (!data) return fallback;
    try {
      let parsed = typeof data === 'string' ? JSON.parse(data) : data;
      while (typeof parsed === 'string') {
        try {
          const next = JSON.parse(parsed);
          if (next === parsed) break;
          parsed = next;
        } catch {
          break;
        }
      }
      return Array.isArray(parsed) ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  };

  const requirements = safeParse(project.requirements);

  // Show submission status if exists
  if (submission && submission.status !== 'NOT_STARTED' && submission.status !== 'IN_PROGRESS') {
    const isPassed = submission.status === 'PASSED';
    const isFailed = submission.status === 'FAILED';

    return (
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
            {enrollment.careerPath.title}
          </Link>
          <span>/</span>
          <span>Project Evaluation</span>
        </div>

        <div className={`${styles.statusCard} ${isPassed ? styles.passed : ''} ${isFailed ? styles.failed : ''}`}>
          <div
            className={styles.statusIcon}
            style={{
              background: isPassed ? 'rgba(34, 197, 94, 0.1)' : isFailed ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
              color: isPassed ? '#22c55e' : isFailed ? '#ef4444' : '#f59e0b'
            }}
          >
            {isPassed ? <CheckCircle size={40} /> : isFailed ? <XCircle size={40} /> : <Clock size={40} />}
          </div>

          <h2>
            {isPassed && 'Project Passed!'}
            {submission.status === 'SUBMITTED' && 'Evaluation in Progress'}
            {isFailed && 'Evaluation Failed'}
          </h2>

          <p className={styles.statusDescription}>
            {isPassed && 'Excellent work! Your submission has been automatically verified against all requirements.'}
            {submission.status === 'SUBMITTED' && 'Our automated system is analyzing your repository. Please wait...'}
            {isFailed && 'Your project did not meet all the required criteria. Review the feedback below and try again.'}
          </p>

          {(submission.feedback || submission.score) && (
            <div className={styles.feedbackSection}>
              <div className={styles.scoreHeader}>
                <span className={styles.scoreLabel}>Automation Score</span>
                <span className={styles.scoreValue}>{submission.score || 0}%</span>
              </div>
              {submission.feedback && (
                <div className={styles.feedbackContent}>
                  <h4>Report Details:</h4>
                  <ul>
                    {submission.feedback.split('\n').map((line: string, i: number) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className={styles.submissionDetails}>
            <p>
              <span>GitHub URL</span>
              <a href={submission.githubUrl} target="_blank" rel="noopener noreferrer">
                {submission.githubUrl} <ExternalLink size={14} />
              </a>
            </p>
            {submission.score && (
              <p>
                <span>Final Verification Score</span>
                <span>{submission.score}%</span>
              </p>
            )}
            <p>
              <span>Evaluation Date</span>
              <span>{new Date(submission.submittedAt).toLocaleString()}</span>
            </p>
          </div>

          {!isPassed && (
            <div className={styles.retryActions}>
              <Button
                variant="primary"
                onClick={() => window.location.reload()}
              >
                Retry Evaluation
              </Button>
            </div>
          )}

          {isPassed && (
            <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
              <Button variant="primary">
                Continue to Next Level
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
          {enrollment.careerPath.title}
        </Link>
        <span>/</span>
        <span>Project</span>
      </div>

      <div className={styles.header}>
        <div className={styles.badge}>Final Project</div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Requirements</h2>
          <ul className={styles.requirementsList}>
            {requirements.map((req: string, i: number) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Submit Your Project</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="github">GitHub Repository URL *</label>
              <input
                id="github"
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/project"
                required
              />
              <span className={styles.hint}>Make sure your repository is public</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="deployed">Deployed URL (optional)</label>
              <input
                id="deployed"
                type="url"
                value={deployedUrl}
                onChange={(e) => setDeployedUrl(e.target.value)}
                placeholder="https://your-project.vercel.app"
              />
              <span className={styles.hint}>Deploy to Vercel, Netlify, or GitHub Pages</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes">Notes (optional)</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional notes about your implementation..."
              />
            </div>

            <div className={styles.actions}>
              <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
                <Button variant="outline" type="button">
                  <ArrowLeft size={16} />
                  Back
                </Button>
              </Link>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Project'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
