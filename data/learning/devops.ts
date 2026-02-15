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
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
};
