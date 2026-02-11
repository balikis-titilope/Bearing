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
            { id: 'nodejs', name: 'Node.js', category: 'core', importance: 'high', description: 'Server-side JavaScript.' },
            { id: 'sql', name: 'SQL', category: 'core', importance: 'high', description: 'Relational databases.' },
            { id: 'apis', name: 'REST APIs', category: 'core', importance: 'high', description: 'System communication.' },
            { id: 'docker', name: 'Docker', category: 'supporting', importance: 'medium', description: 'Containerization.' }
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
            { id: 'python', name: 'Python', category: 'core', importance: 'high', description: 'Data processing.' },
            { id: 'sql', name: 'SQL', category: 'core', importance: 'high', description: 'Data querying.' },
            { id: 'tableau', name: 'Tableau', category: 'supporting', importance: 'high', description: 'Visualization.' },
            { id: 'stats', name: 'Statistics', category: 'core', importance: 'medium', description: 'Analytical foundation.' }
        ]
    },
    {
        id: 'fullstack-dev',
        slug: 'fullstack-developer',
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
            { id: 'html', name: 'HTML5', category: 'core', importance: 'high', description: 'Semantic structure.' },
            { id: 'css', name: 'CSS3', category: 'core', importance: 'high', description: 'Styling and layout.' },
            { id: 'js', name: 'JavaScript', category: 'core', importance: 'high', description: 'Interactive logic.' },
            { id: 'react', name: 'React', category: 'supporting', importance: 'high', description: 'Frontend framework.' },
            { id: 'nodejs', name: 'Node.js', category: 'core', importance: 'high', description: 'Backend runtime.' },
            { id: 'sql', name: 'SQL', category: 'core', importance: 'high', description: 'Database management.' },
            { id: 'git', name: 'Git', category: 'supporting', importance: 'high', description: 'Version control.' }
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
            { id: 'javascript', name: 'JavaScript', category: 'core', importance: 'high', description: 'Core language.' },
            { id: 'typescript', name: 'TypeScript', category: 'supporting', importance: 'high', description: 'Type safety.' },
            { id: 'state-management', name: 'State Management', category: 'supporting', importance: 'medium', description: 'Redux/MobX.' }
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
            { id: 'docker', name: 'Docker', category: 'core', importance: 'high', description: 'Containerization.' },
            { id: 'kubernetes', name: 'Kubernetes', category: 'core', importance: 'high', description: 'Container orchestration.' },
            { id: 'aws', name: 'AWS', category: 'core', importance: 'high', description: 'Cloud platform.' },
            { id: 'terraform', name: 'Terraform', category: 'supporting', importance: 'medium', description: 'Infrastructure as code.' }
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
            { id: 'figma', name: 'Figma', category: 'core', importance: 'high', description: 'Design tool.' },
            { id: 'design-principles', name: 'Design Principles', category: 'core', importance: 'high', description: 'Visual fundamentals.' },
            { id: 'prototyping', name: 'Prototyping', category: 'supporting', importance: 'high', description: 'Interactive mockups.' },
            { id: 'html-css', name: 'HTML/CSS', category: 'supporting', importance: 'medium', description: 'Basic web skills.' }
        ]
    },
    {
        id: 'product-manager',
        slug: 'product-manager',
        title: 'Product Manager',
        description: 'Lead product strategy and development to deliver user value.',
        icon: 'Briefcase',
        responsibilities: [
            'Product strategy definition',
            'Feature prioritization',
            'User research and analysis',
            'Cross-functional team leadership'
        ],
        progression: ['Associate PM', 'Product Manager', 'Senior PM', 'Director of Product'],
        skills: [
            { id: 'analytics', name: 'Data Analytics', category: 'core', importance: 'high', description: 'Data-driven decisions.' },
            { id: 'user-research', name: 'User Research', category: 'core', importance: 'high', description: 'Understanding users.' },
            { id: 'agile', name: 'Agile/Scrum', category: 'supporting', importance: 'high', description: 'Development methodology.' },
            { id: 'communication', name: 'Communication', category: 'core', importance: 'high', description: 'Team collaboration.' }
        ]
    }
];
