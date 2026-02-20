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
            ],
            finalProject: {
                title: "Stream-Sync - Automated Financial Ingest",
                description: "Build a robust SQL-based ingest engine that processes high-volume financial transactions. This project focuses on complex analytical SQL, data integrity, and automated validation patterns.",
                requirements: [
                    "Implement a multi-stage CTE pipeline to transform nested JSON transactions.",
                    "Use Window Functions to detect and flag duplicate transactions within a 1-second window.",
                    "Design a relational schema that enforces strict ACID-compliance for ledger data.",
                    "Optimize long-running queries to execute in under 1 second on 10M+ rows.",
                    "Implement a 'Data Health' dashboard using pure SQL triggers and views.",
                    "Document the star-schema design for downstream financial reporting."
                ],
                guide: [
                    "Step 1: Design the raw staging and normalized production tables.",
                    "Step 2: Develop the CTE-based transformation logic for raw audit logs.",
                    "Step 3: Implement the anomaly detection layer using advanced Windowing.",
                    "Step 4: Audit the SQL performance and implement necessary indexing strategies.",
                    "Step 5: Create a suite of automated unit tests for SQL logic correctness.",
                    "Step 6: Performance benchmark: Execute a full re-sync of 10M records."
                ],
                hints: [
                    "Use 'EXPLAIN ANALYZE' to find bottlenecks in your JOIN path.",
                    "Partitioning by 'transaction_date' can significantly speed up rolling calculations.",
                    "A 'Common Table Expression' is great for readability, but a 'Temporary Table' is sometimes faster for huge datasets."
                ],
                testCases: [{ name: "Data Integrity", verify: "No transactions lost during 10M row ingest" }, { name: "Query Speed", verify: "7-day rolling sum calculates in <500ms" }],
            }
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
            ],
            finalProject: {
                title: "Data-Lake-X - Unified Warehouse Orchestration",
                description: "Design and implement a cloud-native data lake architecture that unifies disparate sources into a high-performance warehouse. Focus on Airflow orchestration and Snowflake/BigQuery optimization.",
                requirements: [
                    "Build an Airflow DAG that orchestrates data movement from S3/GCS to a Cloud Warehouse.",
                    "Implement 'Idempotency' across all ETL tasks to ensure safety during retries.",
                    "Design a Star-Schema that supports 100+ concurrent analytical queries.",
                    "Implement automated 'SLA' monitoring and alerting via PagerDuty/Slack.",
                    "Optimize warehouse costs by implementing clustering keys and micro-partitioning.",
                    "Achieve 100% data lineage visibility using automated tagging."
                ],
                guide: [
                    "Step 1: Architect the 'Bronze, Silver, Gold' data layer strategy.",
                    "Step 2: Develop the Airflow orchestration layer with custom operators.",
                    "Step 3: Implement the schema evolution logic in the target warehouse.",
                    "Step 4: Build the monitoring and alerting system for pipeline failures.",
                    "Step 5: Load a massive dataset and perform cost/performance optimization audits.",
                    "Step 6: Document the governance and access control policy for the Data Lake."
                ],
                hints: [
                    "Use 'XComs' sparingly; large data should stay in the warehouse, not the Airflow worker.",
                    "Leverage 'Clustering Keys' in Snowflake for tables over 1TB for massive performance wins.",
                    "Always use 'IAM' roles with least privilege for your service accounts."
                ],
                testCases: [{ name: "Orchestration Safety", verify: "Partial failures resume correctly without duplication" }, { name: "SLA Compliance", verify: "Fresh data available in Warehouse within 15m of arrival" }],
            }
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
            ],
            finalProject: {
                title: "Petabyte-Forge - Distributed Spark Ecosystem",
                description: "Architect a petabyte-scale data processing system using Apache Spark and Kafka. Focus on real-time stream-to-batch integration and advanced cluster optimization.",
                requirements: [
                    "Develop a Spark Structured Streaming application that consumes from 10+ Kafka topics.",
                    "Optimize Spark shuffle performance and handle 'Data Skew' in massive joins.",
                    "Implement a distributed 'Dead Letter Queue' (DLQ) for failed record processing.",
                    "Achieve sub-second processing latency for high-velocity IoT streams.",
                    "Design a parquet-based data vault with partitioned and bucketed storage.",
                    "Implement an automated cluster scaling policy based on backpressure metrics."
                ],
                guide: [
                    "Step 1: Design the Kafka topic topology and schema registry.",
                    "Step 2: Build the Spark Structured Streaming engine with stateful transformations.",
                    "Step 3: Implement the 'Data Vault' storage layer on S3/HDFS.",
                    "Step 4: Conduct a performance audit to identify and eliminate 'Shuffle' bottlenecks.",
                    "Step 5: Develop the automated alerting for consumer group lag.",
                    "Step 6: Stress test the system with 10x normal data volume to verify stability."
                ],
                hints: [
                    "Use 'Broadcast Joins' whenever one of the tables fits in memory.",
                    "Bucketing can significantly speed up joins between two massive tables.",
                    "Monitor 'Consumer Lag' as your primary metric for streaming health."
                ],
                testCases: [{ name: "Streaming Throughput", verify: "Processes 1M events/sec with <2s latency" }, { name: "Storage Efficiency", verify: "Data correctly bucketed and compressed (Snappy/Zstd)" }],
            }
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
            ],
            finalProject: {
                title: "Mesh-Master - Decentralized Governance Engine",
                description: "Architect a global-scale Data Mesh ecosystem. Focus on building the 'Self-Serve' platform, automated governance, and cross-domain data discovery.",
                requirements: [
                    "Design the 'Self-Serve' data platform architecture using Kubernetes and Terraform.",
                    "Implement automated 'Data Contract' validation between domains.",
                    "Build a centralized 'Data Catalog' that harvests metadata from 5+ domains.",
                    "Define and implement a global 'Federated Governance' protocol.",
                    "Architect the cross-domain access control layer using OPA (Open Policy Agent).",
                    "Conduct a strategic transition plan from Monolithic Lake to distributed Mesh."
                ],
                guide: [
                    "Step 1: Define the core 'Data Product' specification and reusable templates.",
                    "Step 2: Develop the automation for 'Self-Serve' domain provisioning.",
                    "Step 3: Implement the Data Contract enforcement layer (Schema Registry + CI/CD).",
                    "Step 4: Build the discovery layer and metadata harvesting pipelines.",
                    "Step 5: Orchestrate the global IAM and row-level security policy across domains.",
                    "Step 6: Present the final Data Mesh design to a simulated architectural review board."
                ],
                hints: [
                    "A 'Data Contract' is a formal agreement between producer and consumer; treat it like an API.",
                    "Treat 'Data as a Product'; it must be discoverable, addressable, and trustworthy.",
                    "Infrastructure as Code is what makes Data Mesh scalable across many teams."
                ],
                testCases: [{ name: "Governance Audit", verify: "All domains comply with global PII masking policies" }, { name: "Self-Serve Latency", verify: "New domain provisioned in <30 minutes" }],
            }
        }
    ]
};
