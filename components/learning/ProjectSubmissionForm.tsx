'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, GitBranch, ArrowLeft, ExternalLink } from 'lucide-react';
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

  let requirements: string[] = [];
  try {
    requirements = project.requirements ? JSON.parse(project.requirements) : [];
  } catch (e) {
    requirements = [];
  }

  // Show submission status if exists
  if (submission && submission.status !== 'NOT_STARTED' && submission.status !== 'IN_PROGRESS') {
    return (
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
            {enrollment.careerPath.title}
          </Link>
          <span>/</span>
          <span>Project</span>
        </div>

        <div className={styles.statusCard}>
          <div 
            className={styles.statusIcon}
            style={{ 
              background: submission.status === 'PASSED' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
              color: submission.status === 'PASSED' ? '#22c55e' : '#f59e0b'
            }}
          >
            {submission.status === 'PASSED' ? <CheckCircle size={32} /> : <Clock size={32} />}
          </div>
          
          <h2>
            {submission.status === 'PASSED' && 'Project Passed!'}
            {submission.status === 'SUBMITTED' && 'Under Review'}
            {submission.status === 'FAILED' && 'Project Needs Revision'}
          </h2>
          
          <p>
            {submission.status === 'PASSED' && 'Congratulations! You have successfully completed this level.'}
            {submission.status === 'SUBMITTED' && 'Your project is being reviewed. Check back soon!'}
            {submission.status === 'FAILED' && submission.feedback || 'Please address the feedback and resubmit.'}
          </p>

          <div className={styles.submissionDetails}>
            <p>
              <span>GitHub URL</span>
              <a href={submission.githubUrl} target="_blank" rel="noopener noreferrer">
                {submission.githubUrl} <ExternalLink size={14} />
              </a>
            </p>
            {submission.deployedUrl && (
              <p>
                <span>Deployed URL</span>
                <a href={submission.deployedUrl} target="_blank" rel="noopener noreferrer">
                  {submission.deployedUrl} <ExternalLink size={14} />
                </a>
              </p>
            )}
            <p>
              <span>Submitted</span>
              <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
            </p>
            {submission.score && (
              <p>
                <span>Score</span>
                <span>{submission.score}%</span>
              </p>
            )}
          </div>

          {submission.status !== 'PASSED' && (
            <Button 
              variant="primary"
              onClick={() => window.location.reload()}
            >
              Update Submission
            </Button>
          )}

          {submission.status === 'PASSED' && (
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
