export const dataEngineerContent = {
    levels: [
        {
            id: "de-l1",
            title: "Junior Data Engineer",
            skills: [
                {
                    id: "de-l1-skill-sql",
                    title: "Advanced SQL for Eng",
                    description: "Master window functions, CTEs, and query optimization for large data sets.",
                    resources: [
                        { title: "PostgreSQL: Window Functions", type: "DOCUMENTATION", url: "https://www.postgresql.org/docs/current/tutorial-window.html", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Which keyword is used to define a CTE?", options: JSON.stringify(["FROM", "JOIN", "WITH", "BEGIN"]), correctAnswer: "WITH", explanation: "WITH defines a Common Table Expression.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Revenue Engine",
                        description: "Write a SQL query that calculates 7-day rolling revenue for an e-commerce database.",
                        requirements: JSON.stringify(["Use window functions.", "Handle missing dates.", "Optimize for speed."]),
                        order: 1
                    }
                }
            ]
        },
        {
            id: "de-l2",
            title: "Intermediate Data Engineer",
            skills: [
                {
                    id: "de-l2-skill-etl",
                    title: "ETL Pipelines with Airflow",
                    description: "Orchestrate complex data workflows. Schedule, monitor, and retry data tasks.",
                    resources: [
                        { title: "Apache Airflow Tutorial", type: "VIDEO", url: "https://www.youtube.com/watch?v=AHJM88tWfQs", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'DAG' in Airflow?", options: JSON.stringify(["Database Access Group", "Directed Acyclic Graph", "Data Analyst Guide", "Docker App Generator"]), correctAnswer: "Directed Acyclic Graph", explanation: "It represents a workflow as a collection of tasks with dependencies.", order: 1 }
                    ],
                    miniProject: {
                        title: "Daily Sales Ingest",
                        description: "Write an Airflow DAG that pulls data from an API, cleans it, and loads it into a PostgreSQL database every midnight.",
                        requirements: JSON.stringify(["Define tasks using PythonOperators.", "Set dependencies.", "Handle failure retries."]),
                        order: 1
                    }
                },
                {
                    id: "de-l2-skill-warehousing",
                    title: "Data Warehousing (Snowflake/BigQuery)",
                    description: "Store and analyze massive datasets using modern cloud data warehouses.",
                    resources: [
                        { title: "Snowflake Fundamentals", type: "DOCUMENTATION", url: "https://docs.snowflake.com/en/user-guide/intro-key-concepts", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between an OLTP and an OLAP system?", options: JSON.stringify(["No difference.", "OLTP is for transactions; OLAP is for analytics.", "OLAP is faster for writing data.", "OLTP uses Excel."]), correctAnswer: "OLTP is for transactions; OLAP is for analytics.", explanation: "Data warehouses are OLAP systems optimized for reading large amounts of data.", order: 1 }
                    ],
                    miniProject: {
                        title: "Star Schema Design",
                        description: "Design a Star Schema for a retail analytics warehouse.",
                        requirements: JSON.stringify(["Define Fact tables.", "Define Dimension tables.", "Write a query joining them."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "de-l3",
            title: "Senior Data Engineer",
            skills: [
                {
                    id: "de-l3-skill-spark",
                    title: "Big Data Processing (Spark)",
                    description: "Process petabytes of data in parallel using Apache Spark.",
                    resources: [
                        { title: "Spark: The Definitive Guide", type: "BOOK_SUMMARY", url: "https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is an RDD?", options: JSON.stringify(["Relational Data Database", "Resilient Distributed Dataset", "Rapid Data Delivery", "Rust Data Driver"]), correctAnswer: "Resilient Distributed Dataset", explanation: "RDDs are the fundamental data structure of Spark.", order: 1 }
                    ],
                    miniProject: {
                        title: "Log Analyzer",
                        description: "Write a PySpark job to analyze 10GB of server logs to find the most frequent error messages.",
                        requirements: JSON.stringify(["Load data from S3.", "Perform transformations.", "Save output to Parquet format."]),
                        order: 1
                    }
                },
                {
                    id: "de-l3-skill-streaming",
                    title: "Streaming Data (Kafka)",
                    description: "Handle real-time data feeds using Apache Kafka.",
                    resources: [
                        { title: "Kafka: A Gentle Introduction", type: "ARTICLE", url: "https://kafka.apache.org/intro", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Topic' in Kafka?", options: JSON.stringify(["A conversation starter.", "A category or feed name to which records are published.", "A type of database index.", "A user role."]), correctAnswer: "A category or feed name to which records are published.", explanation: "Producers write to topics, and consumers read from them.", order: 1 }
                    ],
                    miniProject: {
                        title: "Real-Time Clickstream",
                        description: "Set up a Kafka producer that simulates user clicks and a consumer that aggregates clicks per minute.",
                        requirements: JSON.stringify(["Use Python Kafka client.", "Implement a producer.", "Implement a consumer."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "de-l4",
            title: "Staff Data Architect",
            skills: [
                {
                    id: "de-l4-skill-mesh",
                    title: "Data Mesh & Governance",
                    description: "Decentralize data ownership and treat data as a product.",
                    resources: [
                        { title: "Data Mesh Principles", type: "ARTICLE", url: "https://martinfowler.com/articles/data-mesh-principles.html", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a core principle of Data Mesh?", options: JSON.stringify(["Centralize everything.", "Domain-oriented decentralized data ownership and architecture.", "Use only one database.", "Remove all governance."]), correctAnswer: "Domain-oriented decentralized data ownership and architecture.", explanation: "It shifts from a monolithic lake to distributed domains.", order: 1 }
                    ],
                    miniProject: {
                        title: "Data Product Definition",
                        description: "Define a 'Data Product' for the Marketing domain.",
                        requirements: JSON.stringify(["Define input ports.", "Define output ports/APIs.", "Establish SLOs (Service Level Objectives) for data quality."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};
