export interface Skill {
    id: string;
    name: string;
    category: 'core' | 'supporting' | 'optional';
    importance: 'high' | 'medium' | 'low';
    description: string;
}

export interface CareerPath {
    id: string;
    slug: string;
    title: string;
    description: string;
    responsibilities: string[];
    progression: string[];
    skills: Skill[];
    icon: string;
}

export const careerPaths: CareerPath[] = [
    {
        id: 'frontend-dev',
        slug: 'frontend-developer',
        title: 'Frontend Developer',
        description: 'Build beautiful, interactive user interfaces and digital experiences.',
        icon: 'Layout',
        responsibilities: [
            'Translating designs to code',
            'Optimizing web performance',
            'Ensuring cross-browser compatibility',
            'Building reusable UI components'
        ],
        progression: ['Junior Frontend', 'Mid-level', 'Senior', 'Staff Engineer / Architect'],
        skills: [
            { id: 'html', name: 'HTML5', category: 'core', importance: 'high', description: 'Semantic structure of web pages.' },
            { id: 'css', name: 'CSS3', category: 'core', importance: 'high', description: 'Styling and layout.' },
            { id: 'js', name: 'JavaScript', category: 'core', importance: 'high', description: 'Interactive logic and APIs.' },
            { id: 'react', name: 'React', category: 'supporting', importance: 'high', description: 'Modern UI library.' },
            { id: 'ts', name: 'TypeScript', category: 'supporting', importance: 'high', description: 'Type safety.' },
            { id: 'git', name: 'Git', category: 'supporting', importance: 'high', description: 'Version control.' }
        ]
    },
    {
        id: 'backend-dev',
        slug: 'backend-developer',
        title: 'Backend Developer',
        description: 'Design and build the robust architecture that powers modern applications.',
        icon: 'Server',
        responsibilities: [
            'API design and implementation',
            'Database management',
            'Server-side logic',
            'Security and scalability'
        ],
        progression: ['Junior Backend', 'Mid-level', 'Senior', 'System Architect'],
        skills: [
            { id: 'nodejs', name: 'Node.js', category: 'core', importance: 'high', description: 'Server-side JavaScript runtime.' },
            { id: 'express', name: 'Express.js', category: 'core', importance: 'high', description: 'Web application framework.' },
            { id: 'sql', name: 'SQL', category: 'core', importance: 'high', description: 'Relational databases.' },
            { id: 'redis', name: 'Redis', category: 'supporting', importance: 'high', description: 'Caching.' },
            { id: 'docker', name: 'Docker', category: 'supporting', importance: 'medium', description: 'Containerization.' }
        ]
    },
    {
        id: 'fullstack-dev',
        slug: 'full-stack-developer',
        title: 'Full Stack Developer',
        description: 'Master both frontend and backend development to build complete applications.',
        icon: 'Layers',
        responsibilities: [
            'End-to-end application development',
            'Database design and management',
            'API integration and development',
            'System architecture and deployment'
        ],
        progression: ['Junior Full Stack', 'Mid-level', 'Senior', 'Principal Engineer'],
        skills: [
            { id: 'react', name: 'React/Next.js', category: 'core', importance: 'high', description: 'Full stack framework.' },
            { id: 'ts', name: 'TypeScript', category: 'core', importance: 'high', description: 'Type safe development.' },
            { id: 'nodejs', name: 'Node.js', category: 'core', importance: 'high', description: 'Backend runtime.' },
            { id: 'prisma', name: 'Prisma/SQL', category: 'core', importance: 'high', description: 'ORM and DB.' },
            { id: 'auth', name: 'Auth/Security', category: 'supporting', importance: 'high', description: 'Secure applications.' }
        ]
    },
    {
        id: 'data-analyst',
        slug: 'data-analyst',
        title: 'Data Analyst',
        description: 'Turn complex data into actionable insights and business decisions.',
        icon: 'PieChart',
        responsibilities: [
            'Data cleaning and preparation',
            'Statistical analysis',
            'Data visualization',
            'Reporting insights'
        ],
        progression: ['Junior Data Analyst', 'Senior Analyst', 'Data Scientist', 'Head of Data'],
        skills: [
            { id: 'python', name: 'Python', category: 'core', importance: 'high', description: 'Data processing and analysis.' },
            { id: 'sql', name: 'SQL', category: 'core', importance: 'high', description: 'Data querying.' },
            { id: 'pandas', name: 'Pandas', category: 'core', importance: 'high', description: 'Data manipulation.' },
            { id: 'tableau', name: 'Visualization', category: 'supporting', importance: 'high', description: 'Dashboards.' },
            { id: 'stats', name: 'Statistics', category: 'core', importance: 'medium', description: 'Statistical analysis.' }
        ]
    },
    {
        id: 'mobile-dev',
        slug: 'mobile-developer',
        title: 'Mobile Developer',
        description: 'Create native and cross-platform mobile applications for iOS and Android.',
        icon: 'Smartphone',
        responsibilities: [
            'Mobile app development',
            'UI/UX implementation',
            'Performance optimization',
            'App store deployment'
        ],
        progression: ['Junior Mobile Dev', 'Mid-level', 'Senior', 'Mobile Lead'],
        skills: [
            { id: 'react-native', name: 'React Native', category: 'core', importance: 'high', description: 'Cross-platform development.' },
            { id: 'ts', name: 'TypeScript', category: 'core', importance: 'high', description: 'Type safety.' },
            { id: 'expo', name: 'Expo', category: 'supporting', importance: 'high', description: 'Mobile toolchain.' },
            { id: 'swift', name: 'Swift/SwiftUI', category: 'supporting', importance: 'medium', description: 'Native iOS.' },
            { id: 'kotlin', name: 'Kotlin', category: 'supporting', importance: 'medium', description: 'Native Android.' }
        ]
    },
    {
        id: 'devops',
        slug: 'devops-engineer',
        title: 'DevOps Engineer',
        description: 'Bridge development and operations to enable continuous delivery and scalability.',
        icon: 'Settings',
        responsibilities: [
            'CI/CD pipeline setup',
            'Infrastructure automation',
            'Monitoring and logging',
            'Security implementation'
        ],
        progression: ['Junior DevOps', 'DevOps Engineer', 'Senior DevOps', 'DevOps Architect'],
        skills: [
            { id: 'k8s', name: 'Kubernetes', category: 'core', importance: 'high', description: 'Orchestration.' },
            { id: 'terraform', name: 'Terraform', category: 'core', importance: 'high', description: 'IaC.' },
            { id: 'docker', name: 'Docker', category: 'core', importance: 'high', description: 'Containerization.' },
            { id: 'aws', name: 'AWS/GCP', category: 'core', importance: 'high', description: 'Cloud providers.' },
            { id: 'actions', name: 'Github Actions', category: 'supporting', importance: 'high', description: 'CI/CD pipelines.' }
        ]
    },
    {
        id: 'ui-designer',
        slug: 'ui-designer',
        title: 'UI Designer',
        description: 'Create beautiful and intuitive user interfaces for digital products.',
        icon: 'Palette',
        responsibilities: [
            'Visual design creation',
            'Design system maintenance',
            'Prototyping and wireframing',
            'Collaboration with developers'
        ],
        progression: ['Junior UI Designer', 'UI Designer', 'Senior UI', 'Design Lead'],
        skills: [
            { id: 'figma', name: 'Figma', category: 'core', importance: 'high', description: 'Design and prototyping.' },
            { id: 'atomic', name: 'Atomic Design', category: 'core', importance: 'high', description: 'Design systems.' },
            { id: 'typography', name: 'Typography', category: 'core', importance: 'high', description: 'Visual hierarchy.' },
            { id: 'accessibility', name: 'Accessibility', category: 'core', importance: 'high', description: 'WCAG compliance.' },
            { id: 'handoff', name: 'Dev Handoff', category: 'supporting', importance: 'high', description: 'Collaboration.' }
        ]
    },
    {
        id: 'project-manager',
        slug: 'project-manager',
        title: 'Project Manager',
        description: 'Master the art of delivery. From Agile methodology to stakeholder management and strategic program leadership.',
        icon: 'Briefcase',
        responsibilities: [
            'Agile project delivery',
            'Stakeholder communication',
            'Risk mitigation and planning',
            'Budget and resource management'
        ],
        progression: ['Junior Project Coordinator', 'Project Manager I', 'Senior PM', 'Program Manager'],
        skills: [
            { id: 'agile', name: 'Agile/Scrum', category: 'core', importance: 'high', description: 'Core delivery methodology.' },
            { id: 'communication', name: 'Communication', category: 'core', importance: 'high', description: 'Stakeholder management.' },
            { id: 'risk', name: 'Risk Management', category: 'core', importance: 'high', description: 'Identifying and mitigating blockers.' },
            { id: 'jira', name: 'Jira/Tooling', category: 'supporting', importance: 'high', description: 'Project management tools.' },
            { id: 'strategy', name: 'Strategic Planning', category: 'supporting', importance: 'medium', description: 'Roadmapping and ROI.' }
        ]
    },
    {
        id: 'data-science',
        slug: 'data-science',
        title: 'Data Science',
        description: 'Master the art of uncovering patterns in data and building predictive intelligence systems.',
        icon: 'Microscope',
        responsibilities: [
            'Model development and evaluation',
            'Statistical research and hypothesis testing',
            'Feature engineering and data preparation',
            'AI strategy and communication'
        ],
        progression: ['Junior Data Scientist', 'Data Scientist', 'Senior DS', 'Lead Researcher'],
        skills: [
            { id: 'math', name: 'Applied Mathematics', category: 'core', importance: 'high', description: 'Stats and Linear Algebra.' },
            { id: 'ml', name: 'Machine Learning', category: 'core', importance: 'high', description: 'Scikit-learn and classical ML.' },
            { id: 'deep-learning', name: 'Deep Learning', category: 'core', importance: 'high', description: 'Neural networks and PyTorch.' },
            { id: 'python-ds', name: 'Python for Data', category: 'core', importance: 'high', description: 'Pandas, NumPy, and Scipy.' },
            { id: 'visualization', name: 'Data Storytelling', category: 'supporting', importance: 'medium', description: 'Matplotlib and Seaborn.' }
        ]
    },
    {
        id: 'data-engineer',
        slug: 'data-engineer',
        title: 'Data Engineer',
        description: 'Architect the systems that make data accessible and reliable at scale.',
        icon: 'Database',
        responsibilities: [
            'Building ETL/ELT pipelines',
            'Data warehouse architecture',
            'Streaming data systems',
            'Data governance and reliability'
        ],
        progression: ['Junior Data Engineer', 'Data Engineer', 'Senior DE', 'Data Architect'],
        skills: [
            { id: 'sql-internals', name: 'SQL Internals', category: 'core', importance: 'high', description: 'Database performance.' },
            { id: 'spark', name: 'Big Data (Spark)', category: 'core', importance: 'high', description: 'Distributed processing.' },
            { id: 'airflow', name: 'Orchestration', category: 'core', importance: 'high', description: 'Workflow management.' },
            { id: 'kafka', name: 'Streaming (Kafka)', category: 'core', importance: 'high', description: 'Real-time streams.' },
            { id: 'snowflake', name: 'Warehousing', category: 'supporting', importance: 'high', description: 'Snowflake/dbt.' }
        ]
    },
    {
        id: 'ai-development',
        slug: 'ai-development',
        title: 'AI Development',
        description: 'Engineer the future with Generative AI, LLM Agents, and Scalable AI Infrastructure.',
        icon: 'Cpu',
        responsibilities: [
            'GenAI and RAG system engineering',
            'LLM Agent development',
            'Model optimization and MLOps',
            'AI ethics and application'
        ],
        progression: ['AI Developer', 'AI Engineer', 'Senior AI Engineer', 'AI Platform Architect'],
        skills: [
            { id: 'gen-ai', name: 'Generative AI', description: 'LLMs and RAG.', category: 'core', importance: 'high' },
            { id: 'vector-dbs', name: 'Vector Databases', description: 'Semantic search.', category: 'core', importance: 'high' },
            { id: 'transformers', name: 'Transformers', description: 'Attention models.', category: 'core', importance: 'high' },
            { id: 'mlops', name: 'MLOps', description: 'Serving and monitoring.', category: 'core', importance: 'high' },
            { id: 'python', name: 'AI Engineering', description: 'Advanced AI patterns.', category: 'core', importance: 'high' }
        ]
    },
    {
        id: 'cyber-security',
        slug: 'cybersecurity-engineer',
        title: 'Cybersecurity Engineer',
        description: 'Protect digital assets and infrastructure from evolving cyber threats.',
        icon: 'Shield',
        responsibilities: [
            'Security auditing and pentesting',
            'Threat detection and response',
            'Implementing zero-trust architecture',
            'Compliance and risk management'
        ],
        progression: ['Junior Security Analyst', 'Cybersecurity Engineer', 'Security Architect', 'CISO'],
        skills: [
            { id: 'networking', name: 'Network Security', category: 'core', importance: 'high', description: 'Firewalls and protocols.' },
            { id: 'cryptography', name: 'Cryptography', category: 'core', importance: 'high', description: 'Encryption and hashing.' },
            { id: 'pentesting', name: 'Ethical Hacking', category: 'core', importance: 'high', description: 'Vulnerability assessment.' },
            { id: 'incident-response', name: 'IR & Forensics', category: 'core', importance: 'high', description: 'Responding to breaches.' },
            { id: 'compliance', name: 'Security Compliance', category: 'supporting', importance: 'medium', description: 'SOC2/GDPR.' }
        ]
    },
    {
        id: 'cloud-architect',
        slug: 'cloud-architect',
        title: 'Cloud Architect',
        description: 'Design and manage complex, scalable cloud environments for enterprise needs.',
        icon: 'Cloud',
        responsibilities: [
            'Enterprise cloud strategy',
            'Hybrid and multi-cloud design',
            'Cloud cost optimization',
            'Infrastructure governance'
        ],
        progression: ['Cloud Engineer', 'Cloud Architect', 'Senior Architect', 'Principal Cloud Lead'],
        skills: [
            { id: 'aws-advanced', name: 'Advanced AWS', category: 'core', importance: 'high', description: 'Solutions architecture.' },
            { id: 'azure-gcp', name: 'Multi-Cloud', category: 'core', importance: 'high', description: 'Azure and GCP.' },
            { id: 'cloud-security', name: 'Cloud Security', category: 'core', importance: 'high', description: 'IAM and security groups.' },
            { id: 'finops', name: 'Cloud FinOps', category: 'supporting', importance: 'high', description: 'Cost management.' },
            { id: 'serverless', name: 'Serverless Arch', category: 'supporting', importance: 'high', description: 'Lambda/Functions.' }
        ]
    },
    {
        id: 'ml-engineer',
        slug: 'machine-learning-engineer',
        title: 'Machine Learning Engineer',
        description: 'Bridge the gap between data science and production software engineering.',
        icon: 'Workflow',
        responsibilities: [
            'ML system design and scale',
            'Production model deployment',
            'Data pipeline engineering',
            'Monitoring model performance'
        ],
        progression: ['Junior ML Engineer', 'ML Engineer', 'Senior MLE', 'ML Ops Lead'],
        skills: [
            { id: 'prod-ml', name: 'Production ML', category: 'core', importance: 'high', description: 'Scalable inference.' },
            { id: 'distributed-training', name: 'Dist. Training', category: 'core', importance: 'high', description: 'Training large models.' },
            { id: 'feature-store', name: 'Feature Stores', category: 'core', importance: 'high', description: 'Data management for ML.' },
            { id: 'monitoring', name: 'Model Monitoring', category: 'supporting', importance: 'high', description: 'Detecting drift.' },
            { id: 'k8s-ml', name: 'K8s for ML', category: 'supporting', importance: 'medium', description: 'Kubeflow/Ray.' }
        ]
    },
    {
        id: 'product-manager-role',
        slug: 'product-manager',
        title: 'Product Manager',
        description: 'Lead product strategy, discovery, and development to deliver high user value.',
        icon: 'Target',
        responsibilities: [
            'Product strategy and vision',
            'User discovery and research',
            'Prioritization and roadmapping',
            'Market and competitor analysis'
        ],
        progression: ['Associate PM', 'Product Manager', 'Senior PM', 'VP of Product'],
        skills: [
            { id: 'product-strategy', name: 'Strategy & Vision', category: 'core', importance: 'high', description: 'Market positioning.' },
            { id: 'user-research', name: 'User Discovery', category: 'core', importance: 'high', description: 'Customer interviews.' },
            { id: 'prioritization', name: 'Prioritization', category: 'core', importance: 'high', description: 'RICE/Kano frameworks.' },
            { id: 'analytics', name: 'Product Analytics', category: 'core', importance: 'high', description: 'Amplitude/Mixpanel.' },
            { id: 'ux-basics', name: 'UX Principles', category: 'supporting', importance: 'medium', description: 'User flow design.' }
        ]
    },
    {
        id: 'software-tester',
        slug: 'software-tester',
        title: 'Software Tester',
        description: 'Ensure software quality through rigorous testing, automation, and quality assurance processes.',
        icon: 'Search',
        responsibilities: [
            'Developing test plans and test cases',
            'Executing manual and automated tests',
            'Identifying, documenting, and tracking bugs',
            'Collaborating with developers to improve quality'
        ],
        progression: ['Junior QA Tester', 'QA Engineer', 'Senior QA / Automation Lead', 'QA Architect / Head of Quality'],
        skills: [
            { id: 'manual-testing', name: 'Manual Testing', category: 'core', importance: 'high', description: 'Test plan execution and bug reporting.' },
            { id: 'automation', name: 'Automation', category: 'core', importance: 'high', description: 'Selenium, Playwright, or Cypress.' },
            { id: 'api-testing', name: 'API Testing', category: 'core', importance: 'medium', description: 'Testing REST/GraphQL APIs with Postman.' },
            { id: 'perf-testing', name: 'Performance', category: 'supporting', importance: 'medium', description: 'Load and stress testing.' },
            { id: 'bug-tracking', name: 'Bug Tracking', category: 'supporting', importance: 'high', description: 'Jira or similar tool mastery.' }
        ]
    }
];
