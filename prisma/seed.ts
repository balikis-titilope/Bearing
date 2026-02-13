import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Clear existing data in correct dependency order
  await prisma.projectSubmission.deleteMany()
  await prisma.skillProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.userProgress.deleteMany()

  await prisma.project.deleteMany()
  await prisma.skill.deleteMany()

  await prisma.level.deleteMany()
  await prisma.assessmentQuestion.deleteMany()
  await prisma.assessment.deleteMany()

  await prisma.learningSubtopic.deleteMany()
  await prisma.learningStep.deleteMany()
  await prisma.responsibility.deleteMany()

  await prisma.careerPath.deleteMany()

  console.log('Database cleared.')

  // Helper for generating skills
  const createLevel = async (pathId: string, levelId: string, title: string, order: number, skills: any[]) => {
    return prisma.level.create({
      data: {
        id: levelId,
        title,
        shortTitle: order === 1 ? 'Junior' : order === 2 ? 'Mid' : order === 3 ? 'Senior' : 'Staff',
        description: `Professional level ${order} mastery.`,
        order,
        careerPathId: pathId,
        skills: {
          create: skills.map((s, i) => ({
            id: `${levelId}-s${i + 1}`,
            title: s.title,
            description: s.description,
            order: i + 1,
          })),
        },
      },
    })
  }

  // ==========================================
  // PATH 1: FRONTEND DEVELOPER
  // ==========================================
  const frontendPath = await prisma.careerPath.create({
    data: { slug: 'frontend-developer', title: 'Frontend Developer', description: 'Master UI engineering at scale.', icon: 'Code', isPublished: true },
  })
  await createLevel(frontendPath.id, 'fe-l1', 'Junior Frontend Engineer', 1, [
    { title: 'Semantic HTML & A11y', description: 'Screen readers and ARIA roles.' },
    { title: 'CSS Layouts (Grid/Flex)', description: 'Modern responsive architecture.' },
    { title: 'JavaScript (ES6+)', description: 'Closures, promises, and async flow.' },
    { title: 'Browser Rendering & DOM', description: 'Critical rendering path and painting.' },
    { title: 'Web APIs (Fetch/Storage)', description: 'Interacting with the browser.' },
    { title: 'Debugging Methods', description: 'Chrome DevTools and profiling.' },
    { title: 'Git & Version Control', description: 'PR workflows and branching.' },
    { title: 'Core Accessibility Principles', description: 'WCAG 2.1 AA compliance.' },
  ])
  await createLevel(frontendPath.id, 'fe-l2', 'Mid-Level Frontend Engineer', 2, [
    { title: 'TypeScript Strict Mode', description: 'Type safety and generics.' },
    { title: 'React Hooks & Patterns', description: 'Compound components and custom hooks.' },
    { title: 'State Management (Zustand)', description: 'Predictable state machines.' },
    { title: 'Testing (Jest & RTL)', description: 'Component-centric testing.' },
    { title: 'Modern CSS (Tailwind)', description: 'Utility-first styling systems.' },
    { title: 'Tooling & Bundlers (Vite)', description: 'Module resolution and build optimization.' },
    { title: 'Performance Fundamentals', description: 'LCP and CLS optimization.' },
    { title: 'API Integration (REST/GraphQL)', description: 'Typed data fetching.' },
  ])
  await createLevel(frontendPath.id, 'fe-l3', 'Senior Frontend Engineer', 3, [
    { title: 'Next.js & RSC Mastery', description: 'Server-side rendering and streaming.' },
    { title: 'Advanced TS (Utility Types)', description: 'Complex type abstractions.' },
    { title: 'Auth Architecture (Auth.js)', description: 'Secure session management.' },
    { title: 'Performance Engineering', description: 'Bundle analysis and INP.' },
    { title: 'Hydration & Interactivity', description: 'Optimizing the bridge to client.' },
    { title: 'Frontend Security', description: 'XSS, CSRF, and CSP.' },
    { title: 'CI/CD Pipelines for Web', description: 'Automated deployment and Vercel.' },
    { title: 'Monitoring & Error Tracking', description: 'Sentry and RUM data.' },
  ])
  await createLevel(frontendPath.id, 'fe-l4', 'Staff Frontend Engineer', 4, [
    { title: 'Enterprise Design Systems', description: 'Scalable tokens and components.' },
    { title: 'Micro-Frontends Architecture', description: 'Domain-driven frontend design.' },
    { title: 'Technical Leadership', description: 'RFCs and mentorship.' },
    { title: 'PWA & Offline-First', description: 'Service workers and caching.' },
    { title: 'Architecture Patterns', description: 'Clean architecture in JS.' },
    { title: 'Performance Budgets', description: 'Enforcing speed at scale.' },
    { title: 'Infrastructure for Frontend', description: 'Edge functions and middleware.' },
    { title: 'Strategic Technical Debt', description: 'Managing legacy and modernization.' },
  ])

  // ==========================================
  // PATH 2: BACKEND DEVELOPER
  // ==========================================
  const backendPath = await prisma.careerPath.create({
    data: { slug: 'backend-developer', title: 'Backend Developer', description: 'Architect resilient systems.', icon: 'Database', isPublished: true },
  })
  await createLevel(backendPath.id, 'be-l1', 'Junior Backend Engineer', 1, [
    { title: 'Node.js Core Foundations', description: 'Event loop and modules.' },
    { title: 'Express & Middleware', description: 'Routing and request flow.' },
    { title: 'SQL Fundamentals', description: 'Joins, indexes, and queries.' },
    { title: 'REST API Design', description: 'Resource-driven architecture.' },
    { title: 'Authentication Basics', description: 'JWT and password hashing.' },
    { title: 'Error Handling Patterns', description: 'Structured response logic.' },
    { title: 'Data Validaton (Zod)', description: 'Runtime type checking.' },
    { title: 'Logging Fundamentals', description: 'Winston/Pino structured logs.' },
  ])
  await createLevel(backendPath.id, 'be-l2', 'Mid-Level Backend Engineer', 2, [
    { title: 'PostgreSQL Internals', description: 'Transactions and ACID.' },
    { title: 'Redis & Caching', description: 'Invalidation and distributed cache.' },
    { title: 'TypeScript for Backend', description: 'Type-safe controllers and prisma.' },
    { title: 'Integration Testing', description: 'Supertest and DB mocking.' },
    { title: 'API Versioning', description: 'Maintaining legacy support.' },
    { title: 'Security Best Practices', description: 'CORS, Rate Limiting, and SQLi.' },
    { title: 'Queue Services (BullMQ)', description: 'Asynchronous task processing.' },
    { title: 'Docker Containerization', description: 'Building and layering images.' },
  ])
  await createLevel(backendPath.id, 'be-l3', 'Senior Backend Engineer', 3, [
    { title: 'Microservices Design', description: 'Isolation and communication.' },
    { title: 'Message Brokers (Kafka)', description: 'Pub/sub and event-driven.' },
    { title: 'gRPC & Protobuf', description: 'High-perf inter-service calls.' },
    { title: 'Distributed Tracing', description: 'OpenTelemetry and observability.' },
    { title: 'OAuth2 & OIDC', description: 'Identity provider integration.' },
    { title: 'Performance Tuning', description: 'Profiling and bottleneck removal.' },
    { title: 'Kubernetes Foundations', description: 'Pods, services, and deployments.' },
    { title: 'Database Optimization', description: 'Vacuuming, bloat, and partitioning.' },
  ])
  await createLevel(backendPath.id, 'be-l4', 'Staff Backend Engineer', 4, [
    { title: 'High-Level System Design', description: 'CAP theorem and sharding.' },
    { title: 'Scalability Patterns', description: 'Multi-region and global scale.' },
    { title: 'Infrastructure as Code', description: 'Terraform and orchestration.' },
    { title: 'Distributed Sagas', description: 'Consistency across services.' },
    { title: 'Cost Optimization', description: 'Optimizing cloud spend.' },
    { title: 'Platform Engineering', description: 'Internal developer portals.' },
    { title: 'Security Auditing', description: 'Compliance and deep security.' },
    { title: 'Tech Strategy & Vision', description: 'Leading engineering roadmaps.' },
  ])

  // ==========================================
  // PATH 3: FULL STACK DEVELOPER
  // ==========================================
  const fullstackPath = await prisma.careerPath.create({
    data: { slug: 'full-stack-developer', title: 'Full Stack Developer', description: 'The complete digital architect.', icon: 'Layers', isPublished: true },
  })
  await createLevel(fullstackPath.id, 'fs-l1', 'Junior Full Stack Engineer', 1, [
    { title: 'Web Foundations & A11y', description: 'HTML5, CSS3, and accessibility core.' },
    { title: 'JS Fundamentals (Node & Browser)', description: 'Shared language patterns.' },
    { title: 'Database Basics (SQL)', description: 'Schema design and CRUD logic.' },
    { title: 'Git & Collaborative Workflow', description: 'Team-based version control.' },
    { title: 'CSS Frameworks (Tailwind)', description: 'Rapid UI development pipelines.' },
    { title: 'API Client Development', description: 'Consuming RESTful services.' },
    { title: 'Debugging the Stack', description: 'E2E debugging tools.' },
    { title: 'Technical Documentation', description: 'Writing clear READMEs and specs.' },
  ])
  await createLevel(fullstackPath.id, 'fs-l2', 'Mid-Level Full Stack Engineer', 2, [
    { title: 'Next.js & Full-stack Frameworks', description: 'App router and server actions.' },
    { title: 'Full Stack TypeScript', description: 'Shared types between layers.' },
    { title: 'Prisma & ORM Mastery', description: 'Complex relations and migrations.' },
    { title: 'State & Cache Management', description: 'Zustand and React Query.' },
    { title: 'Integration Testing (E2E)', description: 'Playwright and stack-level tests.' },
    { title: 'User Authentication (NextAuth)', description: 'Implementing secure sessions.' },
    { title: 'Basic Infrastructure', description: 'Deployment to Vercel/Docker.' },
    { title: 'API Performance Basics', description: 'Rate limiting and query timing.' },
  ])
  await createLevel(fullstackPath.id, 'fs-l3', 'Senior Full Stack Engineer', 3, [
    { title: 'Real-time UI & WebSockets', description: 'Interactive, persistent data streams.' },
    { title: 'Adv. Database Engineering', description: 'Indexing and transaction integrity.' },
    { title: 'E2E Security Patterns', description: 'Protecting UI and Database.' },
    { title: 'CI/CD & Deployment Strategy', description: 'Automated release pipelines.' },
    { title: 'Performance Optimization', description: 'Full-stack profiling and Vitally.' },
    { title: 'Micro-services & Gateways', description: 'Splitting the monolith.' },
    { title: 'Cloud Data Storage', description: 'S3, Row-level security, and Buckets.' },
    { title: 'Monitoring & Observability', description: 'Logging and telemetry at scale.' },
  ])
  await createLevel(fullstackPath.id, 'fs-l4', 'Staff Full Stack Engineer', 4, [
    { title: 'Enterprise System Design', description: 'Architecture for millions of users.' },
    { title: 'Multi-tenant Architectures', description: 'Privacy and scale in SaaS.' },
    { title: 'Technical Leadership', description: 'Leading cross-stack engineering.' },
    { title: 'Strategic Capacity Planning', description: 'Managing growth and resources.' },
    { title: 'Incident Response Culture', description: 'Post-mortems and reliability.' },
    { title: 'SRE Foundations for Fullstack', description: 'SLIs, SLOs, and error budgets.' },
    { title: 'Cloud FinOps Strategy', description: 'Optimizing the full-stack cost.' },
    { title: 'Legacy Modernization', description: 'Safe migration of core systems.' },
  ])

  // ==========================================
  // PATH 4: DATA ANALYST
  // ==========================================
  const dataPath = await prisma.careerPath.create({
    data: { slug: 'data-analyst', title: 'Data Analyst', description: 'Turn data into strategy.', icon: 'PieChart', isPublished: true },
  })
  await createLevel(dataPath.id, 'da-l1', 'Junior Data Analyst', 1, [
    { title: 'SQL Fundamentals', description: 'Data querying and basic analysis.' },
    { title: 'Excel Advanced Mastery', description: 'Formulas, Pivots, and VBA.' },
    { title: 'Intro to Statistics', description: 'Probability and distributions.' },
    { title: 'Data Cleaning Principles', description: 'Handling nulls and outliers.' },
    { title: 'Data Visualization Theory', description: 'Choosing the right charts.' },
    { title: 'Reporting Basics', description: 'Creating actionable summaries.' },
    { title: 'Data Ethics & Privacy', description: 'Handling sensitive information.' },
    { title: 'Business Domain Knowledge', description: 'Understanding metrics that matter.' },
  ])
  await createLevel(dataPath.id, 'da-l2', 'Data Analyst II', 2, [
    { title: 'Python for Data (Pandas)', description: 'Programmatic data manipulation.' },
    { title: 'Technical Visualization', description: 'Matplotlib and Seaborn.' },
    { title: 'Exploratory Data Analysis', description: 'Finding hidden patterns.' },
    { title: 'Jupyter & Documentation', description: 'Reproducible research flow.' },
    { title: 'Intermediate Stats', description: 'Correlations and regression.' },
    { title: 'SQL Optimization (Analytic)', description: 'Window functions and CTEs.' },
    { title: 'Data Storytelling', description: 'Presenting insights to stakeholders.' },
    { title: 'Automation Scripting', description: 'Automating reporting tasks.' },
  ])
  await createLevel(dataPath.id, 'da-l3', 'Senior Data Analyst', 3, [
    { title: 'Adv. SQL & Warehousing', description: 'Large-scale query engineering.' },
    { title: 'BI Tooling (Tableau/PB)', description: 'Enterprise-grade dashboards.' },
    { title: 'Hypothesis Testing', description: 'A/B testing and experiment design.' },
    { title: 'Data Modeling Basics', description: 'Star and Snowflake schemas.' },
    { title: 'Predictive Analytics', description: 'Forecasting and time-series.' },
    { title: 'Data Governance', description: 'Managing data quality and assets.' },
    { title: 'Stakeholder Influence', description: 'Driving strategy via data.' },
    { title: 'Advanced ETL Logic', description: 'Complex data transformations.' },
  ])
  await createLevel(dataPath.id, 'da-l4', 'Staff Data Analyst', 4, [
    { title: 'Strategic Intelligence', description: 'Long-term business forecasting.' },
    { title: 'ML for Analysts', description: 'Classification and clustering.' },
    { title: 'ETL Pipeline Automation', description: 'Managing Airflow/Prefect logs.' },
    { title: 'Org-wide Data Strategy', description: 'Standardizing data culture.' },
    { title: 'Executive Communication', description: 'Reporting to C-suite/Board.' },
    { title: 'Data ROI Analysis', description: 'Measuring impact of insights.' },
    { title: 'Strategic A/B Experimentation', description: 'Large scale product testing.' },
    { title: 'Data Leadership & Mentorship', description: 'Leading teams of analysts.' },
  ])

  // ==========================================
  // PATH 5: MOBILE DEVELOPER
  // ==========================================
  const mobilePath = await prisma.careerPath.create({
    data: { slug: 'mobile-developer', title: 'Mobile Developer', description: 'Native performance at scale.', icon: 'Smartphone', isPublished: true },
  })
  await createLevel(mobilePath.id, 'mo-l1', 'Junior Mobile Engineer', 1, [
    { title: 'React Native Primitives', description: 'View, Text, and Core components.' },
    { title: 'Flexbox for Mobile UI', description: 'Responsive mobile layouts.' },
    { title: 'Mobile Navigation', description: 'Stacks, Tabs, and Drawers.' },
    { title: 'Handling Mobile Input', description: 'Forms, Gestures, and Keyboards.' },
    { title: 'Debug Mobile Apps', description: 'Chrome Debugger and Flipper.' },
    { title: 'Git for Mobile Repos', description: 'Branching and versioning.' },
    { title: 'Styling in React Native', description: 'StyleSheet and design tokens.' },
    { title: 'Building for iOS vs Android', description: 'Platform-specific adjustments.' },
  ])
  await createLevel(mobilePath.id, 'mo-l2', 'Mid-Level Mobile Engineer', 2, [
    { title: 'TypeScript for Mobile', description: 'Strict typing and navigation types.' },
    { title: 'Adv. Navigation & Deep Links', description: 'Handling app-wide routing.' },
    { title: 'Native State Management', description: 'Zustand/Redux for mobile.' },
    { title: 'Custom UI & Reanimated', description: 'Smooth, performant animations.' },
    { title: 'Local Storage (MMKV)', description: 'High-perf on-device persistence.' },
    { title: 'Component Library Design', description: 'Reusable mobile patterns.' },
    { title: 'Handling Edge Cases', description: 'Offline states and low connectivity.' },
    { title: 'Build Tooling (Expo/EAS)', description: 'Modern mobile toolchains.' },
  ])
  await createLevel(mobilePath.id, 'mo-l3', 'Senior Mobile Engineer', 3, [
    { title: 'Native Modules & Bridging', description: 'Swift/Kotlin integration.' },
    { title: 'High-Perf List Engineering', description: '60fps list scrolling.' },
    { title: 'Performance Profiling', description: 'Finding memory leaks and lag.' },
    { title: 'Mobile CI/CD (Fastlane)', description: 'Automated store deployments.' },
    { title: 'Mobile Security', description: 'Keychain, Keystore, and Pinning.' },
    { title: 'Adv. Animation & Gestures', description: 'Interpolation and complex flows.' },
    { title: 'Push Notifications Logic', description: 'Remote and local triggers.' },
    { title: 'Mobile App Hardening', description: 'Obfuscation and integrity checks.' },
  ])
  await createLevel(mobilePath.id, 'mo-l4', 'Staff Mobile Engineer', 4, [
    { title: 'Native Core Internals', description: 'JSI, Fabric, and TurboModules.' },
    { title: 'Offline-First Architecture', description: 'Robust sync strategies.' },
    { title: 'Mobile System Design', description: 'Architecting for millions.' },
    { title: 'App Store Strategy', description: 'Compliance, ASO, and Release.' },
    { title: 'Mobile Infrastructure', description: 'Managing over-the-air updates.' },
    { title: 'Tech Leadership (Mobile)', description: 'Leading mobile orgs.' },
    { title: 'Accessibility in Mobile', description: 'VoiceOver and TalkBack mastery.' },
    { title: 'Modern Mobile Trends', description: 'Apple Vision Pro / Multi-platform.' },
  ])

  // ==========================================
  // PATH 6: DEVOPS ENGINEER
  // ==========================================
  const devopsPath = await prisma.careerPath.create({
    data: { slug: 'devops-engineer', title: 'DevOps Engineer', description: 'Platform foundations.', icon: 'Settings', isPublished: true },
  })
  await createLevel(devopsPath.id, 'do-l1', 'Junior DevOps Engineer', 1, [
    { title: 'Linux Mastery (CLI)', description: 'Kernel, files, and users.' },
    { title: 'Docker Container Basics', description: 'Building and shipping images.' },
    { title: 'Networking 101', description: 'TCP/IP, DNS, and Ports.' },
    { title: 'GitOps Foundations', description: 'Version control for infrastructure.' },
    { title: 'Bash Scripting Core', description: 'Automating manual tasks.' },
    { title: 'Cloud Console Basics', description: 'Navigating AWS/GCP/Azure.' },
    { title: 'Server Setup & Config', description: 'SSH, Firewalls, and Nginx.' },
    { title: 'Monitoring Basics', description: 'Uptime and health checks.' },
  ])
  await createLevel(devopsPath.id, 'do-l2', 'Platform Engineer I', 2, [
    { title: 'Infrastructure as Code (TF)', description: 'Terraform state and modules.' },
    { title: 'Advanced CI/CD Pipelines', description: 'GitHub Actions and gates.' },
    { title: 'Cloud Mastery (AWS/VPC)', description: 'Managing VPCs and Subnets.' },
    { title: 'Observability (ELK Stack)', description: 'Centralized logging and metrics.' },
    { title: 'Security Groups & IAM', description: 'Identity and access strategy.' },
    { title: 'Ansible & Configuration', description: 'Managing dozens of servers.' },
    { title: 'Build Automation', description: 'Optimizing CI runtimes.' },
    { title: 'Database Ops Fundamentals', description: 'Backups and replication.' },
  ])
  await createLevel(devopsPath.id, 'do-l3', 'Senior Platform Engineer', 3, [
    { title: 'Kubernetes Mastery', description: 'Pods, Services, and Deployments.' },
    { title: 'Helm & Kustomize', description: 'Managing complex K8s releases.' },
    { title: 'Service Mesh (Istio)', description: 'Traffic and security at scale.' },
    { title: 'Cloud Native Security', description: 'Scanning and Network policies.' },
    { title: 'Advanced Networking', description: 'BGP, VPNs, and Direct Connect.' },
    { title: 'Terraform at Scale', description: 'Enterprise modules and Atlantis.' },
    { title: 'Load Balancing Strategy', description: 'Global and internal ELB.' },
    { title: 'Incident Response (SRE)', description: 'Leading high-level outages.' },
  ])
  await createLevel(devopsPath.id, 'do-l4', 'Staff SRE / Architect', 4, [
    { title: 'Fault Tolerance & Chaos', description: 'Designing for system failure.' },
    { title: 'FinOps & Cost Strategy', description: 'Cloud budget optimization.' },
    { title: 'SRE Principles (SLOs)', description: 'SLIs, SLOs, and error budgets.' },
    { title: 'Multi-Cloud Architecture', description: 'Portable infrastructure design.' },
    { title: 'Organization Platform Strategy', description: 'IDPs and Developer flow.' },
    { title: 'Policy as Code (OPA)', description: 'Enforcing governance rules.' },
    { title: 'Disaster Recovery Strategy', description: 'Business continuity plans.' },
    { title: 'Engineering Vision (Ops)', description: 'Future-proofing the platform.' },
  ])

  // ==========================================
  // PATH 7: UI DESIGNER
  // ==========================================
  const uiPath = await prisma.careerPath.create({
    data: { slug: 'ui-designer', title: 'UI Designer', description: 'Design beautiful, and intuitive user interfaces.', icon: 'Palette', isPublished: true },
  })
  await createLevel(uiPath.id, 'ui-l1', 'Junior UI Designer', 1, [
    { title: 'Typography & Visual Hierarchy', description: 'Scale, rhythm, and eye guidance.' },
    { title: 'Color Theory & Accessibility', description: 'Palettes and WCAG compliance.' },
    { title: 'Layout Principles & Grids', description: 'Columns, spacing, and responsive.' },
    { title: 'Figma Mastery Basics', description: 'Layers, frames, and vector tools.' },
    { title: 'Visual Composition Basics', description: 'Balance and contrast fundamentals.' },
    { title: 'Iconography & Assets', description: 'Using and creating visual symbols.' },
    { title: 'Interface Terminology', description: 'Understanding components and patterns.' },
    { title: 'Feedback & Iteration', description: 'Basic design crit and refinement.' },
  ])
  await createLevel(uiPath.id, 'ui-l2', 'Interface Designer I', 2, [
    { title: 'Atomic Design Methodology', description: 'Atoms to organisms building.' },
    { title: 'Component-Based Design', description: 'Variants and auto-layout.' },
    { title: 'Interactive Components', description: 'Micro-animations and logic.' },
    { title: 'Designing for States', description: 'Empty, error, and loading states.' },
    { title: 'User Interface Patterns', description: 'Form design and list views.' },
    { title: 'Prototyping Foundations', description: 'Simple user flows in Figma.' },
    { title: 'Style Guides Core', description: 'Documenting design decisions.' },
    { title: 'Responsive Component Design', description: 'Building for diverse screens.' },
  ])
  await createLevel(uiPath.id, 'ui-l3', 'Senior UI Designer', 3, [
    { title: 'Advanced Variables & Tokens', description: 'Managing design debt with tokens.' },
    { title: 'High-Fidelity Prototyping', description: 'Complex variables and logic.' },
    { title: 'Design Handoff Mastery', description: 'Collaborating with engineering.' },
    { title: 'Accessibility (Advanced)', description: 'Designing for neurodiversity.' },
    { title: 'Complex Data Visualization', description: 'Designing charts and dashboards.' },
    { title: 'Animation & Motion Study', description: 'Meaningful movement in UI.' },
    { title: 'Multi-platform UI Systems', description: 'Mobile, Web, and Desktop apps.' },
    { title: 'User Testing UI Assets', description: 'Validating visual choices.' },
  ])
  await createLevel(uiPath.id, 'ui-l4', 'Lead UI Designer', 4, [
    { title: 'Enterprise Design System Arch', description: 'Global scalable architecture.' },
    { title: 'Design to Code Automation', description: 'Syncing tokens with React.' },
    { title: 'Design Leadership & Strategy', description: 'Advocating for design value.' },
    { title: 'Inclusive Design Research', description: 'Strategic accessibility vision.' },
    { title: 'Design Ops Foundations', description: 'Optimizing the design flow.' },
    { title: 'Strategic UI Roadmap', description: 'Vision building for products.' },
    { title: 'Multi-brand Orchestration', description: 'Theming at scale.' },
    { title: 'AI in Design Workflow', description: 'Generative tools for UI.' },
  ])

  // ==========================================
  // PATH 8: PROJECT MANAGER
  // ==========================================
  const pmPath = await prisma.careerPath.create({
    data: { slug: 'project-manager', title: 'Project Manager', description: 'Master the art of delivery.', icon: 'Briefcase', isPublished: true },
  })
  await createLevel(pmPath.id, 'pm-l1', 'Junior Project Coordinator', 1, [
    { title: 'Agile & Scrum Mastery', description: 'Ceremonies and backlog grooming.' },
    { title: 'Project Documentation', description: 'PRDs and user stories.' },
    { title: 'Kanban & Flow Metrics', description: 'WIP limits and cycle time.' },
    { title: 'Tooling Mastery (Jira)', description: 'Workflows and automation.' },
    { title: 'Meeting Facilitation', description: 'Running effective daily syncs.' },
    { title: 'Basic Task Estimation', description: 'Story points and sizing.' },
    { title: 'Stakeholder Communication', description: 'Reporting status updates.' },
    { title: 'Administrative Project Org', description: 'Structuring project spaces.' },
  ])
  await createLevel(pmPath.id, 'pm-l2', 'Project Manager I', 2, [
    { title: 'Stakeholder Management', description: 'Influence without authority.' },
    { title: 'Risk Assessment & Mitigation', description: 'Identifying blockers.' },
    { title: 'Budgeting & Resource Alloc', description: 'Managing spend and bandwidth.' },
    { title: 'Requirements Elicitation', description: 'Conducting refinement workshops.' },
    { title: 'Dependency Mapping', description: 'Identifying multi-team blockers.' },
    { title: 'Conflict Resolution', description: 'Managing team dynamics.' },
    { title: 'Project Lifecycle Mastery', description: 'Planning to closing.' },
    { title: 'Performance Metrics (KPIs)', description: 'Measuring project success.' },
  ])
  await createLevel(pmPath.id, 'pm-l3', 'Senior Project Manager', 3, [
    { title: 'Scaled Agile Frameworks', description: 'Multi-team dependencies.' },
    { title: 'Product Roadmap Strategy', description: 'Prioritization frameworks.' },
    { title: 'Engineering Alignment (SDLC)', description: 'Technical constraint mastery.' },
    { title: 'Change Management Mastery', description: 'Guiding org transitions.' },
    { title: 'Strategic Resource Capacity', description: 'Long-term staffing plans.' },
    { title: 'Program Management Core', description: 'Managing suites of projects.' },
    { title: 'Vendor Management', description: 'External team collaboration.' },
    { title: 'Adv. Data Analysis for PMs', description: 'Insights-driven delivery.' },
  ])
  await createLevel(pmPath.id, 'pm-l4', 'Program Manager', 4, [
    { title: 'Strategic ROI & Value', description: 'Measuring organizational impact.' },
    { title: 'Organizational Leadership', description: 'Building high-perf PM teams.' },
    { title: 'Global Resource Strategy', description: 'Cross-border team management.' },
    { title: 'Governance Frameworks', description: 'Standardizing delivery quality.' },
    { title: 'Portolio Management Strategy', description: 'Aligning projects to vision.' },
    { title: 'Leadership Influence', description: 'Managing executive expectations.' },
    { title: 'Operations Optimization', description: 'Building the PMO office.' },
    { title: 'Strategic Transformation', description: 'Leading company pivots.' },
  ])

  // ==========================================
  // PATH 9: DATA SCIENCE
  // ==========================================
  const dsPath = await prisma.careerPath.create({
    data: { slug: 'data-science', title: 'Data Science', description: 'Master predictive intelligence.', icon: 'Microscope', isPublished: true },
  })
  await createLevel(dsPath.id, 'ds-l1', 'Junior Data Scientist', 1, [
    { title: 'Applied Mathematics (Stats)', description: 'Probability and distributions.' },
    { title: 'Linear Algebra for ML', description: 'Matrix operations and vectors.' },
    { title: 'Advanced Python for Data', description: 'Optimized NumPy and Pandas.' },
    { title: 'Exploratory Data Analysis', description: 'Finding signals in noise.' },
    { title: 'Classical ML Algorithms', description: 'Regression and Clustering.' },
    { title: 'Data Wrangling Skills', description: 'Pre-processing and cleaning.' },
    { title: 'Visualization Core (Seaborn)', description: 'Scientific charting.' },
    { title: 'Research Methodology', description: 'Structured problem solving.' },
  ])
  await createLevel(dsPath.id, 'ds-l2', 'Data Scientist I', 2, [
    { title: 'Adv. Feature Engineering', description: 'Encoding and synthesizing.' },
    { title: 'Model Eval & Validation', description: 'PR-curves and AUC-ROC.' },
    { title: 'Ensemble Methods', description: 'XGBoost and LightGBM.' },
    { title: 'ML Experiments (MLflow)', description: 'Tracking runs and versions.' },
    { title: 'Supervised Learning Mastery', description: 'Advanced classification.' },
    { title: 'Unsupervised Learning Prep', description: 'Dimensionality reduction.' },
    { title: 'Time Series Foundations', description: 'Forecasting basics.' },
    { title: 'SQL for Data Science', description: 'Advanced analytical queries.' },
  ])
  await createLevel(dsPath.id, 'ds-l3', 'Senior Data Scientist', 3, [
    { title: 'PyTorch Fundamentals', description: 'Tensors and Autograd.' },
    { title: 'Computer Vision Basics', description: 'CNNs and Image Augmentation.' },
    { title: 'Natural Language Processing', description: 'Word embeddings and RNNs.' },
    { title: 'Deployment & Model Serving', description: 'FastAPI and Docker.' },
    { title: 'Monitoring Model Drift', description: 'Ensuring model reliability.' },
    { title: 'Reinforcement Learning', description: 'Agents and environments.' },
    { title: 'Deep Learning Optimization', description: 'Architecture and tuning.' },
    { title: 'Advanced NLP (Transformers)', description: 'HuggingFace and Attention.' },
  ])
  await createLevel(dsPath.id, 'ds-l4', 'Lead Researcher', 4, [
    { title: 'Bayesian Statistics', description: 'Uncertainty and MCMC.' },
    { title: 'Transformer Research', description: 'Fine-tuning GPT and BERT.' },
    { title: 'AI Research & Strategy', description: 'Driving long-term vision.' },
    { title: 'Model Interpretability', description: 'SHAP/LIME and explaining AI.' },
    { title: 'Adv. Reinforcement Learning', description: 'Scalable agent training.' },
    { title: 'AI Governance & Ethics', description: 'Safety and bias control.' },
    { title: 'Scientific Leadership', description: 'Publishing and mentoring.' },
    { title: 'Generative AI Research', description: 'Diffusion and GANs basics.' },
  ])

  // ==========================================
  // PATH 10: DATA ENGINEER
  // ==========================================
  const dePath = await prisma.careerPath.create({
    data: { slug: 'data-engineer', title: 'Data Engineer', description: 'Architect reliable data systems.', icon: 'Database', isPublished: true },
  })
  await createLevel(dePath.id, 'de-l1', 'Junior Data Engineer', 1, [
    { title: 'SQL Database Internals', description: 'Query plans and indexing.' },
    { title: 'NoSQL Architectures', description: 'Document and Key-Value.' },
    { title: 'Extract & Load Basics', description: 'Building ingestion scripts.' },
    { title: 'Data Structures for Eng', description: 'Trees and Graphs in data.' },
    { title: 'Python for Ingestion', description: 'Library-based data movers.' },
    { title: 'Version Control for Data', description: 'Git for engineers.' },
    { title: 'Data Quality Foundations', description: 'Null and type checks.' },
    { title: 'Linux Administration (Data)', description: 'Managing data servers.' },
  ])
  await createLevel(dePath.id, 'de-l2', 'Data Engineer I', 2, [
    { title: 'Distributed Processing (Spark)', description: 'RDDs and DataFrames.' },
    { title: 'Workflow Orchestration', description: 'Airflow DAG patterns.' },
    { title: 'Data Modeling (Star/Snow)', description: 'Designing for analytic perf.' },
    { title: 'Python for Data Eng', description: 'Custom operators and logic.' },
    { title: 'Parquet & Avro Formats', description: 'Optimized binary storage.' },
    { title: 'Cloud Data Lakes Basics', description: 'S3 and Glue foundations.' },
    { title: 'Monitoring Data Pipelines', description: 'Alerting on pipeline failure.' },
    { title: 'Data Ingestion Architectures', description: 'Event vs Batch flow.' },
  ])
  await createLevel(dePath.id, 'de-l3', 'Senior Data Engineer', 3, [
    { title: 'Real-time Streaming (Kafka)', description: 'Pub/sub and stream proc.' },
    { title: 'Analytics Eng (dbt)', description: 'Managed SQL transformations.' },
    { title: 'Data Warehousing (Snowflake)', description: 'Scaling compute layers.' },
    { title: 'Infrastructure for Data', description: 'K8s for data workloads.' },
    { title: 'Data Security (Encryption)', description: 'Protecting data at rest/motion.' },
    { title: 'Advanced dbt Patterns', description: 'Macros and snapshots.' },
    { title: 'Streaming (Spark Struct)', description: 'Incremental processing.' },
    { title: 'Data Observability', description: 'Profiling data health.' },
  ])
  await createLevel(dePath.id, 'de-l4', 'Data Architect', 4, [
    { title: 'Data Contracts & Governance', description: 'Managing schema evolution.' },
    { title: 'Security & Privacy at Scale', description: 'GDPR/HIPAA compliance.' },
    { title: 'Strategic Portfolio Mgmt', description: 'Leading data vision.' },
    { title: 'Multi-cloud Data Arch', description: 'Seamless data portability.' },
    { title: 'Strategic Data Mesh', description: 'Domain-oriented architectures.' },
    { title: 'AI Infrastructure (Vector)', description: 'Managing data for AI.' },
    { title: 'FinOps for Data', description: 'Optimizing warehouse spend.' },
    { title: 'Leadership in Data Eng', description: 'Leading platforms centers.' },
  ])

  // ==========================================
  // PATH 11: AI DEVELOPMENT
  // ==========================================
  const aiPath = await prisma.careerPath.create({
    data: { slug: 'ai-development', title: 'AI Development', description: 'Engineer the future with GenAI.', icon: 'Cpu', isPublished: true },
  })
  await createLevel(aiPath.id, 'ai-l1', 'Junior AI Developer', 1, [
    { title: 'Algorithmic Math for AI', description: 'Optimization and gradient descent.' },
    { title: 'Classical AI Approaches', description: 'Logic-based expert systems.' },
    { title: 'Python for AI Research', description: 'Rapid prototyping and scientific libs.' },
    { title: 'Intro to Neural Networks', description: 'Perceptrons and backpropagation.' },
    { title: 'Search Algorithms', description: 'A*, BFS, DFS in AI contexts.' },
    { title: 'Probabilistic Reasoning', description: 'Handling uncertainty in AI.' },
    { title: 'Data Prep for AI', description: 'Vectorization and normalization.' },
    { title: 'Ethics of Intelligence', description: 'Alignment and safety basics.' },
  ])
  await createLevel(aiPath.id, 'ai-l2', 'AI Engineer I', 2, [
    { title: 'CNN Architecture & Vision', description: 'ResNet, YOLO, and Image Class.' },
    { title: 'Sequence Models (RNN/LSTM)', description: 'Text and time-series data.' },
    { title: 'Transformers Architecture', description: 'Self-attention and multi-head.' },
    { title: 'Handling Unstructured Data', description: 'Pipelines for audio and image.' },
    { title: 'Deep Learning Frameworks', description: 'PyTorch vs TensorFlow ecosystems.' },
    { title: 'Generative Models (GANs)', description: 'Basics of synthetic data.' },
    { title: 'Model Debugging & Loss', description: 'Finding vanishing gradients.' },
    { title: 'Basic MLOps for Developers', description: 'Artifact tracking and logging.' },
  ])
  await createLevel(aiPath.id, 'ai-l3', 'Senior AI Engineer', 3, [
    { title: 'LLM Prompt & Tuning', description: 'Chain-of-thought and fine-tuning.' },
    { title: 'Vector DBs (Pinecone)', description: 'Semantic search and document indexing.' },
    { title: 'RAG Pipeline Architecture', description: 'Context-aware GenAI systems.' },
    { title: 'LLM Agentic Frameworks', description: 'LangChain and autonomous agents.' },
    { title: 'Multi-modal AI Systems', description: 'Combining text, image, and audio.' },
    { title: 'AI Infrastructure (GPUs)', description: 'Managing compute resources.' },
    { title: 'Model Compression (QN)', description: 'Quantization and pruning.' },
    { title: 'AI Application Security', description: 'Prompt injection and data leakage.' },
  ])
  await createLevel(aiPath.id, 'ai-l4', 'Staff AI Architect', 4, [
    { title: 'Scalable AI Infrastructure', description: 'Serving millions of inferences.' },
    { title: 'Advanced Agentic Swarms', description: 'Multi-agent orchestration.' },
    { title: 'AI Ethics & Alignment (Adv)', description: 'Formal safety guarantees.' },
    { title: 'Research to Production', description: 'Bridging the paper-to-code gap.' },
    { title: 'Custom Model Frameworks', description: 'Building domain-specific LLMs.' },
    { title: 'Hardware Acceleration', description: 'TPUs and specialized silicon.' },
    { title: 'Strategic AI Leadership', description: 'Leading org-wide AI adoption.' },
    { title: 'Future of AGI Research', description: 'Conceptualizing next-gen systems.' },
  ])

  // ==========================================
  // PATH 12: CYBERSECURITY ENGINEER
  // ==========================================
  const cyberPath = await prisma.careerPath.create({
    data: { slug: 'cybersecurity-engineer', title: 'Cybersecurity Engineer', description: 'Master digital defense.', icon: 'Shield', isPublished: true },
  })
  await createLevel(cyberPath.id, 'cs-l1', 'Junior Security Analyst', 1, [
    { title: 'Networking Fundamentals', description: 'OSI model and protocols.' },
    { title: 'Linux System Security', description: 'Permissions and kernel locking.' },
    { title: 'Security Tooling Intro', description: 'Nmap, Wireshark, and Burp basics.' },
    { title: 'Cryptography Foundations', description: 'Hashing, symmetric vs asymmetric.' },
    { title: 'OWASP Top 10 Basics', description: 'Core web vulnerabilities.' },
    { title: 'Incident Response 101', description: 'Identification and containment.' },
    { title: 'Identity & Access (IAM)', description: 'RBAC and principle of least privilege.' },
    { title: 'Security Documentation', description: 'Policy and audit logging.' },
  ])
  await createLevel(cyberPath.id, 'cs-l2', 'Cybersecurity Engineer I', 2, [
    { title: 'Network Traffic Analysis', description: 'Deep packet inspection.' },
    { title: 'Vulnerability Management', description: 'Scanning and patching cycles.' },
    { title: 'Incident Response (Advanced)', description: 'Eradication and recovery.' },
    { title: 'Scripting for Security', description: 'Python/Bash task automation.' },
    { title: 'Cloud Security (AWS/GCP)', description: 'Securing cloud infrastructure.' },
    { title: 'Endpoint Protection (EDR)', description: 'Monitoring and response.' },
    { title: 'Application Security Basics', description: 'Safe coding practices.' },
    { title: 'Compliance (SOC2/ISO)', description: 'Framework orientation.' },
  ])
  await createLevel(cyberPath.id, 'cs-l3', 'Senior Security Engineer', 3, [
    { title: 'Ethical Hacking (Pentesting)', description: 'Exploitation and reporting.' },
    { title: 'Malware Analysis Basics', description: 'Static and dynamic analysis.' },
    { title: 'Security Architecture', description: 'Zero-trust and micro-segmentation.' },
    { title: 'SIEM & SOC Operations', description: 'Managing Splunk or Elastic Security.' },
    { title: 'Digital Forensics', description: 'Evidence collection and chain.' },
    { title: 'Red/Blue Team Ops', description: 'Simulated attack/defense cycles.' },
    { title: 'CI/CD Security (DevSecOps)', description: 'Static and dynamic scanning.' },
    { title: 'Risk Assessment Strategy', description: 'Threat modeling and impact.' },
  ])
  await createLevel(cyberPath.id, 'cs-l4', 'CISO / Security Architect', 4, [
    { title: 'Enterprise Security Strategy', description: 'Building a security culture.' },
    { title: 'GRC & Risk Management', description: 'Governance and compliance at scale.' },
    { title: 'Threat Intelligence Research', description: 'Predicting emerging threats.' },
    { title: 'Global Incident Leadership', description: 'Crisis management for breaches.' },
    { title: 'Budget & Resource Scaling', description: 'Justifying security spend.' },
    { title: 'Executive Influence', description: 'Presenting risk to the board.' },
    { title: 'Security Product Engineering', description: 'Building custom security apps.' },
    { title: 'Modern Privacy Regulation', description: 'GDPR, CCPA, and data sovereignty.' },
  ])

  // ==========================================
  // PATH 13: CLOUD ARCHITECT
  // ==========================================
  const cloudPath = await prisma.careerPath.create({
    data: { slug: 'cloud-architect', title: 'Cloud Architect', description: 'Design enterprise cloud scale.', icon: 'Cloud', isPublished: true },
  })
  await createLevel(cloudPath.id, 'ca-l1', 'Cloud Support Engineer', 1, [
    { title: 'Cloud Core Concepts', description: 'IaaS, PaaS, and SaaS.' },
    { title: 'Compute Services (EC2)', description: 'Virtual instances and scaling.' },
    { title: 'Storage Solutions (S3)', description: 'Objects and block storage.' },
    { title: 'Cloud Networking (VPC)', description: 'IP, Subnets, and Gateways.' },
    { title: 'IAM Identity Management', description: 'Users, groups, and policies.' },
    { title: 'Managed DBs (RDS)', description: 'Relational storage in cloud.' },
    { title: 'CLI & SDK Foundations', description: 'Interacting via code.' },
    { title: 'Basic Cloud Security', description: 'Shared responsibility model.' },
  ])
  await createLevel(cloudPath.id, 'ca-l2', 'Cloud Solution Architect', 2, [
    { title: 'Architecting for Reliability', description: 'Multi-AZ and fault tolerance.' },
    { title: 'High-Performance Computing', description: 'Instance types and optimization.' },
    { title: 'Serverless Design (Lambda)', description: 'Event-driven architectures.' },
    { title: 'Container Orch (ECS/EKS)', description: 'Managed container services.' },
    { title: 'Monitoring & Logging (CW)', description: 'Observability in cloud.' },
    { title: 'Cloud Security (KMS/WAF)', description: 'Protecting cloud scale.' },
    { title: 'Infrastructure as Code (CFN)', description: 'Automating AWS setup.' },
    { title: 'Migration Foundations', description: 'Lift-and-shift strategies.' },
  ])
  await createLevel(cloudPath.id, 'ca-l3', 'Senior Cloud Architect', 3, [
    { title: 'Global Multi-region Arch', description: 'Low latency across borders.' },
    { title: 'Cloud FinOps (Cost)', description: 'Optimizing enterprise spend.' },
    { title: 'Hybrid Cloud Connect', description: 'Direct Connect and VPNs.' },
    { title: 'Disaster Recovery Strategy', description: 'RTO/RPO and backup plans.' },
    { title: 'Enterprise Governance', description: 'Organizations and SCPs.' },
    { title: 'Adv. Serverless Patterns', description: 'Step functions and orchestration.' },
    { title: 'Application Modernization', description: 'Refactoring to cloud-native.' },
    { title: 'Multi-cloud Strategy Basics', description: 'GCP and Azure integration.' },
  ])
  await createLevel(cloudPath.id, 'ca-l4', 'Principal Cloud Lead', 4, [
    { title: 'Enterprise Cloud Vision', description: 'Driving organizational change.' },
    { title: 'Strategic Cost Management', description: 'Executive level FinOps.' },
    { title: 'Cloud Policy & Compliance', description: 'HIPAA/PCI at cloud scale.' },
    { title: 'Platform Engineering (Cloud)', description: 'Developer self-service.' },
    { title: 'Edge Computing Strategy', description: 'Wavelength and Local Zones.' },
    { title: 'Architecture Review Board', description: 'Governing technical quality.' },
    { title: 'Cloud Automation (Advanced)', description: 'Custom controllers and logic.' },
    { title: 'Strategic DR Orchestration', description: 'Automated failover at scale.' },
  ])

  // ==========================================
  // PATH 14: ML ENGINEER
  // ==========================================
  const mlePath = await prisma.careerPath.create({
    data: { slug: 'machine-learning-engineer', title: 'Machine Learning Engineer', description: 'ML at production scale.', icon: 'Workflow', isPublished: true },
  })
  await createLevel(mlePath.id, 'mle-l1', 'Junior ML Engineer', 1, [
    { title: 'Python for Engineering', description: 'Packaging and robust code.' },
    { title: 'Classical ML Implementation', description: 'Scikit-learn engineering.' },
    { title: 'Data Pipelines (ETL)', description: 'Ingesting for training.' },
    { title: 'ML Experiments (W&B)', description: 'Tracking runs and artifacts.' },
    { title: 'SQL for Feature Stores', description: 'Efficient data retrieval.' },
    { title: 'Basic Model Eval', description: 'Offline testing methodologies.' },
    { title: 'Containerizing ML Models', description: 'Docker for inference.' },
    { title: 'Git for ML (DVC)', description: 'Version control for datasets.' },
  ])
  await createLevel(mlePath.id, 'mle-l2', 'ML Engineer I', 2, [
    { title: 'Production ML (Triton)', description: 'Serving at scale.' },
    { title: 'Model Monitoring (Drift)', description: 'Detecting decay in prod.' },
    { title: 'AutoML & Hyperparameter', description: 'Efficient search strategies.' },
    { title: 'Distributed Training Base', description: 'Data parallelism basics.' },
    { title: 'Inference Optimization', description: 'ONNX and TensorRT.' },
    { title: 'Feature Store Arch', description: 'Feast and online stores.' },
    { title: 'CI/CD for ML', description: 'Automated retraining loops.' },
    { title: 'Model Registry Patterns', description: 'Stage management and prod tags.' },
  ])
  await createLevel(mlePath.id, 'mle-l3', 'Senior ML Engineer', 3, [
    { title: 'Distributed Training Scale', description: 'Model parallelism and sharding.' },
    { title: 'GPU Memory Optimization', description: 'Flash attention and kernels.' },
    { title: 'Hardware Acceleration', description: 'TPUs and edge devices.' },
    { title: 'Streaming ML Inference', description: 'Low latency real-time data.' },
    { title: 'ML Ops Platform Design', description: 'Seldon and Ray integration.' },
    { title: 'Advanced Feature Eng', description: 'Real-time feature calc.' },
    { title: 'Model Robustness', description: 'Testing for adversarial attacks.' },
    { title: 'Compliance & Explainability', description: 'Interpretable production ML.' },
  ])
  await createLevel(mlePath.id, 'mle-l4', 'Staff MLOps Architect', 4, [
    { title: 'Enterprise ML Vision', description: 'Building the company ML platform.' },
    { title: 'Strategic Compute Sourcing', description: 'Managing GPU fleets.' },
    { title: 'Edge AI Strategy', description: 'Mobile and IoT ML delivery.' },
    { title: 'Custom Inference Engines', description: 'C++ and low-level serving.' },
    { title: 'Lifecycle ROI Strategy', description: 'Measuring ML business value.' },
    { title: 'Global Model Governance', description: 'Policy enforcement for ML.' },
    { title: 'Leadership in ML Org', description: 'Mentoring MLE and SRE teams.' },
    { title: 'Future of Automated ML', description: 'Self-healing model systems.' },
  ])

  // ==========================================
  // PATH 15: PRODUCT MANAGER
  // ==========================================
  const pmnPath = await prisma.careerPath.create({
    data: { slug: 'product-manager', title: 'Product Manager', description: 'Master user value strategy.', icon: 'Target', isPublished: true },
  })
  await createLevel(pmnPath.id, 'pmn-l1', 'Associate Product Manager', 1, [
    { title: 'User Discovery Foundation', description: 'Conducting customer interviews.' },
    { title: 'PRD Writing & Specs', description: 'Clear technical requirements.' },
    { title: 'Metrics Foundations (AARRR)', description: 'Acquisition and retention.' },
    { title: 'Product Lifecycle Core', description: 'Discovery to launch.' },
    { title: 'Agile for Product', description: 'Collaboration with engineers.' },
    { title: 'Competitive Research', description: 'Market mapping and SWOT.' },
    { title: 'UX Design Principles', description: 'User flow and wireframe study.' },
    { title: 'Basic Prioritization', description: 'Impact vs Effort scoring.' },
  ])
  await createLevel(pmnPath.id, 'pmn-l2', 'Product Manager I', 2, [
    { title: 'Advanced Prioritization', description: 'RICE and Kano models.' },
    { title: 'Growth Hacking Basics', description: 'A/B testing and funnels.' },
    { title: 'Product Analytics (Mixpanel)', description: 'Behavioral data analysis.' },
    { title: 'Roadmap Planning', description: 'Quarterly and yearly vision.' },
    { title: 'Stakeholder Influence (PM)', description: 'Managing design and dev.' },
    { title: 'User Psychology Core', description: 'Behavioral design basics.' },
    { title: 'Go-to-Market Strategy', description: 'Launch and distribution.' },
    { title: 'Financial Modeling Base', description: 'LTV and CAC calculations.' },
  ])
  await createLevel(pmnPath.id, 'pmn-l3', 'Senior Product Manager', 3, [
    { title: 'Product Strategy & Vision', description: 'Market positioning and DNA.' },
    { title: 'Strategic Monetization', description: 'Pricing power and models.' },
    { title: 'Adv. Product Analytics', description: 'Cohort and retention study.' },
    { title: 'Resource Negotiation', description: 'Getting budget and bandwidth.' },
    { title: 'Market Expansion Strategy', description: 'Internationalization/B2B.' },
    { title: 'Leadership through Vision', description: 'Inspiring cross-org teams.' },
    { title: 'External Partnerships', description: 'API and vendor integrations.' },
    { title: 'Crisis Management (Product)', description: 'Handling major failures.' },
  ])
  await createLevel(pmnPath.id, 'pmn-l4', 'VP of Product', 4, [
    { title: 'Organizational Leadership', description: 'Building the product culture.' },
    { title: 'Strategic Portfolio Mgmt', description: 'Aligning products to company.' },
    { title: 'Executive Influence mastery', description: 'Presenting to the Board.' },
    { title: 'Org-wide Growth Strategy', description: 'Driving viral cycles.' },
    { title: 'M&A & Integration Base', description: 'Product due diligence.' },
    { title: 'ROI & Business Viability', description: 'P&L ownership for products.' },
    { title: 'Public Product Advocacy', description: 'Evangelizing the platform.' },
    { title: 'Future of Tech Strategy', description: 'Predicting market shifts.' },
  ])

  // ==========================================
  // PROJECTS WITH "META TWIST"
  // ==========================================

  // Cybersecurity Level 3 Project
  await prisma.project.create({
    data: {
      id: 'p-cs-l3',
      title: 'Enterprise Vulnerability Lab',
      description: 'Build and audit a secure micro-services environment with zero-trust principles.',
      requirements: JSON.stringify([
        'Zero-trust network segmentation',
        'Automated vulnerability scanning in CI/CD',
        'Custom WAF rules for OWASP protection',
        'Incident Response playbook for simulated breach',
      ]),
      isFinalProject: true,
      levelId: 'cs-l3',
      order: 1,
      testCases: JSON.stringify([{ type: 'audit', score: '>95' }]),
    },
  })

  // AI Development Level 3 Project
  await prisma.project.create({
    data: {
      id: 'p-ai-l3',
      title: 'Multimodal RAG Agent',
      description: 'Build an autonomous agent capable of reasoning across text, images, and tools.',
      requirements: JSON.stringify([
        'Custom vector indexing for complex docs',
        'Tool-use with LangChain / AutoGPT',
        'Image reasoning via Vision models',
        'Evaluation loop for hallucination check',
      ]),
      isFinalProject: true,
      levelId: 'ai-l3',
      order: 1,
      testCases: JSON.stringify([{ type: 'accuracy', threshold: '0.85' }]),
    },
  })

  console.log('Seed Expansion (15 paths, 480 skills) completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
