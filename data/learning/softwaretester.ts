export const softwareTesterContent = {
    levels: [
        {
            id: "st-l1",
            title: "Junior QA Tester",
            skills: [
                {
                    id: "st-l1-skill-manual",
                    title: "Manual Testing Foundations",
                    description: "Learn how to write effective test cases, identify bugs, and document steps to reproduce issues accurately.",
                    resources: [
                        { title: "Software Testing Fundamentals", type: "ARTICLE", url: "http://softwaretestingfundamentals.com/software-testing-basics/", duration: 25, order: 1 },
                        { title: "How to Write a Bug Report", type: "DOCUMENTATION", url: "https://www.softwaretestinghelp.com/how-to-write-a-good-bug-report/", duration: 15, order: 2 }
                    ],
                    questions: [
                        { question: "What is a 'Test Case'?", options: JSON.stringify(["An error message.", "A set of conditions or variables under which a tester will determine whether a system under test satisfies requirements.", "A type of code.", "A user manual."]), correctAnswer: "A set of conditions or variables under which a tester will determine whether a system under test satisfies requirements.", explanation: "Test cases are the basic building blocks of software testing.", order: 1 },
                        { question: "What does 'Regression Testing' mean?", options: JSON.stringify(["Testing a new feature.", "Testing that existing functionality still works after a change.", "Testing for speed.", "Testing for security."]), correctAnswer: "Testing that existing functionality still works after a change.", explanation: "It ensures that code changes haven't broken current features.", order: 2 }
                    ],
                    miniProject: {
                        title: "The E-commerce Bug Bounty",
                        description: "Audit a sample e-commerce site for logic errors, UI inconsistencies, and broken links. Document your findings in a professional bug report format.",
                        requirements: JSON.stringify(["Find at least 5 unique bugs.", "Write reproduction steps for each.", "Assign severity and priority.", "Suggest expected behavior."]),
                        order: 1
                    }
                },
                {
                    id: "st-l1-skill-api",
                    title: "API Testing with Postman",
                    description: "Learn how to test RESTful APIs, verify status codes, and validate JSON responses using Postman.",
                    resources: [
                        { title: "Postman: API Testing Guide", type: "VIDEO", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Which HTTP status code represents 'Created'?", options: JSON.stringify(["200", "201", "400", "404"]), correctAnswer: "201", explanation: "Status 201 is returned when a resource is successfully created.", order: 1 }
                    ],
                    miniProject: {
                        title: "Public API Validator",
                        description: "Write a collection of tests for a public API (like JSONPlaceholder) to verify all CRUD operations.",
                        requirements: JSON.stringify(["Test GET, POST, and DELETE endpoints.", "Verify response schemas.", "Check for correct error codes on invalid requests."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Bug-Hunter - Global Commerce Audit",
                description: "Perform a professional, multi-dimensional quality audit on a complex e-commerce platform. This project focuses on high-fidelity test case design, edge-case discovery, and professional defect communication.",
                requirements: [
                    "Design a comprehensive test suite of 40+ manual test cases covering all 'Critical' user flows.",
                    "Identify and document 10+ unique defects using a standardized 'Bug Report' template.",
                    "Perform a cross-browser and cross-device UI consistency audit.",
                    "Develop an API regression collection in Postman with automated assertions.",
                    "Achieve documented 100% requirement coverage for the 'Checkout' module.",
                    "Submit a final 'Quality Scorecard' that ranks release readiness based on bug density."
                ],
                guide: [
                    "Step 1: Perform a deep requirement analysis of the target e-commerce platform.",
                    "Step 2: Build the 'Bug Hunter' test plan with clear Scope and Out-of-Scope boundaries.",
                    "Step 3: Execute exploratory testing to find 'Zero-Day' logic errors.",
                    "Step 4: Develop the API validation suite using Postman scripts (Tests/Assertions).",
                    "Step 5: Conduct a thorough regression cycle to verify historical fixes.",
                    "Step 6: Final demonstration: Present your defect registry and release recommendation to stakeholders."
                ],
                hints: [
                    "Think like a malicious user: what happens if I subtract items in the cart to get a negative total?",
                    "A good bug report includes: Title, Summary, Severity, Steps, Actual Result, and Expected Result.",
                    "Always verify the 'Empty State' of lists, carts, and search results."
                ],
                testCases: [{ name: "Defect Precision", verify: "100% of reported bugs are reproducible following the documented steps" }, { name: "API Integrity", verify: "Postman collection passes all 20+ automated status-code checks" }],
            }
        },
        {
            id: "st-l2",
            title: "Intermediate QA Automation",
            skills: [
                {
                    id: "st-l2-skill-selenium",
                    title: "Web Automation with Selenium/Cypress",
                    description: "Transition from manual to automated testing. Learn to write scripts that interact with web browsers.",
                    resources: [
                        { title: "Cypress Real World App", type: "DOCUMENTATION", url: "https://learn.cypress.io/", duration: 45, order: 1 },
                        { title: "Selenium WebDriver Fundamentals", type: "VIDEO", url: "https://www.youtube.com/watch?v=FRn5J31eAMw", duration: 60, order: 2 }
                    ],
                    questions: [
                        { question: "What is the primary advantage of automated testing over manual testing?", options: JSON.stringify(["It's cheaper upfront.", "It's faster for repeated execution.", "It eliminates the need for testers.", "It's always 100% accurate."]), correctAnswer: "It's faster for repeated execution.", explanation: "Automation shines in regression testing where the same tests are run frequently.", order: 1 }
                    ],
                    miniProject: {
                        title: "Login & Checkout Automator",
                        description: "Create a Cypress or Selenium script that automates the login process and a simple checkout flow on a demo site.",
                        requirements: JSON.stringify(["Automate valid and invalid login attempts.", "Verify successful redirect after login.", "Add item to cart and verify total."]),
                        order: 1
                    }
                },
                {
                    id: "st-l2-skill-sql",
                    title: "SQL for Testers",
                    description: "Verify data integrity directly in the database. Learn to write queries to validate application states.",
                    resources: [
                        { title: "SQL Bolt: Learn SQL", type: "EXERCISE", url: "https://sqlbolt.com/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Which SQL command retrieves data from a database?", options: JSON.stringify(["GET", "FETCH", "SELECT", "RETRIEVE"]), correctAnswer: "SELECT", explanation: "SELECT is the standard command to query data.", order: 1 }
                    ],
                    miniProject: {
                        title: "Data Validator Script",
                        description: "Write SQL queries to verify that a new user registration correctly populates the 'users' and 'profiles' tables.",
                        requirements: JSON.stringify(["Join two tables to verify relationships.", "Check for NULL values where forbidden.", "Verify timestamp accuracy."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Flow-Gate - End-to-End Automation Suite",
                description: "Architect and build a high-fidelity automated testing suite for a modern web application. Focus on the Page Object Model (POM), data-driven testing, and database validation.",
                requirements: [
                    "Develop a Cypress/Playwright automation suite using the Page Object Model (POM).",
                    "Implement a 'Data-Driven' testing layer that reads test data from JSON/CSV files.",
                    "Build an automated database-state check using SQL to verify UI actions.",
                    "Achieve >80% automated coverage of the core 'Happy-Path' flows.",
                    "Implement a sequence of 'API-Seeding' steps to ensure a clean test environment.",
                    "Document the automation 'Flakiness' strategy (e.g., Retry logic, Wait patterns)."
                ],
                guide: [
                    "Step 1: Map the application's DOM and design the Page Object classes.",
                    "Step 2: Build the core automation scripts with sophisticated selector strategies (Data-IDs).",
                    "Step 3: Develop the database-connection layer for back-end verification.",
                    "Step 4: Implement the automated reporting dashboard using Mochawesome or similar.",
                    "Step 5: Conduct a 'Stress Test' on your automation to ensure zero flakiness in the CI environment.",
                    "Step 6: Final demonstration: A 5-minute automated demo showing the suite catch an intentional bug."
                ],
                hints: [
                    "Avoid using 'wait(5000)'; instead, use 'intercept' or 'waitFor' specific elements/network-calls.",
                    "Don't automate everything: focus on high-value, high-risk regression flows.",
                    "Clear your database state before every test run to prevent 'Dirty Data' failures."
                ],
                testCases: [{ name: "Suite Stability", verify: "Zero false-negative results across 10 consecutive runs" }, { name: "POM Accuracy", verify: "All UI elements mapped correctly to reusable Page Object methods" }],
            }
        },
        {
            id: "st-l3",
            title: "Senior QA Engineer",
            skills: [
                {
                    id: "st-l3-skill-cicd",
                    title: "CI/CD Integration",
                    description: "Integrate your automated tests into the build pipeline using tools like Jenkins, GitHub Actions, or GitLab CI.",
                    resources: [
                        { title: "Continuous Testing in DevOps", type: "ARTICLE", url: "https://www.atlassian.com/continuous-delivery/principles/continuous-testing", duration: 25, order: 1 }
                    ],
                    questions: [
                        { question: "When should automated tests ideally run in a CI/CD pipeline?", options: JSON.stringify(["Only before release.", "On every commit or pull request.", "Once a week.", "Manually triggered by QA."]), correctAnswer: "On every commit or pull request.", explanation: "This ensures immediate feedback to developers if they break existing functionality.", order: 1 }
                    ],
                    miniProject: {
                        title: "Pipeline Gatekeeper",
                        description: "Create a GitHub Action workflow that prevents a PR merge if your Cypress tests fail.",
                        requirements: JSON.stringify(["Set up GitHub Actions.", "Run tests on push.", "Block merge on failure."],),
                        order: 1
                    }
                },
                {
                    id: "st-l3-skill-load",
                    title: "Performance & Load Testing",
                    description: "Ensure the system can handle high traffic using tools like JMeter or k6.",
                    resources: [
                        { title: "k6: Load Testing for Developers", type: "DOCUMENTATION", url: "https://k6.io/docs/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between Load Testing and Stress Testing?", options: JSON.stringify(["They are the same.", "Load testing checks normal expected traffic; Stress testing pushes beyond limits.", "Stress testing is easier.", "Load testing involves users physically logging in."]), correctAnswer: "Load testing checks normal expected traffic; Stress testing pushes beyond limits.", explanation: "Stress testing aims to find the breaking point of the system.", order: 1 }
                    ],
                    miniProject: {
                        title: "Black Friday Simulator",
                        description: "Write a k6 script to simulate 1000 concurrent users hitting the checkout API endpoint.",
                        requirements: JSON.stringify(["Scale from 0 to 1000 users over 1 minute.", "Assert that 95% of requests complete under 500ms.", "Graph the results."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Reliability-First - Full-Scale Performance Bench",
                description: "Design and execute a high-scale performance and reliability test suite. Focus on identifying bottlenecks, measuring 'Apdex' scores, and automated CI/CD performance gating.",
                requirements: [
                    "Develop a sophisticated load-test script using k6 or JMeter for a multi-user scenario.",
                    "Implement a CI-based 'Performance Gate' that fails builds if p99 latency exceeds a threshold.",
                    "Build a 'Stress Test' that identifies the system breaking point (Max Throughput).",
                    "Implement a monitoring integration that tracks CPU/RAM usage during high-load events.",
                    "Achieve documented 99% uptime during a simulated 'Black Friday' traffic spike.",
                    "Conduct a thorough 'Endurance Test' that checks for memory leaks over a 24-hour period."
                ],
                guide: [
                    "Step 1: Define the performance SLAs (Service Level Agreements) and SLIs (Service Level Indicators).",
                    "Step 2: Build the 'Reliability-First' load script with realistic user-behavior modeling.",
                    "Step 3: Execute the baseline tests and identify the current system 'Bottleneck'.",
                    "Step 4: Implement the automated performance gates in your GitHub/GitLab pipeline.",
                    "Step 5: Conduct a 'Chaos' performance test (Load + Random service failures).",
                    "Step 6: Final demonstration: Present a 'Performance Scaling Report' with clear optimization recommendations."
                ],
                hints: [
                    "Don't just measure 'Average' latency; it hides the experience of the unluckiest 1% (p99).",
                    "Warm up your system before starting the main load test to ensure accurate measurements.",
                    "Monitoring your database during load tests is vital; it's usually the first thing to break."
                ],
                testCases: [{ name: "Load Threshold", verify: "System maintains <500ms latency at 500 RPS" }, { name: "Failover Resilience", verify: "Load test identifies successful traffic rerouting during pod failure" }],
            }
        },
        {
            id: "st-l4",
            title: "Staff QA Architect",
            skills: [
                {
                    id: "st-l4-skill-strategy",
                    title: "Test Strategy & Planning",
                    description: "Define the overall quality strategy for large-sclae systems. Balance manual vs automated, and unit vs integration testing.",
                    resources: [
                        { title: "Google Testing Blog", type: "ARTICLE", url: "https://testing.googleblog.com/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Testing Pyramid'?", options: JSON.stringify(["A scheme.", "A model suggesting more unit tests, fewer integration tests, and fewest E2E tests.", "A management structure.", "A database schema."]), correctAnswer: "A model suggesting more unit tests, fewer integration tests, and fewest E2E tests.", explanation: "It advocates for a stable base of fast, cheap unit tests.", order: 1 }
                    ],
                    miniProject: {
                        title: "Enterprise Quality Masterplan",
                        description: "Draft a comprehensive Test Strategy document for a new banking application.",
                        requirements: JSON.stringify(["Define scope for Unit, Integration, and E2E.", "Outline tool selection reasoning.", "Define 'Ready for Release' criteria."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Quality-Sync - Enterprise Testing Governance",
                description: "Architect and lead a global quality transformation for a large-scale engineering organization. Focus on testing maturity models, automated quality-as-code, and predictive defect analytics.",
                requirements: [
                    "Design an enterprise-wide 'Testing Maturity Framework' for across 10+ engineering teams.",
                    "Implement a 'Quality-as-Code' infrastructure that automates test environment provisioning.",
                    "Build a centralized 'Quality Intelligence' dashboard synthesizes data from Jira, GitHub, and Test tools.",
                    "Develop a strategic 'Shift-Left' program that implements automated unit-testing gates for all devs.",
                    "Achieve a 50% reduction in production-escaped defects over a 6-month simulated period.",
                    "Lead an executive 'Quality Governance' council with simulated engineering leadership."
                ],
                guide: [
                    "Step 1: Conduct a 'Quality Audit' of current engineering practices and find high-risk gaps.",
                    "Step 2: Develop the centralized 'Quality Dashboard' to provide visibility into team health.",
                    "Step 3: Implement the automated 'Quality-Gate' policies for the entire organization.",
                    "Step 4: Build the predictive model for identifying high-risk code changes before merge.",
                    "Step 5: Conduct a thorough 'Root Cause Analysis' (RCA) on a simulated major production outage.",
                    "Step 6: Final demonstration: Present the 'Zero-Defect' cultural roadmap and investment plan."
                ],
                hints: [
                    "Culture is more important than tools: if devs don't care about quality, no tool will save you.",
                    "Automated 'Quality Metrics' (like code coverage) are good pointers but shouldn't be the only goal.",
                    "Staff QA's job is to enable the whole team to own quality, not to be the only ones testing."
                ],
                testCases: [{ name: "Governance Impact", verify: "100% of teams are compliant with the new PR quality-gate policies" }, { name: "Detection Speed", verify: "Median time to detect a regression reduced by 70% with the new suite" }],
            }
        }
    ]
};
