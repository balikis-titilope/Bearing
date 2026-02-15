export const frontendContent = {
    levels: [
        {
            id: "fe-l1",
            title: "Junior Frontend Engineer",
            skills: [
                {
                    id: "fe-l1-skill-html",
                    title: "Semantic HTML & Accessibility",
                    description: "Master the foundation of the web. Learn how to use semantic elements to build a robust document structure optimized for SEO and screen readers. This knowledge is critical for building the Accessible Semantic Shell project.",
                    resources: [
                        { title: "HTML5 Semantic Elements Guide", type: "ARTICLE", url: "https://web.dev/learn/html/semantic-html/", duration: 20, order: 1 },
                        { title: "W3C: Introduction to Web Accessibility", type: "DOCUMENTATION", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", duration: 15, order: 2 },
                        { title: "Kevin Powell: Why Semantic HTML is Important", type: "VIDEO", url: "https://www.youtube.com/watch?v=kYI9Q7e-Cnc", duration: 12, order: 3 }
                    ],
                    questions: [
                        { question: "What is the primary benefit of using <main> over a <div id='main'>?", options: JSON.stringify(["It automatically styles the content.", "It is a landmark element that allows assistive technologies to skip directly to the main content.", "It makes the page load faster.", "It is required by all browsers."]), correctAnswer: "It is a landmark element that allows assistive technologies to skip directly to the main content.", explanation: "Landmark elements provide structural meaning for assistive technology.", order: 1 },
                        { question: "Which element should be used to wrap a sidebar containing navigation links that are indirectly related to the main content?", options: JSON.stringify(["<section>", "<aside>", "<div>", "<article>"]), correctAnswer: "<aside>", explanation: "The <aside> element is intended for content that is indirectly related to the main content.", order: 2 },
                        { question: "In a properly structured document, how many <h1> elements should ideally be used per page?", options: JSON.stringify(["None", "Only one", "As many as needed for visual size", "One for every section"]), correctAnswer: "Only one", explanation: "For optimal SEO and accessibility hierarchy, a single H1 should define the page's primary topic.", order: 3 },
                        { question: "Which attribute provides a text alternative for images that screen readers can announce?", options: JSON.stringify(["title", "src", "alt", "name"]), correctAnswer: "alt", explanation: "Alt text is the standard way to provide accessible descriptions for visual content.", order: 4 },
                        { question: "What is the purpose of the <nav> element?", options: JSON.stringify(["To wrap the entire page header", "To represent a section with navigation links", "To create a sidebar", "To link to external websites only"]), correctAnswer: "To represent a section with navigation links", explanation: "Nav provides a landmark for major navigation blocks.", order: 5 },
                        { question: "Why should you avoid skipping heading levels (e.g., going from H2 to H4)?", options: JSON.stringify(["It will prevent the page from loading.", "It breaks the document's logical outline for screen reader users.", "It is deprecated in HTML5.", "It makes CSS styling impossible."]), correctAnswer: "It breaks the document's logical outline for screen reader users.", explanation: "A logical heading hierarchy is essential for structured navigation via assistive tech.", order: 6 },
                        { question: "Which tag is best for a self-contained composition that could be independently distributed (like a blog post)?", options: JSON.stringify(["<section>", "<div>", "<article>", "<aside>"]), correctAnswer: "<article>", explanation: "Article is used for independent, reusable content pieces.", order: 7 },
                        { question: "What does the 'scope' attribute do on a <th> element?", options: JSON.stringify(["Defines the color of the header.", "Allows the header to span multiple rows.", "Explicitly associates a header cell with a row or column for screen readers.", "Hides the header from visual users."]), correctAnswer: "Explicitly associates a header cell with a row or column for screen readers.", explanation: "Scope is vital for complex data table accessibility.", order: 8 },
                        { question: "What is an 'Accessibility Landmark'?", options: JSON.stringify(["A physical map in the office.", "Key sections of a page (main, nav, header) defined by semantic tags for easier navigation.", "A high-contrast mode toggle.", "A browser plugin."]), correctAnswer: "Key sections of a page (main, nav, header) defined by semantic tags for easier navigation.", explanation: "Landmarks allow screen reader users to jump between page regions quickly.", order: 9 },
                        { question: "Which element should wrap a figure caption?", options: JSON.stringify(["<label>", "<span>", "<figcaption>", "<cite>"]), correctAnswer: "<figcaption>", explanation: "Figcaption provides the semantic caption for a <figure>.", order: 10 },
                        { question: "When should you use an empty alt attribute (alt='')?", options: JSON.stringify(["When the image is a logo.", "When the image is purely decorative.", "When you don't know what the image is.", "Never."]), correctAnswer: "When the image is purely decorative.", explanation: "Empty alt tags tell assistive technologies to ignore the image entirely.", order: 11 },
                        { question: "Which role is equivalent to the <header> element when used as a global banner?", options: JSON.stringify(["main", "banner", "navigation", "contentinfo"]), correctAnswer: "banner", explanation: "The 'banner' role defines global page headers.", order: 12 },
                        { question: "What is the correct way to link a <label> to an <input>?", options: JSON.stringify(["Using the same class.", "Using the 'for' attribute on label matching the input's 'id'.", "Wrapping the input inside the label only.", "It happens automatically by proximity."]), correctAnswer: "Using the 'for' attribute on label matching the input's 'id'.", explanation: "Explicit association is the most robust way to link labels for accessibility.", order: 13 },
                        { question: "What element represents the site footer or copyright information area?", options: JSON.stringify(["<bottom>", "<div>", "<footer>", "<aside>"]), correctAnswer: "<footer>", explanation: "Footer is the semantic home for authorship and site info metadata.", order: 14 },
                        { question: "What is the result of using semantic HTML for search engines (SEO)?", options: JSON.stringify(["No effect.", "It makes the site slower.", "It helps crawlers understand content structure and priority.", "It blocks spiders."]), correctAnswer: "It helps crawlers understand content structure and priority.", explanation: "Search engines use semantic tags to weigh content importance.", order: 15 }
                    ],
                    miniProject: {
                        title: "Accessible Semantic Shell",
                        description: "Build a complete page structure for a complex news article using ONLY semantic HTML. Test your ability to create a document that is perfectly navigable via assistive technologies.",
                        requirements: JSON.stringify(["Use at least 5 different sectioning elements (article, section, aside, etc.).", "Implement a navigation menu with correct ARIA attributes where necessary.", "Create a properly structured data table with headers and captions.", "Ensure perfect heading hierarchy (H1-H6)."]),
                        guide: JSON.stringify([
                            "Step 1: Set up the document boilerplate with a clear <title>.",
                            "Step 2: Define the primary landmark using <main>.",
                            "Step 3: Inside <main>, use <article> for the news content and <aside> for related links.",
                            "Step 4: Use <header> and <footer> for the global page sections.",
                            "Step 5: Ensure your heading hierarchy starts with <h1> and flows logically to <h2>, <h3>, etc."
                        ]),
                        hints: JSON.stringify([
                            "Remember that <section> should usually have a heading.",
                            "Use <nav> specifically for groups of navigation links, not just any list.",
                            "The <main> element should only appear once per page."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "MDN: Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#HTML_Semantics" },
                            { title: "A11y Project: Heading Hierarchy", url: "https://www.a11yproject.com/posts/how-to-accessible-heading-structure/" }
                        ]),
                        testCases: JSON.stringify([{ name: "Semantic Correctness", verify: "Check for correct usage of <article> vs <section>" }, { name: "A11y Audit", verify: "Pass Axe-core checks with 0 errors" }]),
                        order: 1
                    }
                },
                {
                    id: "fe-l1-skill-css",
                    title: "CSS Layout Systems (Flexbox & Grid)",
                    description: "Master the algorithms behind Flexbox and Grid. Understand how the browser calculates fragment sizes and how to build layouts that don't shift.",
                    resources: [
                        { title: "A Complete Guide to Flexbox", type: "ARTICLE", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", duration: 30, order: 1 },
                        { title: "CSS Grid Garden: Practice Grid", type: "EXERCISE", url: "https://cssgridgarden.com/", duration: 45, order: 2 },
                        { title: "Layout Land: Grid vs Flexbox", type: "VIDEO", url: "https://www.youtube.com/watch?v=hs3piaN4b5I", duration: 10, order: 3 }
                    ],
                    questions: [
                        { question: "When using 'flex-direction: column', which axis does 'justify-content' control?", options: JSON.stringify(["Horizontal axis", "Vertical axis (Main axis)", "Cross axis", "Both axes"]), correctAnswer: "Vertical axis (Main axis)", explanation: "justify-content always aligns along the main axis.", order: 1 },
                        { question: "What does the 'fr' unit stand for in CSS Grid?", options: JSON.stringify(["Fixed Rate", "Fractional unit", "Font Ratio", "Frequency Range"]), correctAnswer: "Fractional unit", explanation: "1fr is one part of the free space in the grid container.", order: 2 },
                        { question: "Which property is used to create gaps between grid items?", options: JSON.stringify(["padding", "margin", "gap (or grid-gap)", "spacing"]), correctAnswer: "gap (or grid-gap)", explanation: "The gap property handles spacing between tracks without affecting margins.", order: 3 },
                        { question: "In Flexbox, what is 'flex-shrink' used for?", options: JSON.stringify(["To make an item grow.", "To define how much an item should shrink if space is tight.", "To set the initial size.", "To remove the item from layout."]), correctAnswer: "To define how much an item should shrink if space is tight.", explanation: "It determines the shrink factor relative to other items.", order: 4 },
                        { question: "What is the difference between 'auto-fill' and 'auto-fit' in grid-template-columns?", options: JSON.stringify(["No difference.", "auto-fit stretches items to fill the row; auto-fill leaves empty space if tracks are empty.", "auto-fill stretches items.", "They are used for background images."]), correctAnswer: "auto-fit stretches items to fill the row; auto-fill leaves empty space if tracks are empty.", explanation: "auto-fit effectively 'fits' the items into the available row space.", order: 5 },
                        { question: "How do you align items along the cross-axis in a flex container?", options: JSON.stringify(["justify-content", "align-items", "text-align", "float"]), correctAnswer: "align-items", explanation: "align-items controls the cross-axis.", order: 6 },
                        { question: "What CSS property allows an item to span multiple columns in a grid?", options: JSON.stringify(["grid-row", "grid-column", "grid-area", "width: 100%"]), correctAnswer: "grid-column", explanation: "grid-column defines the start/end lines for an item.", order: 7 },
                        { question: "What does 'clamp(1rem, 5vw, 2rem)' do?", options: JSON.stringify(["It fixes the font size at 5vw.", "It scales between 1rem and 2rem based on 5vw, but never outside those bounds.", "It removes the font size.", "It only works on mobile."]), correctAnswer: "It scales between 1rem and 2rem based on 5vw, but never outside those bounds.", explanation: "Clamp provides responsive scaling with min/max safety.", order: 8 },
                        { question: "In a 'grid-template-areas' layout, how do you leave an empty cell?", options: JSON.stringify(["Leave it blank", "Use a period (.)", "Use the word 'empty'", "It's not possible"]), correctAnswer: "Use a period (.)", explanation: "The dot represents a null/empty track in the area map.", order: 9 },
                        { question: "Which value of 'position' allows an element to follow the scroll but stick to a specific point when it reaches a threshold?", options: JSON.stringify(["absolute", "relative", "fixed", "sticky"]), correctAnswer: "sticky", explanation: "Sticky positioning is great for headers and sidebars.", order: 10 },
                        { question: "What is a 'stacking context' in CSS?", options: JSON.stringify(["A way to group divs.", "A 3D abstraction of layering elements along the Z-axis.", "A flexbox feature.", "A method for clearing floats."]), correctAnswer: "A 3D abstraction of layering elements along the Z-axis.", explanation: "Z-index only works within its own stacking context.", order: 11 },
                        { question: "What happens to children of an element when you set 'display: contents'?", options: JSON.stringify(["They are hidden.", "The parent acts as if it's not there for layout purposes.", "They become inline-block.", "They get centered."]), correctAnswer: "The parent acts as if it's not there for layout purposes.", explanation: "Useful for fixing layout issues where a wrapper div is in the way.", order: 12 },
                        { question: "How do you define a grid named area?", options: JSON.stringify(["grid-area: header;", "grid-template-areas: 'header header';", "grid-name: header;", "column-span: 2;"]), correctAnswer: "grid-template-areas: 'header header';", explanation: "Named areas allow for highly readable layout code.", order: 13 },
                        { question: "What is the purpose of 'flex-basis'?", options: JSON.stringify(["To set the maximum width.", "To set the initial size of a flex item before space is distributed.", "To align the text.", "To rotate the item."]), correctAnswer: "To set the initial size of a flex item before space is distributed.", explanation: "It acts as the starting point for grow/shrink calculations.", order: 14 },
                        { question: "Which unit is best for accessible font sizes that respect user browser settings?", options: JSON.stringify(["px", "em", "rem", "vh"]), correctAnswer: "rem", explanation: "Rem is based on the root font size, allowing users to scale content.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Responsive Dashboard Grid",
                        description: "Design a complex dashboard layout that seamlessly transitions from a mobile stack to a multi-column desktop layout using CSS Grid and Flexbox. Challenge: No fixed pixel widths.",
                        requirements: JSON.stringify(["Implement a 'holy grail' layout with a sidebar and main content area.", "Use CSS Grid for the macro-layout and Flexbox for micro-components.", "Ensure the sidebar collapses elegantly on smaller screens.", "Use 'fr' units and 'clamp()' for fluid typography/spacing."]),
                        guide: JSON.stringify([
                            "Step 1: Set up a container with 'display: grid'.",
                            "Step 2: Define 'grid-template-areas' for mobile (stack everything).",
                            "Step 3: Define a media query for desktop to rearrange areas into columns.",
                            "Step 4: Use 'repeat(auto-fit, minmax(200px, 1fr))' for card layouts inside the main content.",
                            "Step 5: Implement 'sticky' positioning for the sidebar."
                        ]),
                        hints: JSON.stringify([
                            "Try to use 'gap' instead of margins for spacing grid items.",
                            "The 'auto-fit' keyword is your best friend for responsive grids without media queries.",
                            "Check if your container has a height if the sidebar isn't sticking."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "CSS Tricks: Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
                            { title: "Flexbox Froggy", url: "https://flexboxfroggy.com/" }
                        ]),
                        testCases: JSON.stringify([{ name: "Macro Layout", verify: "Grid template areas change as expected on resize" }, { name: "Fluidity", verify: "No horizontal scroll at 320px width" }]),
                        order: 2
                    }
                },
                {
                    id: "fe-l1-skill-js",
                    title: "JavaScript Engine & The Event Loop",
                    description: "Master the runtime behavior. Dive into the call stack, microtask queues (Promises), and the rendering pipeline to write high-performance UI code.",
                    resources: [
                        { title: "JavaScript.info: The Modern Tutorial", type: "DOCUMENTATION", url: "https://javascript.info/", duration: 120, order: 1 },
                        { title: "What the heck is the event loop?", type: "VIDEO", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", duration: 26, order: 2 },
                        { title: "MDN: Closures Deep Dive", type: "ARTICLE", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures", duration: 30, order: 3 }
                    ],
                    questions: [
                        { question: "Given: 'console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);' - What is the output?", options: JSON.stringify(["1, 2, 3, 4", "1, 4, 2, 3", "1, 4, 3, 2", "1, 3, 4, 2"]), correctAnswer: "1, 4, 3, 2", explanation: "Sync code first, then microtasks (Promise), then macrotasks (setTimeout).", order: 1 },
                        { question: "What is a 'Closure' in JavaScript?", options: JSON.stringify(["A way to end a script.", "A function bundled with its lexical environment.", "An error message.", "A private class property."]), correctAnswer: "A function bundled with its lexical environment.", explanation: "Closures allow access to outer variables after scope closure.", order: 2 },
                        { question: "In the Event Loop, when do Microtasks execute?", options: JSON.stringify(["After every line.", "Before the next macrotask.", "Once a minute.", "Only when idle."]), correctAnswer: "Before the next macrotask.", explanation: "The microtask queue processes entirely before the next cycle.", order: 3 },
                        { question: "What does 'Promise.all([])' return if an empty array is passed?", options: JSON.stringify(["Rejected promise.", "Pending promise.", "Resolved promise (empty array).", "undefined"]), correctAnswer: "Resolved promise (empty array).", explanation: "Promise.all resolves synchronously if empty.", order: 4 },
                        { question: "What is the difference between '==' and '==='?", options: JSON.stringify(["No difference.", "== checks value; === checks value and type.", "=== is only for numbers.", "== is faster."]), correctAnswer: "== checks value; === checks value and type.", explanation: "Strict equality prevents coercion.", order: 5 },
                        { question: "How does 'this' behave in an arrow function?", options: JSON.stringify(["Refers to the trigger element.", "It is lexically bound.", "It is always undefined.", "Refers to the window."]), correctAnswer: "It is lexically bound.", explanation: "Arrow functions inherit 'this' from the surrounding context.", order: 6 },
                        { question: "What is 'Hoisting'?", options: JSON.stringify(["Moving files.", "Moving declarations to the top of the scope.", "Performance increase.", "Variable deletion."]), correctAnswer: "Moving declarations to the top of the scope.", explanation: "JS moves declarations up during compilation.", order: 7 },
                        { question: "Which creates a new macrotask?", options: JSON.stringify(["Promise.then()", "setTimeout()", "queueMicrotask()", "awaiting"]), correctAnswer: "setTimeout()", explanation: "Timers are macrotasks.", order: 8 },
                        { question: "What happens if microtasks queue more microtasks infinitely?", options: JSON.stringify(["Browser handles it.", "Event loop slows down.", "It blocks the entire main thread.", "It crashes the OS."]), correctAnswer: "It blocks the entire main thread.", explanation: "The engine won't move to the next cycle until the queue is clear.", order: 9 },
                        { question: "What is the 'Temporal Dead Zone'?", options: JSON.stringify(["Time when PC is off.", "State where let/const are inaccessible before declaration.", "End of event loop.", "Browser bug."]), correctAnswer: "State where let/const are inaccessible before declaration.", explanation: "Accessing before declaration throws ReferenceError.", order: 10 },
                        { question: "Purpose of 'async' keyword?", options: JSON.stringify(["Speed.", "To ensure a function returns a Promise.", "Prevent errors.", "Separate thread for logic."]), correctAnswer: "To ensure a function returns a Promise.", explanation: "Async functions always wrap return values in Promises.", order: 11 },
                        { question: "Main thread's role?", options: JSON.stringify(["Network only.", "UI, JS execution, and interaction.", "Images.", "Hard drive."]), correctAnswer: "UI, JS execution, and interaction.", explanation: "JS is single-threaded on the main thread.", order: 12 },
                        { question: "Run code without blocking main thread?", options: JSON.stringify(["Use while(true).", "Use Web Workers.", "Use alert().", "Impossible."]), correctAnswer: "Use Web Workers.", explanation: "Workers run on their own isolated thread.", order: 13 },
                        { question: "Result of '1' + 1 and '1' - 1?", options: JSON.stringify(["'11' and 0", "2 and 0", "'11' and '1-1'", "Error"]), correctAnswer: "'11' and 0", explanation: "Addition coerces to string; subtraction coerces to number.", order: 14 },
                        { question: "What does 'Object.freeze()' do?", options: JSON.stringify(["Caches.", "Makes object immutable.", "Deletes.", "Compresses."]), correctAnswer: "Makes object immutable.", explanation: "Prevents any mutations to the object.", order: 15 }
                    ],
                    miniProject: {
                        title: "Async Task Orchestrator",
                        description: "Build a task runner that can execute a series of asynchronous functions with dependency tracking and error recovery. This will test your knowledge of Promises, Async/Await, and the Event Loop.",
                        requirements: JSON.stringify(["Implement a queue that limits concurrent async operations.", "Use ES6 Classes to structure the orchestrator.", "Implement a retry mechanism with exponential backoff for failed tasks.", "Provide a progress callback for tracking execution state."]),
                        guide: JSON.stringify([
                            "Step 1: Create a Class 'TaskRunner' that takes 'maxConcurrency' as an argument.",
                            "Step 2: Create an internal queue (Array) to store pending tasks.",
                            "Step 3: Implement an 'add' method that wraps the task in a Promise.",
                            "Step 4: Create a recursive 'run' function that picks tasks from the queue as long as running < maxConcurrency.",
                            "Step 5: Add a 'try/catch' block inside the run loop to handle retries."
                        ]),
                        hints: JSON.stringify([
                            "Use 'Promise.all' only if you want to wait for a fixed set, but for a queue, manual tracking is better.",
                            "A 'count' variable can track current active tasks.",
                            "Remember to resolve the outer Promise when a task finally completes."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Javascript.info: Async/Await", url: "https://javascript.info/async-await" },
                            { title: "MDN: Using Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" }
                        ]),
                        testCases: JSON.stringify([{ name: "Concurrency Limit", verify: "Observe that no more than N tasks run at once" }, { name: "Error Recovery", verify: "Tasks should retry exactly the configured amount of times" }]),
                        order: 3
                    }
                },
                {
                    id: "fe-l1-skill-git",
                    title: "Git Internals & Professional Workflows",
                    description: "Stop memorizing commands and start understanding Git's object-based architecture. Learn how Git stores data and how to manage complex collaborative workflows.",
                    resources: [
                        { title: "Pro Git: Git Internals", type: "DOCUMENTATION", url: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects", duration: 40, order: 1 },
                        { title: "Git from the Bottom Up", type: "ARTICLE", url: "https://jwiegley.github.io/git-from-the-bottom-up/", duration: 60, order: 2 },
                        { title: "Missing Semester: Version Control", type: "VIDEO", url: "https://www.youtube.com/watch?v=2sjqTHE0zok", duration: 50, order: 3 }
                    ],
                    questions: [
                        { question: "What type of Git object stores file content?", options: JSON.stringify(["Commit", "Tree", "Blob", "Tag"]), correctAnswer: "Blob", explanation: "A 'blob' stores the content of a single file.", order: 1 },
                        { question: "What is the result of hashing a Git object?", options: JSON.stringify(["10-digit number", "40-char SHA-1 hash", "Filename", "Password"]), correctAnswer: "40-char SHA-1 hash", explanation: "Git identified data by its SHA-1 hash.", order: 2 },
                        { question: "Where does Git store data locally?", options: JSON.stringify(["/usr/git", ".github/", ".git/objects/", "git.json"]), correctAnswer: ".git/objects/", explanation: "The object directory stores all blobs, trees, and commits.", order: 3 },
                        { question: "What does a 'tree' object represent?", options: JSON.stringify(["Backup.", "Directory structure.", "Commit graph.", "Ignore rules."]), correctAnswer: "Directory structure.", explanation: "Trees link filenames to their corresponding blob content.", order: 4 },
                        { question: "Info contained in a 'commit' object?", options: JSON.stringify(["Name.", "Tree, parent, author, message.", "File content.", "Remote link."]), correctAnswer: "Tree, parent, author, message.", explanation: "Commits link snapshots with metadata.", order: 5 },
                        { question: "What is 'HEAD'?", options: JSON.stringify(["Main branch.", "Current checkout ref.", "First commit.", "System file."]), correctAnswer: "Current checkout ref.", explanation: "HEAD usually points to the current branch.", order: 6 },
                        { question: "What does 'git add' do to the object store?", options: JSON.stringify(["Nothing.", "Immediately creates a blob.", "Deletes files.", "Uploads to GitHub."]), correctAnswer: "Immediately creates a blob.", explanation: "Adding hashes the content and stores it as a blob.", order: 7 },
                        { question: "What is 'detached HEAD'?", options: JSON.stringify(["Corrupted repo.", "HEAD points to commit hash directly.", "No net.", "on main."]), correctAnswer: "HEAD points to commit hash directly.", explanation: "In this state, commits don't belong to any branch.", order: 8 },
                        { question: "How does Git handle duplicate files?", options: JSON.stringify(["Multiple copies.", "One blob (same hash).", "Error.", "Renames."]), correctAnswer: "One blob (same hash).", explanation: "Content-addressed storage handles duplication efficiently.", order: 9 },
                        { question: "First 2 characters of a Git hash purpose?", options: JSON.stringify(["Salt.", "Subdirectory to prevent folder bloat.", "Version.", "Key."]), correctAnswer: "Subdirectory to prevent folder bloat.", explanation: "This sharding helps filesystem performance.", order: 10 },
                        { question: "Fetch vs Pull?", options: JSON.stringify(["No diff.", "Fetch downloads; pull downloads and merges.", "Pull is faster.", "Fetch is for branches."]), correctAnswer: "Fetch downloads; pull downloads and merges.", explanation: "Pull is essentially fetch + merge.", order: 11 },
                        { question: "What is 'git reflog'?", options: JSON.stringify(["Logout.", "Local history of branch tip updates.", "Server list.", "Debugger."]), correctAnswer: "Local history of branch tip updates.", explanation: "Reflog allows recovering 'lost' commits.", order: 12 },
                        { question: "What is 'git rebase'?", options: JSON.stringify(["Merge.", "Applying commits on top of another base.", "Deletion.", "Rename."]), correctAnswer: "Applying commits on top of another base.", explanation: "Rebase rewrites history for linearity.", order: 13 },
                        { question: "Why 'distributed'?", options: JSON.stringify(["Cloud.", "Every clone has full database/history.", "Linux.", "Global."]), correctAnswer: "Every clone has full database/history.", explanation: "Each clone is a full backup.", order: 14 },
                        { question: "Three-way merge?", options: JSON.stringify(["3 developers.", "Ancestor + 2 tips used to resolve.", "3 minutes.", "3 servers."]), correctAnswer: "Ancestor + 2 tips used to resolve.", explanation: "Standard strategy for non-fast-forward merges.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Git Reconstructer",
                        description: "Given a corrupted repository structure (manually simulated), write a script that traverses the object store (.git/objects), identifies dangling blobs, and reconstructs the file tree as it existed at a specific commit.",
                        requirements: JSON.stringify(["Decompress zlib-compressed Git objects.", "Parse tree objects to find file names and permissions.", "Rebuild a physical directory structure from the object graph.", "Demonstrate deep understanding of SHA-1 hashing and Git's pointer system."]),
                        guide: JSON.stringify([
                            "Step 1: Initialize a script that takes a path to a '.git/objects' folder.",
                            "Step 2: Use a library like 'zlib' (Node.js) to decompress the binary data.",
                            "Step 3: Read the object header to distinguish between 'blob', 'tree', and 'commit'.",
                            "Step 4: Recursively follow tree pointers to find file names and their corresponding blob hashes.",
                            "Step 5: Write the blob content into a new directory structure mimicking the original repo."
                        ]),
                        hints: JSON.stringify([
                            "The first 2 characters of a hash are the folder name, and the remaining 38 are the filename.",
                            "Look for the 'tree' keyword in the header to find the root directory structure.",
                            "Use 'fs.mkdirSync' with 'recursive: true' to build the paths."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Git Internals PDF", url: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects" },
                            { title: "Node.js Zlib Docs", url: "https://nodejs.org/api/zlib.html" }
                        ]),
                        testCases: JSON.stringify([{ name: "Decompression", verify: "Successfully read object headers" }, { name: "Tree Traversal", verify: "Correctly map hashes to file paths" }]),
                        order: 4
                    }
                }
            ]
        },
        {
            id: "fe-l2",
            title: "Intermediate Frontend Engineer",
            skills: [
                {
                    id: "fe-l2-skill-react-perf",
                    title: "Advanced React & Performance",
                    description: "Optimize React applications. Master useMemo, useCallback, code splitting, and reconciliation.",
                    resources: [
                        { title: "React Docs: Optimizing Performance", type: "DOCUMENTATION", url: "https://react.dev/learn/render-and-commit", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "When should you use 'useMemo'?", options: JSON.stringify(["Every time.", "Only for expensive calculations to prevent re-computation on every render.", "To memorize text.", "For API calls."]), correctAnswer: "Only for expensive calculations to prevent re-computation on every render.", explanation: "Overuse can actually hurt performance.", order: 1 }
                    ],
                    miniProject: {
                        title: "Performance Dashboard",
                        description: "Refactor a slow, laggy list component to use virtualization (react-window) and memoization.",
                        requirements: JSON.stringify(["Render 10,000 items without lag.", "Prevent unnecessary re-renders of list items.", "Implement infinite scroll."]),
                        order: 1
                    }
                },
                {
                    id: "fe-l2-skill-ts",
                    title: "TypeScript for Frontend",
                    description: "Write type-safe UI code. Generics, Union Types, and Utility Types.",
                    resources: [
                        { title: "TypeScript Handbook", type: "DOCUMENTATION", url: "https://www.typescriptlang.org/docs/handbook/intro.html", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Partial<T>' utility type?", options: JSON.stringify(["Removes all types.", "Constructs a type with all properties of T set to optional.", "Makes all properties required.", "Splits a type in half."]), correctAnswer: "Constructs a type with all properties of T set to optional.", explanation: "Useful for update objects.", order: 1 }
                    ],
                    miniProject: {
                        title: "Strictly Typed Form Library",
                        description: "Build a small form library that infers values and errors based on a Zod schema.",
                        requirements: JSON.stringify(["Use Generics for the form state.", "Infer types from Zod.", "Strict null checks enabled."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "fe-l3",
            title: "Senior Frontend Engineer",
            skills: [
                {
                    id: "fe-l3-skill-testing",
                    title: "Frontend Testing Strategy",
                    description: "Unit, Integration, and E2E testing with Vitest and Playwright.",
                    resources: [
                        { title: "Testing Library Docs", type: "DOCUMENTATION", url: "https://testing-library.com/docs/react-testing-library/intro/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is the philosophy of React Testing Library?", options: JSON.stringify(["Test implementation details.", "test the software the way the user uses it.", "Test only Redux.", "Snapshot everything."]), correctAnswer: "test the software the way the user uses it.", explanation: "Avoid testing state/props directly; test interactions.", order: 1 }
                    ],
                    miniProject: {
                        title: "Test-Driven Component System",
                        description: "Build a complex Data Table component using TDD (Test Driven Development).",
                        requirements: JSON.stringify(["Write tests before code.", "Achieve 100% branch coverage.", "Implement sorting and filtering tests."]),
                        order: 1
                    }
                },
                {
                    id: "fe-l3-skill-arch",
                    title: "Frontend Architecture",
                    description: "Design scalable frontend systems. State machines, Compound Components, and Module Federation.",
                    resources: [
                        { title: "Patterns.dev", type: "ARTICLE", url: "https://www.patterns.dev/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Compound Component' pattern?", options: JSON.stringify(["A component that costs pounds.", "A pattern where components share state implicitly to form a complete UI unit (e.g., Select, Select.Item).", "Using Redux.", "Two components in one file."]), correctAnswer: "A pattern where components share state implicitly to form a complete UI unit (e.g., Select, Select.Item).", explanation: "It provides a flexible API for users.", order: 1 }
                    ],
                    miniProject: {
                        title: "Micro-Frontend Shell",
                        description: "Create a host application that dynamically loads a remote product widget using Webpack Module Federation.",
                        requirements: JSON.stringify(["Setup Host app.", "Setup Remote app.", "Share dependencies (React) to avoid duplication."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "fe-l4",
            title: "Principal Frontend Architect",
            skills: [
                {
                    id: "fe-l4-skill-infra",
                    title: "Web Performance & Infrastructure",
                    description: "Edge computing, CDN caching strategies, and Core Web Vitals optimization.",
                    resources: [
                        { title: "Web Vitals", type: "DOCUMENTATION", url: "https://web.dev/vitals/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'LCP'?", options: JSON.stringify(["Low Content Paint.", "Largest Contentful Paint.", "Least Common Paint.", "Loading Content Priority."]), correctAnswer: "Largest Contentful Paint.", explanation: "It measures loading performance of the main content.", order: 1 }
                    ],
                    miniProject: {
                        title: "Global CDN Configuration",
                        description: "Design a caching strategy for a global news site.",
                        requirements: JSON.stringify(["Define Cache-Control headers.", "Implement SWR (Stale-While-Revalidate).", "Design Edge functions for personalization."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};

