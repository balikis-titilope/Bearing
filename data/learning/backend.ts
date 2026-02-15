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
                        { title: "PostgreSQL: Tutorial for Beginners", type: "ARTICLE", url: "https://www.postgresqltutorial.com/", duration: 60, order: 1 },
                        { title: "Prisma Docs: Core SQL Concepts", type: "DOCUMENTATION", url: "https://www.prisma.io/dataguide/postgresql/core-sql-concepts", duration: 45, order: 2 }
                    ],
                    questions: [
                        { question: "What does ACID stand for in database transactions?", options: JSON.stringify(["Atomicity, Consistency, Isolation, Durability", "Accuracy, Complexity, Integrity, Data", "Auto-increment, Caching, Indexing, Deletion", "None of these"]), correctAnswer: "Atomicity, Consistency, Isolation, Durability", explanation: "ACID ensures that database transactions are processed reliably.", order: 1 },
                        { question: "What is a 'Primary Key'?", options: JSON.stringify(["A password.", "A unique identifier for each record in a table.", "A way to connect to another table.", "A sorting algorithm."]), correctAnswer: "A unique identifier for each record in a table.", explanation: "Primary keys ensure that every row can be uniquely identified.", order: 2 },
                        { question: "What is the difference between INNER JOIN and LEFT JOIN?", options: JSON.stringify(["No difference.", "INNER JOIN returns matches in both tables; LEFT JOIN returns all rows from the left table and matches from the right.", "LEFT JOIN is faster.", "INNER JOIN is for numbers only."]), correctAnswer: "INNER JOIN returns matches in both tables; LEFT JOIN returns all rows from the left table and matches from the right.", explanation: "Join types determine how data from multiple tables is combined based on shared keys.", order: 3 },
                        { question: "What is a 'Database Index'?", options: JSON.stringify(["A table of contents.", "A data structure that improves the speed of data retrieval at the cost of slower writes.", "A backup of the data.", "A type of constraint."]), correctAnswer: "A data structure that improves the speed of data retrieval at the cost of slower writes.", explanation: "Indexes are vital for performance in large datasets.", order: 4 },
                        { question: "What is 'Normalization'?", options: JSON.stringify(["Converting text to lowercase.", "The process of organizing data to reduce redundancy and improve integrity.", "Compressing the database.", "Deleting old records."]), correctAnswer: "The process of organizing data to reduce redundancy and improve integrity.", explanation: "Normalization involves splitting data into multiple tables and defining relationships.", order: 5 },
                        { question: "What is the purpose of the 'WHERE' clause?", options: JSON.stringify(["To group data.", "To filter records based on specific conditions.", "To sort the results.", "To limit the number of rows."]), correctAnswer: "To filter records based on specific conditions.", explanation: "WHERE allows you to narrow down the result set.", order: 6 },
                        { question: "What does 'GROUP BY' do?", options: JSON.stringify(["Sorts the table.", "Aggregates rows that have the same values into summary rows.", "Deletes duplicates.", "Adds a new column."]), correctAnswer: "Aggregates rows that have the same values into summary rows.", explanation: "It is often used with functions like COUNT, SUM, or AVG.", order: 7 },
                        { question: "What is a 'Foreign Key'?", options: JSON.stringify(["A key from another country.", "A field that links two tables together.", "A backup key.", "A hidden column."]), correctAnswer: "A field that links two tables together.", explanation: "Foreign keys enforce referential integrity between related entities.", order: 8 },
                        { question: "What is a 'Transaction'?", options: JSON.stringify(["A bank transfer.", "A sequence of operations performed as a single logical unit of work.", "A database backup.", "A query."]), correctAnswer: "A sequence of operations performed as a single logical unit of work.", explanation: "Transactions either succeed completely or fail completely (Atomicity).", order: 9 },
                        { question: "What is the result of 'SELECT * FROM users'?", options: JSON.stringify(["Deletes all users.", "Retrieves all columns and rows from the users table.", "Updates user data.", "Counts the users."]), correctAnswer: "Retrieves all columns and rows from the users table.", explanation: "The * is a wildcard for 'all columns'.", order: 10 },
                        { question: "What is the 'HAVING' clause used for?", options: JSON.stringify(["Same as WHERE.", "Filtering groups after an aggregation has been performed.", "Sorting.", "Defining table structure."]), correctAnswer: "Filtering groups after an aggregation has been performed.", explanation: "WHERE filters rows; HAVING filters groups.", order: 11 },
                        { question: "What is an 'Upsert'?", options: JSON.stringify(["A database error.", "An operation that either Updates an existing record or Inserts a new one if it doesn't exist.", "A fast search.", "A massive delete."]), correctAnswer: "An operation that either Updates an existing record or Inserts a new one if it doesn't exist.", explanation: "In PostgreSQL, this is often done using 'ON CONFLICT'.", order: 12 },
                        { question: "What is the 'JSONB' type in PostgreSQL?", options: JSON.stringify(["A text format.", "Binary JSON storage that allows for efficient indexing and querying of semi-structured data.", "A type of joint.", "A compression tool."]), correctAnswer: "Binary JSON storage that allows for efficient indexing and querying of semi-structured data.", explanation: "Postgres is famous for its robust handle of JSON data alongside relational data.", order: 13 },
                        { question: "What is a 'View' in SQL?", options: JSON.stringify(["A physical table.", "A virtual table based on the result-set of an SQL statement.", "A graphical UI.", "A CSS property."]), correctAnswer: "A virtual table based on the result-set of an SQL statement.", explanation: "Views allow you to simplify complex queries and restrict access.", order: 14 },
                        { question: "What is 'SQL Injection'?", options: JSON.stringify(["A database optimization.", "A security vulnerability where an attacker can execute malicious SQL statements.", "A way to insert data faster.", "A database migration."]), correctAnswer: "A security vulnerability where an attacker can execute malicious SQL statements.", explanation: "Always use parameterized queries or ORMs like Prisma to prevent this.", order: 15 }
                    ],
                    miniProject: {
                        title: "Relational Schema Designer",
                        description: "Design and implement a relational schema for a complex e-commerce platform including inventory, orders, and user management.",
                        requirements: JSON.stringify(["Implement 3rd Normal Form (3NF).", "Define one-to-many and many-to-many relationships.", "Write complex JOIN queries to generate sales reports.", "Implement database constraints (unique, check, not null)."]),
                        guide: JSON.stringify([
                            "Step 1: Use a tool like DBDiagram.io to map out 'users', 'products', 'orders', and 'order_items'.",
                            "Step 2: Initialize a PostgreSQL database and create the tables with correct data types.",
                            "Step 3: Insert sample data into all tables.",
                            "Step 4: Write a SQL query that calculates the total revenue per product category.",
                            "Step 5: Write a query that finds the users who haven't made an order in the last 30 days."
                        ]),
                        hints: JSON.stringify([
                            "For many-to-many (e.g., Orders and Products), you need a junction table like 'order_items'.",
                            "Use 'TIMESTAMP WITH TIME ZONE' for all date fields.",
                            "Start with small tables and verify relationships before adding more."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Database Normalization Explained", url: "https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/" },
                            { title: "DBDesigner.net (Online Modeler)", url: "https://www.dbdesigner.net/" }
                        ]),
                        testCases: JSON.stringify([{ name: "Normalization", verify: "No redundant data across tables" }, { name: "Reporting", verify: "Queries produce correct aggregate data" }]),
                        order: 3
                    }
                }
            ]
        },
        {
            id: "be-l2",
            title: "Intermediate Backend Engineer",
            skills: [
                {
                    id: "be-l2-skill-micro",
                    title: "Microservices & Message Queues",
                    description: "Decouple systems using RabbitMQ/Kafka and microservices architecture.",
                    resources: [
                        { title: "Microservices Patterns", type: "BOOK_SUMMARY", url: "https://microservices.io/patterns/index.html", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Circuit Breaker'?", options: JSON.stringify(["A fuse.", "A pattern to prevent cascading failures by stopping calls to a failing service.", "A way to break code.", "A server restart."]), correctAnswer: "A pattern to prevent cascading failures by stopping calls to a failing service.", explanation: "It fails fast when a downstream service is down.", order: 1 }
                    ],
                    miniProject: {
                        title: "Async Email Service",
                        description: "Extract email sending logic into a separate microservice that consumes messages from RabbitMQ.",
                        requirements: JSON.stringify(["Setup RabbitMQ.", "Producer API pushes email tasks.", "Consumer Worker sends emails (simulated)."]),
                        order: 1
                    }
                },
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
                }
            ]
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
                }
            ]
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
                }
            ]
        }
    ]
};

