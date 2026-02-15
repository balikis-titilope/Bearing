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
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
};
