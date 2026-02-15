export const cloudArchitectContent = {
    levels: [
        {
            id: "ca-l1",
            title: "Junior Cloud Architect",
            skills: [
                {
                    id: "ca-l1-skill-basics",
                    title: "Cloud Computing Fundamentals",
                    description: "Understand the core models of cloud computing. Master IaaS, PaaS, SaaS, and the shared responsibility model.",
                    resources: [
                        { title: "AWS Cloud Practitioner Essentials", type: "VIDEO", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials", duration: 360, order: 1 },
                        { title: "Cloud Computing NIST Definition", type: "ARTICLE", url: "https://csrc.nist.gov/publications/detail/sp/800-145/final", duration: 20, order: 2 }
                    ],
                    questions: [
                        { question: "What is 'Elasticity' in cloud computing?", options: JSON.stringify(["The ability to scale resources up or down based on demand automatically.", "A type of physical cable.", "The speed of the database.", "Paying for resources upfront."]), correctAnswer: "The ability to scale resources up or down based on demand automatically.", explanation: "Elasticity ensures you have enough capacity when needed and save costs when demand is low.", order: 1 },
                        { question: "Which model is 'SaaS'?", options: JSON.stringify(["Infrastructure as a Service", "System as a Service", "Software as a Service", "Security as a Service"]), correctAnswer: "Software as a Service", explanation: "SaaS provides a complete product that is run and managed by the service provider (e.g., Gmail, Slack).", order: 2 },
                        { question: "What is the 'Shared Responsibility Model'?", options: JSON.stringify(["The cloud provider handles everything.", "The user handles everything.", "A framework that divides security tasks between the provider and the customer.", "A way to split costs between departments."]), correctAnswer: "A framework that divides security tasks between the provider and the customer.", explanation: "The provider secures the cloud 'infrastructure', while the customer is responsible for data 'in' the cloud.", order: 3 },
                        { question: "In IaaS, who is responsible for patching the guest Operating System?", options: JSON.stringify(["The Cloud Provider", "The Customer", "Both", "No one"]), correctAnswer: "The Customer", explanation: "In IaaS, the customer manages the OS, middleware, and applications.", order: 4 },
                        { question: "What is an 'Availability Zone' (AZ)?", options: JSON.stringify(["A country.", "One or more discrete data centers with redundant power, networking, and connectivity within a Region.", "A single building.", "A type of firewall."]), correctAnswer: "One or more discrete data centers with redundant power, networking, and connectivity within a Region.", explanation: "AZs provide isolation and high availability within a geographic Region.", order: 5 },
                        { question: "Which cloud service model provides the most control over the infrastructure?", options: JSON.stringify(["SaaS", "PaaS", "IaaS", "DBaaS"]), correctAnswer: "IaaS", explanation: "Infrastructure as a Service gives you access to virtual servers and networking components.", order: 6 },
                        { question: "What is 'High Availability'?", options: JSON.stringify(["Fast CPU speed.", "Ensuring a system is operational for a high percentage of time, often through redundancy.", "Having a lot of storage.", "Paying for premium support."]), correctAnswer: "Ensuring a system is operational for a high percentage of time, often through redundancy.", explanation: "HA is achieved by deploying resources across multiple Availability Zones.", order: 7 },
                        { question: "What does 'Pay-as-you-go' mean?", options: JSON.stringify(["Paying a fixed monthly fee.", "Paying only for the resources you consume.", "Paying everything upfront for 3 years.", "A type of credit card."]), correctAnswer: "Paying only for the resources you consume.", explanation: "This variable cost model is a key advantage of cloud computing.", order: 8 },
                        { question: "Purpose of an 'Edge Location'?", options: JSON.stringify(["To store backups.", "To host virtual machines.", "To cache content closer to users for lower latency.", "To manage user passwords."]), correctAnswer: "To cache content closer to users for lower latency.", explanation: "Edge locations are used by CDNs like Amazon CloudFront.", order: 9 },
                        { question: "Which of these is a Public Cloud provider?", options: JSON.stringify(["AWS", "GCP", "Azure", "All of the above"]), correctAnswer: "All of the above", explanation: "AWS, Google Cloud, and Microsoft Azure are the 'Big 3' public cloud providers.", order: 10 },
                        { question: "What is 'Fault Tolerance'?", options: JSON.stringify(["The ability of a system to continue operating even if some components fail.", "Fixing bugs quickly.", "Having high bandwidth.", "A type of database indexing."]), correctAnswer: "The ability of a system to continue operating even if some components fail.", explanation: "Fault tolerance is built using redundancy and automated failover.", order: 11 },
                        { question: "What is a 'Region'?", options: JSON.stringify(["A data center.", "A physical geographical area that contains multiple Availability Zones.", "A subnet.", "A virtual network."]), correctAnswer: "A physical geographical area that contains multiple Availability Zones.", explanation: "Regions allow you to deploy applications close to your users worldwide.", order: 12 },
                        { question: "What is 'Vertical Scaling'?", options: JSON.stringify(["Adding more servers.", "Increasing the capacity of an existing server (e.g., more RAM/CPU).", "Reducing costs.", "Backup to another region."]), correctAnswer: "Increasing the capacity of an existing server (e.g., more RAM/CPU).", explanation: "Vertical scaling (scaling up) has physical limits compared to horizontal scaling.", order: 13 },
                        { question: "What is 'Horizontal Scaling'?", options: JSON.stringify(["Adding more RAM.", "Adding more instances or servers to your resource pool.", "Deleting unused data.", "Moving to a different cloud."]), correctAnswer: "Adding more instances or servers to your resource pool.", explanation: "Horizontal scaling (scaling out) provides nearly infinite scale.", order: 14 },
                        { question: "What is the primary benefit of 'Serverless' computing?", options: JSON.stringify(["No servers are involved.", "The cloud provider manages the underlying infrastructure, allowing developers to focus on code.", "It is always free.", "It is only for small apps."]), correctAnswer: "The cloud provider manages the underlying infrastructure, allowing developers to focus on code.", explanation: "Serverless (like AWS Lambda) scales automatically based on triggers.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Cloud Infrastructure Blueprint",
                        description: "Design a highly available and scalable architecture for a web application using basic cloud primitives.",
                        requirements: JSON.stringify(["Define two Availability Zones for redundancy.", "Include a Load Balancer to distribute traffic.", "Use Auto Scaling to handle traffic spikes.", "Implement a separate private subnet for the database."]),
                        guide: JSON.stringify([
                            "Step 1: Use a tool like LucidChart or AWS Architecture Icons to draw your VPC.",
                            "Step 2: Define your Public Subnets (for the Load Balancer) and Private Subnets (for the App and DB).",
                            "Step 3: Add an Internet Gateway to the Public Subnet.",
                            "Step 4: Configure an Auto Scaling Group with a minimum of 2 instances across different AZs.",
                            "Step 5: Document how traffic flows from the user to the database."
                        ]),
                        hints: JSON.stringify([
                            "Never put your database in a public subnet.",
                            "Standardize your naming conventions (e.g., 'prod-web-asg').",
                            "Consider using a NAT Gateway for private instances to access the internet."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" },
                            { title: "Azure Architecture Center", url: "https://learn.microsoft.com/en-us/azure/architecture/" }
                        ]),
                        testCases: JSON.stringify([{ name: "High Availability", verify: "Design survives a single AZ failure" }, { name: "Security", verify: "Database is not publicly accessible" }]),
                        order: 1
                    }
                }
            ]
        },
        {
            id: "ca-l2",
            title: "Intermediate Cloud Architect",
            skills: [
                {
                    id: "ca-l2-skill-aws",
                    title: "AWS Services Deep Dive",
                    description: "Go beyond the basics. Master Lambda, API Gateway, DynamoDB, and advanced networking (VPC Peering, Transit Gateway).",
                    resources: [
                        { title: "AWS Certified Solutions Architect Associate", type: "COURSE", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/1046/aws-certified-solutions-architect-associate", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'VPC Peering'?", options: JSON.stringify(["Connecting two VPCs to route traffic between them privately.", "Connecting to the internet.", "A type of VPN.", "An encryption method."]), correctAnswer: "Connecting two VPCs to route traffic between them privately.", explanation: "It allows instances in either VPC to communicate as if they are within the same network.", order: 1 }
                    ],
                    miniProject: {
                        title: "Serverless API Backend",
                        description: "Build a scalable REST API using AWS Lambda, API Gateway, and DynamoDB.",
                        requirements: JSON.stringify(["Create a Lambda function in Node.js.", "Trigger it via API Gateway.", "Store and retrieve items from DynamoDB.", "Implement IAM roles for least privilege."]),
                        order: 1
                    }
                },
                {
                    id: "ca-l2-skill-iac",
                    title: "Infrastructure as Code (Terraform)",
                    description: "Stop clicking in the console. Define your infrastructure in code for reproducibility and version control.",
                    resources: [
                        { title: "Terraform Up & Running", type: "BOOK_SUMMARY", url: "https://www.oreilly.com/library/view/terraform-up-and/9781098116736/", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Terraform State'?", options: JSON.stringify(["The capital of Terraform.", "A file that maps real-world resources to your configuration.", "A temporary cache.", "A database backup."]), correctAnswer: "A file that maps real-world resources to your configuration.", explanation: "State allows Terraform to know which resources it manages.", order: 1 }
                    ],
                    miniProject: {
                        title: "Multi-Cloud Deployment Script",
                        description: "Write a Terraform configuration to deploy a web server on both AWS and Azure.",
                        requirements: JSON.stringify(["Use modules for reusability.", "Store state in an S3 bucket (Remote State).", "Output the public IP addresses."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "ca-l3",
            title: "Senior Cloud Architect",
            skills: [
                {
                    id: "ca-l3-skill-micro",
                    title: "Microservices Patterns",
                    description: "Decouple your monolith. Event-driven architecture, SAGA pattern, and Circuit Breakers.",
                    resources: [
                        { title: "Microservices Patterns (Chris Richardson)", type: "BOOK_SUMMARY", url: "https://microservices.io/book", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Strangler Fig' pattern?", options: JSON.stringify(["A plant.", "Gradually replacing a legacy system by building new features as microservices around it.", "Deleting the old system immediately.", "Using a faster database."]), correctAnswer: "Gradually replacing a legacy system by building new features as microservices around it.", explanation: "It reduces risk by allowing incremental migration.", order: 1 }
                    ],
                    miniProject: {
                        title: "Refactoring a Monolith",
                        description: "Design a plan to break down a monolithic e-commerce app into microservices.",
                        requirements: JSON.stringify(["Identify service boundaries (e.g., Order, User, Inventory).", "Design the event bus (SNS/SQS).", "Handle distributed transactions."]),
                        order: 1
                    }
                },
                {
                    id: "ca-l3-skill-k8s",
                    title: "Kubernetes & Container Orchestration",
                    description: "Manage containers at scale. Pods, Deployments, Services, and Helm Charts.",
                    resources: [
                        { title: "Kubernetes the Hard Way", type: "TUTORIAL", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way", duration: 300, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Pod' in Kubernetes?", options: JSON.stringify(["A container.", "The smallest deployable unit that can be created and managed.", "A physical server.", "A storage volume."]), correctAnswer: "The smallest deployable unit that can be created and managed.", explanation: "A Pod usually contains one or more containers sharing storage and network.", order: 1 }
                    ],
                    miniProject: {
                        title: "High Availability K8s Cluster",
                        description: "Deploy a highly available Kubernetes cluster on a cloud provider (EKS/GKE) using Terraform.",
                        requirements: JSON.stringify(["Define Node Groups.", "Deploy an Ingress Controller (Nginx).", "Set up Prometheus for monitoring."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "ca-l4",
            title: "Principal Cloud Architect",
            skills: [
                {
                    id: "ca-l4-skill-migrate",
                    title: "Enterprise Migration Strategy",
                    description: "Move thousands of workloads to the cloud. The 6 R's of migration and hybrid cloud architectures.",
                    resources: [
                        { title: "AWS Migration Hub Docs", type: "DOCUMENTATION", url: "https://docs.aws.amazon.com/migrationhub/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "Which of the '6 Rs' involves moving to a SaaS product?", options: JSON.stringify(["Rehost", "Refactor", "Repurchase", "Retire"]), correctAnswer: "Repurchase", explanation: "Repurchase (Drop and Shop) means moving to a different product, often SaaS.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Enterprise Migration Plan",
                        description: "Create a detailed strategy document for migrating a Fortune 500 company's data center to the cloud.",
                        requirements: JSON.stringify(["Assess portfolio (Discovery).", "Map dependencies.", "Prioritize workloads based on business value and complexity.", "Draft the cutover plan."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};
