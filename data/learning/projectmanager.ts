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
            ],
            finalProject: {
                title: "Backlog-Force - Agile Delivery Engine",
                description: "Design and orchestrate a professional software development sprint using the Scrum framework. This project focuses on high-precision backlog management, acceptance criteria engineering, and velocity tracking.",
                requirements: [
                    "Construct a 20-item product backlog with detailed User Stories in Gherkin format.",
                    "Implement a 'Priority Matrix' using the MoSCoW method for a complex product release.",
                    "Design clear, measurable 'Doneness' criteria (Definition of Done) for the development team.",
                    "Perform a mock 'Story Pointing' session using the Fibonacci sequence.",
                    "Develop a visualized 'Sprint Burndown' chart based on simulated velocity data.",
                    "Achieve documented alignment between stakeholder requirements and technical tasks."
                ],
                guide: [
                    "Step 1: Define the Product Vision and high-level Project Roadmap.",
                    "Step 2: Create the 'Epic' to 'User Story' hierarchy in your project management tool.",
                    "Step 3: Conduct a Backlog Refinement workshop to clarify technical dependencies.",
                    "Step 4: Execute a Sprint Planning simulation and commit to a set of sprint goals.",
                    "Step 5: Build the 'Definition of Done' and 'Definition of Ready' audit lists.",
                    "Step 6: Final demonstration: Present the 'Done' increment and the sprint metrics."
                ],
                hints: [
                    "A good User Story follows the INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable).",
                    "Don't forget technical debt! Allocate at least 15% of your backlog to maintenance tasks.",
                    "Acceptance Criteria should be binary (it either passed or it didn't)."
                ],
                testCases: [{ name: "Backlog Maturity", verify: "100% of sprint items have clear Acceptance Criteria" }, { name: "Velocity Audit", verify: "Burndown chart correctly reflects simulated progress and bottlenecks" }],
            }
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
            ],
            finalProject: {
                title: "Risk-Armor - Enterprise Threat Mitigation",
                description: "Architect a comprehensive risk and stakeholder management strategy for a high-risk enterprise project. Focus on proactive mitigation, professional communication, and crisis-response planning.",
                requirements: [
                    "Develop a master 'Risk Register' with 20+ categorized risks (Technical, Financial, Legal).",
                    "Implement a 'Stakeholder Engagement Matrix' for a multi-department launch.",
                    "Design a 'Crisis Communication Plan' with templates for internal and external updates.",
                    "Perform a 'Force Field Analysis' to identify drivers and resistors for project change.",
                    "Achieve sub-24h turnaround time for high-impact risk mitigation proposals.",
                    "Document the trade-offs between 'Risk Avoidance', 'Mitigation', 'Transfer', and 'Acceptance'."
                ],
                guide: [
                    "Step 1: Conduct a 'Pre-Mortem' workshop to identify all potential failure modes.",
                    "Step 2: Build the 'Risk Armor' scoring system (Probability vs. Impact).",
                    "Step 3: Develop the communication triggers and approval workflows.",
                    "Step 4: Design the 'Change Control' process for managing inevitable scope requests.",
                    "Step 5: Conduct a mock 'Status Update' to a hostile stakeholder group.",
                    "Step 6: Final demonstration: Present a risk-mitigation plan for a sudden 20% budget cut."
                ],
                hints: [
                    "Risks aren't just negatives; some are 'Opportunities' (Positives) that need a 'Capture' plan.",
                    "The best communication plan is the one that prevents 'Surprise' for your boss.",
                    "Always have a 'Plan B' (Contingency) for every 'Critical' risk on your list."
                ],
                testCases: [{ name: "Response Agility", verify: "Risk response plans address all 'High-Impact' scenarios" }, { name: "Alignment Score", verify: "100% of stakeholders have a defined communication frequency and method" }],
            }
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
            ],
            finalProject: {
                title: "Scale-Master - Global Release Synchronization",
                description: "Architect and manage a complex Program Increment (PI) for a multi-team technical organization. Focus on scaled agile governance, cross-team dependency mapping, and global release orchestration.",
                requirements: [
                    "Design a 'Program Board' for a 10-week cycle involving 5 different Agile teams.",
                    "Implement a 'Cross-Team Dependency Matrix' that identifies critical-path bottlenecks.",
                    "Develop a 'Release Governance' framework that coordinates high-stakes cloud deployments.",
                    "Build an automated 'Benefits Tracking' dashboard for the overall program.",
                    "Achieve zero 'Hidden Dependencies' in the final PI planning audit.",
                    "Lead a strategic 'Inspect & Adapt' workshop to solve program-level systemic issues."
                ],
                guide: [
                    "Step 1: Architect the Program Increment structure and set the 'North Star' objectives.",
                    "Step 2: Collect the 'Team Breakouts' and synthesize them into a unified Program Board.",
                    "Step 3: Develop the 'Scrum of Scrums' communication rhythm and status templates.",
                    "Step 4: Implement the 'Emergency Response' protocol for program-level delays.",
                    "Step 5: Conduct a 'Release Readiness' review for a simulated multi-service update.",
                    "Step 6: Final demonstration: Present the Program Roadmap and the benefits-realization scorecard."
                ],
                hints: [
                    "Visualizing dependencies with strings or colored lines (on digital boards) is vital for clarity.",
                    "A 'Program Objective' should be a business result, not just a list of features.",
                    "Decentralized decision-making is the key to velocity at scale; don't be a bottleneck."
                ],
                testCases: [{ name: "Dependency Fidelity", verify: "100% of inter-team blocks are identified and scheduled" }, { name: "Governance Audit", verify: "Release plan contains zero single-point-of-failure human bottlenecks" }],
            }
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
            ],
            finalProject: {
                title: "Strategic-Optics - 100M+ Portfolio Governance",
                description: "Architect and lead the strategic governance of a multi-million dollar project portfolio. Focus on executive alignment, resource optimization, and long-term value realization.",
                requirements: [
                    "Design a 'Strategic Scoring Model' that prioritizes 50+ projects against annual goals.",
                    "Implement a 'Resource Capacity Planner' that identifies over-utilization across a 200+ person org.",
                    "Build an 'Executive Portfolio Dashboard' showing ROI, Risk, and Strategic health.",
                    "Develop a 'Portfolio Pivot' strategy for rapidly re-allocating funds during market shifts.",
                    "Achieve documented 95%+ alignment between project spend and strategic objectives.",
                    "Lead an annual 'Portfolio Review' with simulated C-suite stakeholders."
                ],
                guide: [
                    "Step 1: Set the Portfolio Governance standards and decision-making criteria.",
                    "Step 2: Develop the multi-dimensional scoring matrix (Value vs. Complexity vs. Risk).",
                    "Step 3: Implement the resource-levelling strategy and 'Budget-Guardrails'.",
                    "Step 4: Build the performance-monitoring framework for tracking 'Sunk Costs' vs. 'Return'.",
                    "Step 5: Conduct a 'What-If' scenario analysis for a simulated market crash.",
                    "Step 6: Final demonstration: Present the optimized Portfolio Roadmap and the strategic rationale."
                ],
                hints: [
                    "Saying 'No' to a good project is the hardest part of Portfolio Management; say 'Yes' only to the best.",
                    "Portfolio management is about 'Doing the Right Things', while project management is about 'Doing Things Right'.",
                    "A 'Portfolio' is a living organism; it should be re-balanced at least every quarter."
                ],
                testCases: [{ name: "Resource Efficiency", verify: "Resource allocation plan shows zero 'Critical Overload' (>120%) spots" }, { name: "ROI Projection", verify: "Portfolio financial model accounts for both OPEX and CAPEX impacts" }],
            }
        }
    ]
};
