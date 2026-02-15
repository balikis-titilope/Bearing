export const projectManagerContent = {
    levels: [
        {
            id: "pm-l1",
            title: "Junior Project Coordinator",
            skills: [
                {
                    id: "pm-l1-skill-agile",
                    title: "Agile & Scrum Fundamentals",
                    description: "Understand the Agile manifesto and the Scrum framework for professional software delivery.",
                    resources: [
                        { title: "Atlassian: Agile Coach", type: "DOCUMENTATION", url: "https://www.atlassian.com/agile", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Sprint' in Scrum?", options: JSON.stringify(["A fast race.", "A fixed time-box where a 'Done' increment is created.", "A long meeting.", "A type of database."]), correctAnswer: "A fixed time-box where a 'Done' increment is created.", explanation: "Sprints are usually 2-4 weeks long.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Backlog Groomer",
                        description: "Organize a set of messy tasks into a structured Jira-style backlog with priorities and story points.",
                        requirements: JSON.stringify(["Define clear Acceptance Criteria.", "Assign story points.", "Identify dependencies."]),
                        order: 1
                    }
                }
            ]
        },
        {
            id: "pm-l2",
            title: "Intermediate Project Manager",
            skills: [
                {
                    id: "pm-l2-skill-risk",
                    title: "Risk Management",
                    description: "Identify, analyze, and mitigate risks before they derail your project.",
                    resources: [
                        { title: "Risk Management in Agile", type: "ARTICLE", url: "https://www.pmi.org/learning/library/agile-risk-management-9930", duration: 35, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Risk Register'?", options: JSON.stringify(["A list of all project team members.", "A log of identified risks, their severity, and mitigation plans.", "A financial ledger.", "A type of calendar."]), correctAnswer: "A log of identified risks, their severity, and mitigation plans.", explanation: "It is a living document used to track potential issues.", order: 1 }
                    ],
                    miniProject: {
                        title: "Risk Assessment Workshop",
                        description: "Conduct a mock risk assessment for a 'Cloud Migration' project.",
                        requirements: JSON.stringify(["Identify 5 risks.", "Categorize by Impact and Probability.", "Propose a mitigation strategy for each."]),
                        order: 1
                    }
                },
                {
                    id: "pm-l2-skill-stakeholder",
                    title: "Stakeholder Communication",
                    description: "Manage expectations and keep everyone aligned using clear communication strategies.",
                    resources: [
                        { title: "Managing Difficult Stakeholders", type: "VIDEO", url: "https://www.youtube.com/watch?v=Mwd_t1hM-5c", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the best way to handle a stakeholder requesting scope creep?", options: JSON.stringify(["Say yes immediately.", "Ignore them.", "Analyze the impact on timeline/budget and present options.", "Complain to the CEO."]), correctAnswer: "Analyze the impact on timeline/budget and present options.", explanation: "This empowers the stakeholder to make an informed trade-off decision.", order: 1 }
                    ],
                    miniProject: {
                        title: "Communication Plan",
                        description: "Create a communication matrix for a product launch.",
                        requirements: JSON.stringify(["Define who needs to know what.", "Choose the right channel (Email, Slack, Meeting) for each.", "Set frequency of updates."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "pm-l3",
            title: "Senior Project Manager",
            skills: [
                {
                    id: "pm-l3-skill-program",
                    title: "Program Management",
                    description: "Manage multiple related projects to achieve high-level strategic goals.",
                    resources: [
                        { title: "Program vs. Project Management", type: "ARTICLE", url: "https://www.pmi.org/learning/library/program-project-management-difference-7383", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is the main focus of a Program Manager?", options: JSON.stringify(["Debugging code.", "Managing a single team.", "Realizing benefits from a group of related projects.", "Micro-managing tasks."]), correctAnswer: "Realizing benefits from a group of related projects.", explanation: "Programs focus on benefits; Projects focus on deliverables.", order: 1 }
                    ],
                    miniProject: {
                        title: "Program Roadmap",
                        description: "Build a roadmap for a 'Digital Transformation' program consisting of 3 distinct projects.",
                        requirements: JSON.stringify(["Define dependencies between projects.", "Set milestones for the overall program.", "Identify shared resources."]),
                        order: 1
                    }
                },
                {
                    id: "pm-l3-skill-framed",
                    title: "Scaled Agile Frameworks (SAFe)",
                    description: "Apply Agile principles at an enterprise scale.",
                    resources: [
                        { title: "SAFe 6.0 Introduction", type: "DOCUMENTATION", url: "https://scaledagileframework.com/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Release Train' in SAFe?", options: JSON.stringify(["A literal train.", "A team of Agile teams working towards a common solution.", "A software deployment tool.", "A marketing event."]), correctAnswer: "A team of Agile teams working towards a common solution.", explanation: "The Agile Release Train (ART) is the primary value delivery construct in SAFe.", order: 1 }
                    ],
                    miniProject: {
                        title: "PI Planning Simulation",
                        description: "Simulate a Program Increment (PI) planning session.",
                        requirements: JSON.stringify(["Draft a PI Board.", "Identify cross-team dependencies.", "Set PI objectives."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "pm-l4",
            title: "Director of Program Management",
            skills: [
                {
                    id: "pm-l4-skill-portfolio",
                    title: "Portfolio Management",
                    description: "Align the organization's project portfolio with its strategic business objectives.",
                    resources: [
                        { title: "The Standard for Portfolio Management", type: "BOOK_SUMMARY", url: "https://www.pmi.org/pmbok-guide-standards/foundational/standard-for-portfolio-management", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary goal of Portfolio Management?", options: JSON.stringify(["To finish projects fast.", "To choose the 'right' work to do.", "To manage daily tasks.", "To audit finances."]), correctAnswer: "To choose the 'right' work to do.", explanation: "It ensures investment in projects that align with strategy.", order: 1 }
                    ],
                    miniProject: {
                        title: "Strategic Alignment Matrix",
                        description: "Evaluate 5 proposed projects against company goals (e.g., Revenue Growth vs. Customer Retention) and prioritize them.",
                        requirements: JSON.stringify(["Create a scoring model.", "Rank the projects.", "Justify the 'Cut Line'."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};
