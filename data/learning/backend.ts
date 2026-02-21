export const backendContent = {
    levels: [
        {
            id: "be-l1",
            title: "Junior Backend Engineer",
            skills: [
                {
                    id: "be-l1-skill-node",
                    title: "Node.js Core Foundations",
                    description: "Master the V8 engine, Event Loop, and the asynchronous nature of Node.js. Learn about buffers, streams, and the file system for high-performance I/O.",
                    resources: [
                        { title: "Node.js Documentation: Event Loop", type: "DOCUMENTATION", url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/", duration: 30, order: 1 },
                        { title: "Node.js Streams: A Complete Guide", type: "ARTICLE", url: "https://web.dev/nodes-streams/", duration: 25, order: 2 },
                        { title: "The Art of Node", type: "DOCUMENTATION", url: "https://github.com/maxogden/art-of-node/#the-art-of-node", duration: 40, order: 3 }
                    ],
                    questions: [
                        { question: "Which component of the Node.js architecture handles asynchronous I/O operations?", options: JSON.stringify(["V8 Engine", "Libuv", "The Call Stack", "Winston"]), correctAnswer: "Libuv", explanation: "Libuv is the C++ library that handles the event loop and asynchronous tasks like file system access and networking.", order: 1 },
                        { question: "What is the result of 'process.nextTick()'?", options: JSON.stringify(["It schedules a callback for the next event loop cycle.", "It executes the callback immediately after the current operation, before the event loop continues.", "It is used for multi-threading.", "It clears the cache."]), correctAnswer: "It executes the callback immediately after the current operation, before the event loop continues.", explanation: "nextTick callbacks are processed before the event loop moves to the next phase, ideal for handling errors before processing continues.", order: 2 },
                        { question: "What is a Buffer in Node.js?", options: JSON.stringify(["A temporary storage for strings.", "A chunk of memory outside the V8 heap used to handle raw binary data.", "A type of database indexing.", "An encryption algorithm."]), correctAnswer: "A chunk of memory outside the V8 heap used to handle raw binary data.", explanation: "Buffers are essential for handling binary streams (like files or network packets) efficiently.", order: 3 },
                        { question: "Which of the following is NOT a phase of the Node.js Event Loop?", options: JSON.stringify(["Poll", "Check", "Render", "Timers"]), correctAnswer: "Render", explanation: "Render is a browser-side concept. Node.js event loop phases include Timers, Pending, Idle/Prepare, Poll, Check, and Close.", order: 4 },
                        { question: "How does 'require()' resolve modules in Node.js?", options: JSON.stringify(["Asynchronously.", "Synchronously.", "Via HTTP requests.", "Only if they are inside node_modules."]), correctAnswer: "Synchronously.", explanation: "Module loading in Node.js is synchronous, which is why it's usually done at the top of the file.", order: 5 },
                        { question: "What is the purpose of 'stream.pipe()'?", options: JSON.stringify(["To encrypt data.", "To connect a readable stream to a writable stream automatically handling backpressure.", "To close a database connection.", "To log errors."]), correctAnswer: "To connect a readable stream to a writable stream automatically handling backpressure.", explanation: "Pipe is the most efficient way to transfer data between streams without overwhelming the memory.", order: 6 },
                        { question: "What is 'Backpressure' in streams?", options: JSON.stringify(["A network failure.", "When data is written faster than the writable stream can consume it.", "High CPU usage.", "Database timeout."]), correctAnswer: "When data is written faster than the writable stream can consume it.", explanation: "Managing backpressure ensures that the readable stream pauses until the writable stream is ready for more data.", order: 7 },
                        { question: "Which module is used to handle file paths across different operating systems?", options: JSON.stringify(["fs", "path", "os", "url"]), correctAnswer: "path", explanation: "The 'path' module provides utilities for working with file and directory paths uniformly.", order: 8 },
                        { question: "What does 'fs.promises' provide?", options: JSON.stringify(["Faster file access.", "A promise-based version of the file system API.", "Automatic file encryption.", "Global variables."]), correctAnswer: "A promise-based version of the file system API.", explanation: "It allow using async/await with file system operations instead of callbacks.", order: 9 },
                        { question: "What is the 'REPL' in Node.js?", options: JSON.stringify(["A build tool.", "Read-Eval-Print Loop (an interactive shell).", "A deployment strategy.", "A pattern for state management."]), correctAnswer: "Read-Eval-Print Loop (an interactive shell).", explanation: "REPL allows you to execute JavaScript code line-by-line in the terminal.", order: 10 },
                        { question: "How can you pass command line arguments to a Node.js script?", options: JSON.stringify(["Using process.argv", "Using process.env", "Using console.log", "Using fs.read"]), correctAnswer: "Using process.argv", explanation: "process.argv contains an array of the command line arguments passed when the process was started.", order: 11 },
                        { question: "What is the difference between setImmediate() and setTimeout(fn, 0)?", options: JSON.stringify(["No difference.", "setImmediate runs in the 'Check' phase; setTimeout runs in the 'Timers' phase.", "setTimeout is faster.", "setImmediate is deprecated."]), correctAnswer: "setImmediate runs in the 'Check' phase; setTimeout runs in the 'Timers' phase.", explanation: "The order of execution can vary depending on the context, but they belong to different phases.", order: 12 },
                        { question: "Which core module is an instance of EventEmitter?", options: JSON.stringify(["fs", "http.Server", "path", "os"]), correctAnswer: "http.Server", explanation: "Most core modules in Node.js that handle I/O emit events and inherit from EventEmitter.", order: 13 },
                        { question: "What is a 'Zombie process'?", options: JSON.stringify(["A virus.", "A process that has completed execution but still has an entry in the process table.", "A background service.", "A process with high memory."]), correctAnswer: "A process that has completed execution but still has an entry in the process table.", explanation: "It happens when a parent hasn't yet read the exit status of its child.", order: 14 },
                        { question: "What is the role of 'package-lock.json'?", options: JSON.stringify(["To hide passwords.", "To lock dependencies to specific versions for deterministic builds.", "To increase download speed.", "To manage environment variables."]), correctAnswer: "To lock dependencies to specific versions for deterministic builds.", explanation: "It ensures every developer on the project installs the exact same version of every package.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Log Stream Processor",
                        description: "Build a high-performance log processor that can handle multi-gigabyte log files using streams and custom transforms without exceeding 50MB of RAM.",
                        requirements: JSON.stringify(["Use 'fs.createReadStream' to process files.", "Implement a custom Transform stream to filter and format log entries.", "Handle backpressure correctly.", "Generate a summary report as a separate stream output."]),
                        guide: JSON.stringify([
                            "Step 1: Use 'fs.createReadStream' to read the large log file in chunks.",
                            "Step 2: Create a custom 'Transform' stream that splits the buffer by newlines.",
                            "Step 3: In the transform logic, parse each log line (JSON or plain text) and filter out non-error entries.",
                            "Step 4: Pipe the filtered data into a 'writable' stream that saves the errors to a new file.",
                            "Step 5: Monitor the memory usage using 'process.memoryUsage()' to verify the efficiency."
                        ]),
                        hints: JSON.stringify([
                            "Don't use 'fs.readFile' for large files as it loads the entire content into memory.",
                            "Use 'readline' module for easy line-by-line processing if you find raw streams too complex.",
                            "The 'highWaterMark' option in streams can be adjusted to balance speed and memory."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Node.js Streams Handbook", url: "https://github.com/substack/stream-handbook" },
                            { title: "MDN: Transform Streams", url: "https://developer.mozilla.org/en-US/docs/Web/API/TransformStream" }
                        ]),
                        testCases: JSON.stringify([{ name: "Memory Limit", verify: "RAM usage stays under 50MB" }, { name: "Accuracy", verify: "Target error logs are correctly extracted" }]),
                        order: 1
                    }
                },
                {
                    id: "be-l1-skill-express",
                    title: "Express & Middleware Architecture",
                    description: "Learn to build scalable APIs using Express. Master the middleware pattern, request lifecycle, and advanced routing strategies.",
                    resources: [
                        { title: "ExpressJS: Guide to Middleware", type: "DOCUMENTATION", url: "https://expressjs.com/en/guide/using-middleware.html", duration: 20, order: 1 },
                        { title: "The Anatomy of a Modern Express App", type: "ARTICLE", url: "https://www.digitalocean.com/community/tutorials/nodejs-express-routing", duration: 25, order: 2 }
                    ],
                    questions: [
                        { question: "What is 'middleware' in the context of Express?", options: JSON.stringify(["A database driver.", "Functions that have access to the request object, response object, and the next middleware function.", "A frontend framework.", "A cloud provider."]), correctAnswer: "Functions that have access to the request object, response object, and the next middleware function.", explanation: "Middleware forms the core of Express, allowing you to intercept and modify requests before they reach the final handler.", order: 1 },
                        { question: "What happens if you don't call 'next()' in a middleware function?", options: JSON.stringify(["The request continues normally.", "The request is left hanging and the browser will eventually timeout.", "The server crashes.", "An error is thrown."]), correctAnswer: "The request is left hanging and the browser will eventually timeout.", explanation: "next() passes control to the next handler; without it, the request cycle is never completed.", order: 2 },
                        { question: "How do you handle errors globally in Express?", options: JSON.stringify(["Using try/catch in every route.", "Defining a middleware with 4 arguments (err, req, res, next).", "Express handles everything automatically.", "Using console.error."]), correctAnswer: "Defining a middleware with 4 arguments (err, req, res, next).", explanation: "Express identifies error-handling middleware by the number of arguments (4).", order: 3 },
                        { question: "Which method is used to serve static files in Express?", options: JSON.stringify(["res.sendFile()", "express.static()", "fs.read()", "app.get()"]), correctAnswer: "express.static()", explanation: "express.static is the built-in middleware for serving images, CSS, and JS files.", order: 4 },
                        { question: "What is the purpose of 'app.use()'?", options: JSON.stringify(["To define a GET route.", "To mount middleware functions to the application stack.", "To connect to a database.", "To start the server."]), correctAnswer: "To mount middleware functions to the application stack.", explanation: "app.use mounts middleware for all routes or a specific path prefix.", order: 5 },
                        { question: "How do you access route parameters like '/user/:id'?", options: JSON.stringify(["req.query.id", "req.params.id", "req.body.id", "req.data.id"]), correctAnswer: "req.params.id", explanation: "Route parameters are stored in the req.params object.", order: 6 },
                        { question: "What is 'req.body'?", options: JSON.stringify(["The request URL.", "The data sent in the request body (e.g., from a POST request).", "The user's IP address.", "The server configuration."]), correctAnswer: "The data sent in the request body (e.g., from a POST request).", explanation: "req.body contains parsed data from the request, usually populated by body-parsing middleware like express.json().", order: 7 },
                        { question: "Which middleware is essential for parsing JSON request bodies?", options: JSON.stringify(["morgan", "express.json()", "cookie-parser", "cors"]), correctAnswer: "express.json()", explanation: "In modern Express, express.json() is built-in to handle JSON payloads.", order: 8 },
                        { question: "What does 'res.json()' do?", options: JSON.stringify(["Sends a plain text response.", "Sends a JSON response and automatically sets the Content-Type header.", "Converts a file to JSON.", "Crashes the server if the data isn't an object."]), correctAnswer: "Sends a JSON response and automatically sets the Content-Type header.", explanation: "It's the standard way to send data back in an API.", order: 9 },
                        { question: "How do you distinguish between separate Router files in a large app?", options: JSON.stringify(["Use express.Router()", "Use multiple app instances.", "You can't.", "Use global variables."]), correctAnswer: "Use express.Router()", explanation: "Routers allow you to modularize your routing logic into separate files.", order: 10 },
                        { question: "What is 'Morgan' used for?", options: JSON.stringify(["Authentication.", "Logging HTTP requests.", "Database migrations.", "CSS processing."]), correctAnswer: "Logging HTTP requests.", explanation: "Morgan is a popular middleware for logging details about incoming requests to the console.", order: 11 },
                        { question: "Why is the order of middleware important?", options: JSON.stringify(["It isn't.", "Middleware executes in the order it is defined.", "It affects the CPU usage.", "Express sorts it alphabetically."]), correctAnswer: "Middleware executes in the order it is defined.", explanation: "If an error handler is defined before a route, it won't catch errors from that route.", order: 12 },
                        { question: "What is the role of the 'CORS' middleware?", options: JSON.stringify(["Speed optimization.", "Protecting the server from cross-origin requests by setting appropriate headers.", "Parsing cookies.", "Minifying JS."]), correctAnswer: "Protecting the server from cross-origin requests by setting appropriate headers.", explanation: "CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API.", order: 13 },
                        { question: "How do you send a 404 response in Express?", options: JSON.stringify(["res.end()", "res.status(404).send('Not Found')", "throw Error('404')", "app.error(404)"]), correctAnswer: "res.status(404).send('Not Found')", explanation: "You use res.status() to set the HTTP status code explicitly.", order: 14 },
                        { question: "What is 'req.query'?", options: JSON.stringify(["The request body.", "The URL query parameters (e.g., ?search=node).", "The database query.", "The browser name."]), correctAnswer: "The URL query parameters (e.g., ?search=node).", explanation: "Query parameters are accessible via the req.query object.", order: 15 }
                    ],
                    miniProject: {
                        title: "Secure API Gateway",
                        description: "Build a robust Express server that acts as a secure gateway, implementing rate limiting, input validation, and structured error handling.",
                        requirements: JSON.stringify(["Implement custom authentication middleware.", "Use 'express-validator' for request verification.", "Create a global error handling middleware.", "Implement a rate limiter to prevent brute force."]),
                        guide: JSON.stringify([
                            "Step 1: Initialize an Express app and set up 'express-rate-limit'.",
                            "Step 2: Create a 'middleware/' folder and implement a JWT checking function.",
                            "Step 3: Define routes that use 'express-validator' to ensure bodies contain required fields.",
                            "Step 4: Create an 'errorHandler' middleware at the very end of your middleware stack.",
                            "Step 5: Test the flow by sending invalid data and checking for structured JSON error responses."
                        ]),
                        hints: JSON.stringify([
                            "Ensure the error handler has 4 parameters, even if 'next' isn't used.",
                            "Use 'express-async-errors' to avoid manual try/catch in every async route.",
                            "Keep your routes thin and move logic to 'controllers/'."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Express Validation Guide", url: "https://express-validator.github.io/docs/" },
                            { title: "OWASP: Node.js Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html" }
                        ]),
                        testCases: JSON.stringify([{ name: "Validation", verify: "Returns 400 for empty fields" }, { name: "Security", verify: "JWT required for protected routes" }]),
                        order: 2
                    }
                },
                {
                    id: "be-l1-skill-sql",
                    title: "SQL & PostgreSQL Foundations",
                    description: "Relational data modeling is the backbone of the enterprise. Master recursive queries, indexing strategies, and ACID transactions.",
                    resources: [
                        { title: "PostgreSQL: Tutorial for Beginners", type: "ARTICLE", url: "https://www.postgresqltutorial.com/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What does ACID stand for?", options: JSON.stringify(["Atomicity, Consistency, Isolation, Durability", "Accuracy, Complexity, Integrity, Data", "Auto-increment, Caching, Indexing, Deletion", "None"]), correctAnswer: "Atomicity, Consistency, Isolation, Durability", explanation: "ACID ensures reliable database transactions.", order: 1 }
                    ],
                    miniProject: {
                        title: "Relational Schema Designer",
                        description: "Design a relational schema for an e-commerce platform.",
                        requirements: JSON.stringify(["Implement 3NF.", "Define one-to-many and many-to-many relationships."]),
                        order: 3
                    }
                },
                {
                    id: "be-l1-skill-networking",
                    title: "Networking Foundations: TCP/UDP",
                    description: "Understand the transport layer. Learn the difference between TCP and UDP, the 3-way handshake, and how data moves across the wire.",
                    resources: [
                        { title: "Cloudflare: What is TCP?", type: "ARTICLE", url: "https://www.cloudflare.com/learning/network-layer/what-is-tcp/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary characteristic of UDP?", options: JSON.stringify(["Connection-oriented.", "Reliable but slow.", "Connectionless and fast, with no guarantee of delivery.", "Used only for web browsing."]), correctAnswer: "Connectionless and fast, with no guarantee of delivery.", explanation: "UDP is ideal for real-time applications like gaming or streaming where speed is prioritized over reliability.", order: 1 }
                    ],
                    miniProject: {
                        title: "The UDP Echo Server",
                        description: "Build a raw UDP server in Node.js that echoes back messages, measuring latency for each packet.",
                        requirements: JSON.stringify(["Use the 'dgram' module.", "Handle packet loss gracefully.", "Implement a simple timeout mechanism."]),
                        order: 4
                    }
                },
                {
                    id: "be-l1-skill-security-headers",
                    title: "Backend Security: Headers & CORS",
                    description: "Master the defense-in-depth headers. HSTS, CSP, X-Frame-Options, and the intricacies of the CORS preflight request.",
                    resources: [
                        { title: "MDN: HTTP Security Headers", type: "DOCUMENTATION", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'HSTS' do?", options: JSON.stringify(["Speeds up the site.", "Forces the browser to only communicate with the server over HTTPS.", "Encrypts the database.", "Minifies JavaScript."]), correctAnswer: "Forces the browser to only communicate with the server over HTTPS.", explanation: "HSTS (HTTP Strict Transport Security) protects against protocol downgrade attacks.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Hardened Server Middleware",
                        description: "Create a reusable Express middleware that applies a 'strict-by-default' security configuration to all responses.",
                        requirements: JSON.stringify(["Disable 'X-Powered-By'.", "Configure a robust CSP header.", "Implement HSTS with includeSubdomains."]),
                        order: 5
                    }
                },
                {
                    id: "be-l1-skill-adv-sql",
                    title: "Advanced SQL: CTEs & Window Functions",
                    description: "Beyond simple SELECTs. Master Common Table Expressions (CTEs) and Window Functions like ROW_NUMBER() and RANK() for complex analytics.",
                    resources: [
                        { title: "PostgresQBTutorial: CTE Guide", type: "ARTICLE", url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cte/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'CTE'?", options: JSON.stringify(["A type of database.", "A temporary result set that you can reference within another SELECT statement.", "A way to delete data.", "A type of index."]), correctAnswer: "A temporary result set that you can reference within another SELECT statement.", explanation: "CTEs make complex queries more readable and maintainable.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Revenue Analytics Engine",
                        description: "Write a complex SQL command using CTEs to calculate month-over-month growth for an e-commerce platform.",
                        requirements: JSON.stringify(["Use multiple joined CTEs.", "Implement a window function to rank top users.", "Optimize with a partial index."]),
                        order: 6
                    }
                },
                {
                    id: "be-l1-skill-linux",
                    title: "Linux & Shell Foundations",
                    description: "The backend's home. Learn SSH, Bash scripting, process management (ps, kill, top), and the Linux file system hierarchy.",
                    resources: [
                        { title: "The Missing Semester: Shell", type: "COURSE", url: "https://missing.csail.mit.edu/2020/shell/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "How do you search for a specific process by name in Linux?", options: JSON.stringify(["dir", "pgrep", "ls", "cd"]), correctAnswer: "pgrep", explanation: "pgrep (and ps aux | grep) are the standard ways to find running processes.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Automated Deployer Script",
                        description: "Write a Bash script that SSHs into a remote server, pulls the latest code, and restarts the Node.js process using PM2.",
                        requirements: JSON.stringify(["Handle SSH key authentication.", "Implement error-checking at each step.", "Log the deployment timestamp."]),
                        order: 7
                    }
                },
                {
                    id: "be-l1-skill-docs",
                    title: "API Documentation & OpenAPI",
                    description: "Communication is key. Master Swagger/OpenAPI 3.0 to document your APIs, allowing for automated client generation and testing.",
                    resources: [
                        { title: "OpenAPI Specification", type: "DOCUMENTATION", url: "https://swagger.io/specification/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Swagger UI'?", options: JSON.stringify(["An IDE.", "A tool that generates interactive API documentation from an OpenAPI definition.", "A type of database.", "A CSS framework."]), correctAnswer: "A tool that generates interactive API documentation from an OpenAPI definition.", explanation: "Swagger UI allows researchers and frontend devs to test endpoints directly in the browser.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Living API Spec",
                        description: "Document a complex User API using Swagger annotations directly in your Express code.",
                        requirements: JSON.stringify(["Define all request/response schemas.", "Document error codes (400, 401, 500).", "Generate a valid JSON/YAML spec file."]),
                        order: 8
                    }
                },
                {
                    id: "be-l1-skill-testing",
                    title: "Backend Testing foundations",
                    description: "Ensure reliability. Learn how to write unit and integration tests using Jest or Mocha/Chai, and how to mock external dependencies.",
                    resources: [
                        { title: "Jest: Documentation", type: "DOCUMENTATION", url: "https://jestjs.io/docs/getting-started", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Stub' in testing?", options: JSON.stringify(["A type of error.", "A function that provides canned answers to calls made during the test.", "A real database call.", "A visual bug."]), correctAnswer: "A function that provides canned answers to calls made during the test.", explanation: "Stubs allow you to isolate the piece of code you are testing.", order: 1 }
                    ],
                    miniProject: {
                        title: "The TDD Auth Service",
                        description: "Build a user authentication service using Test Driven Development, ensuring 100% path coverage.",
                        requirements: JSON.stringify(["Write tests before implementing logic.", "Mock the database layer.", "Test all edge cases (invalid email, weak password)."]),
                        order: 9
                    }
                }
            ],
            finalProject: {
                title: "Reliable Ledger - High-Integrity Transaction System",
                description: "Build a professional-grade transaction processing engine that handles financial data with absolute reliability. This project integrates asynchronous stream processing, secure Express middleware, and ACID-compliant SQL transactions.",
                requirements: [
                    "Implement ACID transactions to ensure financial data integrity.",
                    "Process bulk transaction logs (100MB+) using efficient Node.js streams.",
                    "Secure all endpoints using JWT and custom validation middleware.",
                    "Implement structured logging and comprehensive error boundaries.",
                    "Achieve 90%+ test coverage for the core ledger logic.",
                    "Implement a rate-limited API gateway to prevent denial-of-service."
                ],
                guide: [
                    "Step 1: Design the relational schema with a focus on audit trails and immutable logs.",
                    "Step 2: Build the core ledger logic using PostgreSQL transactions (Atomicity).",
                    "Step 3: Develop a stream-based importer for legacy transaction files.",
                    "Step 4: Secure the system with a multi-layered middleware architecture.",
                    "Step 5: Implement a global error handler that prevents sensitive data leaks.",
                    "Step 6: Stress test the system for race conditions and backpressure handling."
                ],
                hints: [
                    "Use 'SELECT ... FOR UPDATE' to prevent double-spending in concurrent scenarios.",
                    "Leverage 'pino' or 'winston' for structured, high-performance logging.",
                    "Always validate input shapes using a library like Zod or Joi before processing."
                ],
                testCases: [{ name: "Transaction Atomicity", verify: "Partial failures rollback correctly" }, { name: "Throughput", verify: "500+ TPS sustained" }],
            }
        },
        {
            id: "be-l2",
            title: "Intermediate Backend Engineer",
            skills: [
                {
                    id: "be-l2-skill-auth",
                    title: "Advanced Auth (OAuth/OIDC)",
                    description: "Implement secure authentication flows using OAuth 2.0 and OpenID Connect.",
                    resources: [
                        { title: "OAuth 2.0 Simplified", type: "ARTICLE", url: "https://www.oauth.com/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is the purpose of a 'Refresh Token'?", options: JSON.stringify(["To refresh the page.", "To obtain a new Access Token without re-authenticating the user.", "To reset password.", "To clear cache."]), correctAnswer: "To obtain a new Access Token without re-authenticating the user.", explanation: "Access tokens are short-lived; refresh tokens are long-lived.", order: 1 }
                    ],
                    miniProject: {
                        title: "SSO Provider",
                        description: "Build a mock Identity Provider (IdP) that issues JWTs to a client application.",
                        requirements: JSON.stringify(["Implement Login flow.", "Issue Signed JWTs.", "Validate tokens on the client API."]),
                        order: 2
                    }
                },
                {
                    id: "be-l2-skill-redis",
                    title: "Redis & Caching Strategies",
                    description: "Go beyond simple GET/SET. Master Redis data types (hashes, sets, sorted sets), eviction policies, and cache stampede prevention using distributed locks.",
                    resources: [
                        { title: "Redis University: RU101", type: "COURSE", url: "https://university.redis.com/courses/ru101/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Cache Stampede'?", options: JSON.stringify(["When Redis crashes.", "When multiple processes simultaneously try to regenerate a cached value after it expires, overwhelming the database.", "A type of network attack.", "When memory is full."]), correctAnswer: "When multiple processes simultaneously try to regenerate a cached value after it expires, overwhelming the database.", explanation: "Using locks or 'early re-computation' can prevent stampedes.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Intelligent Cache",
                        description: "Build a caching layer with automated invalidation, TTL jitter, and a Bloom filter to prevent cache penetration.",
                        requirements: JSON.stringify(["Implement 'Write-through' caching.", "Use Redis Sets for tag-based invalidation.", "Implement TTL Jitter to prevent mass-expiration."]),
                        order: 3
                    }
                },
                {
                    id: "be-l2-skill-docker",
                    title: "Docker & Container Orchestration",
                    description: "Containerize everything. Master multi-stage builds, Docker Compose for local environments, and the fundamentals of container networking and volumes.",
                    resources: [
                        { title: "Docker Docs: Orientation", type: "DOCUMENTATION", url: "https://docs.docker.com/get-started/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the benefit of a 'Multi-stage build'?", options: JSON.stringify(["Faster builds.", "Smaller final images by separating build dependencies from the runtime environment.", "Better security.", "Automatic deployments."]), correctAnswer: "Smaller final images by separating build dependencies from the runtime environment.", explanation: "Multi-stage builds allow you to discard heavy build tools (like compilers) and only keep the production binary/files.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Zero-Config Environment",
                        description: "Dockerize a complex Node.js + Postgres + Redis application with a focus on fast development cycles using volumes and hot-reloading.",
                        requirements: JSON.stringify(["Optimized Dockerfile (<100MB).", "Docker Compose with healthchecks.", "Persistent volumes for the database."]),
                        order: 4
                    }
                },
                {
                    id: "be-l2-skill-obs",
                    title: "Observability & Monitoring",
                    description: "If you can't measure it, you can't manage it. Master Prometheus metrics, Grafana dashboards, and structured logging with OpenTelemetry.",
                    resources: [
                        { title: "Prometheus: Getting Started", type: "DOCUMENTATION", url: "https://prometheus.io/docs/introduction/overview/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Golden Signals' of monitoring?", options: JSON.stringify(["Red, Green, Blue.", "Latency, Traffic, Errors, and Saturation.", "CPU, RAM, Disk.", "Users, Sessions, Clicks."]), correctAnswer: "Latency, Traffic, Errors, and Saturation.", explanation: "The four Golden Signals are the foundation of SRE monitoring.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Reliability Dashboard",
                        description: "Instrument a Node.js app to export Prometheus metrics and design a Grafana dashboard that alerts on high p99 latency.",
                        requirements: JSON.stringify(["Export custom business metrics.", "Implement an SLI/SLO tracking dashboard.", "Setup automated Slack alerts for 5xx spikes."]),
                        order: 5
                    }
                },
                {
                    id: "be-l2-skill-realtime",
                    title: "Real-time Systems & WebSockets",
                    description: "Build reactive backends. Master Socket.io, heartbeat mechanisms, and the pub/sub pattern for scaling real-time communication across multiple servers.",
                    resources: [
                        { title: "Socket.io: Internal Mechanics", type: "DOCUMENTATION", url: "https://socket.io/docs/v4/how-it-works/", duration: 35, order: 1 }
                    ],
                    questions: [
                        { question: "How do you scale Socket.io across multiple servers?", options: JSON.stringify(["Using more RAM.", "Using a Redis Adapter for pub/sub communication between nodes.", "Using sticky sessions only.", "It's not possible."]), correctAnswer: "Using a Redis Adapter for pub/sub communication between nodes.", explanation: "The Redis Adapter allows events to be broadcasted to clients connected to different server instances.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Distributed Chat Engine",
                        description: "Build a real-time chat server that maintains state across horizontal scaling using Redis pub/sub.",
                        requirements: JSON.stringify(["Support multiple chat rooms.", "Implement 'typing' indicators.", "Handle reconnections gracefully."]),
                        order: 6
                    }
                },
                {
                    id: "be-l2-skill-cloud",
                    title: "Cloud-Native Design",
                    description: "Learn to build for the cloud. Master Serverless functions (AWS Lambda), managed databases (RDS), and Object Storage (S3) fundamentals.",
                    resources: [
                        { title: "AWS: Cloud Practitioner Essentials", type: "COURSE", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Serverless' computing?", options: JSON.stringify(["There are no servers.", "Computing where the provider manages server allocation and scaling automatically.", "Free hosting.", "Static file hosting."]), correctAnswer: "Computing where the provider manages server allocation and scaling automatically.", explanation: "Serverless allows developers to focus on code without managing the underlying infrastructure.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Cloud-Scale Image API",
                        description: "Build an API that processes image uploads, stores them in S3, and triggers a Lambda function for thumbnail generation.",
                        requirements: JSON.stringify(["Use Signed URLs for secure uploads.", "Implement CDN caching with CloudFront.", "Handle async processing events."]),
                        order: 7
                    }
                },
                {
                    id: "be-l2-skill-partitioning",
                    title: "SQL Scaling: Partitioning & Sharding",
                    description: "Master the limits of Postgres. Learn Table Partitioning (by range/list), and the conceptual foundations of Database Sharding.",
                    resources: [
                        { title: "PostgreSQL: Table Partitioning", type: "DOCUMENTATION", url: "https://www.postgresql.org/docs/current/ddl-partitioning.html", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Range Partitioning' best used for?", options: JSON.stringify(["Random IDs.", "Time-series data (e.g., logs by month).", "Usernames.", "Small tables."]), correctAnswer: "Time-series data (e.g., logs by month).", explanation: "Range partitioning allows for efficient querying and deletion of old time-based data.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Billion-Row Ledger",
                        description: "Design a partitioned database schema for a financial ledger that can handle 1 billion rows with constant lookup times.",
                        requirements: JSON.stringify(["Implement range-based partitioning on 'created_at'.", "Write a maintenance script for 'aging out' old partitions.", "Demonstrate query plan improvements."]),
                        order: 8
                    }
                }
            ],
            finalProject: {
                title: "Scale-Hub - Intelligent Distributed Cache",
                description: "Design and build a distributed caching and messaging layer capable of handling ultra-high throughput. This project integrates message queues, advanced database indexing, and multi-layered authentication.",
                requirements: [
                    "Implement a producer-consumer architecture using RabbitMQ or Kafka.",
                    "Optimize database performance using advanced PostgreSQL indexing and partitioning.",
                    "Implement a multi-tenant OAuth2/OIDC provider logic.",
                    "Design a distributed locking mechanism to prevent cache stampedes.",
                    "Achieve <50ms p99 latency for the core API endpoints.",
                    "Comprehensive monitoring dashboard for queue depth and processing latency."
                ],
                guide: [
                    "Step 1: Setup a local RabbitMQ instance and define the message schemas.",
                    "Step 2: Implement the producer API with robust retry logic and dead-letter queues.",
                    "Step 3: Develop the consumer workers with horizontal scaling capabilities.",
                    "Step 4: Integrate the OAuth2 flow with support for external providers.",
                    "Step 5: Implement Redis caching with a focus on expiration and invalidation strategies.",
                    "Step 6: Stress test the system under high load and analyze the bottleneck."
                ],
                hints: [
                    "Use 'Dead Letter Exchanges' in RabbitMQ to handle failed message processing gracefully.",
                    "Remember to index your Foreign Keys in PostgreSQL for faster JOIN performance.",
                    "Implement 'Exponential Backoff' for retrying failed external service calls."
                ],
                testCases: [{ name: "Queue Stability", verify: "Zero message loss under 1k msgs/sec" }, { name: "Latency", verify: "p99 < 50ms for cached reads" }],
            }
        },
        {
            id: "be-l3",
            title: "Senior Backend Engineer",
            skills: [
                {
                    id: "be-l3-skill-scale",
                    title: "System Design for Scale",
                    description: "Design systems that handle millions of users. Caching, Sharding, and Load Balancing.",
                    resources: [
                        { title: "System Design Primer", type: "ARTICLE", url: "https://github.com/donnemartin/system-design-primer", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Database Sharding'?", options: JSON.stringify(["Sharing a database.", "Partitioning a database horizontally across multiple servers.", "Backing up data.", "Encrypting columns."]), correctAnswer: "Partitioning a database horizontally across multiple servers.", explanation: "It allows horizontal scaling beyond a single machine's limits.", order: 1 }
                    ],
                    miniProject: {
                        title: "URL Shortener at Scale",
                        description: "Design and implement a URL shortener that can generate unique 7-char keys for 1 billion URLs.",
                        requirements: JSON.stringify(["Use KGS (Key Generation Service).", "Implement Redis caching.", "Handle collisions."]),
                        order: 1
                    }
                },
                {
                    id: "be-l3-skill-graphql",
                    title: "GraphQL APIs",
                    description: "Build flexible APIs with GraphQL (Apollo Server).",
                    resources: [
                        { title: "Apollo Odyssey", type: "VIDEO", url: "https://www.apollographql.com/tutorials/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'N+1 Problem' in GraphQL?", options: JSON.stringify(["A math error.", "Executing N additional database queries for a list of N items.", "A versioning issue.", "A client error."]), correctAnswer: "Executing N additional database queries for a list of N items.", explanation: "Dataloader is the standard solution for batching these requests.", order: 1 }
                    ],
                    miniProject: {
                        title: "Federated GraphQL API",
                        description: "Build a federated graph combining a 'User' service and a 'Product' service.",
                        requirements: JSON.stringify(["Use Apollo Federation.", "Resolve references across services.", "Query combined data."]),
                        order: 2
                    }
                },
                {
                    id: "be-l3-skill-dist-tx",
                    title: "Distributed Transactions & Sagas",
                    description: "Maintain consistency across services. Master the Saga pattern (Choreography vs. Orchestration) and Two-Phase Commit (2PC) fundamentals.",
                    resources: [
                        { title: "Microservices.io: Saga Pattern", type: "ARTICLE", url: "https://microservices.io/patterns/data/saga.html", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Compensating Transaction' in a Saga?", options: JSON.stringify(["A transaction that pays the developer.", "An operation that undoes the effects of a previous successful step in case of a later failure.", "A backup.", "A retry."]), correctAnswer: "An operation that undoes the effects of a previous successful step in case of a later failure.", explanation: "Sagas use compensating transactions to maintain eventual consistency without long-lived locks.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Reliable Order Flow",
                        description: "Implement a distributed order processing system where payment, inventory, and shipping are managed via an orchestrated Saga.",
                        requirements: JSON.stringify(["Implement success and failure (compensation) paths.", "Handle transient network failures with retries.", "Ensure idempotency for all operations."]),
                        order: 3
                    }
                },
                {
                    id: "be-l3-skill-perf",
                    title: "Performance Profiling & Optimization",
                    description: "Find the bottleneck. Master Node.js profiling, memory leak detection, flamegraphs, and database query plan analysis (EXPLAIN ANALYZE).",
                    resources: [
                        { title: "Node.js: Diagnostic Tools", type: "DOCUMENTATION", url: "https://nodejs.org/en/docs/guides/diagnostics-flamegraph/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What does a 'Flamegraph' help you identify?", options: JSON.stringify(["Browser rendering issues.", "Hot code paths that consume the most CPU time.", "Database index sizes.", "Network latency."]), correctAnswer: "Hot code paths that consume the most CPU time.", explanation: "Flamegraphs provide a visual representation of the call stack and where the CPU is spending time.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Zero-Lag API",
                        description: "Profile a 'slow' API and use EXPLAIN ANALYZE to identify missing indexes and Node.js profiling to find blocking synchronous code.",
                        requirements: JSON.stringify(["Reduce response time by 80%.", "Eliminate blocking Event Loop operations.", "Optimize SQL join order."]),
                        order: 4
                    }
                },
                {
                    id: "be-l3-skill-iac",
                    title: "Infrastructure as Code (IaC)",
                    description: "Stop clicking buttons. Master Terraform or Pulumi to define and deploy cloud infrastructure programmatically and consistently.",
                    resources: [
                        { title: "Hashicorp: Terraform Get Started", type: "DOCUMENTATION", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started", duration: 70, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Immutable Infrastructure'?", options: JSON.stringify(["Infrastructure that never changes.", "Replacing failing components with new ones instead of repairing them.", "A type of database.", "Hardcoded config."]), correctAnswer: "Replacing failing components with new ones instead of repairing them.", explanation: "Immutable infrastructure reduces configuration drift and improves reliability.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Repeatable Stack",
                        description: "Write Terraform scripts to provision a load-balanced web server cluster with an RDS database and S3 bucket on AWS/GCP.",
                        requirements: JSON.stringify(["Use variables for environment-specific configs.", "Implement remote state storage.", "Setup automated plan/apply in CI/CD."]),
                        order: 5
                    }
                },
                {
                    id: "be-l3-skill-audit",
                    title: "Security, Compliance & Audit",
                    description: "Build for highly regulated industries. Master audit logging, data encryption at rest (KMS), and PII (Personally Identifiable Information) handling.",
                    resources: [
                        { title: "OWASP: Logging Cheat Sheet", type: "DOCUMENTATION", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "Why should you never log PII (Personally Identifiable Information)?", options: JSON.stringify(["It's too much data.", "To comply with regulations like GDPR and prevent data leaks in log files.", "It slows down logs.", "Logs are only for errors."]), correctAnswer: "To comply with regulations like GDPR and prevent data leaks in log files.", explanation: "PII in logs is a major security and compliance risk.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Compliant Data Vault",
                        description: "Design an API that handles sensitive health data, implementing transparent field-level encryption and a tamper-proof audit trail.",
                        requirements: JSON.stringify(["Implement AES-256 field encryption.", "Write immutable audit logs to a separate store.", "Implement strict data access controls (RBAC)."]),
                        order: 6
                    }
                },
                {
                    id: "be-l3-skill-strategy",
                    title: "Technical Strategy & Mentorship",
                    description: "Go beyond the ticket. Learn how to drive technical decisions across teams, write impactful RFCs, and mentor junior engineers effectively.",
                    resources: [
                        { title: "StaffEng: Technical Leadership", type: "ARTICLE", url: "https://staffeng.com/guides/technical-leadership", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary goal of an 'RFC'?", options: JSON.stringify(["To tell people what to do.", "To gather feedback and build consensus on a proposed technical change.", "To document code.", "To report bugs."]), correctAnswer: "To gather feedback and build consensus on a proposed technical change.", explanation: "RFCs (Requests for Comments) ensure that the whole team's perspective is considered before major changes.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Architecture RFC",
                        description: "Write a high-quality RFC for migrating the company's monolithic backend to a federated microservices architecture.",
                        requirements: JSON.stringify(["Clear problem statement.", "Detailed technical proposal.", "Migration and rollback strategies."]),
                        order: 7
                    }
                }
            ],
            finalProject: {
                title: "Fortress API - Secure Enterprise Gateway",
                description: "Architect and implement a high-stakes API gateway that serves as the single entry point for an enterprise micro-services ecosystem. Focus on Zero-Trust security and high-availability design.",
                requirements: [
                    "Implement a Federated GraphQL Gateway combining multiple micro-services.",
                    "Design a sharded PostgreSQL architecture for multi-region data growth.",
                    "Implement advanced Rate Limiting and WAF (Web Application Firewall) logic.",
                    "Achieve 99.99% availability design through load balancing and redundancy.",
                    "Implement end-to-end encryption for all sensitive data at rest and in transit.",
                    "Comprehensive audit logging for all administrative actions."
                ],
                guide: [
                    "Step 1: Define the Federated Schema using Apollo Federation.",
                    "Step 2: Implement the sharding strategy for the database layer.",
                    "Step 3: Build the API Gateway with support for custom Auth patterns.",
                    "Step 4: Integrate a centralized logging and observability stack (ELK/Grafana).",
                    "Step 5: Implement a 'Circuit Breaker' pattern for all downstream service calls.",
                    "Step 6: Perform a full security audit and penetration test simulation."
                ],
                hints: [
                    "Use 'DataLoader' to solve the N+1 problem in your GraphQL resolvers.",
                    "Sharding is complex; consider logical sharding before moving to physical partitions.",
                    "Implement 'Rate Limiting' at both the gateway and service levels for defense-in-depth."
                ],
                testCases: [{ name: "Federation Integrity", verify: "Queries successfully merge across 3+ services" }, { name: "Security Audit", verify: "Zero high-risk vulnerabilities" }],
            }
        },
        {
            id: "be-l4",
            title: "Principal Backend Architect",
            skills: [
                {
                    id: "be-l4-skill-dist",
                    title: "Distributed Systems & Consensus",
                    description: "Master the hard problems: Consensus (Raft/Paxos), Event Sourcing, and CQRS.",
                    resources: [
                        { title: "Designing Data-Intensive Applications", type: "BOOK_SUMMARY", url: "https://dataintensive.net/", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What does the CAP theorem state?", options: JSON.stringify(["You can have it all.", "In a distributed system, you can only pick two: Consistency, Availability, Partition Tolerance.", "Cloud, Apps, Phone.", "Consistency, Accuracy, Performance."]), correctAnswer: "In a distributed system, you can only pick two: Consistency, Availability, Partition Tolerance.", explanation: "Partition Tolerance is usually a given in distributed systems, so you trade C for A.", order: 1 }
                    ],
                    miniProject: {
                        title: "Distributed Lock Manager",
                        description: "Implement a distributed locking mechanism using Redis (Redlock algorithm).",
                        requirements: JSON.stringify(["Prevent race conditions across multiple node instances.", "Handle lock timeouts.", "Ensure safety and liveness."]),
                        order: 1
                    }
                },
                {
                    id: "be-l4-skill-bigdata",
                    title: "Data Lake & Warehouse Architecture",
                    description: "Design systems that handle petabytes. Master the trade-offs between ETL and ELT, columnar storage (Parquet), and distributed query engines (Presto/Trino/BigQuery).",
                    resources: [
                        { title: "Databricks: Lakehouse Architecture", type: "ARTICLE", url: "https://www.databricks.com/glossary/lakehouse", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary advantage of 'Columnar Storage'?", options: JSON.stringify(["Faster writes.", "Efficient compression and extremely fast analytical queries on specific columns.", "Easier to read manually.", "Supports multi-threading."]), correctAnswer: "Efficient compression and extremely fast analytical queries on specific columns.", explanation: "Columnar formats like Parquet are the standard for modern data warehousing.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Data Pipeline Architect",
                        description: "Design an ELT pipeline that ingests raw JSON logs from S3 into a columnar warehouse, creating optimized materialized views for business reporting.",
                        requirements: JSON.stringify(["Implement schema evolution handling.", "Optimize for query costs.", "Design for 100TB+ daily ingestion."]),
                        order: 2
                    }
                },
                {
                    id: "be-l4-skill-global",
                    title: "Multi-Region & Global Systems",
                    description: "Build for the world. Master active-active multi-region deployments, Anycast routing, data sovereignty compliance (GDPR), and cross-region replication latency.",
                    resources: [
                        { title: "AWS: Global Infrastructure", type: "DOCUMENTATION", url: "https://aws.amazon.com/about-aws/global-infrastructure/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Anycast' routing?", options: JSON.stringify(["Broadcasting to everyone.", "A routing method where multiple servers share the same IP, and the network routes the user to the closest one.", "A type of database indexing.", "A security protocol."]), correctAnswer: "A routing method where multiple servers share the same IP, and the network routes the user to the closest one.", explanation: "Anycast is crucial for building low-latency global CDNs and gateways.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Global Edge Gateway",
                        description: "Design a multi-region API architecture that routes requests based on user location and replicates session data with <200ms global synchronization.",
                        requirements: JSON.stringify(["Implement Conflict-Free Replicated Data Types (CRDTs).", "Design a region-aware failover strategy.", "Comply with localized data residency laws."]),
                        order: 3
                    }
                },
                {
                    id: "be-l4-skill-leadership",
                    title: "Staff Engineering Leadership",
                    description: "Technical leadership at the organizational level. Master cross-team coordination, technical debt management at scale, and defining the long-term technology roadmap.",
                    resources: [
                        { title: "The Staff Engineer's Path (Tanya Reilly)", type: "BOOK_SUMMARY", url: "https://noidea.dog/staff-eng-path", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "As a Staff Engineer, what is a 'Force Multiplier'?", options: JSON.stringify(["A powerful server.", "Actions that make everyone else on the team or in the org more effective (e.g., standardizing libraries, mentoring).", "A security tool.", "A math term."]), correctAnswer: "Actions that make everyone else on the team or in the org more effective (e.g., standardizing libraries, mentoring).", explanation: "Staff engineers focus on impact that scales beyond their own individual contributions.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Organization Strategy",
                        description: "Audit the company's 50+ microservices and create a 2-year technical roadmap for standardizing infrastructure and reducing operational overhead.",
                        requirements: JSON.stringify(["Define 'Tier 1' service standards.", "Outline a plan for platform-level common libraries.", "Propose a training program for upskilling teams."]),
                        order: 4
                    }
                },
                {
                    id: "be-l4-skill-finops",
                    title: "Cloud FinOps & Infrastructure Efficiency",
                    description: "Efficiency is a feature. Learn to optimize cloud costs at scale, master spot instances, reserved capacity, and designing systems for minimal footprint.",
                    resources: [
                        { title: "FinOps Foundation: Introduction", type: "DOCUMENTATION", url: "https://www.finops.org/introduction/what-is-finops/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Spot Instance' in cloud computing?", options: JSON.stringify(["A high-priority server.", "Spare capacity offered at a steep discount, but can be reclaimed by the provider at any time.", "A virtual machine in a specific spot.", "A permanent server."]), correctAnswer: "Spare capacity offered at a steep discount, but can be reclaimed by the provider at any time.", explanation: "Spot instances are ideal for fault-tolerant, stateless background processing.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Zero-Waste Infrastructure",
                        description: "Analyze a high-cost infrastructure stack and propose a redesign that reduces monthly spend by 50% without compromising p99 latency.",
                        requirements: JSON.stringify(["Implement intelligent autoscaling based on custom metrics.", "Optimize S3 storage tiers.", "Leverage reserved instances for baseline load."]),
                        order: 5
                    }
                },
                {
                    id: "be-l4-skill-evolution",
                    title: "System Evolution & Technical Debt",
                    description: "Learn how to evolve legacy systems. Master 'Strangler Fig' pattern, migration strategies without downtime, and technical health metrics.",
                    resources: [
                        { title: "Martin Fowler: Strangler Fig Pattern", type: "ARTICLE", url: "https://martinfowler.com/bliki/StranglerFigApplication.html", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Strangler Fig' pattern?", options: JSON.stringify(["A type of plant.", "Gradually replacing parts of a legacy system with new services until the old system is completely replaced.", "Deleting all legacy code.", "A encryption method."]), correctAnswer: "Gradually replacing parts of a legacy system with new services until the old system is completely replaced.", explanation: "It allows for incremental migration with minimal risk.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Seamless Migration Plan",
                        description: "Design a no-downtime migration strategy for replacing a critical monolith database with a new microservices-based sharded architecture.",
                        requirements: JSON.stringify(["Implement dual-writing during transition.", "Define automated data verification/integrity checks.", "Outline a safe rollback procedure."]),
                        order: 6
                    }
                }
            ],
            finalProject: {
                title: "Nexus Core - Distributed Consensus Engine",
                description: "The ultimate backend challenge: Build a distributed consensus engine that manages state across multiple independent nodes. Focus on consistency, availability, and fault tolerance.",
                requirements: [
                    "Implement a distributed locking mechanism using the Redlock algorithm.",
                    "Design an Event Sourcing architecture with a high-performance event store.",
                    "Achieve strong consistency across 3+ simulated nodes for critical operations.",
                    "Implement a CQRS (Command Query Responsibility Segregation) pattern.",
                    "Handle network partitions and node failures without data loss.",
                    "Design a global scalability report for handling 100M+ active users."
                ],
                guide: [
                    "Step 1: Implement the base Redlock algorithm for distributed resource locking.",
                    "Step 2: Build the immutable event store with support for snapshots.",
                    "Step 3: Develop the read-side projections for the CQRS pattern.",
                    "Step 4: Simulate network partitions and verify the system's behavior (CAP Theorem).",
                    "Step 5: Implement an automated recovery and reconciliation flow.",
                    "Step 6: Perform a final scale-testing and infrastructure cost analysis."
                ],
                hints: [
                    "Distributed locks are tricky: always use TTLs (Time-To-Live) to avoid deadlocks.",
                    "Event Sourcing provides a perfect audit trail; use it to your advantage.",
                    "When in doubt, prioritize Consistency over Availability for financial or critical data."
                ],
                testCases: [{ name: "Liveness", verify: "System recovers after node failure" }, { name: "Consistency", verify: "Linearizable reads for locked resources" }],
            }
        }
    ]
};

