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
                        { question: "What type of Git object stores file content?", options: JSON.stringify(["Commit", "Tree", "Blob", "Tag"]), correctAnswer: "Blob", explanation: "A 'blob' stores the content of a single file.", order: 1 },
                        { question: "What does the 'Tree' object in Git represent?", options: JSON.stringify(["Individual file content", "A directory structure (filenames and permissions)", "Information about a author", "A branch pointer"]), correctAnswer: "A directory structure (filenames and permissions)", explanation: "Trees map to directories/folders in your project.", order: 2 },
                        { question: "Which Git command is used to move the HEAD pointer and optionally update the working directory?", options: JSON.stringify(["git stage", "git checkout", "git push", "git init"]), correctAnswer: "git checkout", explanation: "Checkout is used to switch branches or restore working tree files.", order: 3 },
                        { question: "What is the purpose of the 'Index' (or Staging Area) in Git?", options: JSON.stringify(["To store remote credentials", "A temporary layer where you format the next commit", "To cache DNS lookups", "To store deleted files"]), correctAnswer: "A temporary layer where you format the next commit", explanation: "The index allows you to carefully craft your commits.", order: 4 },
                        { question: "In Git internals, what is a 'Commit' object?", options: JSON.stringify(["A snapshot of the project at a point in time, with metadata", "A list of all users in the repo", "A type of merge strategy", "A specific line of code"]), correctAnswer: "A snapshot of the project at a point in time, with metadata", explanation: "Commits link a tree to its author, date, and parent commits.", order: 5 }
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
                        { question: "What does 'will-change: transform' do?", options: JSON.stringify(["It changes the transform immediately.", "It hints to the browser to promote the element to its own layer for GPU acceleration.", "It prevents the element from moving.", "It is deprecated."]), correctAnswer: "It hints to the browser to promote the element to its own layer for GPU acceleration.", explanation: "Using will-change allows the browser to optimize for impending changes.", order: 1 },
                        { question: "Which CSS property is most efficient for animations because it skips layout and paint phases?", options: JSON.stringify(["width", "margin-left", "transform", "padding"]), correctAnswer: "transform", explanation: "Transforms and Opacity can be handled entirely by the GPU.", order: 2 },
                        { question: "What is the purpose of a 'cubic-bezier' function in animations?", options: JSON.stringify(["To define the color of the animation", "To define a custom timing function (acceleration curve)", "To rotate an element in 3D", "To repeat an animation indefinitely"]), correctAnswer: "To define a custom timing function (acceleration curve)", explanation: "Cubic-bezier allows for sophisticated, non-linear motion.", order: 3 },
                        { question: "If you want an animation to keep its final state after finishing, which property do you use?", options: JSON.stringify(["animation-fill-mode: forwards", "animation-iteration-count: infinite", "animation-stay: true", "transition-behavior: end"]), correctAnswer: "animation-fill-mode: forwards", explanation: "Forwards fill mode applies the last keyframe's styles after completion.", order: 4 },
                        { question: "What is 'Jank' in the context of web animations?", options: JSON.stringify(["A new CSS framework", "Visual stuttering caused by the browser dropping frames", "A type of gradient", "A security vulnerability"]), correctAnswer: "Visual stuttering caused by the browser dropping frames", explanation: "Jank happens when the main thread is too busy to maintain 60FPS.", order: 5 }
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
                        { question: "What is the 'CSSOM'?", options: JSON.stringify(["CSS Object Model.", "CSS Optimized Memory.", "CSS Overlay Maker.", "A JavaScript library."]), correctAnswer: "CSS Object Model.", explanation: "The CSSOM is the tree structure of styles that the browser combines with the DOM.", order: 1 },
                        { question: "What is the 'Critical Rendering Path'?", options: JSON.stringify(["A path in a park.", "The sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on the screen.", "A security protocol.", "A way to compress images."]), correctAnswer: "The sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on the screen.", explanation: "Optimizing the CRP is key to fast first-paints.", order: 2 },
                        { question: "During which phase does the browser calculate the exact geometry (position/size) of each element?", options: JSON.stringify(["Painting", "Compositing", "Layout (or Reflow)", "Constructing the DOM"]), correctAnswer: "Layout (or Reflow)", explanation: "Layout determines the 'where' and 'how big' for every node.", order: 3 },
                        { question: "Why is 'Compositing' the most efficient part of rendering?", options: JSON.stringify(["It deletes unused CSS.", "It runs on the GPU and only combines pre-painted layers.", "It makes the HTML shorter.", "It happens after the user leaves the page."]), correctAnswer: "It runs on the GPU and only combines pre-painted layers.", explanation: "Moving layers around (transforms) avoids expensive layout/paint work.", order: 4 },
                        { question: "Which event fires after the DOM is fully loaded but before images and stylesheets are necessarily finished?", options: JSON.stringify(["window.onload", "DOMContentLoaded", "onreadystatechange", "beforeunload"]), correctAnswer: "DOMContentLoaded", explanation: "DOMContentLoaded indicates the HTML is parsed and the DOM is ready.", order: 5 }
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
                        { question: "What is the primary purpose of a CSP?", options: JSON.stringify(["To speed up the site.", "To restrict the sources from which scripts and other resources can be loaded.", "To style the page.", "To manage user logins."]), correctAnswer: "To restrict the sources from which scripts and other resources can be loaded.", explanation: "CSP is a vital defense-in-depth against XSS.", order: 1 },
                        { question: "What does 'XSS' stand for?", options: JSON.stringify(["Extremely Secure Scripting", "Cross-Site Scripting", "XML Security System", "X-linked Style Sheet"]), correctAnswer: "Cross-Site Scripting", explanation: "XSS involves injecting malicious scripts into trusted websites.", order: 2 },
                        { question: "Which browser policy prevents scripts on one origin from accessing data on another origin?", options: JSON.stringify(["Cross-Origin Policy", "Same-Origin Policy (SOP)", "Content Security Policy", "Strict Transport Security"]), correctAnswer: "Same-Origin Policy (SOP)", explanation: "SOP is the cornerstone of web security.", order: 3 },
                        { question: "What is an 'HttpOnly' cookie?", options: JSON.stringify(["A cookie that only works on HTTP (not HTTPS)", "A cookie that cannot be accessed by JavaScript via document.cookie", "A cookie that is deleted after 1 hour", "A cookie used for styling purposes"]), correctAnswer: "A cookie that cannot be accessed by JavaScript via document.cookie", explanation: "HttpOnly cookies mitigate the impact of XSS attacks by protecting session tokens.", order: 4 },
                        { question: "What is 'Clickjacking'?", options: JSON.stringify(["Stealing a user's mouse", "Tricking a user into clicking something different from what they perceive", "A performance optimization technique", "A way to increase ad revenue"]), correctAnswer: "Tricking a user into clicking something different from what they perceive", explanation: "Usually done via transparent iframes over legitimate content.", order: 5 }
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
                        { question: "What does 'CLS' stand for?", options: JSON.stringify(["Critical Layout Start.", "Cumulative Layout Shift.", "Common Layout Style.", "Color Level Scale."]), correctAnswer: "Cumulative Layout Shift.", explanation: "CLS measures visual stability of a page.", order: 1 },
                        { question: "What does 'LCP' measure?", options: JSON.stringify(["Latency of Cloud Providers", "Largest Contentful Paint (Loading speed)", "Line Count Priority", "Layout Cycle Period"]), correctAnswer: "Largest Contentful Paint (Loading speed)", explanation: "LCP marks the point in the page load timeline when the main content has likely loaded.", order: 2 },
                        { question: "Which metric measures the time from when a user first interacts with a page to the time when the browser is actually able to respond?", options: JSON.stringify(["LCP", "FID (First Input Delay)", "CLS", "TTFB"]), correctAnswer: "FID (First Input Delay)", explanation: "FID is a measure of responsiveness.", order: 3 },
                        { question: "What is a major cause of high Cumulative Layout Shift (CLS)?", options: JSON.stringify(["Complex JavaScript loops", "Images without dimensions (width/height attributes)", "Slow server response", "Too many CSS files"]), correctAnswer: "Images without dimensions (width/height attributes)", explanation: "Giving image placeholders fixed sizes prevents layout jumps when the image finally loads.", order: 4 },
                        { question: "What is 'Tree Shaking' in modern build tools?", options: JSON.stringify(["A way to organize folders", "Removing dead (unused) code from the final bundle", "A type of animation", "Caching images"]), correctAnswer: "Removing dead (unused) code from the final bundle", explanation: "It helps reduce the payload size for the user.", order: 5 }
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
                        { question: "What is a 'Container Query'?", options: JSON.stringify(["A query for media size.", "A query that styles an element based on the size of its parent container, not the viewport.", "A database query.", "A flexbox property."]), correctAnswer: "A query that styles an element based on the size of its parent container, not the viewport.", explanation: "Container queries enable truly modular responsive components.", order: 1 },
                        { question: "What does 'clamp(1rem, 5vw, 2.5rem)' allow you to do?", options: JSON.stringify(["Hide an element", "Set fluid typography with a minimum and maximum safe bound", "Lock the font size to 5vw only", "Rotate an element"]), correctAnswer: "Set fluid typography with a minimum and maximum safe bound", explanation: "Clamp is essential for responsive design without excessive media queries.", order: 2 },
                        { question: "Which property is needed on a parent for its children to use Container Queries?", options: JSON.stringify(["container-type", "display: container", "grid-container: true", "contain: layout"]), correctAnswer: "container-type", explanation: "Usually set to 'size' or 'inline-size' to establish a container context.", order: 3 },
                        { question: "What is the benefit of 'Mobile First' design?", options: JSON.stringify(["It's easier to code.", "It ensures core content and functionality work on the most constrained devices first.", "It allows you to skip CSS for desktop.", "It makes the site faster for Everyone."]), correctAnswer: "It ensures core content and functionality work on the most constrained devices first.", explanation: "Layering enhancements on top of a solid mobile foundation leads to better UX.", order: 4 },
                        { question: "What does the 'viewport' meta tag with 'width=device-width' do?", options: JSON.stringify(["Makes the page look like an app.", "Tells the browser to set the width of the page to match the screen width of the device.", "Zooms in to 200% by default.", "Nothing, it is deprecated."]), correctAnswer: "Tells the browser to set the width of the page to match the screen width of the device.", explanation: "Vital for preventing desktop-sized rendering on small mobile screens.", order: 5 }
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
                        { question: "What is the primary use case for Intersection Observer?", options: JSON.stringify(["Calculating math.", "Detecting when an element enters or leaves the browser viewport.", "Styling text.", "Connecting to a database."]), correctAnswer: "Detecting when an element enters or leaves the browser viewport.", explanation: "It's essential for performant lazy-loading and scroll-based triggers.", order: 1 },
                        { question: "What is a major advantage of 'IndexedDB' over 'localStorage'?", options: JSON.stringify(["It is easier to use.", "It allows for storing much larger amounts of structured data and is asynchronous.", "It is faster for small strings.", "It works in IE6."]), correctAnswer: "It allows for storing much larger amounts of structured data and is asynchronous.", explanation: "IndexedDB is a full-featured transactional database in the browser.", order: 2 },
                        { question: "Which API would you use to listen for changes to an element's dimensions?", options: JSON.stringify(["Resize Observer", "Mutation Observer", "Intersection Observer", "Window.onresize"]), correctAnswer: "Resize Observer", explanation: "Resize Observer is more efficient than listening to window resize events for individual components.", order: 3 },
                        { question: "What is the 'Mutation Observer' used for?", options: JSON.stringify(["Watching for changes in the DOM tree", "Watching for changes in CSS", "Detecting network failures", "Monitoring keyboard input"]), correctAnswer: "Watching for changes in the DOM tree", explanation: "Useful for third-party scripts or complex dynamic UIs.", order: 4 },
                        { question: "What is the difference between 'localStorage' and 'sessionStorage'?", options: JSON.stringify(["One is faster.", "sessionStorage is cleared when the page session ends (tab closed); localStorage persists.", "localStorage is only for numbers.", "sessionStorage is public; localStorage is private."]), correctAnswer: "sessionStorage is cleared when the page session ends (tab closed); localStorage persists.", explanation: "Storage duration is the key difference.", order: 5 }
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
                testCases: [
                    { name: "File Structure", verify: "Check for index.html and style.css in root" },
                    { name: "Semantic Architecture", verify: "Detect 5+ HTML5 landmark tags (main, nav, aside, footer, section)" },
                    { name: "A11y Validation", verify: "Verify presence of 'alt' attributes on all images" },
                    { name: "Performance Infrastructure", verify: "Check for CSS Variable usage for design tokens" }
                ],
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
                        { question: "When should you use 'useMemo'?", options: JSON.stringify(["Every time.", "Only for expensive calculations to prevent re-computation on every render.", "To memorize text.", "For API calls."]), correctAnswer: "Only for expensive calculations to prevent re-computation on every render.", explanation: "Overuse can actually hurt performance.", order: 1 },
                        { question: "What is the primary difference between 'useMemo' and 'useCallback'?", options: JSON.stringify(["useMemo is for objects; useCallback is for strings", "useMemo returns a memoized value; useCallback returns a memoized function", "useCallback is faster", "There is no difference"]), correctAnswer: "useMemo returns a memoized value; useCallback returns a memoized function", explanation: "UseCallback is essentially shorthand for useMemo(() => fn, [deps]).", order: 2 },
                        { question: "What does 'React.memo' do?", options: JSON.stringify(["It saves the component to the database", "Prevents a component from re-rendering if its props haven't changed", "It speeds up the entire application", "It is used for state management"]), correctAnswer: "Prevents a component from re-rendering if its props haven't changed", explanation: "It performs a shallow comparison of props.", order: 3 },
                        { question: "When using dynamic imports (React.lazy), what component should you wrap the lazy component in?", options: JSON.stringify(["<ErrorBoundary>", "<Suspense>", "<Loading>", "<div>"]), correctAnswer: "<Suspense>", explanation: "Suspense allows you to provide a fallback while the chunk is loading.", order: 4 },
                        { question: "In React's reconciliation process, why is the 'key' attribute important for lists?", options: JSON.stringify(["To style the elements", "To help React identify which items have changed, been added, or removed", "To set the ID in the database", "To sort the items alphabetically"]), correctAnswer: "To help React identify which items have changed, been added, or removed", explanation: "Keys should be stable, predictable, and unique among siblings.", order: 5 }
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
                        { question: "What is the 'Partial<T>' utility type?", options: JSON.stringify(["Removes all types.", "Constructs a type with all properties of T set to optional.", "Makes all properties required.", "Splits a type in half."]), correctAnswer: "Constructs a type with all properties of T set to optional.", explanation: "Useful for update objects.", order: 1 },
                        { question: "Which TypeScript feature allows a type to be defined based on a parameter type, enabling reusable components?", options: JSON.stringify(["Interfaces", "Generics", "Enums", "Any"]), correctAnswer: "Generics", explanation: "Generics provide a way to create reusable components that work over a variety of types.", order: 2 },
                        { question: "What is the difference between an 'interface' and a 'type' alias in TypeScript?", options: JSON.stringify(["No difference", "Interfaces can be extended/merged; types are more flexible for unions/intersections", "Types are only for numbers", "Interfaces are deprecated"]), correctAnswer: "Interfaces can be extended/merged; types are more flexible for unions/intersections", explanation: "Both are powerful, but they have subtle differences in extension and merging.", order: 3 },
                        { question: "What does the 'readonly' modifier do in TypeScript?", options: JSON.stringify(["Makes a property visible only on screen", "Prevents a property from being reassigned after initialization", "Speeds up the build", "Deletes the property"]), correctAnswer: "Prevents a property from being reassigned after initialization", explanation: "It ensures immutability at the type level.", order: 4 },
                        { question: "What is 'Type Narrowing'?", options: JSON.stringify(["Reducing the font size", "The process of refining a more general type to a more specific type using runtime checks", "Removing types from a file", "A bug in the compiler"]), correctAnswer: "The process of refining a more general type to a more specific type using runtime checks", explanation: "Narrowing happens via type guards (e.g., typeof, instanceof).", order: 5 }
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
                        { question: "What is an 'Action' in Redux?", options: JSON.stringify(["A function call.", "A plain object describing what happened.", "A database entry.", "A CSS class."]), correctAnswer: "A plain object describing what happened.", explanation: "Actions are the only way to trigger state changes in Redux.", order: 1 },
                        { question: "What is a 'Reducer' in the context of state management?", options: JSON.stringify(["A helper for CSS", "A pure function that takes the current state and an action, and returns the next state", "A tool for compressing data", "A type of middleware"]), correctAnswer: "A pure function that takes the current state and an action, and returns the next state", explanation: "Reducers must be pure and never mutate the state directly.", order: 2 },
                        { question: "In Zustand, how do you prevent unnecessary re-renders when accessing the store?", options: JSON.stringify(["You can't", "By using a selector function to pick only the state you need", "By putting everything in a single component", "By using Redux instead"]), correctAnswer: "By using a selector function to pick only the state you need", explanation: "Selectors ensure your component only re-renders when the specific selected state changes.", order: 3 },
                        { question: "What is 'Derived State'?", options: JSON.stringify(["State that is stored in the database", "State that is calculated from other pieces of state", "The initial state of an app", "State used only for CSS"]), correctAnswer: "State that is calculated from other pieces of state", explanation: "Calculating derived state on the fly (or memoizing it) prevents sync issues.", order: 4 },
                        { question: "What is 'Prop Drilling'?", options: JSON.stringify(["A way to build tables", "The process of passing data through multiple levels of components that don't need it", "A hardware maintenance technique", "A type of API"]), correctAnswer: "The process of passing data through multiple levels of components that don't need it", explanation: "State management libraries or Context API help solve prop drilling.", order: 5 }
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
                        { question: "Can a Server Component import a Client Component?", options: JSON.stringify(["Yes.", "No.", "Only if it is a list.", "Only on mobile."]), correctAnswer: "Yes.", explanation: "Server components can render client components, but not vice-versa directly.", order: 1 },
                        { question: "What is a primary benefit of React Server Components (RSC)?", options: JSON.stringify(["They make CSS faster", "They reduce the bundle size sent to the client as they stay on the server", "They allow you to use 'window' on the server", "They replace the database"]), correctAnswer: "They reduce the bundle size sent to the client as they stay on the server", explanation: "Only the rendered result (and client-side parts) are sent to the browser.", order: 2 },
                        { question: "Where do Server Components execute?", options: JSON.stringify(["In the browser", "On the server (during build or request time)", "In a Web Worker", "On the user's GPU"]), correctAnswer: "On the server (during build or request time)", explanation: "Server components run in a server environment, allowing direct DB access.", order: 3 },
                        { question: "What directive is used to mark a file as a 'Client Component'?", options: JSON.stringify(["'use server'", "'use client'", "'import client'", "'client side only'"]), correctAnswer: "'use client'", explanation: "The 'use client' directive is the boundary between server and client code.", order: 4 },
                        { question: "Can you use hooks like 'useState' or 'useEffect' in a Server Component?", options: JSON.stringify(["Yes", "No", "Only 'useState'", "Only 'useEffect'"]), correctAnswer: "No", explanation: "Hooks rely on client-side state and life-cycles, which don't exist in Server Components.", order: 5 }
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
                    description: "Build flexible components. Render Props, Compound Components, HOCs, and Controlled vs Uncontrolled components.",
                    resources: [
                        { title: "React Patterns", type: "DOCUMENTATION", url: "https://reactpatterns.com/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Compound Component' pattern?", options: JSON.stringify(["Using many components in one file", "A pattern where multiple components work together by sharing state implicitly (e.g., Select and Option)", "A component that uses Redux", "A component that is very large"]), correctAnswer: "A pattern where multiple components work together by sharing state implicitly (e.g., Select and Option)", explanation: "Compound components provide a clean API for complex components.", order: 1 },
                        { question: "Which pattern uses a function as a prop to let the parent decide how to render a part of the component?", options: JSON.stringify(["HOC (Higher Order Component)", "Render Props", "Hooks", "Context"]), correctAnswer: "Render Props", explanation: "Render props are highly flexible for sharing logic.", order: 2 },
                        { question: "What is a 'Higher Order Component' (HOC)?", options: JSON.stringify(["A component that is at the top of the tree", "A function that takes a component and returns a new component with enhanced functionality", "A component that uses many hooks", "A class-based component"]), correctAnswer: "A function that takes a component and returns a new component with enhanced functionality", explanation: "HOCs are a common way to reuse component logic.", order: 3 },
                        { question: "What is the difference between a 'Controlled' and 'Uncontrolled' input?", options: JSON.stringify(["Controlled uses state for value; Uncontrolled uses DOM refs", "Controlled is faster", "Uncontrolled is better for SEO", "There is no difference"]), correctAnswer: "Controlled uses state for value; Uncontrolled uses DOM refs", explanation: "Controlled components are generally preferred in React for form handling.", order: 4 },
                        { question: "In the 'Slot' pattern, what is the primary goal?", options: JSON.stringify(["To store data", "To allow users to pass custom components or elements into predefined areas of a component", "To increase performance", "To use more CSS"]), correctAnswer: "To allow users to pass custom components or elements into predefined areas of a component", explanation: "Slots (or composition) help in making components highly reusable without long prop lists.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Ultimate UI Component",
                        description: "Design a generic 'Data Table' component that supports sorting, filtering, and custom row rendering via compound components and render props.",
                        requirements: JSON.stringify(["Use Compound Components for Header/Body/Footer.", "Provide a Render Prop for custom cells.", "Maintain internal sorting state."]),
                        order: 5
                    }
                },
                {
                    id: "fe-l2-skill-adv-testing",
                    title: "Advanced Testing Strategies",
                    description: "Go beyond unit tests. Master Integration Testing with RTL, E2E with Playwright, and Mocking complex APIs.",
                    resources: [
                        { title: "Testing Library Recipes", type: "DOCUMENTATION", url: "https://testing-library.com/docs/recipes/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What should you prioritize testing according to the 'Testing Library' philosophy?", options: JSON.stringify(["Implementation details", "User behavior and interactions", "Function internal variables", "CSS selector names"]), correctAnswer: "User behavior and interactions", explanation: "The more your tests resemble the way your software is used, the more confidence they can give you.", order: 1 },
                        { question: "In 'React Testing Library', what is the helper function used to wait for an element to appear?", options: JSON.stringify(["wait()", "waitFor()", "expect()", "queryByText()"]), correctAnswer: "waitFor()", explanation: "waitFor allows you to handle asynchronous changes in the UI.", order: 2 },
                        { question: "What is 'Mocking' in the context of testing?", options: JSON.stringify(["Laughing at bad code", "Replacing a real dependency (like an API call) with a controlled fake version", "Writing code very fast", "A type of performance test"]), correctAnswer: "Replacing a real dependency (like an API call) with a controlled fake version", explanation: "Mocking allows you to isolate the unit under test.", order: 3 },
                        { question: "Which query type in RTL should you use if you expect an element to NOT be in the document?", options: JSON.stringify(["getBy...", "getAllBy...", "queryBy...", "findBy..."]), correctAnswer: "queryBy...", explanation: "queryBy returns null if no match is found, whereas getBy throws an error.", order: 4 },
                        { question: "What is an E2E (End-to-End) test?", options: JSON.stringify(["Testing a single function", "Testing the entire application flow from the user's perspective, including backend/DB", "Testing the end of a file", "A test that never finishes"]), correctAnswer: "Testing the entire application flow from the user's perspective, including backend/DB", explanation: "E2E tests provide the highest level of confidence.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Bulletproof Checkout",
                        description: "Write a comprehensive test suite for a multi-step checkout form, including API mocks and validation checks.",
                        requirements: JSON.stringify(["Achieve 90% branch coverage.", "Mock global fetch calls.", "Implement a Playwright E2E flow."]),
                        order: 6
                    }
                },
                {
                    id: "fe-l2-skill-build",
                    title: "Build Systems & Tooling",
                    description: "Understand Vite, Webpack, and Turborepo. Learn how to optimize your build for production.",
                    resources: [
                        { title: "Vite Guide: Why Vite?", type: "DOCUMENTATION", url: "https://vitejs.dev/guide/why.html", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Why is Vite faster than Webpack during development?", options: JSON.stringify(["It uses a better logo.", "It leverages Native ES Modules in the browser to avoid bundling everything upfront.", "It deletes unused files.", "It runs only on high-end CPUs."]), correctAnswer: "It leverages Native ES Modules in the browser to avoid bundling everything upfront.", explanation: "Native ESM allows Vite to serve code instantly without a full bundle step.", order: 1 },
                        { question: "What is 'HMR'?", options: JSON.stringify(["Hot Module Replacement.", "High Memory Requirement.", "Header Meta Registry.", "A new CSS property."]), correctAnswer: "Hot Module Replacement.", explanation: "HMR allows updating modules in a running application without a full reload.", order: 2 },
                        { question: "What is 'Polyfilling'?", options: JSON.stringify(["Filling a pool.", "Providing modern functionality on older browsers that do not natively support it.", "A type of code compression.", "A security feature."]), correctAnswer: "Providing modern functionality on older browsers that do not natively support it.", explanation: "Polyfills bridge the gap for legacy environments.", order: 3 },
                        { question: "What is the primary role of a 'Minifier' in a build pipeline?", options: JSON.stringify(["To make the screen smaller", "To reduce the file size of JS/CSS by removing whitespace and renaming variables", "To find bugs", "To add comments"]), correctAnswer: "To reduce the file size of JS/CSS by removing whitespace and renaming variables", explanation: "Minification reduces the download time for the end user.", order: 4 },
                        { question: "In a monorepo tool like Turborepo, what is 'Remote Caching'?", options: JSON.stringify(["Caching images in the cloud", "Sharing build artifacts across different machines/developers to avoid redundant work", "A way to speed up the internet", "A type of database"]), correctAnswer: "Sharing build artifacts across different machines/developers to avoid redundant work", explanation: "Remote caching significantly speeds up CI/CD pipelines.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Custom Build Pipeline",
                        description: "Configure a custom Vite plugin that automatically generates a 'Sitemap' based on your React routes during the build process.",
                        requirements: JSON.stringify(["Hook into the buildEnd lifecycle.", "Parse dynamic routes.", "Output a valid sitemap.xml."]),
                        order: 7
                    }
                },
                {
                    id: "fe-l2-skill-pwa",
                    title: "Progressive Web Apps (PWA)",
                    description: "Learn Service Workers, manifest files, and offline-first strategies.",
                    resources: [
                        { title: "MDN: Service Worker API", type: "DOCUMENTATION", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Service Worker'?", options: JSON.stringify(["A helper for the UI thread.", "A script that runs in the background, separate from the web page, enabling features like offline support and push notifications.", "A type of API.", "A person who fixes servers."]), correctAnswer: "A script that runs in the background, separate from the web page, enabling features like offline support and push notifications.", explanation: "Service Workers act as a proxy between the browser and the network.", order: 1 },
                        { question: "Where is the Service Worker installed?", options: JSON.stringify(["In the browser but outside the context of a single page", "On the server", "On the user's hard drive", "In a meta tag"]), correctAnswer: "In the browser but outside the context of a single page", explanation: "This allows it to persist even when the tab is closed.", order: 2 },
                        { question: "What is the purpose of the 'webmanifest' file?", options: JSON.stringify(["To style the app", "To provide metadata about the PWA (name, icons, start URL) so it can be installed on a device", "To store user passwords", "To speed up JavaScript"]), correctAnswer: "To provide metadata about the PWA (name, icons, start URL) so it can be installed on a device", explanation: "The manifest makes the web app feel 'native'.", order: 3 },
                        { question: "What is the 'Stale-While-Revalidate' caching strategy?", options: JSON.stringify(["Never use cache", "Return cached content immediately while fetching an update in the background", "Wait for the network before showing anything", "Deleting the cache every hour"]), correctAnswer: "Return cached content immediately while fetching an update in the background", explanation: "This strategy balances speed and freshness.", order: 4 },
                        { question: "Can a Service Worker access the DOM directly?", options: JSON.stringify(["Yes", "No", "Only if it is a list", "Only on mobile"]), correctAnswer: "No", explanation: "Service Workers communicate with the page via the 'postMessage' API and cannot touch the DOM.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Offline-First Memo",
                        description: "Create a note-taking app that works entirely offline, using Service Workers for assets and IndexedDB for data persistence.",
                        requirements: JSON.stringify(["Handle 'Offline' status in UI.", "Sync data when connection is restored.", "Achieve a perfect PWA score in Lighthouse."]),
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
                    description: "Unit, Integration, and E2E testing with Vitest and Playwright. Master the art of writing resilient tests that don't break with every UI change.",
                    resources: [
                        { title: "Testing Library Docs", type: "DOCUMENTATION", url: "https://testing-library.com/docs/react-testing-library/intro/", duration: 50, order: 1 },
                        { title: "Kent C. Dodds: Testing Implementation Details", type: "ARTICLE", url: "https://kentcdodds.com/blog/testing-implementation-details", duration: 25, order: 2 }
                    ],
                    questions: [
                        { question: "What is the philosophy of React Testing Library?", options: JSON.stringify(["Test implementation details.", "test the software the way the user uses it.", "Test only Redux.", "Snapshot everything."]), correctAnswer: "test the software the way the user uses it.", explanation: "Avoid testing state/props directly; test interactions.", order: 1 },
                        { question: "What is an 'Integration Test' in the context of a frontend app?", options: JSON.stringify(["Testing a single function in isolation", "Testing how multiple components or systems work together to achieve a user goal", "Checking the color of a button", "A test that runs only on the server"]), correctAnswer: "Testing how multiple components or systems work together to achieve a user goal", explanation: "Integration tests verify the collaboration between units.", order: 2 },
                        { question: "Why is 'findBy' preferred over 'getBy' for elements that appear asynchronously?", options: JSON.stringify(["It's faster", "Matches are based on CSS selectors only", "It returns a promise and retries until the element appears or timeouts", "It doesn't require an await"]), correctAnswer: "It returns a promise and retries until the element appears or timeouts", explanation: "findBy is built for asynchronous DOM changes.", order: 3 },
                        { question: "In E2E testing, what is 'Flakiness'?", options: JSON.stringify(["When a test passes and fails inconsistently without changes to the code", "A type of slow test", "A test that is written in JavaScript", "When the CSS doesn't load"]), correctAnswer: "When a test passes and fails inconsistently without changes to the code", explanation: "Flakiness is often caused by race conditions or network dependency.", order: 4 },
                        { question: "What is 'Mocking' in a test suite?", options: JSON.stringify(["Deleting the code", "Replacing a real dependency (like an API call) with a controlled version for testing", "Making fun of the developer", "A faster way to run tests"]), correctAnswer: "Replacing a real dependency (like an API call) with a controlled version for testing", explanation: "Mocking isolating the unit under test from external side effects.", order: 5 }
                    ],
                    miniProject: {
                        title: "Test-Driven Component System",
                        description: "Build a complex Data Table component using TDD (Test Driven Development).",
                        requirements: JSON.stringify(["Write tests before code.", "Achieve 100% branch coverage.", "Implement sorting and filtering tests."]),
                        order: 1
                    }
                },
                {
                    id: "fe-l3-skill-ds",
                    title: "Expert Design Systems & Tokenization",
                    description: "Build a multi-brand UI system. Master Design Tokens, Style Dictionary, and Headless UI architecture.",
                    resources: [
                        { title: "Design Tokens W3C Community Group", type: "DOCUMENTATION", url: "https://www.w3.org/community/design-tokens/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary benefit of 'Design Tokens'?", options: JSON.stringify(["They make the UI look better", "They create a single source of truth for design values (colors, spacing) that can be synced across platforms (Web, iOS, Android)", "They replace CSS", "They are for icons only"]), correctAnswer: "They create a single source of truth for design values (colors, spacing) that can be synced across platforms (Web, iOS, Android)", explanation: "Design tokens enable platform-agnostic design systems.", order: 1 },
                        { question: "What does 'Style Dictionary' do?", options: JSON.stringify(["It's a dictionary for CSS terms", "An build system that transforms design tokens into platform-specific files (CSS, JSON, XML)", "A tool for fixing typos in code", "A CSS framework"]), correctAnswer: "An build system that transforms design tokens into platform-specific files (CSS, JSON, XML)", explanation: "Style Dictionary automates the distribution of design tokens.", order: 2 },
                        { question: "What is a 'Headless UI' component?", options: JSON.stringify(["A component with no logic", "A component that provides logic and state but has no default styles, leaving the appearance to the developer", "A component that doesn't render anything", "A component for the header section"]), correctAnswer: "A component that provides logic and state but has no default styles, leaving the appearance to the developer", explanation: "Headless UI (like Reach UI or Radix) allows for maximum styling flexibility with built-in accessibility.", order: 3 },
                        { question: "What is the 'Semantic' level of a design token?", options: JSON.stringify(["The raw hex value", "A token that describes the *intent* or *context* (e.g., 'action-color-primary') rather than its value", "The font-family name", "The pixel size"]), correctAnswer: "A token that describes the *intent* or *context* (e.g., 'action-color-primary') rather than its value", explanation: "Semantic tokens allow you to change the underlying theme without changing the code usage.", order: 4 },
                        { question: "In a Design System, what is 'Visual Regression Testing'?", options: JSON.stringify(["Testing for functional bugs", "Automatically comparing screenshots of components to detect unexpected visual changes", "Testing for color blindness", "A way to speed up rendering"]), correctAnswer: "Automatically comparing screenshots of components to detect unexpected visual changes", explanation: "It ensures a consistent visual interface across updates.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Tokenized Engine",
                        description: "Build a theme switcher that consumes JSON tokens and generates a dynamic CSS variable system for a multi-tenant application.",
                        requirements: JSON.stringify(["Implement Dark/Light/High-Contrast.", "Automatic CSS variable generation.", "Support for fluid spacing tokens."]),
                        order: 1
                    }
                },
                {
                    id: "fe-l3-skill-micro",
                    title: "Micro-frontends at Scale",
                    description: "Learn to split a monolith. Master Module Federation, iframe isolation, and shared dependency management.",
                    resources: [
                        { title: "Webpack Module Federation", type: "DOCUMENTATION", url: "https://webpack.js.org/concepts/module-federation/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Module Federation'?", options: JSON.stringify(["A new government for frontend", "A Webpack 5 feature allowing multiple builds to share code and dependencies at runtime", "A way to combine CSS files", "A type of database"]), correctAnswer: "A Webpack 5 feature allowing multiple builds to share code and dependencies at runtime", explanation: "Module federation is the gold standard for modern micro-frontends.", order: 1 },
                        { question: "What is a 'Host' in a Module Federation setup?", options: JSON.stringify(["The server running the app", "The primary application that consumes remote modules", "The user's computer", "A type of API"]), correctAnswer: "The primary application that consumes remote modules", explanation: "The Host coordinates the loading of Remote modules.", order: 2 },
                        { question: "What is the 'Shell' pattern in Micro-frontends?", options: JSON.stringify(["A command-line tool", "An orchestrator application that provides the outer frame (navigation, auth) for multiple sub-apps", "A type of CSS reset", "A security layer"]), correctAnswer: "An orchestrator application that provides the outer frame (navigation, auth) for multiple sub-apps", explanation: "The Shell (or Host) manages the shared context for micro-apps.", order: 3 },
                        { question: "How can you prevent CSS collisions between different micro-apps?", options: JSON.stringify(["Use global CSS only", "Use Shadow DOM or CSS-in-JS with unique prefixes", "Don't use CSS", "Use only IDs"]), correctAnswer: "Use Shadow DOM or CSS-in-JS with unique prefixes", explanation: "Isolation is a major challenge in micro-frontends.", order: 4 },
                        { question: "What is 'Runtime Integration' in micro-frontends?", options: JSON.stringify(["Combining code during build time", "Loading and integrating sub-apps in the user's browser while the app is running", "A way to speed up the CPU", "A type of network protocol"]), correctAnswer: "Loading and integrating sub-apps in the user's browser while the app is running", explanation: "Runtime integration allows independent deployments without rebuilds.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Federated Portfolio",
                        description: "Build a portfolio shell that dynamically loads different projects from separate repositories using Module Federation.",
                        requirements: JSON.stringify(["Implement a shared Navbar.", "Handle loading failures gracefully.", "Share React/ReactDOM dependencies."]),
                        order: 2
                    }
                },
                {
                    id: "fe-l3-skill-webgl",
                    title: "High Performance Web Graphics",
                    description: "Master Three.js and the GPU. Build immersive 3D experiences and custom shaders to wow your users.",
                    resources: [
                        { title: "Three.js Journey", type: "COURSE_OVERVIEW", url: "https://threejs-journey.com/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Shader' in WebGL?", options: JSON.stringify(["A tool for making things dark", "A program that runs on the GPU to calculate light and color for pixels", "A type of 3D model", "An image format"]), correctAnswer: "A program that runs on the GPU to calculate light and color for pixels", explanation: "Shaders (GLSL) are the core of high-performance graphics.", order: 1 },
                        { question: "What language are WebGL shaders written in?", options: JSON.stringify(["JavaScript", "Python", "GLSL (OpenGL Shading Language)", "C#"]), correctAnswer: "GLSL (OpenGL Shading Language)", explanation: "GLSL is a C-like language specialized for parallel vector operations.", order: 2 },
                        { question: "In Three.js, what are the three basic elements needed to see anything?", options: JSON.stringify(["Scene, Camera, Renderer", "Model, Light, Texture", "Div, Canvas, Script", "HTML, CSS, JS"]), correctAnswer: "Scene, Camera, Renderer", explanation: "These form the minimum foundation for a Three.js application.", order: 3 },
                        { question: "What is 'Raycasting' typically used for in 3D web apps?", options: JSON.stringify(["Changing background colors", "Detecting mouse clicks or intersections with 3D objects", "Loading images faster", "Calculating shadows only"]), correctAnswer: "Detecting mouse clicks or intersections with 3D objects", explanation: "Raycasting is essential for interactivity in 3D scenes.", order: 4 },
                        { question: "What is the purpose of the 'RequestAnimationFrame' loop?", options: JSON.stringify(["To pause the app", "To run animations at a smooth, browser-synced frame rate (usually 60fps)", "To refresh the page", "To download files in the background"]), correctAnswer: "To run animations at a smooth, browser-synced frame rate (usually 60fps)", explanation: "It's much more efficient than setInterval for animations.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Interactive 3D Showcase",
                        description: "Create a 3D product landing page where users can rotate and change colors of a 3D model in real-time.",
                        requirements: JSON.stringify(["Implement custom GLSL post-processing.", "Optimize for mobile GPUs.", "Use physically-based rendering (PBR)."]),
                        order: 3
                    }
                },
                {
                    id: "fe-l3-skill-security-adv",
                    title: "Advanced Web Security & Cryptography",
                    description: "Go beyond XSS. Master JWT security, OAuth flows, and browser-side cryptography with the Web Crypto API.",
                    resources: [
                        { title: "IETF: JSON Web Token Best Practices", type: "DOCUMENTATION", url: "https://datatracker.ietf.org/doc/html/rfc8725", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Side-Channel Attack'?", options: JSON.stringify(["An attack from the side of the screen", "An attack based on information gained from the implementation (e.g., timing, power usage) rather than the algorithm itself", "A type of phishing", "Stealing a user's mouse"]), correctAnswer: "An attack based on information gained from the implementation (e.g., timing, power usage) rather than the algorithm itself", explanation: "Side-channels are often overlooked but highly dangerous.", order: 1 },
                        { question: "Why should you never store sensitive tokens in LocalStorage?", options: JSON.stringify(["It's too slow", "It is accessible by any script running on the page, making it vulnerable to XSS", "It's limited to 5MB", "It expires after 1 second"]), correctAnswer: "It is accessible by any script running on the page, making it vulnerable to XSS", explanation: "Use HttpOnly, Secure, SameSite=Strict cookies for sensitive tokens.", order: 2 },
                        { question: "What does the 'Subresource Integrity' (SRI) attribute do?", options: JSON.stringify(["Speeds up the site", "Ensures that a resource (like a script) fetched from a CDN hasn't been tampered with by verifying its hash", "Styles the app", "Connects to a database"]), correctAnswer: "Ensures that a resource (like a script) fetched from a CDN hasn't been tampered with by verifying its hash", explanation: "SRI prevents supply-chain attacks via compromised CDNs.", order: 3 },
                        { question: "What is the 'PKCE' (Proof Key for Code Exchange) extension in OAuth used for?", options: JSON.stringify(["To encrypt the password", "To prevent authorization code injection attacks, especially on public clients like SPAs", "To make the login faster", "To store user profile pictures"]), correctAnswer: "To prevent authorization code injection attacks, especially on public clients like SPAs", explanation: "PKCE is mandatory for modern frontend auth flows.", order: 4 },
                        { question: "What is 'CSRF'?", options: JSON.stringify(["Cross-Site Request Forgery", "Critical Site Response Failure", "Complex System Root Filter", "A new JS framework"]), correctAnswer: "Cross-Site Request Forgery", explanation: "Cross-Site Request Forgery tricks a logged-in user into performing unwanted actions on a different site.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Secure Messenger Shell",
                        description: "Build a messaging interface that uses the Web Crypto API to implement end-to-end encryption in the browser.",
                        requirements: JSON.stringify(["Use AES-GCM for encryption.", "Implement public/private key exchange.", "Zero plain-text storage."]),
                        order: 5
                    }
                },
                {
                    id: "fe-l3-skill-arch",
                    title: "Expert Frontend Systems Design",
                    description: "Design scalable frontend systems. Master State machines, Clean Architecture, and Module Federation.",
                    resources: [
                        { title: "Frontend Architecture: A Modern Approach", type: "ARTICLE", url: "https://www.smashingmagazine.com/2019/12/frontend-architecture-modern-approach/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Clean Architecture' approach in Frontend?", options: JSON.stringify(["Using only CSS.", "Organizing code into layers with clear boundaries, separating business logic from UI and external dependencies.", "Deleting unused components.", "Writing all code in one file."]), correctAnswer: "Organizing code into layers with clear boundaries, separating business logic from UI and external dependencies.", explanation: "Layered architecture makes the app easier to test and maintain.", order: 1 },
                        { question: "What is a 'State Machine' and why use it for complex UI components?", options: JSON.stringify(["A helper for CSS", "A mathematical model of computation that defines explicit states and transitions, preventing impossible UI states", "A way to speed up the CPU", "A type of database"]), correctAnswer: "A mathematical model of computation that defines explicit states and transitions, preventing impossible UI states", explanation: "State machines (like XState) bring predictability to complex flows.", order: 2 },
                        { question: "What is 'Dependency Inversion' in the context of frontend?", options: JSON.stringify(["importing files in reverse", "Depending on abstractions (interfaces) rather than concrete implementations", "A type of CSS animation", "Deleting node_modules"]), correctAnswer: "Depending on abstractions (interfaces) rather than concrete implementations", explanation: "This allows you to swap out implementations (e.g., API services) without breaking the UI.", order: 3 },
                        { question: "What is the primary goal of the 'Micro-Frontend' architecture?", options: JSON.stringify(["To make the app smaller", "To allow multiple teams to work independently on different parts of a large application, deploying them separately", "To use micro-services only", "To reduce the number of images"]), correctAnswer: "To allow multiple teams to work independently on different parts of a large application, deploying them separately", explanation: "Scale is the primary driver for micro-frontends.", order: 4 },
                        { question: "In a large React app, what is the benefit of 'Feature-Sliced Design' (FSD)?", options: JSON.stringify(["It makes the build faster", "A standardized architectural pattern that organizes code by business value and functional layers (Processes, Pages, Features, Entities, Shared)", "It replaces Redux", "It is used for styling only"]), correctAnswer: "A standardized architectural pattern that organizes code by business value and functional layers (Processes, Pages, Features, Entities, Shared)", explanation: "FSD provides a clear mental model for where code should live.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Enterprise Shell",
                        description: "Architect a large-scale enterprise application using Feature-Sliced Design principles and XState for the authentication flow.",
                        requirements: JSON.stringify(["Implement a protected route system.", "Use Finite State Machines for login/logout.", "Maintain high degree of decoupling between layers."]),
                        order: 6
                    }
                },
                {
                    id: "fe-l3-skill-dx",
                    title: "Advanced Developer Experience (DX)",
                    description: "Build tools for other developers. Master AST transformations, custom ESLint rules, and Storybook orchestration.",
                    resources: [
                        { title: "AST Explorer", type: "TOOL", url: "https://astexplorer.net/", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Abstract Syntax Tree' (AST)?", options: JSON.stringify(["A tree in a park", "A tree-like representation of the structure of source code used by compilers and linters", "A way to organize CSS", "A type of 3D model"]), correctAnswer: "A tree-like representation of the structure of source code used by compilers and linters", explanation: "Linters (ESLint) and Transpilers (Babel) use ASTs to understand and manipulate code.", order: 1 },
                        { question: "What is the benefit of 'Codemods'?", options: JSON.stringify(["They change the background color", "Automated scripts that transform codebases at scale, useful for large-scale refactorings or library migrations", "They speed up the internet", "They compress images"]), correctAnswer: "Automated scripts that transform codebases at scale, useful for large-scale refactorings or library migrations", explanation: "Codemods (using jscodeshift) automate tedious manual migrations.", order: 2 },
                        { question: "What does 'Storybook' provide in a development workflow?", options: JSON.stringify(["A place to write stories", "A sandbox for developing UI components in isolation, enabling faster iteration and documentation", "A way to deploy apps", "A database"]), correctAnswer: "A sandbox for developing UI components in isolation, enabling faster iteration and documentation", explanation: "Storybook is essential for building robust component libraries.", order: 3 },
                        { question: "Why should you create custom ESLint rules for a large team?", options: JSON.stringify(["To annoy other developers", "To enforce project-specific conventions and prevent common internal anti-patterns that standard rules miss", "To make the build slower", "To change the font size"]), correctAnswer: "To enforce project-specific conventions and prevent common internal anti-patterns that standard rules miss", explanation: "Custom rules automate the 'code review' of project-specific standards.", order: 4 },
                        { question: "What is 'Snapshot Testing' in a component library?", options: JSON.stringify(["Taking a photo of the developer", "Capturing the rendered output of a component and comparing it over time to detect unexpected changes", "A type of performance test", "A way to save data"]), correctAnswer: "Capturing the rendered output of a component and comparing it over time to detect unexpected changes", explanation: "Snapshots catch unintended markup regressions.", order: 5 }
                    ],
                    miniProject: {
                        title: "The DX Transformer",
                        description: "Create a custom Babel plugin (or ESLint rule) that automatically marks components with a specific 'data-testid' based on their variable name.",
                        requirements: JSON.stringify(["Deep dive into AST nodes.", "Handle edge cases in naming.", "Include automated tests for the plugin."]),
                        order: 7
                    }
                },
                {
                    id: "fe-l3-skill-i18n",
                    title: "Global-Scale Internationalization",
                    description: "Go beyond simple translations. Master ICU MessageFormat, RTL layout direction, and pluralization at scale.",
                    resources: [
                        { title: "Format.js ICU MessageFormat Guide", type: "DOCUMENTATION", url: "https://formatjs.io/docs/intl-messageformat/", duration: 35, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between Internationalization (i18n) and Localization (l10n)?", options: JSON.stringify(["They are the same", "i18n is the design/engineering to support many languages; l10n is the actual adaptation for a specific locale", "i18n is for CSS; l10n is for JS", "i18n is only for numbers"]), correctAnswer: "i18n is the design/engineering to support many languages; l10n is the actual adaptation for a specific locale", explanation: "i18n enables the application to be localized.", order: 1 },
                        { question: "What does the 'dir=rtl' attribute do in HTML?", options: JSON.stringify(["Renames the page", "Flips the layout direction for languages like Arabic or Hebrew", "Draws a line", "Speeds up loading in the Middle East"]), correctAnswer: "Flips the layout direction for languages like Arabic or Hebrew", explanation: "RTL support is critical for global accessibility.", order: 2 },
                        { question: "What is 'ICU MessageFormat'?", options: JSON.stringify(["A type of hard drive", "A syntax for defining complex, plural-safe, and gender-aware translation strings", "A font format", "A type of CSS variable"]), correctAnswer: "A syntax for defining complex, plural-safe, and gender-aware translation strings", explanation: "ICU is the standard for advanced internationalization.", order: 3 },
                        { question: "What is 'Pseudo-localization' and why use it?", options: JSON.stringify(["Fake translations", "A testing method where strings are replaced with altered characters to test layout durability for longer/shorter languages before real translation", "A way to hide text", "A type of font"]), correctAnswer: "A testing method where strings are replaced with altered characters to test layout durability for longer/shorter languages before real translation", explanation: "Pseudo-loc catches UI issues (like overflows) early.", order: 4 },
                        { question: "What are 'CLDR' (Common Locale Data Repository) data used for?", options: JSON.stringify(["To store user names", "Standardized patterns for dates, currencies, and plural rules for every language on earth", "To track user location", "A type of image storage"]), correctAnswer: "Standardized patterns for dates, currencies, and plural rules for every language on earth", explanation: "CLDR provides the data that libraries like Intl.RelativeTimeFormat use.", order: 5 }
                    ],
                    miniProject: {
                        title: "The Global Storefront",
                        description: "Localize a complex e-commerce product page for Arabic (RTL), Japanese, and German locales.",
                        requirements: JSON.stringify(["Implement full RTL support.", "Use ICU MessageFormat for complex pluralization.", "Dynamic currency and date formatting."]),
                        order: 8
                    }
                },
                {
                    id: "fe-l3-skill-edge",
                    title: "Edge Computing & Serverless Functions",
                    description: "Deploy code closer to your users. Master Cloudflare Workers, Vercel Edge Functions, and Deno Deploy for ultra-low latency applications.",
                    resources: [
                        { title: "Vercel: Edge Middleware", type: "DOCUMENTATION", url: "https://vercel.com/docs/functions/edge-middleware", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Edge Function'?", options: JSON.stringify(["A function for drawing edges.", "A serverless function that runs at the CDN node nearest to the user.", "A CSS function.", "A browser plugin."]), correctAnswer: "A serverless function that runs at the CDN node nearest to the user.", explanation: "Edge functions reduce latency by running closer to the user.", order: 1 },
                        { question: "What is the main limitation of Edge Functions compared to standard Serverless Functions?", options: JSON.stringify(["They are more expensive", "They run on a restricted runtime (often V8 Isolates) with no access to Node.js APIs like 'fs'", "They don't support JavaScript", "They only work on mobile"]), correctAnswer: "They run on a restricted runtime (often V8 Isolates) with no access to Node.js APIs like 'fs'", explanation: "The restricted runtime allows for near-instant cold starts.", order: 2 },
                        { question: "What is 'Edge Middleware' primarily used for?", options: JSON.stringify(["Database queries", "Running logic (like Auth or A/B testing) before a request is served, allowing for modifications to headers or redirects", "Styling the page", "Storing images"]), correctAnswer: "Running logic (like Auth or A/B testing) before a request is served, allowing for modifications to headers or redirects", explanation: "Middleware intercepting requests at the edge is powerful for personalization.", order: 3 },
                        { question: "What is 'Stale-While-Revalidate' (SWR) in a CDN context?", options: JSON.stringify(["Always fetch fresh data", "Serve a cached version while fetching an update in the background for the next request", "Delete the cache", "A type of CSS transition"]), correctAnswer: "Serve a cached version while fetching an update in the background for the next request", explanation: "SWR provides the best of both world: speed and eventual consistency.", order: 4 },
                        { question: "Why is 'Cold Start' less of an issue on Edge platforms like Cloudflare Workers?", options: JSON.stringify(["Because they are always running", "They use V8 Isolates which start in milliseconds, vs full containers that take seconds", "They use better hardware", "They don't use JavaScript"]), correctAnswer: "They use V8 Isolates which start in milliseconds, vs full containers that take seconds", explanation: "Isolate-based architecture is the key to edge performance.", order: 5 }
                    ],
                    miniProject: {
                        title: "The A/B Edge Splitter",
                        description: "Implement a zero-latency A/B testing system that serves different homepage layouts using Edge Middleware.",
                        requirements: JSON.stringify(["No client-side flickering.", "Server-side cookie assignment.", "Performance tracking at the edge."]),
                        order: 9
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
                    description: "Edge computing, CDN caching strategies, and Core Web Vitals optimization. Master the infrastructure that powers the modern web.",
                    resources: [
                        { title: "Web Vitals", type: "DOCUMENTATION", url: "https://web.dev/vitals/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'LCP'?", options: JSON.stringify(["Low Content Paint.", "Largest Contentful Paint.", "Least Common Paint.", "Loading Content Priority."]), correctAnswer: "Largest Contentful Paint.", explanation: "It measures loading performance of the main content.", order: 1 },
                        { question: "What is 'FID' (First Input Delay)?", options: JSON.stringify(["The time it takes to download the first byte", "The time from when a user first interacts with a page to the time when the browser is actually able to begin processing event handlers", "The time to first paint", "The size of the HTML bundle"]), correctAnswer: "The time from when a user first interacts with a page to the time when the browser is actually able to begin processing event handlers", explanation: "FID measures responsiveness.", order: 2 },
                        { question: "What is 'CLS' (Cumulative Layout Shift)?", options: JSON.stringify(["The total number of colors on a page", "A measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page", "The speed of the scroll", "A type of database migration"]), correctAnswer: "A measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page", explanation: "CLS measures visual stability.", order: 3 },
                        { question: "How does 'Brotli' compression differ from 'Gzip'?", options: JSON.stringify(["It is only for images", "It generally provides better compression ratios than Gzip, especially for text-based assets like JS and CSS", "It is slower to decompress", "It is a type of encryption"]), correctAnswer: "It generally provides better compression ratios than Gzip, especially for text-based assets like JS and CSS", explanation: "Brotli is the modern standard for web asset compression.", order: 4 },
                        { question: "What is 'Critical CSS'?", options: JSON.stringify(["Extra large CSS files", "The minimum set of CSS required to render the above-the-fold content of a page, usually inlined in the HTML", "CSS that is required for accessibility", "Deprecated CSS"]), correctAnswer: "The minimum set of CSS required to render the above-the-fold content of a page, usually inlined in the HTML", explanation: "Critical CSS eliminates render-blocking for initial paint.", order: 5 }
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
                        { question: "What is a 'Distributed UI'?", options: JSON.stringify(["A UI in a cloud.", "An architecture where different parts of the UI are owned and deployed by different teams.", "A responsive layout.", "A server-side rendered page."]), correctAnswer: "An architecture where different parts of the UI are owned and deployed by different teams.", explanation: "It allows for organizational scaling and independent deployments.", order: 1 },
                        { question: "What is 'Eventual Consistency' in a frontend state management context?", options: JSON.stringify(["The state is always wrong", "A model where the UI updates immediately with a 'best guess' and synchronizes with the server in the background", "A type of error", "Deleting the cache"]), correctAnswer: "A model where the UI updates immediately with a 'best guess' and synchronizes with the server in the background", explanation: "Eventual consistency (Optimistic UI) improves perceived performance.", order: 2 },
                        { question: "What is the 'Backends-For-Frontends' (BFF) pattern?", options: JSON.stringify(["A backend that is also a frontend", "A design pattern where each frontend (Web, Mobile, etc.) has its own dedicated backend layer to optimize data for its specific needs", "A type of load balancer", "A way to write CSS in Node.js"]), correctAnswer: "A design pattern where each frontend (Web, Mobile, etc.) has its own dedicated backend layer to optimize data for its specific needs", explanation: "BFFs reduce over-fetching and simplify frontend logic.", order: 3 },
                        { question: "What is 'Server-Side Rendering' (SSR) vs 'Static Site Generation' (SSG)?", options: JSON.stringify(["No difference", "SSR generates HTML on every request; SSG generates HTML at build time", "SSG is only for blogs", "SSR is only for React"]), correctAnswer: "SSR generates HTML on every request; SSG generates HTML at build time", explanation: "The choice between SSR and SSG depends on data volatility.", order: 4 },
                        { question: "What is 'Isomorphic JavaScript'?", options: JSON.stringify(["JavaScript that only runs on the client", "JavaScript code that can run on both the client (browser) and the server (Node.js)", "A type of encrypted code", "A new JS framework"]), correctAnswer: "JavaScript code that can run on both the client (browser) and the server (Node.js)", explanation: "Isomorphism (or Universal JS) is the basis for modern web frameworks.", order: 5 }
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
                        { question: "What is 'Remote Caching' in a monorepo?", options: JSON.stringify(["A cloud backup.", "A system that shares build artifacts across machines to prevent redundant builds.", "A browser cache.", "A database."]), correctAnswer: "A system that shares build artifacts across machines to prevent redundant builds.", explanation: "Remote caching significantly speeds up CI/CD pipelines.", order: 1 },
                        { question: "What is the benefit of a Monorepo for a large organization?", options: JSON.stringify(["It makes the code smaller", "Single source of truth, simplified cross-project refactoring, and easier dependency management", "It's faster than Git", "It only works with React"]), correctAnswer: "Single source of truth, simplified cross-project refactoring, and easier dependency management", explanation: "Monorepos improve developer velocity and consistency.", order: 2 },
                        { question: "What does 'Task Orchestration' mean in a tool like Turborepo?", options: JSON.stringify(["Writing music", "Intelligently running tasks (build, test, lint) in the correct order based on the dependency graph", "Managing user logins", "A type of CSS animation"]), correctAnswer: "Intelligently running tasks (build, test, lint) in the correct order based on the dependency graph", explanation: "Orchestration ensures tasks are executed efficiently and correctly.", order: 3 },
                        { question: "What is 'Boundary Enforcement' in a monorepo?", options: JSON.stringify(["A firewall", "Restricting which apps can depend on which libraries to prevent circular dependencies and maintain clear architecture", "Locking the computer", "A type of testing"]), correctAnswer: "Restricting which apps can depend on which libraries to prevent circular dependencies and maintain clear architecture", explanation: "Boundaries (using tag-based rules) prevent 'dependency spaghetti'.", order: 4 },
                        { question: "What is a 'Ghost Dependency'?", options: JSON.stringify(["A dependency that doesn't exist", "A package that is used in code but not explicitly listed in package.json (often accessible via hoisting in node_modules)", "A type of security vulnerability", "A deleted file"]), correctAnswer: "A package that is used in code but not explicitly listed in package.json (often accessible via hoisting in node_modules)", explanation: "Ghost dependencies are dangerous as they can disappear without warning.", order: 5 }
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
                        { question: "What is an 'ADR'?", options: JSON.stringify(["An Advertising report.", "Architecture Decision Record - a document that captures why a decision was made.", "Automatic Deployment Route.", "A type of Bug report."]), correctAnswer: "Architecture Decision Record - a document that captures why a decision was made.", explanation: "ADRs provide critical historical context for architecture evolution.", order: 1 },
                        { question: "What is the primary goal of an 'RFC' (Request for Comments)?", options: JSON.stringify(["To approve a vacation", "To solicit feedback and build consensus on a proposed technical change before implementation", "To write a new law", "To report a bug"]), correctAnswer: "To solicit feedback and build consensus on a proposed technical change before implementation", explanation: "RFCs are essential for collaborative architectural design.", order: 2 },
                        { question: "What is 'Technical Debt' and how should it be managed?", options: JSON.stringify(["Money owed to a bank", "The implied cost of additional rework caused by choosing an easy solution now instead of a better approach that would take longer", "A type of software license", "Deleting old code"]), correctAnswer: "The implied cost of additional rework caused by choosing an easy solution now instead of a better approach that would take longer", explanation: "Debt should be tracked, prioritized, and paid down strategically.", order: 3 },
                        { question: "What is a 'Blameless Post-mortem'?", options: JSON.stringify(["A way to fire people", "An analysis of a failure that focuses on identifying systemic causes rather than individual mistakes", "A type of funeral", "A fast way to fix bugs"]), correctAnswer: "An analysis of a failure that focuses on identifying systemic causes rather than individual mistakes", explanation: "Blameless cultures encourage honesty and rapid learning from failure.", order: 4 },
                        { question: "Why is 'Mentorship' important for a Principal Engineer?", options: JSON.stringify(["To do less work", "To scale their impact by leveling up the engineers around them and ensuring long-term team health", "To learn new languages", "To write more code"]), correctAnswer: "To scale their impact by leveling up the engineers around them and ensuring long-term team health", explanation: "Technical leadership is as much about people as it is about code.", order: 5 }
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
                        { question: "When is WASM most appropriate?", options: JSON.stringify(["For simple forms.", "For heavy computational tasks like image processing or 3D physics.", "For styling text.", "For SEO."]), correctAnswer: "For heavy computational tasks like image processing or 3D physics.", explanation: "WASM provides near-native execution speed for critical paths.", order: 1 },
                        { question: "What is the 'WebAssembly Text Format' (WAT)?", options: JSON.stringify(["A way to write blogs", "A human-readable representation of the .wasm binary format", "A type of font", "A new CSS property"]), correctAnswer: "A human-readable representation of the .wasm binary format", explanation: "WAT allows developers to inspect and write Wasm more easily.", order: 2 },
                        { question: "What is a 'Custom React Renderer' used for?", options: JSON.stringify(["To make React faster", "To render React components to a non-DOM target, like a canvas, a terminal, or native mobile APIs", "To change the background color", "To use jQuery with React"]), correctAnswer: "To render React components to a non-DOM target, like a canvas, a terminal, or native mobile APIs", explanation: "Libraries like react-three-fiber or react-native use custom renderers.", order: 3 },
                        { question: "What is 'Memory Management' like in Wasm?", options: JSON.stringify(["It's automatic (GC)", "Linear, shared-buffer memory that the developer (or compiler) must manage manually", "It uses the browser's heap only", "It doesn't use memory"]), correctAnswer: "Linear, shared-buffer memory that the developer (or compiler) must manage manually", explanation: "Manual memory management is key to Wasm's predictable performance.", order: 4 },
                        { question: "What is the 'WASI' (WebAssembly System Interface)?", options: JSON.stringify(["A type of keyboard", "A standard for running Wasm outside the browser (e.g., in a server or CLI) with access to OS-like features", "A browser plugin", "A way to style Wasm"]), correctAnswer: "A standard for running Wasm outside the browser (e.g., in a server or CLI) with access to OS-like features", explanation: "WASI enables truly cross-platform, secure binary execution.", order: 5 }
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
                        { question: "What is 'Stage 3' in the TC39 process?", options: JSON.stringify(["Experimental.", "Candidate - specification is complete and reviewed.", "Finished.", "Idea."]), correctAnswer: "Candidate - specification is complete and reviewed.", explanation: "Stage 3 indicates the feature is ready for final testing and implementation.", order: 1 },
                        { question: "What is a 'Polyfill' vs a 'Ponyfill'?", options: JSON.stringify(["A polyfill is a toy", "A polyfill patches the global scope; a ponyfill provides the same functionality as a module without touching globals", "They are the same", "One is for CSS"]), correctAnswer: "A polyfill patches the global scope; a ponyfill provides the same functionality as a module without touching globals", explanation: "Ponyfills are often safer for library authors to avoid global conflicts.", order: 2 },
                        { question: "What is the 'WhatWG'?", options: JSON.stringify(["A group of hackers", "The Web Hypertext Application Technology Working Group - the organization that maintains the HTML and DOM standards", "A type of API", "A search engine"]), correctAnswer: "The Web Hypertext Application Technology Working Group - the organization that maintains the HTML and DOM standards", explanation: "WhatWG works alongside the W3C to evolve the web.", order: 3 },
                        { question: "What is the purpose of 'Feature Detection'?", options: JSON.stringify(["To find bugs", "Checking if a browser supports a particular API (e.g., 'if (window.Bluetooth)') before using it", "To detect the user's screen size", "To speed up the site"]), correctAnswer: "Checking if a browser supports a particular API (e.g., 'if (window.Bluetooth)') before using it", explanation: "Feature detection is superior to user-agent sniffing for cross-browser support.", order: 4 },
                        { question: "What is a 'Web Incubator Community Group' (WICG)?", options: JSON.stringify(["A place for chicken", "A group where new web platform features are discussed and incubated before becoming formal standards", "A cloud provider", "A type of browser plugin"]), correctAnswer: "A group where new web platform features are discussed and incubated before becoming formal standards", explanation: "WICG is the entry point for most new web APIs (like WebGPU).", order: 5 }
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

