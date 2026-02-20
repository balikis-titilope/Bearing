export const productManagerContent = {
    levels: [
        {
            id: "pmr-l1",
            title: "Associate Product Manager",
            skills: [
                {
                    id: "pmr-l1-skill-strategy",
                    title: "Product Strategy & Vision",
                    description: "Learn how to define a product's 'North Star' and align features with market needs.",
                    resources: [
                        { title: "Product School: Product Strategy Guide", type: "ARTICLE", url: "https://productschool.com/blog/product-management/product-strategy/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'North Star Metric'?", options: JSON.stringify(["The total revenue.", "The single metric that best captures the core value your product delivers to customers.", "The number of employees.", "The stock price."]), correctAnswer: "The single metric that best captures the core value your product delivers to customers.", explanation: "It aligns the team toward a common goal of user value.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Vision Board",
                        description: "Create a 1-page vision document for a hypothetical fitness app for seniors.",
                        requirements: JSON.stringify(["Identify target segment.", "Define 3 core value propositions.", "Set a North Star metric."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Launchpad - MVP Strategy & Definition",
                description: "Define the complete strategy and MVP scope for a disruptive new product in the circular economy space. This project focuses on market positioning and value definition.",
                requirements: [
                    "Complete a competitive landscape analysis (3+ competitors).",
                    "Define a unique value proposition (UVP) and target user personas.",
                    "Develop a prioritized MVP feature list using the MoSCoW framework.",
                    "Define the primary North Star Metric and 3 supporting KPIs.",
                    "Create a 6-month high-level roadmap."
                ],
                guide: [
                    "Step 1: Conduct market research and identify gaps in the 'circular economy' market.",
                    "Step 2: Define your core persona and their primary pain points.",
                    "Step 3: Define the MVP scope - what is the minimum needed to solve the pain?",
                    "Step 4: Establish success metrics - how will you know it's working?",
                    "Step 5: Draft the product roadmap and stakeholder communication plan."
                ],
                hints: [
                    "Don't build everything: focus on the 'Minimum' in MVP.",
                    "A good roadmap is about outcomes, not just a list of features.",
                    "Use RICE scoring for initial prioritization before refining with MoSCoW."
                ],
                testCases: [{ name: "Strategy Depth", verify: "Manual review of competitive analysis" }, { name: "Prioritization Logic", verify: "Check MoSCoW alignment with UVP" }],
            }
        },
        {
            id: "pmr-l2",
            title: "Product Manager",
            skills: [
                {
                    id: "pmr-l2-skill-discovery",
                    title: "User Discovery & Research",
                    description: "Master customer interviews, usability testing, and synthesis of qualitative data.",
                    resources: [
                        { title: "The Mom Test Summary", type: "ARTICLE", url: "https://www.lapa.ninja/blog/the-mom-test-summary/", duration: 20, order: 1 }
                    ],
                    questions: [
                        { question: "What is a major pitfall in customer interviews?", options: JSON.stringify(["Asking about the past.", "Asking for feedback on an idea (leading questions).", "Recording the call.", "Taking notes."]), correctAnswer: "Asking for feedback on an idea (leading questions).", explanation: "People will lie to be nice; ask about their actual problems instead.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Interview Script",
                        description: "Write a script for 5 discovery questions that follow 'The Mom Test' principles.",
                        requirements: JSON.stringify(["No leading questions.", "Focus on past behavior.", "Avoid hypothetical 'would you' questions."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Discovery Engine - Deep User Validation",
                description: "Run a full discovery cycle for a major feature pivot. Synthesize user research into a validated product requirement document (PRD).",
                requirements: [
                    "Design and execute a user interview plan (3+ simulated scripts).",
                    "Synthesize qualitative feedback into an 'Insight Map'.",
                    "Develop a low-fidelity prototype or user flow for the solution.",
                    "Write a comprehensive PRD with clear user stories and acceptance criteria.",
                    "Define the 'Definition of Ready' for the engineering team."
                ],
                guide: [
                    "Step 1: Identify critical assumptions that need validation.",
                    "Step 2: Draft non-leading interview questions focusing on problem discovery.",
                    "Step 3: Synthesize findings into 'Jobs-to-be-Done' statements.",
                    "Step 4: Draft the user flows and wireframes for the proposed feature.",
                    "Step 5: Consolidate everything into a professional PRD."
                ],
                hints: [
                    "Focus on 'Why' before 'How'.",
                    "Acceptance criteria should be unambiguous and testable.",
                    "Consider edge cases and 'happy paths' in your user stories."
                ],
                testCases: [{ name: "PRD Quality", verify: "Complete User Stories & AC" }, { name: "Discovery Logic", verify: "Insights tied directly to proposed features" }],
            }
        },
        {
            id: "pmr-l3",
            title: "Senior Product Manager",
            skills: [
                {
                    id: "pmr-l3-skill-prioritization",
                    title: "Advanced Prioritization",
                    description: "Learn to manage complex stakeholders and use data-driven frameworks like RICE and Kano.",
                    resources: [
                        { title: "Intercom: RICE Prioritization", type: "ARTICLE", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/", duration: 25, order: 1 }
                    ],
                    questions: [
                        { question: "In RICE, what does 'Confidence' represent?", options: JSON.stringify(["How happy the team is.", "A percentage score representing how sure you are about your estimates.", "The CEO's interest.", "The budget size."]), correctAnswer: "A percentage score representing how sure you are about your estimates.", explanation: "It acts as a buffer against optimistic bias.", order: 1 }
                    ],
                    miniProject: {
                        title: "The RICE Backlog",
                        description: "Score 5 competing features using the RICE framework and defend your top choice.",
                        requirements: JSON.stringify(["Calculate Reach, Impact, Confidence, Effort.", "Provide rationale for scores.", "Rank the results."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Scale-Master - Strategic Backlog Management",
                description: "Take over a bloated, conflicting product backlog for an enterprise SaaS tool. Re-align the product with a new 'Efficiency' quarterly theme.",
                requirements: [
                    "Audit a backlog of 20+ features and categorize by strategic alignment.",
                    "Apply RICE scoring with detailed evidence for each parameter.",
                    "Negotiate and resolve 3 simulated stakeholder conflicts (Scenario based).",
                    "Create a 3-month tactical roadmap focused on 'Efficiency' outcome.",
                    "Present a 'Kill List' of features that no longer fit the strategy."
                ],
                guide: [
                    "Step 1: Review the new strategic theme (Efficiency) and define its success criteria.",
                    "Step 2: Audit the current backlog and identify misalignments.",
                    "Step 3: Apply your prioritization framework to create a data-driven ranking.",
                    "Step 4: Draft the communication plan for stakeholders whose features were deprioritized.",
                    "Step 5: Finalize the theme-aligned roadmap."
                ],
                hints: [
                    "Saying 'No' is the most important part of the job.",
                    "Be transparent about your scoring logic to gain stakeholder trust.",
                    "Focus on high-leverage features that move the primary metric."
                ],
                testCases: [{ name: "Strategic Alignment", verify: "Top 3 features match 'Efficiency' theme" }, { name: "Backlog ROI", verify: "Highest RICE scores prioritized" }],
            }
        },
        {
            id: "pmr-l4",
            title: "VP of Product",
            skills: [
                {
                    id: "pmr-l4-skill-analytics",
                    title: "Product Analytics & Growth",
                    description: "Funnel analysis, cohort retention, and data-driven growth loops.",
                    resources: [
                        { title: "Amplitude: Retention Playbook", type: "DOCUMENTATION", url: "https://www.amplitude.com/retention-playbook", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Aha Moment'?", options: JSON.stringify(["A good idea.", "The moment a user first realizes the core value of your product.", "When the app crashes.", "When the user pays."]), correctAnswer: "The moment a user first realizes the core value of your product.", explanation: "Improving time-to-aha is critical for onboarding success.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Retention Audit",
                        description: "Analyze a sample cohort chart and identify where the 'leak' in the funnel is occurring.",
                        requirements: JSON.stringify(["Identify Day 1 vs Day 7 retention drop-off.", "Propose 2 hypotheses for the churn.", "Define an experiment to fix it."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Growth OS - Global Expansion Strategy",
                description: "Design a comprehensive growth and retention system for a global platform. Focus on unit economics, LTV/CAC, and sustainable scaling.",
                requirements: [
                    "Design a complex growth loop (Viral or Content-driven).",
                    "Perform a deep-dive churn analysis on simulated data sets.",
                    "Define a strategy for improving LTV (Lifetime Value) by 25%.",
                    "Architect a global experimentation framework (A/B testing at scale).",
                    "Develop a product leadership organizational structure for a 50-person product team."
                ],
                guide: [
                    "Step 1: Analyze current unit economics and identify opportunities for optimization.",
                    "Step 2: Map out the existing user journey and identify friction points.",
                    "Step 3: Design growth experiments targeting high-impact areas of the funnel.",
                    "Step 4: Draft a long-term retention strategy based on behavioral cohorts.",
                    "Step 5: Construct the organizational and cultural framework for the product team."
                ],
                hints: [
                    "Retention is the foundation of growth; don't pour water into a leaky bucket.",
                    "LTV/CAC ratio should ideally be > 3 for a healthy business.",
                    "Experimentation should be a continuous cycle, not a one-off event."
                ],
                testCases: [{ name: "Growth Logic", verify: "Sustainable unit economics" }, { name: "Org Design", verify: "Scalable structure with clear ownership" }],
            }
        }
    ]
};
