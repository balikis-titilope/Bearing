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
                        { title: "Git from the Bottom Up", type: "ARTICLE", url: "https://jwiegley.github.io/git-from-the-bottom-up/", duration: 60, order: 2 }
                    ],
                    questions: [
                        { question: "What type of Git object stores file content?", options: JSON.stringify(["Commit", "Tree", "Blob", "Tag"]), correctAnswer: "Blob", explanation: "A 'blob' stores the content of a single file.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Git Reconstructer",
                        description: "Traverse the object store (.git/objects) and identify dangling blobs.",
                        requirements: JSON.stringify(["Parse tree objects.", "Demonstrate SHA-1 understanding."]),
                        order: 4
                    }
                },
                {
                    id: "fe-l1-skill-css-anim",
                    title: "Advanced CSS: Animations & Motion",
                    description: "Beyond simple transitions. Master keyframes, cubic-beziers, and the 'will-change' property to create fluid, hardware-accelerated interfaces.",
                    resources: [
                        { title: "Josh Comeau: Guide to CSS Animations", type: "ARTICLE", url: "https://www.joshwcomeau.com/css/animations/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'will-change: transform' do?", options: JSON.stringify(["It changes the transform immediately.", "It hints to the browser to promote the element to its own layer for GPU acceleration.", "It prevents the element from moving.", "It is deprecated."]), correctAnswer: "It hints to the browser to promote the element to its own layer for GPU acceleration.", explanation: "Using will-change allows the browser to optimize for impending changes.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Physics-Based Loader",
                        description: "Create a suite of high-performance loading animations using only CSS, optimized for 60fps.",
                        requirements: JSON.stringify(["Use zero JavaScript.", "Maintain 60fps on mobile.", "Implement a complex multi-stage keyframe animation."]),
                        order: 5
                    }
                },
                {
                    id: "fe-l1-skill-browser-arch",
                    title: "Browser Rendering Architecture",
                    description: "Understand the Critical Rendering Path. Learn how the browser parses HTML, constructs the CSSOM, and handles the Layout, Paint, and Composite cycles.",
                    resources: [
                        { title: "Web.dev: Critical Rendering Path", type: "DOCUMENTATION", url: "https://web.dev/critical-rendering-path/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'CSSOM'?", options: JSON.stringify(["CSS Object Model.", "CSS Optimized Memory.", "CSS Overlay Maker.", "A JavaScript library."]), correctAnswer: "CSS Object Model.", explanation: "The CSSOM is the tree structure of styles that the browser combines with the DOM.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Rendering Auditor",
                        description: "Profile a sample page using Chrome DevTools 'Performance' tab and identify 'Jank' caused by excessive re-paints.",
                        requirements: JSON.stringify(["Identify layout shifts.", "Optimize a component to skip the Paint phase.", "Document the impact of 'composite-only' properties."]),
                        order: 6
                    }
                },
                {
                    id: "fe-l1-skill-security",
                    title: "Frontend Security Foundations",
                    description: "Secure your applications from the start. Master Content Security Policy (CSP), Same-Origin Policy (SOP), and common attack vectors like XSS.",
                    resources: [
                        { title: "OWASP: Frontend Security Cheat Sheet", type: "DOCUMENTATION", url: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary purpose of a CSP?", options: JSON.stringify(["To speed up the site.", "To restrict the sources from which scripts and other resources can be loaded.", "To style the page.", "To manage user logins."]), correctAnswer: "To restrict the sources from which scripts and other resources can be loaded.", explanation: "CSP is a vital defense-in-depth against XSS.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Secure Vault Shell",
                        description: "Build a static site that enforces a strict CSP and implements sanitization for all user-provided inputs.",
                        requirements: JSON.stringify(["Implement a valid CSP header.", "Sanitize HTML using a library like DOMPurify.", "Prevent inline-script execution."]),
                        order: 7
                    }
                },
                {
                    id: "fe-l1-skill-vitals",
                    title: "Performance & Core Web Vitals",
                    description: "Master the metrics that matter to Google and users. LCP, FID, and CLS. Learn how to optimize images, fonts, and scripts for speed.",
                    resources: [
                        { title: "Google: Core Web Vitals Guide", type: "DOCUMENTATION", url: "https://web.dev/vitals/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'CLS' stand for?", options: JSON.stringify(["Critical Layout Start.", "Cumulative Layout Shift.", "Common Layout Style.", "Color Level Scale."]), correctAnswer: "Cumulative Layout Shift.", explanation: "CLS measures visual stability of a page.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Lighthouse 100 Run",
                        description: "Take a slow homepage and optimize it until it reaches a perfect 100/100 score in Performance and Best Practices.",
                        requirements: JSON.stringify(["Implement modern image formats (WebP/AVIF).", "Eliminate render-blocking resources.", "Optimize font loading (font-display: swap)."]),
                        order: 8
                    }
                },
                {
                    id: "fe-l1-skill-responsive",
                    title: "Advanced Responsive Engineering",
                    description: "Beyond just @media queries. Learn Container Queries, clamp(), and fluid typography to build truly adaptive systems.",
                    resources: [
                        { title: "MDN: Container Queries", type: "DOCUMENTATION", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Container Query'?", options: JSON.stringify(["A query for media size.", "A query that styles an element based on the size of its parent container, not the viewport.", "A database query.", "A flexbox property."]), correctAnswer: "A query that styles an element based on the size of its parent container, not the viewport.", explanation: "Container queries enable truly modular responsive components.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Fluid Component System",
                        description: "Build a card component that changes its internal layout based on the width of its container using Container Queries.",
                        requirements: JSON.stringify(["Use '@container' syntax.", "Implement fluid typography using clamp().", "No viewport-based media queries."]),
                        order: 9
                    }
                },
                {
                    id: "fe-l1-skill-web-apis",
                    title: "Modern Web APIs & Storage",
                    description: "Leverage the full power of the browser. Master the Intersection Observer for lazy loading, Resize Observer for responsive logic, and Web Storage APIs.",
                    resources: [
                        { title: "MDN: Intersection Observer API", type: "DOCUMENTATION", url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API", duration: 35, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary use case for Intersection Observer?", options: JSON.stringify(["Calculating math.", "Detecting when an element enters or leaves the browser viewport.", "Styling text.", "Connecting to a database."]), correctAnswer: "Detecting when an element enters or leaves the browser viewport.", explanation: "It's essential for performant lazy-loading and scroll-based triggers.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Progressive Image Loader",
                        description: "Build an image gallery that lazy-loads images only when they appear in the viewport, using a blurred placeholder technique.",
                        requirements: JSON.stringify(["Use IntersectionObserver.", "Implement a fade-in effect on load.", "Fallback for browsers without the API."]),
                        order: 10
                    }
                }
            ],
            finalProject: {
                title: "Flux - Meta-Standard Marketing Landing Page",
                description: "Build a high-conversion, pixel-perfect, and fully accessible landing page for 'Flux', a modern productivity tool. This project integrates semantic structure, advanced CSS grid layouts, and responsive engineering.",
                requirements: [
                    "Implement a 12-column CSS Grid system for the main layout.",
                    "Use at least 5 different semantic HTML5 landmarks (main, nav, aside, footer, section).",
                    "Score 100/100 on Lighthouse Accessibility audit.",
                    "Use CSS Variables (Tokens) for a scalable design system.",
                    "Fully responsive design (Mobile, Tablet, Desktop) using clamp() and media queries.",
                    "Implement a complex header with sticky behavior and a responsive mobile menu."
                ],
                guide: [
                    "Step 1: Set up the global design system tokens using CSS Variables.",
                    "Step 2: Define the semantic skeleton of the landing page.",
                    "Step 3: Implement the hero section using CSS Grid with background overlays.",
                    "Step 4: Build a responsive 'Features' grid with staggered animations.",
                    "Step 5: Create a professional footer using Flexbox for grouped links.",
                    "Step 6: Perform a full accessibility and performance audit."
                ],
                hints: [
                    "Use 'repeat(auto-fit, minmax(250px, 1fr))' for a fluid features grid.",
                    "Follow the BEM (Block Element Modifier) convention for clean, scalable CSS.",
                    "Ensure all decorative images have empty alt attributes (alt='') to avoid noise for screen readers."
                ],
                testCases: [{ name: "Semantic Correctness", verify: "Manual landmark check" }, { name: "A11y Score", verify: "100/100 Lighthouse" }],
            }
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
                },
                {
                    id: "fe-l2-skill-state",
                    title: "Advanced State Management",
                    description: "Go beyond useState. Master the internal mechanics of Redux, Zustand, and Jotai. Understand immutability patterns and store orchestration.",
                    resources: [
                        { title: "Zustand: Working with state", type: "DOCUMENTATION", url: "https://docs.pmnd.rs/zustand/getting-started/introduction", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Action' in Redux?", options: JSON.stringify(["A function call.", "A plain object describing what happened.", "A database entry.", "A CSS class."]), correctAnswer: "A plain object describing what happened.", explanation: "Actions are the only way to trigger state changes in Redux.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Multi-Store Sync",
                        description: "Synchronize state across multiple independent stores (e.g., Theme, Auth, and Product) with complex inter-dependencies.",
                        requirements: JSON.stringify(["Implement middleware for logging.", "Sync state to LocalStorage.", "Prevent race conditions in async updates."]),
                        order: 3
                    }
                },
                {
                    id: "fe-l2-skill-rsc",
                    title: "React Server Components (RSC)",
                    description: "Learn the biggest shift in React. Understand the difference between server and client components, data fetching at the component level, and the 'use server' directive.",
                    resources: [
                        { title: "React: Server Components Guide", type: "DOCUMENTATION", url: "https://react.dev/reference/react/use-server", duration: 55, order: 1 }
                    ],
                    questions: [
                        { question: "Can a Server Component import a Client Component?", options: JSON.stringify(["Yes.", "No.", "Only if it is a list.", "Only on mobile."]), correctAnswer: "Yes.", explanation: "Server components can render client components, but not vice-versa directly.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Streaming Catalog",
                        description: "Build a product catalog that uses Suspense and RSC to stream content chunk-by-chunk to the client.",
                        requirements: JSON.stringify(["Implement loading skeletons.", "Use server actions for filtering.", "Optimize for zero-bundle-size on the server."]),
                        order: 4
                    }
                },
                {
                    id: "fe-l2-skill-patterns",
                    title: "Component Design Patterns",
                    description: "Master Atomic Design, Compound Components, and Render Props. Learn how to build flexible, reusable UI systems used at scale.",
                    resources: [
                        { title: "Atomic Design by Brad Frost", type: "BOOK_SUMMARY", url: "https://atomicdesign.bradfrost.com/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Organism' in Atomic Design?", options: JSON.stringify(["A single button.", "A complex, distinct section of an interface consisting of molecules/atoms.", "The entire page.", "A CSS file."]), correctAnswer: "A complex, distinct section of an interface consisting of molecules/atoms.", explanation: "Organisms form the functional sections of a UI.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Atomic UI Kit",
                        description: "Design a consistent UI kit starting from atoms (typography, buttons) up to templates.",
                        requirements: JSON.stringify(["Follow Atomic Design principles.", "Build in Storybook.", "Maintain strict prop types."]),
                        order: 5
                    }
                },
                {
                    id: "fe-l2-skill-adv-testing",
                    title: "Sophisticated Web Testing",
                    description: "Move beyond unit tests. Master Mock Service Worker (MSW), Visual Regression testing, and Integration suites with React Testing Library.",
                    resources: [
                        { title: "MSW: Introduction", type: "DOCUMENTATION", url: "https://mswjs.io/docs/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What does MSW do?", options: JSON.stringify(["Speeds up the computer.", "Intercepts network requests at the network level for testing.", "Tests CSS colors.", "Deploy code."]), correctAnswer: "Intercepts network requests at the network level for testing.", explanation: "MSW allows for realistic API mocking without changing application code.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Zero-Flake Test Suite",
                        description: "Build a fully tested checkout flow with 100% integration coverage using MSW to mock the payment gateway.",
                        requirements: JSON.stringify(["Zero real API calls.", "Test error states (timeout, decline).", "Visual snapshot verify."]),
                        order: 6
                    }
                },
                {
                    id: "fe-l2-skill-build",
                    title: "Modern Build Systems & Bundling",
                    description: "Understand Vite, Rollup, and Webpack. Learn how treeshaking works, how to optimize build times, and how to handle polyfills for old browsers.",
                    resources: [
                        { title: "Vite: Why Vite?", type: "DOCUMENTATION", url: "https://vitejs.dev/guide/why.html", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Tree Shaking'?", options: JSON.stringify(["Deleting files.", "Removing dead (unused) code from the final bundle.", "Compressing images.", "A brand of JS framework."]), correctAnswer: "Removing dead (unused) code from the final bundle.", explanation: "It relies on ES modules to identify used exports.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Optimized Bundle Auditor",
                        description: "Take a bloated React app and reduce its bundle size by 60% through code splitting and tree-shaking optimizations.",
                        requirements: JSON.stringify(["Implement Dynamic Imports.", "Analyze vendor chunks.", "Optimize peer dependencies."]),
                        order: 7
                    }
                },
                {
                    id: "fe-l2-skill-pwa",
                    title: "PWA & Native Capabilities",
                    description: "Turn your web app into a Progressive Web App. Master Service Workers, precaching, and the Web Manifest.",
                    resources: [
                        { title: "Web.dev: PWA Course", type: "DOCUMENTATION", url: "https://web.dev/learn/pwa/", duration: 80, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Service Worker'?", options: JSON.stringify(["A personal assistant.", "A background script that acts as a proxy between the app and the network.", "A cloud server.", "A database."]), correctAnswer: "A background script that acts as a proxy between the app and the network.", explanation: "It enables offline functionality and push notifications.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Offline-First Memo App",
                        description: "Build a notes application that works perfectly without an internet connection and syncs when back online.",
                        requirements: JSON.stringify(["Register a Service Worker.", "Implement precaching for static assets.", "Use IndexedDB for local data persistence."]),
                        order: 8
                    }
                }
            ],
            finalProject: {
                title: "Omni-Market - Enterprise Data Dashboard",
                description: "Build an industrial-grade, real-time analytics dashboard for an e-commerce platform. This project requires strict TypeScript usage, advanced React performance patterns, and seamless data orchestration.",
                requirements: [
                    "Implement a fully type-safe state management system (no 'any').",
                    "Virtualize large data sets (10k+ rows) using 'react-window' or 'tanstack-virtual'.",
                    "Achieve a 90+ Lighthouse Performance score with optimized bundle splitting.",
                    "Implement real-time updates via mocked WebSockets (Interval/PubSub).",
                    "Custom Hook architecture for data fetching, filtering, and theme management.",
                    "Strict Zod validation for all incoming API data (mocked)."
                ],
                guide: [
                    "Step 1: Architect the global theme and state container using TypeScript Interfaces.",
                    "Step 2: Implement the virtualized list component for transaction logs.",
                    "Step 3: Build the real-time analytics charts using a performant charting library.",
                    "Step 4: Optimize re-renders in the filtering system using 'useMemo' and 'useCallback'.",
                    "Step 5: Implement dynamic code splitting for the dashboard modules.",
                    "Step 6: Verify Type Integrity and Performance benchmarks."
                ],
                hints: [
                    "Use 'React.memo' to prevent re-renders of heavy dashboard widgets.",
                    "Leverage TypeScript 'Discriminated Unions' for complex UI states (Loading, Success, Error).",
                    "Check the 'Profiler' tab in React DevTools to identify rendering bottlenecks."
                ],
                testCases: [{ name: "Type Safety", verify: "Zero TS errors in strict mode" }, { name: "Render Perf", verify: "No jank on 10k items" }],
            }
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
                },
                {
                    id: "fe-l3-skill-design-systems",
                    title: "Design Systems Engineering",
                    description: "Design at scale. Master CSS-in-JS (Stitches/Emotion), Radix UI primitives, and Design Tokens. Learn how to maintain consistency across hundreds of apps.",
                    resources: [
                        { title: "Design Systems Repo", type: "ARTICLE", url: "https://designsystemsrepo.com/design-systems-articles/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What are 'Design Tokens'?", options: JSON.stringify(["Currency used by designers.", "Agnostic variables (color, spacing) that store design decisions.", "CSS classes.", "Images."]), correctAnswer: "Agnostic variables (color, spacing) that store design decisions.", explanation: "Tokens allow for multi-platform design consistency.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Tokenized Library",
                        description: "Build a set of 5 components that derive all styles from a central JSON token file.",
                        requirements: JSON.stringify(["No hardcoded colors/px.", "Support Light/Dark themes.", "Export tokens for both CSS and JS consumption."]),
                        order: 3
                    }
                },
                {
                    id: "fe-l3-skill-webgl",
                    title: "Advanced WebGL & 3D (Three.js)",
                    description: "Bring the 3rd dimension to the web. Master Three.js, React Three Fiber, and shader programming for high-impact visual experiences.",
                    resources: [
                        { title: "Three.js Journey (Bruno Simon)", type: "COURSE", url: "https://threejs-journey.com/", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Shader'?", options: JSON.stringify(["A way to hide elements.", "A program that runs on the GPU to calculate pixel colors or vertices.", "A type of CSS filter.", "A hardware component."]), correctAnswer: "A program that runs on the GPU to calculate pixel colors or vertices.", explanation: "Shaders are essential for custom 3D effects.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Interactive 3D Hero",
                        description: "Build a 3D aterrizaje section with a custom-shaded background that responds to mouse movement.",
                        requirements: JSON.stringify(["Implementation in R3F.", "Custom GLSL fragment shader.", "Optimized for mobile (low vertex count)."]),
                        order: 4
                    }
                },
                {
                    id: "fe-l3-skill-global",
                    title: "Global Engineering & i18n",
                    description: "Build for the world. Master internationalization (i18n), Right-to-Left (RTL) layouts, and cultural sensitivity in UI design.",
                    resources: [
                        { title: "MDN: Localization", type: "DOCUMENTATION", url: "https://developer.mozilla.org/en-US/docs/Mozilla/Localization", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Why use 'logical properties' like 'margin-inline-start' instead of 'margin-left'?", options: JSON.stringify(["It's shorter.", "It automatically adapts to text direction (LTR vs RTL).", "It's newer.", "It supports old IE versions."]), correctAnswer: "It automatically adapts to text direction (LTR vs RTL).", explanation: "Logical properties are the standard for multi-directional layouts.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Globalized Dashboard",
                        description: "Take a dashboard and implement full support for 3 languages, including RTL (Arabic/Hebrew) mirroring.",
                        requirements: JSON.stringify(["Use zero hardcoded strings.", "Mirror layouts correctly for RTL.", "Implement currency/date formatting."],),
                        order: 5
                    }
                },
                {
                    id: "fe-l3-skill-infra",
                    title: "Frontend Infrastructure & Edge",
                    description: "Learn how frontends are delivered. Master Edge Functions, A/B testing at the CDN level, and automated deploy previews.",
                    resources: [
                        { title: "Vercel: Edge Middleware", type: "DOCUMENTATION", url: "https://vercel.com/docs/functions/edge-middleware", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Edge Function'?", options: JSON.stringify(["A function for drawing edges.", "A serverless function that runs at the CDN node nearest to the user.", "A CSS function.", "A browser plugin."]), correctAnswer: "A serverless function that runs at the CDN node nearest to the user.", explanation: "Edge functions reduce latency by running closer to the user.", order: 1 }
                    ],
                    miniProject: {
                        title: "The A/B Edge Splitter",
                        description: "Implement a zero-latency A/B testing system that serves different homepage layouts using Edge Middleware.",
                        requirements: JSON.stringify(["No client-side flickering.", "Server-side cookie assignment.", "Performance tracking at the edge."]),
                        order: 6
                    }
                },
                {
                    id: "fe-l3-skill-web-components",
                    title: "Web Components & Shadow DOM",
                    description: "Framework-agnostic UI. Master the Custom Elements API, Shadow DOM, and HTML Templates for truly portable components.",
                    resources: [
                        { title: "WebComponents.org: Introduction", type: "DOCUMENTATION", url: "https://www.webcomponents.org/introduction", duration: 35, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Shadow DOM'?", options: JSON.stringify(["A hidden mode in Chrome.", "A private, encapsulated DOM for a component that is isolated from the main document.", "A type of CSS shadow.", "A database entry."]), correctAnswer: "A private, encapsulated DOM for a component that is isolated from the main document.", explanation: "Shadow DOM prevents style leakage and preserves encapsulation.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Portable Widget",
                        description: "Build a chat widget as a Web Component that can be dropped into any site (React, Vue, or static HTML) with zero styling conflicts.",
                        requirements: JSON.stringify(["Use 'customElements.define'.", "Encapsulate styles in Shadow Root.", "Communicate via Custom Events."]),
                        order: 7
                    }
                },
                {
                    id: "fe-l3-skill-a11y-audit",
                    title: "Advanced A11y & Remediation",
                    description: "Go beyond basic alt tags. Master screen reader testing (NVDA/VoiceOver), keyboard trap remediation, and ARIA patterns for complex widgets.",
                    resources: [
                        { title: "A11y Project: Advanced Patterns", type: "DOCUMENTATION", url: "https://www.a11yproject.com/posts/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Keyboard Trap'?", options: JSON.stringify(["A musical instrument.", "A situation where a keyboard user cannot move focus out of an element.", "A way to speed up typing.", "An intentional security feature."]), correctAnswer: "A situation where a keyboard user cannot move focus out of an element.", explanation: "Keyboard traps make applications unusable for many assistive tech users.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Accessibility Overhaul",
                        description: "Take a 'broken' (inaccessible) modal and menu system and fix it to comply with WCAG 2.1 Level AA.",
                        requirements: JSON.stringify(["Implement focus trapping.", "Correct ARIA-labeledby usage.", "Pass full manual screen reader audit."]),
                        order: 8
                    }
                }
            ],
            finalProject: {
                title: "Nexus Design System & Library",
                description: "Design and implement a professional-grade design system and component library from scratch. This project focuses on architecture, TDD, and creating a scalable UI foundation.",
                requirements: [
                    "Implement a suite of 10+ accessible compound components (Select, Modal, etc.).",
                    "Achieve 95%+ test coverage using Vitest and React Testing Library.",
                    "Implement a documented state management pattern for complex components.",
                    "Themeable architecture using CSS-in-JS or CSS Modules with Tokens.",
                    "Comprehensive documentation site for the library.",
                    "Strict semantic versioning flow and automated build pipelines."
                ],
                guide: [
                    "Step 1: Define the core tokens and theme architecture.",
                    "Step 2: Implement the base UI primitives (Button, Input, Layout).",
                    "Step 3: Build complex compound components using context and ARIA patterns.",
                    "Step 4: Develop an exhaustive test suite for every component variant.",
                    "Step 5: Create a documentation site using MDX or a similar static generator.",
                    "Step 6: Configure CI/CD for automated testing and package distribution."
                ],
                hints: [
                    "Use React Context for shared state in compound components.",
                    "Think like a library author: keep your APIs intuitive and flexible.",
                    "Snapshot testing is great for preventing UI regressions, but focus on interaction tests."
                ],
                testCases: [{ name: "Test Coverage", verify: ">95% unit coverage" }, { name: "Accessibility", verify: "Full keyboard navigation support" }],
            }
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
                },
                {
                    id: "fe-l4-skill-system-design",
                    title: "Frontend System Design",
                    description: "Architect massive applications. Master distributed UI architecture, scalable state patterns, and the lifecycle of enterprise-grade frontends.",
                    resources: [
                        { title: "Grokking Frontend System Design", type: "ARTICLE", url: "https://www.patterns.dev/posts/system-design/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Distributed UI'?", options: JSON.stringify(["A UI in a cloud.", "An architecture where different parts of the UI are owned and deployed by different teams.", "A responsive layout.", "A server-side rendered page."]), correctAnswer: "An architecture where different parts of the UI are owned and deployed by different teams.", explanation: "It allows for organizational scaling and independent deployments.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Enterprise Blueprint",
                        description: "Design the technical architecture for a global banking dashboard with 50+ micro-frontend modules.",
                        requirements: JSON.stringify(["Define the shell/orchestrator logic.", "Outline dependency sharing strategy.", "Design for failure and error boundaries."]),
                        order: 2
                    }
                },
                {
                    id: "fe-l4-skill-monorepo",
                    title: "Monorepo & Build Orchestration",
                    description: "Manage complexity. Master Nx, Turborepo, and Lerna. Understand dependency graphs, remote caching, and task orchestration.",
                    resources: [
                        { title: "Monorepo.tools: Comprehensive Guide", type: "DOCUMENTATION", url: "https://monorepo.tools/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Remote Caching' in a monorepo?", options: JSON.stringify(["A cloud backup.", "A system that shares build artifacts across machines to prevent redundant builds.", "A browser cache.", "A database."]), correctAnswer: "A system that shares build artifacts across machines to prevent redundant builds.", explanation: "Remote caching significantly speeds up CI/CD pipelines.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Nx Workspace Architect",
                        description: "Set up a highly efficient Nx workspace with shared UI libraries and automated dependency graph enforcement.",
                        requirements: JSON.stringify(["Enforce library boundaries.", "Enable remote caching.", "Optimize task parallelization."]),
                        order: 3
                    }
                },
                {
                    id: "fe-l4-skill-leadership",
                    title: "Engineering Strategy & Leadership",
                    description: "Go beyond code. Master RFC (Request for Comments) writing, ADR (Architecture Decision Record) documentation, and technical roadmap setting.",
                    resources: [
                        { title: "Pragmatic Engineer: Building Roadmaps", type: "ARTICLE", url: "https://blog.pragmaticengineer.com/product-engineering-roadmaps/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'ADR'?", options: JSON.stringify(["An Advertising report.", "Architecture Decision Record - a document that captures why a decision was made.", "Automatic Deployment Route.", "A type of Bug report."]), correctAnswer: "Architecture Decision Record - a document that captures why a decision was made.", explanation: "ADRs provide critical historical context for architecture evolution.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Technical Strategy RFC",
                        description: "Write a comprehensive RFC for migrating the company's legacy frontend to a modern framework.",
                        requirements: JSON.stringify(["Detailed cost-benefit analysis.", "Phased rollout plan.", "Risk mitigation strategies."]),
                        order: 4
                    }
                },
                {
                    id: "fe-l4-skill-framework-dev",
                    title: "Custom Renders & WebAssembly",
                    description: "Tear down the abstraction. Learn how to build custom React renderers or use WebAssemby (Wasm) for ultra-high performance numerical tasks.",
                    resources: [
                        { title: "WebAssembly: Introduction", type: "DOCUMENTATION", url: "https://webassembly.org/getting-started/developers-guide/", duration: 70, order: 1 }
                    ],
                    questions: [
                        { question: "When is WASM most appropriate?", options: JSON.stringify(["For simple forms.", "For heavy computational tasks like image processing or 3D physics.", "For styling text.", "For SEO."]), correctAnswer: "For heavy computational tasks like image processing or 3D physics.", explanation: "WASM provides near-native execution speed for critical paths.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Wasm Blur Engine",
                        description: "Implement a high-performance image blurring algorithm in Rust/C++ and integrate it into a React app via Wasm.",
                        requirements: JSON.stringify(["Achieve 10x performance over pure JS.", "Seamless JS <-> Wasm bridge.", "Fallback logic for old browsers."]),
                        order: 5
                    }
                },
                {
                    id: "fe-l4-skill-standards",
                    title: "Web Standards & TC39",
                    description: "Learn how the web evolves. Understand the TC39 proposal process and how to contribute to the future of JavaScript and HTML.",
                    resources: [
                        { title: "TC39: The Proposal Process", type: "DOCUMENTATION", url: "https://tc39.es/process-document/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Stage 3' in the TC39 process?", options: JSON.stringify(["Experimental.", "Candidate - specification is complete and reviewed.", "Finished.", "Idea."]), correctAnswer: "Candidate - specification is complete and reviewed.", explanation: "Stage 3 indicates the feature is ready for final testing and implementation.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Polyfill Architect",
                        description: "Identify a promising Stage 2 proposal and write a robust, production-quality polyfill for it.",
                        requirements: JSON.stringify(["Compliance with the latest draft spec.", "Extensive edge-case testing.", "Zero side-effects on global scope."]),
                        order: 6
                    }
                }
            ],
            finalProject: {
                title: "Global Content Edge Infrastructure",
                description: "Design and simulate a global infrastructure strategy for an ultra-scale web application. Focus on maximizing Core Web Vitals and minimizing Latency at the Edge.",
                requirements: [
                    "Design a multi-region CDN and caching strategy with 99.9% cache-hit ratio goal.",
                    "Implement an Edge-computing strategy for personalized content delivery.",
                    "Define an optimization plan to achieve <2s LCP on real devices (simulated).",
                    "Architect a server-side rendering (SSR) strategy with partial hydration.",
                    "Security audit including CSRF, XSS, and Rate Limiting at the Edge.",
                    "Cost-benefit analysis of different infrastructure providers (AWS, Cloudflare, Vercel)."
                ],
                guide: [
                    "Step 1: Audit a slow application and identify primary bottlenecks in Core Web Vitals.",
                    "Step 2: Design a caching hierarchy from Browser to Origin.",
                    "Step 3: Implement Edge-side Logic for dynamic route protection.",
                    "Step 4: Build a monitoring dashboard for real-user metrics (RUM).",
                    "Step 5: Simulate a global rollout and measure latency improvements.",
                    "Step 6: Finalize the scale and performance report for executive stakeholders."
                ],
                hints: [
                    "Focus on the 'Critical Rendering Path' - every millisecond counts.",
                    "Edge compute is powerful, but keep your bundles small to avoid cold starts.",
                    "Use 'Pre-fetching' and 'Pre-loading' strategically for first-page loads."
                ],
                testCases: [{ name: "Performance Strategy", verify: "Lighthouse Performance >95" }, { name: "Infrastructure Design", verify: "Zero single-points-of-failure" }],
            }
        }
    ]
};

