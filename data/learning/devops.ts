export const devopsContent = {
    levels: [
        {
            id: "do-l1",
            title: "Junior DevOps Engineer",
            skills: [
                {
                    id: "do-l1-skill-linux",
                    title: "Linux CLI Mastery",
                    description: "The foundation of all DevOps work. Master file navigation, permissions, and process management via the terminal.",
                    resources: [
                        { title: "Linux Journey: Grasshopper", type: "ARTICLE", url: "https://linuxjourney.com/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "Which command is used to list files in a directory?", options: JSON.stringify(["cd", "mkdir", "ls", "rm"]), correctAnswer: "ls", explanation: "ls stands for 'list'.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Automated File Manager",
                        description: "Write a bash script that organizes files into folders based on their extension.",
                        requirements: JSON.stringify(["Use file loops.", "Move files to desktop/archives based on age.", "Log actions to a text file."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Shell-Forge - Automated Infrastructure Guard",
                description: "Build a professional-grade Linux automation suite that manages system health and security. This project focuses on sophisticated Bash scripting, process isolation, and automated system auditing.",
                requirements: [
                    "Develop a Bash engine that performs real-time security scans of user permissions.",
                    "Implement an automated log-rotation system with custom archival logic.",
                    "Build a process monitor that auto-restarts failed services and logs crashes.",
                    "Implement a disk-usage analyzer that triggers cleanup based on custom thresholds.",
                    "Secure the automation suite with strict sudoer policies and file-attribute hardening.",
                    "Achieve documented 'Zero-Manual-Touch' for common system maintenance tasks."
                ],
                guide: [
                    "Step 1: Design the automation engine's directory structure and logging schema.",
                    "Step 2: Develop the core security auditing logic for system files (/etc/passwd, etc.).",
                    "Step 3: Implement the process watchdog to ensure mission-critical services stay up.",
                    "Step 4: Build the storage management layer with automated compression and cleanup.",
                    "Step 5: Secure the entire suite using the principle of least privilege.",
                    "Step 6: Final demonstration: Simulate a system-full event and verify auto-correction."
                ],
                hints: [
                    "Use 'crontab' for scheduling, but handle 'Locks' to prevent overlapping runs.",
                    "Always use absolute paths in Bash scripts to avoid environment-specific bugs.",
                    "Redirect both STDOUT and STDERR to your audit logs for full traceability."
                ],
                testCases: [{ name: "Self-Healing", verify: "Services auto-restart within 5 seconds of failure" }, { name: "Audit Integrity", verify: "Security report correctly identifies unauthorized chmod changes" }],
            }
        },
        {
            id: "do-l2",
            title: "Intermediate DevOps",
            skills: [
                {
                    id: "do-l2-skill-docker",
                    title: "Containerization with Docker",
                    description: "Package applications with their dependencies to ensure they run flawlessly in any environment.",
                    resources: [
                        { title: "Docker for Beginners", type: "VIDEO", url: "https://www.youtube.com/watch?v=zJpMT-tbqi4", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between a Docker Image and a Container?", options: JSON.stringify(["They are the same.", "An image is a read-only template; a container is a running instance.", "A container is the code; an image is the database.", "Docker doesn't use images."]), correctAnswer: "An image is a read-only template; a container is a running instance.", explanation: "Think of the image as the recipe and the container as the cake.", order: 1 }
                    ],
                    miniProject: {
                        title: "Microservice Dockerization",
                        description: "Create a Dockerfile for a Node.js app and a Python app, then use Docker Compose to run them together.",
                        requirements: JSON.stringify(["Write optimized Dockerfiles (multistage builds).", "Use a docker-compose.yml to network them.", "Persist data using volumes."]),
                        order: 1
                    }
                },
                {
                    id: "do-l2-skill-cicd",
                    title: "CI/CD Construction",
                    description: "Build automated pipelines that test and deploy code on every push.",
                    resources: [
                        { title: "GitHub Actions Documentation", type: "DOCUMENTATION", url: "https://docs.github.com/en/actions", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Runner' in GitHub Actions?", options: JSON.stringify(["A developer.", "A script.", "A server that runs your workflows.", "A deployment target."]), correctAnswer: "A server that runs your workflows.", explanation: "Runners are virtual machines that execute the steps defined in your YAML file.", order: 1 }
                    ],
                    miniProject: {
                        title: "Automated Deployment Pipeline",
                        description: "Set up a pipeline that lints code, runs unit tests, builds a Docker image, and pushes it to Docker Hub.",
                        requirements: JSON.stringify(["Trigger on push to main.", "Fail if tests fail.", "Use secret management for Docker Hub credentials."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Docker-Core - Multi-Service Orchestration",
                description: "Architect and deploy a production-ready containerized ecosystem using Docker and GitHub Actions. This project focuses on multi-stage builds, secure image distribution, and automated CI/CD gating.",
                requirements: [
                    "Develop a multi-service Docker Compose architecture with custom bridge networks.",
                    "Implement multi-stage Dockerfiles that reduce image sizes by >70%.",
                    "Build a GitHub Actions pipeline with parallel job execution for Build/Test/Scan.",
                    "Integrate 'Trivy' or 'Snyk' for automated image vulnerability scanning.",
                    "Implement a secure 'Private Registry' workflow with automated image pruning.",
                    "Achieve sub-5-minute end-to-end pipeline execution time."
                ],
                guide: [
                    "Step 1: Architect the multi-service network and volume persistence strategy.",
                    "Step 2: Optimize the Dockerfiles for production (security, size, and layer caching).",
                    "Step 3: Develop the GitHub Actions YAML with environment-specific secrets.",
                    "Step 4: Implement the automated security gates and vulnerability reporting.",
                    "Step 5: Build a custom 'Deploy' script that performs zero-downtime container swaps.",
                    "Step 6: Final demonstration: Push a failing security patch and observe the pipeline gate."
                ],
                hints: [
                    "Use '.dockerignore' to keep your image context small and secure.",
                    "GitHub Actions 'Cache' can drastically speed up your Docker layer builds.",
                    "Always specify exact image versions (Avoid ':latest') for production reliability."
                ],
                testCases: [{ name: "Pipeline Speed", verify: "Build and Scan completed in <300 seconds" }, { name: "Image Hardening", verify: "Final image contains zero 'High' or 'Critical' vulnerabilities" }],
            }
        },
        {
            id: "do-l3",
            title: "Senior DevOps Engineer",
            skills: [
                {
                    id: "do-l3-skill-k8s",
                    title: "Kubernetes Orchestration",
                    description: "Manage containerized applications at scale using K8s.",
                    resources: [
                        { title: "Kubernetes Basics", type: "DOCUMENTATION", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Pod' in Kubernetes?", options: JSON.stringify(["An Apple product.", "The smallest deployable unit in K8s.", "A cluster node.", "A storage volume."]), correctAnswer: "The smallest deployable unit in K8s.", explanation: "A pod represents a single instance of a running process in your cluster.", order: 1 }
                    ],
                    miniProject: {
                        title: "High-Availability Cluster",
                        description: "Deploy a stateless web app to a local Minikube or Kind cluster with 3 replicas and a LoadBalancer.",
                        requirements: JSON.stringify(["Write Deployment and Service YAMLs.", "Demonstrate self-healing by deleting a pod.", "Perform a rolling update."]),
                        order: 1
                    }
                },
                {
                    id: "do-l3-skill-iac",
                    title: "Infrastructure as Code (Terraform)",
                    description: "Provision and manage infrastructure using declarative configuration files.",
                    resources: [
                        { title: "Terraform: Get Started", type: "DOCUMENTATION", url: "https://developer.hashicorp.com/terraform/intro", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'terraform plan' do?", options: JSON.stringify(["Creates infrastructure.", "Destroys infrastructure.", "Shows a preview of changes.", "Formats code."]), correctAnswer: "Shows a preview of changes.", explanation: "It allows you to verify what will happen before applying changes.", order: 1 }
                    ],
                    miniProject: {
                        title: "AWS Infrastructure Provisioner",
                        description: "Write Terraform code to provision an EC2 instance, a Security Group, and an S3 bucket.",
                        requirements: JSON.stringify(["Use variables for region and instance type.", "Output the public IP of the instance.", "Manage state securely."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Terra-Kube - Production-Grade IaC Ecosystem",
                description: "Architect and automate a complete cloud environment using Terraform and Kubernetes. This project focuses on Infrastructure-as-Code (IaC) maturity, git-ops, and cluster security hardening.",
                requirements: [
                    "Design a modular Terraform codebase that provisions a VPC, EKS/GKE cluster, and RDS.",
                    "Implement a 'GitOps' workflow using ArgoCD or Flux for cluster state management.",
                    "Configure Kubernetes 'Network Policies' and 'RBAC' for strict workload isolation.",
                    "Implement an automated 'Ingress' strategy with cert-manager and Let's Encrypt.",
                    "Build a Terraform 'Drift Detection' pipeline that alerts on manual console changes.",
                    "Achieve 100% automated environment spin-up in under 20 minutes."
                ],
                guide: [
                    "Step 1: Design the tiered network architecture and Terraform resource mapping.",
                    "Step 2: Develop the EKS/GKE provisioning modules with remote state locking.",
                    "Step 3: Implement the cluster-bootstrapping logic (Ingress, Monitoring, Certs).",
                    "Step 4: Set up the GitOps repository for automated application deployments.",
                    "Step 5: Conduct a security audit on the cluster using 'Kube-Bench' or 'Kube-Hunter'.",
                    "Step 6: Final demonstration: Perform a full environment teardown and reconstruction."
                ],
                hints: [
                    "Use 'Terragrunt' if you need to manage multiple environments with the same configuration.",
                    "Avoid storing K8s secrets in plain text in your Git repository; use 'Sealed Secrets' or Vault.",
                    "Standardize your Helm Charts to ensure consistent deployments across all services."
                ],
                testCases: [{ name: "Infrastructure Integrity", verify: "Terraform state perfectly matches cloud reality" }, { name: "GitOps Sync", verify: "Changes in Git are reflected in the cluster within 60 seconds" }],
            }
        },
        {
            id: "do-l4",
            title: "Staff Site Reliability Engineer",
            skills: [
                {
                    id: "do-l4-skill-monitor",
                    title: "Observability & Monitoring",
                    description: "Implement full-stack observability with Prometheus, Grafana, and logs.",
                    resources: [
                        { title: "The SRE Book (Google)", type: "ARTICLE", url: "https://sre.google/sre-book/table-of-contents/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What are the 'Four Golden Signals' of monitoring?", options: JSON.stringify(["Latency, Traffic, Errors, Saturation", "CPU, RAM, Disk, Network", "Speed, Size, Cost, Time", "Red, Green, Blue, Yellow"]), correctAnswer: "Latency, Traffic, Errors, Saturation", explanation: "These metrics give the highest value insight into system health.", order: 1 }
                    ],
                    miniProject: {
                        title: "Full Stack Dashboard",
                        description: "Set up a monitoring stack that alerts you when error rates exceed 1% or latency passes 500ms.",
                        requirements: JSON.stringify(["Instrument an app with Prometheus metrics.", "Build a Grafana dashboard.", "Configure Alertmanager triggers."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Chaos-Control - Self-Healing Global Infrastructure",
                description: "Architect a global, self-healing infrastructure managed by advanced observability and chaos engineering. Focus on SRE principles, automated incident response, and performance at scale.",
                requirements: [
                    "Design a multi-region Prometheus federation for global observability.",
                    "Implement 'Automated Incident Remediation' using custom scripts triggered by alerts.",
                    "Build a 'Chaos Mesh' workflow that periodically kills nodes and randomizes network lag.",
                    "Achieve 99.99% uptime target by implementing advanced failover and load-shedding.",
                    "Design a centralized logging and tracing layer using the ELK stack and OpenTelemetry.",
                    "Lead a strategic 'Post-Mortem' analysis of a simulated global infrastructure failure."
                ],
                guide: [
                    "Step 1: Set up the global monitoring plane and error-budget tracking.",
                    "Step 2: Develop the automation logic for 'Self-Healing' (Auto-Restart, Auto-Scale, Auto-Route).",
                    "Step 3: Implement the Chaos Engineering suite to verify system resilience.",
                    "Step 4: Build the distributed tracing layer to map complex microservice dependencies.",
                    "Step 5: Conduct a full 'Black-Hole' event test (Simulated regional outage).",
                    "Step 6: Final demonstration: Present a 3-month reliability roadmap to stakeholders."
                ],
                hints: [
                    "Treat 'Alerts' as bugs: if an alert doesn't require immediate action, it shouldn't exist.",
                    "A 'Service Level Objective' (SLO) is your most powerful tool for balancing speed and stability.",
                    "Chaos Engineering is about discovering what you don't know about your system before it breaks in prod."
                ],
                testCases: [{ name: "Alert Accuracy", verify: "100% of remediation scripts triggered correctly during failure" }, { name: "System Resilience", verify: "Zero user impact during 50% node termination Chaos test" }],
            }
        }
    ]
};
