export const fullStackContent = {
    levels: [
        {
            id: "fs-l1",
            title: "Junior Full Stack Engineer",
            skills: [
                {
                    id: "fs-l1-skill-basics",
                    title: "Web Foundations & Semantic Architecture",
                    description: "Master the structure of the modern web. Learn to build accessible, SEO-friendly, and semantic applications that work across all devices.",
                    resources: [
                        { title: "MDN: Importance of Semantic HTML", type: "ARTICLE", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics", duration: 15, order: 1 },
                        { title: "W3C: Web Accessibility Guidelines", type: "DOCUMENTATION", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", duration: 30, order: 2 }
                    ],
                    questions: [
                        { question: "Why should you use semantic tags like <main> or <article> instead of just <div>?", options: JSON.stringify(["It makes the code shorter.", "It provides meaning to the browser and assistive technologies like screen readers.", "It speeds up the server.", "It changes the text color automatically."]), correctAnswer: "It provides meaning to the browser and assistive technologies like screen readers.", explanation: "Semantic HTML is the foundation of accessible and SEO-optimized web development.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Semantic Portfolio Portal",
                        description: "Build a multi-page personal portfolio using strictly semantic HTML5 and modern CSS layouts (Flex/Grid).",
                        requirements: JSON.stringify(["Use at least 5 different semantic HTML5 tags.", "Implement a responsive navigation bar."]),
                        order: 1
                    }
                },
                {
                    id: "fs-l1-skill-css",
                    title: "CSS Layout Systems (Flex & Grid)",
                    description: "Master modern layout algorithms to build responsive, high-performance interfaces.",
                    resources: [
                        { title: "A Complete Guide to Flexbox", type: "ARTICLE", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", duration: 20, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'fr' stand for in CSS Grid?", options: JSON.stringify(["Fixed Rate", "Fractional unit", "Font Ratio", "Frequency"]), correctAnswer: "Fractional unit", explanation: "1fr is one part of the available space.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Responsive Dashboard",
                        description: "Design a dashboard layout that adapts perfectly from mobile to desktop.",
                        requirements: JSON.stringify(["Use CSS Grid for the layout.", "Implement a sticky sidebar."]),
                        order: 2
                    }
                },
                {
                    id: "fs-l1-skill-js",
                    title: "JavaScript Engine & Logic",
                    description: "Understand how JavaScript works under the hood: scope, hoisting, and the event loop.",
                    resources: [
                        { title: "JavaScript.info: The Modern Tutorial", type: "DOCUMENTATION", url: "https://javascript.info/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a closure?", options: JSON.stringify(["An error.", "A function bundled with its lexical environment.", "A way to close a tab.", "A private variable."]), correctAnswer: "A function bundled with its lexical environment.", explanation: "Closures are a fundamental JS concept.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Task Runner",
                        description: "Build a JavaScript utility that executes a list of functions with a delay between each.",
                        requirements: JSON.stringify(["Use promises and async/await.", "Handle errors gracefully."]),
                        order: 3
                    }
                },
                {
                    id: "fs-l1-skill-backend",
                    title: "Backend Foundations (Node.js)",
                    description: "Learn to build server-side logic and handle HTTP requests.",
                    resources: [
                        { title: "Node.js Guide", type: "DOCUMENTATION", url: "https://nodejs.dev/en/learn/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is Node.js?", options: JSON.stringify(["A database.", "A JavaScript runtime.", "A CSS framework.", "A browser."]), correctAnswer: "A JavaScript runtime.", explanation: "Node.js allows JS to run outside the browser.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Express API",
                        description: "Create a simple API with Express that returns a list of greeting messages.",
                        requirements: JSON.stringify(["Implement a GET route.", "Return JSON data."]),
                        order: 4
                    }
                },
                {
                    id: "fs-l1-skill-database",
                    title: "Database Basics (SQL)",
                    description: "Learn how to store and retrieve data using relational databases.",
                    resources: [
                        { title: "SQL Tutorial", type: "ARTICLE", url: "https://www.w3schools.com/sql/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Which command is used to fetch data?", options: JSON.stringify(["UPDATE", "CREATE", "SELECT", "DELETE"]), correctAnswer: "SELECT", explanation: "SELECT retrieves records.", order: 1 }
                    ],
                    miniProject: {
                        title: "The User Database",
                        description: "Design a schema for a user profile system and write queries to insert and find users.",
                        requirements: JSON.stringify(["Create a Table.", "Write a Join query."]),
                        order: 5
                    }
                }

            ],
            finalProject: {
                title: "Stream-Core - Unified Command Center",
                description: "Design and implement a professional-grade full-stack portal using modern semantic patterns and Node.js. This project focuses on end-to-end data flow, responsive UI engineering, and high-quality API design.",
                requirements: [
                    "Develop a 12-column CSS Grid dashboard with fully semantic HTML5 structure.",
                    "Build a robust Node.js/Express API with full CRUD capabilities for a task engine.",
                    "Implement a relational SQL schema with clear normalization and foreign key constraints.",
                    "Achieve 100/100 Lighthouse accessibility and SEO scores.",
                    "Develop an asynchronous notification system using JavaScript Promises and modern browser APIs.",
                    "Implement a mobile-responsive navigation system that persists state between sessions."
                ],
                guide: [
                    "Step 1: Design the relational database schema and the semantic skeleton of the UI.",
                    "Step 2: Build the core Express server with structured logging and error handling.",
                    "Step 3: Develop the frontend dashboard using CSS Grid and modular styling patterns.",
                    "Step 4: Integrate the data-fetching layer with optimistic UI updates.",
                    "Step 5: Conduct a full accessibility audit and optimize for performance.",
                    "Step 6: Final demonstration: Perform a bulk-data operation and verify database integrity."
                ],
                hints: [
                    "Use 'semantic tags' like <main>, <nav>, and <aside> for perfect accessibility out of the box.",
                    "Always validate user input on BOTH the frontend (UX) and the backend (Security).",
                    "Keep your CSS organized using BEM (Block-Element-Modifier) to avoid global style collisions."
                ],
                testCases: [{ name: "End-to-End Data Flow", verify: "UI correctly reflects database state after high-concurrency writes" }, { name: "Accessibility Score", verify: "Passes 100/100 on standard Lighthouse A11Y audit" }],
            }
        },
        {
            id: "fs-l2",
            title: "Intermediate Full Stack Engineer",
            skills: [
                {
                    id: "fs-l2-skill-mern",
                    title: "Advanced MERN Stack",
                    description: "Deep dive into MongoDB, Express, React, and Node.js integration. Learn to build secure, authenticated, and performant full-stack apps.",
                    resources: [
                        { title: "Full Stack Open", type: "COURSE", url: "https://fullstackopen.com/en/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is the role of 'Mongoose' in the MERN stack?", options: JSON.stringify(["A frontend framework.", "An ODM (Object Data Modeling) library for MongoDB and Node.js.", "A CSS preprocessor.", "A testing tool."]), correctAnswer: "An ODM (Object Data Modeling) library for MongoDB and Node.js.", explanation: "Mongoose provides a schema-based solution to model your application data.", order: 1 }
                    ],
                    miniProject: {
                        title: "E-Commerce Platform",
                        description: "Build a fully functional e-commerce site with product listings, cart functionality, and user authentication.",
                        requirements: JSON.stringify(["Implement JWT Authentication.", "Use Redux Toolkit for global state.", "Connect to MongoDB Atlas."]),
                        order: 1
                    }
                },
                {
                    id: "fs-l2-skill-api",
                    title: "RESTful API Design",
                    description: "Design clean, consistent, and scalable APIs. Understand HATEOAS, versioning, and documentation.",
                    resources: [
                        { title: "Best Practices for REST API Design", type: "ARTICLE", url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the purpose of HTTP Status Code 201?", options: JSON.stringify(["OK.", "Created.", "Accepted.", "No Content."]), correctAnswer: "Created.", explanation: "201 Created is the standard response for impactful POST requests.", order: 1 }
                    ],
                    miniProject: {
                        title: "Public API with Rate Limiting",
                        description: "Create a public API for a 'Blog Service' that external developers can consume.",
                        requirements: JSON.stringify(["Implement API Versioning (/v1/posts).", "Add Rate Limiting specific to API Keys.", "Write Swagger/OpenAPI documentation."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Market-Hive - Global Commerce Ecosystem",
                description: "Architect and build a professional high-security commerce platform using the MERN stack. Focus on advanced authentication, secure payment flows, and structured API versioning.",
                requirements: [
                    "Design a secure authentication layer using JWT with refresh-token rotation.",
                    "Implement a robust Mongoose schema with complex relationships and validation.",
                    "Build a versioned REST API (/v1, /v2) that follows strict HATEOAS principles.",
                    "Integrate an automated rate-limiting and security middleware layer.",
                    "Develop a high-performance global state management strategy using Redux Toolkit.",
                    "Achieve documented 100% test coverage for the core business and payment logic."
                ],
                guide: [
                    "Step 1: Architect the MERN integration and design the security-first data model.",
                    "Step 2: Build the secure authentication and authorization middleware chain.",
                    "Step 3: Develop the versioned API and generate Swagger/OpenAPI documentation.",
                    "Step 4: Build the responsive React frontend with centralized state orchestration.",
                    "Step 5: Conduct a thorough security audit focusing on OWASP Top 10 vulnerabilities.",
                    "Step 6: Final demonstration: Successfully complete a multi-step checkout with real-time audit logs."
                ],
                hints: [
                    "Never store passwords in plain text; use 'bcrypt' with high work-factors.",
                    "API design is a contract: use versioning to avoid breaking changes for users.",
                    "Redux Toolkit's 'createAsyncThunk' is vital for handling complex network state."
                ],
                testCases: [{ name: "Security Audit", verify: "JWT tokens are properly rotated and unauthorized attempts are auto-blocked" }, { name: "Throughput", verify: "API scales to 500+ requests per second with integrated rate-limiting active" }],
            }
        },
        {
            id: "fs-l3",
            title: "Senior Full Stack Engineer",
            skills: [
                {
                    id: "fs-l3-skill-next",
                    title: "Next.js & Server Side Rendering",
                    description: "Master React frameworks. SSR, SSG, ISR, and API routes with Next.js.",
                    resources: [
                        { title: "Next.js Documentation", type: "DOCUMENTATION", url: "https://nextjs.org/docs", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'ISR' in Next.js?", options: JSON.stringify(["Internal Server Routing.", "Incremental Static Regeneration.", "Instant Server Rendering.", "Image Size Reduction."]), correctAnswer: "Incremental Static Regeneration.", explanation: "ISR allows you to update static pages after you've built your site.", order: 1 }
                    ],
                    miniProject: {
                        title: "Real-time Dashboard",
                        description: "Build a real-time analytics dashboard using Next.js and WebSockets (Socket.io or Pusher).",
                        requirements: JSON.stringify(["Server-side render the initial state.", "Update data in real-time.", "Deploy to Vercel."]),
                        order: 1
                    }
                },
                {
                    id: "fs-l3-skill-testing",
                    title: "Full Stack Testing Strategy",
                    description: "End-to-end testing with Cypress/Playwright and Integration testing for APIs.",
                    resources: [
                        { title: "Cypress Docs", type: "DOCUMENTATION", url: "https://docs.cypress.io/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the main benefit of E2E testing?", options: JSON.stringify(["It's fast.", "It tests the application from the user's perspective.", "It replaces unit tests.", "It's cheap."]), correctAnswer: "It tests the application from the user's perspective.", explanation: "E2E tests verify that the entire system works together as expected.", order: 1 }
                    ],
                    miniProject: {
                        title: "CI/CD Pipeline with Tests",
                        description: "Set up a GitHub Action that runs your full test suite and deploys only if tests pass.",
                        requirements: JSON.stringify(["Linting check.", "Unit tests (Jest).", "E2E tests (Playwright).", "Auto-deploy to staging."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Pulse-Dash - Real-Time Enterprise Infrastructure",
                description: "Design and implement a high-scale real-time infrastructure using Next.js, WebSockets, and advanced testing suites. Focus on server-side performance, data hydration, and CI/CD maturity.",
                requirements: [
                    "Develop a real-time command center using Next.js with App Router and ISR.",
                    "Implement a scalable WebSocket architecture for sub-100ms data synchronization.",
                    "Build a comprehensive E2E testing suite using Playwright covering complex user flows.",
                    "Design a zero-downtime deployment strategy using Vercel and feature flags.",
                    "Achieve >90% code coverage across the entire full-stack ecosystem.",
                    "Implement a per-user analytics engine with high-fidelity hydration patterns."
                ],
                guide: [
                    "Step 1: Architect the real-time data flow and Next.js rendering strategy.",
                    "Step 2: Build the WebSocket layer with fallback mechanisms and state reconciliation.",
                    "Step 3: Develop the automated testing suite and integrate it into a GitHub Actions pipeline.",
                    "Step 4: Implement the server-side patterns (SSG/ISR) for high-performance dashboard loads.",
                    "Step 5: Conduct a performance 'Stress Test' on the real-time data bridge.",
                    "Step 6: Final demonstration: Coordinate a multi-user real-time event with zero lag or data loss."
                ],
                hints: [
                    "Incremental Static Regeneration (ISR) is the best pattern for high-traffic dashboards.",
                    "WebSockets are powerful but require careful 'Connection Pooling' at scale.",
                    "Always run E2E tests in a clean container environment to avoid 'Flaky' results."
                ],
                testCases: [{ name: "Real-time Sync", verify: "Changes propagate to all connected clients in <200ms" }, { name: "Deployment Safety", verify: "CI/CD pipeline catches and blocks intentional regression pushes 100% of the time" }],
            }
        },
        {
            id: "fs-l4",
            title: "Principal Full Stack Architect",
            skills: [
                {
                    id: "fs-l4-skill-sysdesign",
                    title: "System Design & Scalability",
                    description: "Architect systems for millions of users. Load balancing, Caching strategies, and Database sharding.",
                    resources: [
                        { title: "System Design Primer", type: "ARTICLE", url: "https://github.com/donnemartin/system-design-primer", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Horizontal Scaling'?", options: JSON.stringify(["Adding more RAM to a server.", "Adding more servers to the pool.", "Optimizing code.", "Using a faster database."]), correctAnswer: "Adding more servers to the pool.", explanation: "It is often preferred over vertical scaling (adding more power to one machine) for redundancy and limitlessness.", order: 1 }
                    ],
                    miniProject: {
                        title: "Clone a Tech Giant",
                        description: "Design the high-level architecture for a system like 'Uber' or 'Netflix'.",
                        requirements: JSON.stringify(["Create a detailed architecture diagram.", "Define the data model.", "Explain how to handle peak traffic loads."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Apex-System - Million-User Strategic Architecture",
                description: "Architect a global-scale software ecosystem designed to handle millions of concurrent users. Focus on distributed systems, data sharding, global caching, and high-availability governance.",
                requirements: [
                    "Design a multi-region distributed architecture with high-fidelity load balancing.",
                    "Implement a strategic data sharding and replication plan for global consistency.",
                    "Build a high-performance caching layer using Redis and CDN edge patterns.",
                    "Design a 'Disaster Recovery' protocol with documented sub-minute RTO (Recovery Time Objective).",
                    "Develop a strategic plan for micro-service isolation and service-mesh governance.",
                    "Lead an architectural 'Deep Dive' with simulated VP-level stakeholders."
                ],
                guide: [
                    "Step 1: Architect the high-level system components and data flow for global scale.",
                    "Step 2: Develop the multi-region failover and traffic routing strategy.",
                    "Step 3: Implement the data persistence strategy (Sharding, Archiving, Consistency).",
                    "Step 4: Build the observability and alerting plane for global system health.",
                    "Step 5: Conduct a 'Gameday' drill: Simulate a total regional outage and verify auto-recovery.",
                    "Step 6: Final demonstration: Present the unified Strategic Technical Roadmap to the board."
                ],
                hints: [
                    "Consistency vs. Availability (CAP Theorem) is the defining trade-offs for principal architects.",
                    "A 'Service Mesh' is a powerful way to manage security and observability in large ecosystems.",
                    "Design for failure: every component in your system WILL fail at some point."
                ],
                testCases: [{ name: "High Availability", verify: "System maintains availability during simulated 50% regional failure" }, { name: "Linear Scalability", verify: "Performance correlates linearly with the addition of horizontally scaled nodes" }],
            }
        }
    ]
};
