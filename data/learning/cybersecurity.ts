export const cyberSecurityContent = {
    levels: [
        {
            id: "cs-l1",
            title: "Junior Cybersecurity Analyst",
            skills: [
                {
                    id: "cs-l1-skill-networking",
                    title: "Networking Fundamentals & Protocol Analysis",
                    description: "Understand the backbone of security: Networking. Master the OSI model, TCP/IP handshake, and how to analyze traffic using Wireshark.",
                    resources: [
                        { title: "Network Chuck: Free CCNA Course", type: "VIDEO", url: "https://www.youtube.com/playlist?list=PLIhvC56v6w8_N9YAnLOfXQ6Y0L_ayF-yT", duration: 180, order: 1 },
                        { title: "Cisco: OSI Model Explained", type: "ARTICLE", url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html", duration: 30, order: 2 }
                    ],
                    questions: [
                        { question: "Which layer of the OSI model is responsible for end-to-end communication and error recovery?", options: JSON.stringify(["Physical", "Network", "Transport", "Session"]), correctAnswer: "Transport", explanation: "The Transport layer (Layer 4) ensures reliable data transfer across the network.", order: 1 },
                        { question: "What is the 3-Way Handshake sequence in TCP?", options: JSON.stringify(["SYN, SYN-ACK, ACK", "ACK, SYN, SYN-ACK", "SYN, ACK, FIN", "PING, PONG, ACK"]), correctAnswer: "SYN, SYN-ACK, ACK", explanation: "This sequence establishes a reliable connection between two hosts.", order: 2 },
                        { question: "What is the primary role of DNS?", options: JSON.stringify(["Encrypting emails.", "Translating domain names into IP addresses.", "Routing packets.", "Storing passwords."]), correctAnswer: "Translating domain names into IP addresses.", explanation: "DNS acts as the phonebook of the internet.", order: 3 },
                        { question: "Which protocol is 'connectionless' and faster but less reliable than TCP?", options: JSON.stringify(["HTTP", "FTP", "UDP", "SSH"]), correctAnswer: "UDP", explanation: "UDP (User Datagram Protocol) does not guarantee delivery, making it faster for streaming.", order: 4 },
                        { question: "What does an ARP request do?", options: JSON.stringify(["Finds an IP address from a MAC address.", "Finds a MAC address from an IP address.", "Checks for internet connection.", "Resolves a domain name."]), correctAnswer: "Finds a MAC address from an IP address.", explanation: "ARP (Address Resolution Protocol) links the network layer (IP) to the data link layer (MAC).", order: 5 },
                        { question: "Which port is standard for HTTPS?", options: JSON.stringify(["80", "22", "443", "21"]), correctAnswer: "443", explanation: "Port 443 is used for secure web traffic (SSL/TLS).", order: 6 },
                        { question: "What is the purpose of ICMP?", options: JSON.stringify(["File transfer.", "Error reporting and network diagnostics (e.g., Ping).", "Remote login.", "Web hosting."]), correctAnswer: "Error reporting and network diagnostics (e.g., Ping).", explanation: "Internet Control Message Protocol is used for diagnostic messages.", order: 7 },
                        { question: "What layer does a traditional router operate at?", options: JSON.stringify(["Layer 1", "Layer 2", "Layer 3", "Layer 4"]), correctAnswer: "Layer 3", explanation: "Routers operate at the Network layer using IP addresses to route packets.", order: 8 },
                        { question: "What is CIDR notation used for?", options: JSON.stringify(["Encryption.", "IP address allocation and subnetting.", "Database naming.", "CSS styling."]), correctAnswer: "IP address allocation and subnetting.", explanation: "CIDR (Classless Inter-Domain Routing) describes the IP range and subnet mask.", order: 9 },
                        { question: "Which protocol is used for remote shell access securely?", options: JSON.stringify(["Telnet", "SSH", "HTTP", "RDP"]), correctAnswer: "SSH", explanation: "SSH (Secure Shell) provides encrypted remote access.", order: 10 },
                        { question: "What is the default subnet mask for a Class C network?", options: JSON.stringify(["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"]), correctAnswer: "255.255.255.0", explanation: "Class C networks support up to 254 hosts.", order: 11 },
                        { question: "What does a DHCP server do?", options: JSON.stringify(["Resolves names.", "Automatically assigns IP addresses to devices on a network.", "Blocks viruses.", "Caches web content."]), correctAnswer: "Automatically assigns IP addresses to devices on a network.", explanation: "DHCP automates the network configuration of hosts.", order: 12 },
                        { question: "Which layer handles MAC addresses?", options: JSON.stringify(["Physical", "Data Link", "Network", "Application"]), correctAnswer: "Data Link", explanation: "Layer 2 (Data Link) uses MAC addresses to deliver frames within a local network segment.", order: 13 },
                        { question: "What is a 'Subnet'?", options: JSON.stringify(["A type of cable.", "A logical partition of an IP network.", "A backup server.", "A browser plugin."]), correctAnswer: "A logical partition of an IP network.", explanation: "Subnetting improves network performance and security by isolating segments.", order: 14 },
                        { question: "In Wireshark, what is a 'Capture Filter'?", options: JSON.stringify(["A way to color codes.", "A filter that reduces the amount of data saved during capture.", "A search tool.", "A report generator."]), correctAnswer: "A filter that reduces the amount of data saved during capture.", explanation: "Capture filters tell Wireshark which packets to ignore before they are written to disk.", order: 15 }
                    ],
                    miniProject: {
                        title: "Network Traffic Investigator (The Wireshark Lab)",
                        description: "Analyze a PCAP file containing a simulated attack to identify and isolate malicious traffic.",
                        requirements: JSON.stringify(["Identify the attacker's IP address.", "Locate the specific protocol used in the exploit.", "Extract a plaintext password from a captured stream.", "Document the timeline of the attack."]),
                        guide: JSON.stringify([
                            "Step 1: Open the provided '.pcap' file in Wireshark.",
                            "Step 2: Use display filters to look for unusual traffic (e.g., 'http' or 'telnet').",
                            "Step 3: Right-click a suspicious packet and use 'Follow TCP Stream' to see the conversation.",
                            "Step 4: Search for keywords like 'login', 'admin', or 'pass'.",
                            "Step 5: Document the source IP, destination IP, and the credentials found."
                        ]),
                        hints: JSON.stringify([
                            "Look for many 'failed login' responses (HTTP 401).",
                            "The filter 'http.request.method == POST' often reveals login attempts.",
                            "Unencrypted protocols like Telnet and HTTP are easy to read in 'Follow Stream'."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Wireshark Display Filters Cheat Sheet", url: "https://www.wireshark.org/docs/dfref/" },
                            { title: "OverTheWire: Bandit (Practice Lab)", url: "https://overthewire.org/wargames/bandit/" }
                        ]),
                        testCases: JSON.stringify([{ name: "Identification", verify: "Attacker IP correctly identified" }, { name: "Evidence", verify: "Plaintext credentials successfully extracted" }]),
                        order: 1
                    }
                },
                {
                    id: "cs-l1-skill-linux",
                    title: "Linux Security & Command Line",
                    description: "Master the operating system of the cloud. Learn about permissions, system logs, and hardening your Linux environment.",
                    resources: [
                        { title: "The Linux Command Line (PDF)", type: "DOCUMENTATION", url: "https://linuxcommand.org/tlcl.php", duration: 120, order: 1 },
                        { title: "Linux Hardening Guide", type: "ARTICLE", url: "https://www.cyberciti.biz/tips/linux-security-checklist.html", duration: 45, order: 2 }
                    ],
                    questions: [
                        { question: "Which command is used to change file permissions?", options: JSON.stringify(["chown", "chmod", "mv", "ls"]), correctAnswer: "chmod", explanation: "chmod (Change Mode) is used to modify the read, write, and execute permissions.", order: 1 },
                        { question: "What does 'sudo' stand for?", options: JSON.stringify(["Super User Do", "System Upgrade Do", "Secure User Data Only", "Save User Data Online"]), correctAnswer: "Super User Do", explanation: "Sudo allows a permitted user to execute a command as the superuser.", order: 2 },
                        { question: "In 'rwxr-xr--', what are the permissions for the 'Group'?", options: JSON.stringify(["Full access", "Read and execute", "Read only", "No access"]), correctAnswer: "Read and execute", explanation: "The second triplet 'r-x' represents the group permissions.", order: 3 },
                        { question: "Where are system logs typically stored in Linux?", options: JSON.stringify(["/home/logs", "/etc/logs", "/var/log", "/bin/log"]), correctAnswer: "/var/log", explanation: "/var/log is the standard directory for system logs.", order: 4 },
                        { question: "What is the purpose of 'cron' tabs?", options: JSON.stringify(["Editing text.", "Scheduling recurring tasks.", "Backing up files.", "Managing users."]), correctAnswer: "Scheduling recurring tasks.", explanation: "Cron is the time-based job scheduler in Unix-like operating systems.", order: 5 },
                        { question: "Which command shows running processes and their resource usage in real-time?", options: JSON.stringify(["ps", "top (or htop)", "ls", "grep"]), correctAnswer: "top (or htop)", explanation: "Top provides a dynamic real-time view of a running system.", order: 6 },
                        { question: "What does 'chown' do?", options: JSON.stringify(["Changes file content.", "Changes the owner of a file or directory.", "Changes the name.", "Changes the path."]), correctAnswer: "Changes the owner of a file or directory.", explanation: "Chown (Change Owner) sets the user and/or group ownership.", order: 7 },
                        { question: "Purpose of the /etc/passwd file?", options: JSON.stringify(["Stores passwords.", "Contains basic user account information.", "System configuration.", "Log of all paths."]), correctAnswer: "Contains basic user account information.", explanation: "It lists all the accounts on the system.", order: 8 },
                        { question: "Who is the 'root' user?", options: JSON.stringify(["A regular user.", "The superuser with unlimited privileges.", "A guest account.", "A bot."]), correctAnswer: "The superuser with unlimited privileges.", explanation: "Root has complete control over the system.", order: 9 },
                        { question: "What does the command 'grep' do?", options: JSON.stringify(["Copies files.", "Searches for patterns within text files.", "Renames directories.", "Deletes logs."]), correctAnswer: "Searches for patterns within text files.", explanation: "Grep is essential for log analysis and finding information.", order: 10 },
                        { question: "What is a 'Shell'?", options: JSON.stringify(["A computer virus.", "A program that provides an interface between the user and the kernel.", "A hardware component.", "A file format."]), correctAnswer: "A program that provides an interface between the user and the kernel.", explanation: "Common shells include Bash and Zsh.", order: 11 },
                        { question: "What does 'umask' control?", options: JSON.stringify(["Password strength.", "Default permissions for newly created files.", "Network speed.", "CPU frequency."]), correctAnswer: "Default permissions for newly created files.", explanation: "Umask sets the mask that is subtracted from full permissions for new files.", order: 12 },
                        { question: "How do you view the content of a file without opening an editor?", options: JSON.stringify(["cat", "vi", "mkdir", "rm"]), correctAnswer: "cat", explanation: "Cat (Concatenate) prints the file content to the terminal.", order: 13 },
                        { question: "What is the purpose of the 'iptables' (or nftables)?", options: JSON.stringify(["Formatting disks.", "Configuring the Linux kernel firewall.", "Updating software.", "Managing storage."]), correctAnswer: "Configuring the Linux kernel firewall.", explanation: "Iptables is used to set up, maintain, and inspect the tables of IP packet filter rules.", order: 14 },
                        { question: "What does 'ls -la' do?", options: JSON.stringify(["Lists files in long format including hidden files.", "Deletes files.", "Moves files.", "Searches the internet."]), correctAnswer: "Lists files in long format including hidden files.", explanation: "The -a flag shows hidden files (starting with .), and -l shows details like size and owner.", order: 15 }
                    ],
                    miniProject: {
                        title: "Server Hardening Script",
                        description: "Write a Bash script that automatically hardens a fresh Linux installation by adjusting permissions, disabling root SSH login, and setting up a firewall.",
                        requirements: JSON.stringify(["Disable root login via SSH.", "Set strict permissions on '/etc/shadow'.", "Configure 'ufw' to allow only specific ports.", "Create a new admin user with sudo privileges."]),
                        guide: JSON.stringify([
                            "Step 1: Create a script named 'harden.sh' and add the shebang '#!/bin/bash'.",
                            "Step 2: Use 'sed' to update '/etc/ssh/sshd_config' setting 'PermitRootLogin no'.",
                            "Step 3: Add commands to install and enable 'ufw' (Uncomplicated Firewall).",
                            "Step 4: Use 'chmod 600' on sensitive configuration files.",
                            "Step 5: Run the script using 'sudo bash harden.sh' on a test VM."
                        ]),
                        hints: JSON.stringify([
                            "Always test your script in a Virtual Machine (like VirtualBox or AWS Free Tier) first.",
                            "Use 'man' pages (e.g., 'man chmod') if you forget a flag.",
                            "Check '/var/log/auth.log' to see if your SSH changes worked."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Bash Scripting for Beginners", url: "https://linuxjourney.com/lesson/bash-scripting" },
                            { title: "DigitalOcean: How to Harden a Linux Web Server", url: "https://www.digitalocean.com/community/tutorials/how-to-harden-a-new-ubuntu-linux-server" }
                        ]),
                        testCases: JSON.stringify([{ name: "Security Check", verify: "Root SSH login is disabled" }, { name: "Firewall", verify: "Only ports 22, 80, 443 are open" }]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "cs-l2",
            title: "Intermediate Cybersecurity Analyst",
            skills: [
                {
                    id: "cs-l2-skill-web",
                    title: "Web Application Security (OWASP Top 10)",
                    description: "Master the most common web vulnerabilities: SQL Injection, XSS, CSRF, and Broken Authentication.",
                    resources: [
                        { title: "OWASP Top 10", type: "DOCUMENTATION", url: "https://owasp.org/www-project-top-ten/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is SQL Injection?", options: JSON.stringify(["Cleaning a database.", "Inserting malicious SQL code into a query via user input.", "Injecting data into a table.", "A database backup."]), correctAnswer: "Inserting malicious SQL code into a query via user input.", explanation: "It allows attackers to view or modify data they shouldn't access.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Vulnerability Scanner",
                        description: "Write a Python script to scan a local test server for common vulnerabilities (e.g., checking for exposed .git directories or open ports).",
                        requirements: JSON.stringify(["Use 'requests' library.", "Check for default admin pages.", "Report findings in a text file."]),
                        order: 1
                    }
                },
                {
                    id: "cs-l2-skill-crypto",
                    title: "Cryptography Fundamentals",
                    description: "Understand encryption, hashing, and digital signatures. Symmetric vs Asymmetric algorithms.",
                    resources: [
                        { title: "Khan Academy: Cryptography", type: "VIDEO", url: "https://www.khanacademy.org/computing/computer-science/cryptography", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between Hashing and Encryption?", options: JSON.stringify(["No difference.", "Hashing is one-way; Encryption is two-way.", "Hashing is faster.", "Encryption is only for text."]), correctAnswer: "Hashing is one-way; Encryption is two-way.", explanation: "Hashes (like SHA-256) cannot be reversed to reveal the original data.", order: 1 }
                    ],
                    miniProject: {
                        title: "Secure Message Tool",
                        description: "Build a CLI tool that encrypts and decrypts messages using AES.",
                        requirements: JSON.stringify(["Use the 'cryptography' library in Python.", "Generate and store keys securely.", "Implement both encryption and decryption."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "cs-l3",
            title: "Senior Security Engineer",
            skills: [
                {
                    id: "cs-l3-skill-pentest",
                    title: "Penetration Testing & Ethical Hacking",
                    description: "Think like an attacker. Reconnaissance, Scanning, Exploitation, and Reporting.",
                    resources: [
                        { title: "Metasploit Unleashed", type: "COURSE", url: "https://www.offsec.com/metasploit-unleashed/", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Reconnaissance'?", options: JSON.stringify(["Attacking the server.", "Gathering information about the target before the attack.", "Writing a report.", "Fixing bugs."]), correctAnswer: "Gathering information about the target before the attack.", explanation: "Recon is the first and most critical phase of a pentest.", order: 1 }
                    ],
                    miniProject: {
                        title: "Simulated Internal Audit",
                        description: "Conduct a security audit on a provided docker container and write a professional report.",
                        requirements: JSON.stringify(["Identify open ports.", "Find the hidden flag (CTF style).", "Write a remediation plan."]),
                        order: 1
                    }
                },
                {
                    id: "cs-l3-skill-ir",
                    title: "Incident Response & Forensics",
                    description: "Detect, Contain, and Recover from cyber attacks. Analyze logs and memory dumps.",
                    resources: [
                        { title: "NIST Incident Response Guide", type: "DOCUMENTATION", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is the first step in the Incident Response process?", options: JSON.stringify(["Containment.", "Preparation.", "Eradication.", "Lessons Learned."]), correctAnswer: "Preparation.", explanation: "Preparation involves having policies and tools ready before an incident occurs.", order: 1 }
                    ],
                    miniProject: {
                        title: "Log Analysis Bot",
                        description: "Create a tool that parses server logs to detect brute-force attacks.",
                        requirements: JSON.stringify(["Parse Apache/Nginx access logs.", "Alert on >5 failed logins from one IP.", "Block the IP using iptables commands (simulated)."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "cs-l4",
            title: "Principal Security Architect",
            skills: [
                {
                    id: "cs-l4-skill-devsecops",
                    title: "DevSecOps & Cloud Security",
                    description: "Integrate security into the CI/CD pipeline. Secure Infrastructure as Code (IaC).",
                    resources: [
                        { title: "AWS Security Best Practices", type: "DOCUMENTATION", url: "https://aws.amazon.com/architecture/security-identity-compliance/", duration: 150, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Shift Left'?", options: JSON.stringify(["Moving files.", "Testing for security early in the development lifecycle.", "A political movement.", "Using older software."]), correctAnswer: "Testing for security early in the development lifecycle.", explanation: "It reduces the cost and complexity of fixing vulnerabilities.", order: 1 }
                    ],
                    miniProject: {
                        title: "Secure Cloud Architecture",
                        description: "Design a secure 3-tier architecture for a banking application on AWS.",
                        requirements: JSON.stringify(["Design VPCs and Subnets.", "Define Security Groups and NACLs.", "Implement IAM roles with least privilege."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};
