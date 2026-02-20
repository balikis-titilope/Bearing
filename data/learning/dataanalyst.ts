export const dataAnalystContent = {
    levels: [
        {
            id: "da-l1",
            title: "Junior Data Analyst",
            skills: [
                {
                    id: "da-l1-skill-sql",
                    title: "SQL Foundations for Analytics",
                    description: "Master the language of data. Learn to write complex queries to extract, filter, and summarize information from relational databases.",
                    resources: [
                        { title: "Mode Analytics: SQL Tutorial", type: "ARTICLE", url: "https://mode.com/sql-tutorial/", duration: 60, order: 1 },
                        { title: "SQLZOO: Interactive Exercises", type: "EXERCISE", url: "https://sqlzoo.net/wiki/SQL_Tutorial", duration: 45, order: 2 }
                    ],
                    questions: [
                        { question: "What is the primary purpose of the 'SELECT' statement?", options: JSON.stringify(["To delete data.", "To update records.", "To retrieve data from a database.", "To create a table."]), correctAnswer: "To retrieve data from a database.", explanation: "SELECT is the fundamental command for querying data.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Sales Performance Analyst",
                        description: "Extract insights from a raw sales database to identify top-performing regions.",
                        requirements: JSON.stringify(["Calculate total revenue per month.", "Identify top 5 customers."]),
                        order: 1
                    }
                },
                {
                    id: "da-l1-skill-python",
                    title: "Python for Data Data Science (NumPy)",
                    description: "Learn the core library for numerical computing in Python.",
                    resources: [
                        { title: "NumPy Basics", type: "DOCUMENTATION", url: "https://numpy.org/doc/stable/user/absolute_beginners.html", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is an ndarray?", options: JSON.stringify(["A web tag.", "A N-dimensional array.", "A type of list.", "A database."]), correctAnswer: "A N-dimensional array.", explanation: "It is the core data structure in NumPy.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Array Processor",
                        description: "Clean and normalize a raw dataset using NumPy vectorization.",
                        requirements: JSON.stringify(["Handle missing values.", "Perform element-wise operations."]),
                        order: 2
                    }
                },
                {
                    id: "da-l1-skill-pandas",
                    title: "Tabular Data Mastery (Pandas)",
                    description: "Master the DataFrame object for data cleaning and transformation.",
                    resources: [
                        { title: "Pandas: 10 minutes to pandas", type: "DOCUMENTATION", url: "https://pandas.pydata.org/docs/user_guide/10min.html", duration: 20, order: 1 }
                    ],
                    questions: [
                        { question: "What is a DataFrame?", options: JSON.stringify(["A 1D array.", "A 2D labeled data structure.", "A type of chart.", "A server."]), correctAnswer: "A 2D labeled data structure.", explanation: "DataFrames are the heart of Pandas.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Titanic Survivor Profile",
                        description: "Analyze the Titanic dataset to find survival patterns based on demographics.",
                        requirements: JSON.stringify(["Load CSV data.", "Filter and group data."]),
                        order: 3
                    }
                },
                {
                    id: "da-l1-skill-viz",
                    title: "Data Visualization (Matplotlib)",
                    description: "Learn to communicate insights through charts and graphs.",
                    resources: [
                        { title: "Matplotlib Tutorial", type: "ARTICLE", url: "https://matplotlib.org/stable/tutorials/index.html", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is the main plotting object?", options: JSON.stringify(["Window", "Figure", "Canvas", "Sheet"]), correctAnswer: "Figure", explanation: "The Figure object contains all the plot elements.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Global Trends Chart",
                        description: "Create a series of visualizations showing global CO2 emissions over time.",
                        requirements: JSON.stringify(["Create a line plot.", "Add labels and legends."]),
                        order: 4
                    }
                },
                {
                    id: "da-l1-skill-stats",
                    title: "Statistical Foundations",
                    description: "Understand the math behind the data: mean, median, and variance.",
                    resources: [
                        { title: "Khan Academy: Statistics Basics", type: "VIDEO", url: "https://www.khanacademy.org/math/statistics-probability", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Mean'?", options: JSON.stringify(["The middle value.", "The most frequent value.", "The average.", "The range."]), correctAnswer: "The average.", explanation: "The mean is the sum of all values divided by the count.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Population Audit",
                        description: "Analyze a population dataset to identify outliers and distributions.",
                        requirements: JSON.stringify(["Calculate median and standard deviation.", "Identify outliers."]),
                        order: 5
                    }
                }
            ],
            finalProject: {
                title: "Narrative - High-Impact Sales Synthesis",
                description: "Clean, analyze, and visualize a complex sales dataset to uncover hidden growth drivers. This project focuses on high-precision data cleaning, EDA (Exploratory Data Analysis), and professional storytelling with data.",
                requirements: [
                    "Perform a thorough data cleaning pipeline covering 50,000+ rows using Pandas vectorization.",
                    "Develop a series of 10+ visualizations using Matplotlib/Seaborn illustrating regional performance.",
                    "Implement a SQL-based audit trail to verify data integrity between raw files and cleaned versions.",
                    "Identify at least 3 high-probability 'Growth Drivers' using statistical correlation analysis.",
                    "Achieve documented 100% handle-rate for null values and data-type inconsistencies.",
                    "Submit a final 'Executive Narrative' report summarizing key findings for a non-technical audience."
                ],
                guide: [
                    "Step 1: Ingest the raw multi-file dataset and perform initial data-type profiling.",
                    "Step 2: Build the automated cleaning script to handle outliers and missing entries.",
                    "Step 3: Conduct a deep Exploratory Data Analysis (EDA) to find seasonality and trends.",
                    "Step 4: Create the final visualization suite focusing on 'Data-to-Ink' ratio and clarity.",
                    "Step 5: Synthesize the findings into a structured, narrative-driven presentation.",
                    "Step 6: Final demonstration: Present the 'Growth Driver' hypothesis and the supporting data evidence."
                ],
                hints: [
                    "Always visualize your distributions (histograms) before calculating means to avoid outlier distortion.",
                    "A good analyst doesn't just show 'what' happened; they explain 'why' it matters to the business.",
                    "Use 'groupby' and 'pivot_table' in Pandas to find multi-dimensional relationships quickly."
                ],
                testCases: [{ name: "Data Accuracy", verify: "Aggregated totals match SQL raw-query counts with 0.01% tolerance" }, { name: "Insight Clarity", verify: "Report identifies 3 action-oriented business recommendations" }],
            }
        },
        {
            id: "da-l2",
            title: "Intermediate Data Analyst",
            skills: [
                {
                    id: "da-l2-skill-sql2",
                    title: "Advanced SQL (Window Functions & CTEs)",
                    description: "Write powerful queries without subquery hell. Master Window Functions (RANK, LEAD/LAG) and Common Table Expressions.",
                    resources: [
                        { title: "PostgreSQL Window Functions", type: "DOCUMENTATION", url: "https://www.postgresql.org/docs/current/tutorial-window.html", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What does the 'RANK()' function do?", options: JSON.stringify(["Terms.", "Assigns a rank to each row within a partition of a result set.", "Counts rows.", "Deletes duplicates."]), correctAnswer: "Assigns a rank to each rank.", explanation: "It handles ties by skipping the next rank.", order: 1 }
                    ],
                    miniProject: {
                        title: "Customer Retention Analysis",
                        description: "Calculate Month-over-Month retention rates using complex SQL queries.",
                        requirements: JSON.stringify(["Use CTEs for readability.", "Implement Cohort Analysis.", "Calculate Churn Rate."]),
                        order: 1
                    }
                },
                {
                    id: "da-l2-skill-bi",
                    title: "Business Intelligence Principles",
                    description: "Translate data into business value. Learn dashboard design principles and KPI definition.",
                    resources: [
                        { title: "Storytelling with Data", type: "BOOK_SUMMARY", url: "https://www.storytellingwithdata.com/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'KPI'?", options: JSON.stringify(["Key Performance Indicator.", "Key Primary Index.", "Knowledge Processing Interface.", "Keep People Informed."]), correctAnswer: "Key Performance Indicator.", explanation: "KPIs are quantifiable measures used to evaluate success.", order: 1 }
                    ],
                    miniProject: {
                        title: "Executive Dashboard Logic",
                        description: "Define the data model and logic for a C-suite dashboard.",
                        requirements: JSON.stringify(["Define 5 critical KPIs.", "Design the schema to support fast retrieval.", "Mock the data feed in Python."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Insight-Board - Executive KPI Command",
                description: "Architect and build a professional BI environment that tracks real-time business performance. Focus on advanced SQL orchestration, KPI engineering, and dashboard UX.",
                requirements: [
                    "Develop a suite of 5 complex SQL views using Window Functions and Recursive CTEs.",
                    "Implement a multi-dimensional KPI framework (e.g., LTV, CAC, Churn, Retention).",
                    "Build an interactive dashboard mockup following 'Storytelling with Data' principles.",
                    "Design a relational data model optimized for sub-second analytical query performance.",
                    "Implement a 'Data Quality' monitoring script that alerts on anomalous KPI shifts.",
                    "Achieve documented alignment between the dashboard visuals and specific business goals."
                ],
                guide: [
                    "Step 1: Collaborate with stakeholders to define the 5 'Critical' business indicators.",
                    "Step 2: Build the high-performance SQL layer using CTEs and optimized indexing.",
                    "Step 3: Design the dashboard layout focusing on the 'F-pattern' and executive overview.",
                    "Step 4: Develop the automated data-refresh logic and anomaly detection triggers.",
                    "Step 5: Conduct a 'User Acceptance' session to ensure the dashboard drives action.",
                    "Step 6: Final demonstration: A real-time demo showing how the board handles a simulated sales slump."
                ],
                hints: [
                    "Window functions like 'LAG()' are your best friend for calculating Month-over-Month growth.",
                    "Avoid 'Chart Junk'; every pixel on your dashboard should convey information.",
                    "Always define 'Normal Ranges' for your KPIs to make anomalies immediately obvious."
                ],
                testCases: [{ name: "Query Speed", verify: "Analytical SQL views execute in < 800ms on production-sized indices" }, { name: "Metric Fidelity", verify: "LTV/CAC ratios match financial auditor expectations 100%" }],
            }
        },
        {
            id: "da-l3",
            title: "Senior Data Analyst",
            skills: [
                {
                    id: "da-l3-skill-stats",
                    title: "Statistical Inference & A/B Testing",
                    description: "Go beyond description to inference. Hypothesis testing, p-values, and confidence intervals.",
                    resources: [
                        { title: "Practical Statistics for Data Scientists", type: "BOOK_SUMMARY", url: "https://www.oreilly.com/library/view/practical-statistics-for/9781491952955/", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'P-Value'?", options: JSON.stringify(["A probability.", "The probability of observing results at least as extreme as the observed results, assuming the null hypothesis is true.", "The percentage of error.", "The power of the test."]), correctAnswer: "The probability of observing results at least as extreme as the observed results, assuming the null hypothesis is true.", explanation: "A low p-value (< 0.05) suggests rejecting the null hypothesis.", order: 1 }
                    ],
                    miniProject: {
                        title: "A/B Test Evaluator",
                        description: "Write a Python script to evaluate the results of a marketing A/B test.",
                        requirements: JSON.stringify(["Calculate Sample Size.", "Perform a T-test.", "Visualize the confidence intervals."]),
                        order: 1
                    }
                },
                {
                    id: "da-l3-skill-auto",
                    title: "Automated Reporting Pipelines",
                    description: "Stop copying and pasting into Excel. Automate reports using Python and Airflow concepts.",
                    resources: [
                        { title: "Automate the Boring Stuff with Python", type: "BOOK_SUMMARY", url: "https://automatetheboringstuff.com/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'CRON'?", options: JSON.stringify(["A time-based job scheduler.", "A robot.", "A database.", "A web server."]), correctAnswer: "A time-based job scheduler.", explanation: "It allows running scripts at fixed intervals.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Weekly Business Review Bot",
                        description: "Build a script that runs every Monday, queries the DB, generates charts, and emails a PDF report.",
                        requirements: JSON.stringify(["Query Postgres.", "Generate plots with Matplotlib.", "Compile to PDF.", "Send via SMTP."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Retentio - Predictive Retention Engine",
                description: "Design and implement a sophisticated A/B testing and reporting pipeline. Focus on statistical significance, automated insight delivery, and predictive churning logic.",
                requirements: [
                    "Develop an automated A/B test evaluation engine using Python (SciPy/Statsmodels).",
                    "Implement a predictive 'Churn Risk' model using logistic regression on historical data.",
                    "Build a fully automated reporting pipeline that generates and distributes PDF summaries.",
                    "Design a 'Bayesian' testing framework for rapid experimental iteration.",
                    "Achieve documented 95%+ confidence intervals for all primary business metrics.",
                    "Implement an automated 'Feature Contribution' analysis showing which UI changes drive ROI."
                ],
                guide: [
                    "Step 1: Architect the experimental design and set the minimum detectable effect (MDE).",
                    "Step 2: Build the automated SQL-to-Python data pipeline for experiment ingestion.",
                    "Step 3: Develop the statistical evaluation engine with bias-correction logic.",
                    "Step 4: Implement the PDF automation and dynamic visualization layer.",
                    "Step 5: Conduct a thorough 'Post-Mortem' on a simulated failed experiment.",
                    "Step 6: Final demonstration: A 'Live' report generation showing experimental lift and statistical power."
                ],
                hints: [
                    "A/B testing is expensive; always perform a 'Power Analysis' before starting to ensure your sample size is sufficient.",
                    "Statistical significance is not the same as 'Practical Significance'.",
                    "Automating your reporting pipeline saves hours of manual work and eliminates 'Human Error' in copy-pasting."
                ],
                testCases: [{ name: "Statistical Rigor", verify: "P-value calculations match gold-standard R/Python packages 100%" }, { name: "Pipeline Reliability", verify: "Report bot successfully handles simulated DB downtime with graceful retries" }],
            }
        },
        {
            id: "da-l4",
            title: "Principal Data Analyst",
            skills: [
                {
                    id: "da-l4-skill-warehouse",
                    title: "Data Warehousing & Modeling",
                    description: "Design the single source of truth. Dimensional Modeling (Star Schema) and ETL strategies.",
                    resources: [
                        { title: "The Data Warehouse Toolkit", type: "BOOK_SUMMARY", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Fact Table'?", options: JSON.stringify(["A table with text.", "A central table in a star schema containing quantitative data (measures).", "A lookup table.", "A temporary table."]), correctAnswer: "A central table in a star schema containing quantitative data (measures).", explanation: "It links to dimension tables via foreign keys.", order: 1 }
                    ],
                    miniProject: {
                        title: "Enterprise Data Warehouse Design",
                        description: "Design the Star Schema for a multi-national retail corporation.",
                        requirements: JSON.stringify(["Define Fact and Dimension tables.", "Handle Slowly Changing Dimensions (SCD).", "Map the ETL data flow."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Source-of-Truth - Enterprise Data Warehouse",
                description: "Architect the strategic data infrastructure for a global organization. Focus on dimensional modeling, multi-tier data lakes, and enterprise-wide analytical consistency.",
                requirements: [
                    "Design a Star/Snowflake schema for a complex domain (e.g., Global Logistics).",
                    "Implement a documented 'Data Governance' policy for metric definitions.",
                    "Build a strategic ETL/ELT roadmap utilizing modern stack architectures (dbt/Snowflake).",
                    "Develop a multi-tier 'Data Mart' strategy for different business units (Finance vs. Ops).",
                    "Achieve documented 'Single-Source-of-Truth' for all revenue-critical metrics.",
                    "Lead an enterprise board session on the 'Scalable Analytics' future for the corporation."
                ],
                guide: [
                    "Step 1: Set the enterprise Data Modeling standards and dimensional naming conventions.",
                    "Step 2: Develop the multi-dimensional fact/dimension matrix for the overall business.",
                    "Step 3: Implement the Slowly Changing Dimension (SCD) strategy for historical accuracy.",
                    "Step 4: Build the 'Analytics Hub' prototype demonstrating unified metric access.",
                    "Step 5: Conduct a thorough 'Data Lineage' audit for a simulated critical report.",
                    "Step 6: Final demonstration: Present the unified Enterprise Data Strategy and ROI roadmap."
                ],
                hints: [
                    "Data warehousing is about 'Stability' and 'Clarity'; don't let engineers build a 'Data Swamp'.",
                    "Dimension tables should be descriptive and easy for non-technical users to query.",
                    "Success is when Two different teams query Two different things and get the Same Answer."
                ],
                testCases: [{ name: "Model Scalability", verify: "Schema accommodates 20+ different business dimensions without redesign" }, { name: "Metric Consistency", verify: "Financial audit confirms 0% variance between DW reports and GL records" }],
            }
        }
    ]
};
