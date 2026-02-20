export const uiDesignerContent = {
    levels: [
        {
            id: "ui-l1",
            title: "Junior UI Designer",
            skills: [
                {
                    id: "ui-l1-skill-typography",
                    title: "Typography & Layout",
                    description: "Learn how font choices and spacing impact readability and user experience.",
                    resources: [
                        { title: "Google Fonts: Typography Principles", type: "ARTICLE", url: "https://fonts.google.com/knowledge", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Leading' in typography?", options: JSON.stringify(["The space between letters.", "The space between lines of text.", "The size of the font.", "The weight of the font."]), correctAnswer: "The space between lines of text.", explanation: "Leading (line-height) is crucial for readability.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Magazine Grid",
                        description: "Design a landing page section in Figma focusing purely on typography and whitespace.",
                        requirements: JSON.stringify(["Establish a clear hierarchy.", "Use a baseline grid.", "Avoid using more than 2 font families."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Canvas - Pure Typographic Interface",
                description: "Design a professional landing page where typography and whitespace are the primary visual drivers. This project focuses on high-precision layout hierarchy, baseline grid discipline, and legibility-first design principles.",
                requirements: [
                    "Establish a 12-column grid system with a consistent 8px baseline rhythm.",
                    "Define a comprehensive typographic scale (Display, Heading, Body, Caption).",
                    "Design a landing page section utilizing at least 5 different font-pairing strategies.",
                    "Achieve perfect visual balance using only black, white, and one accent color.",
                    "Implement a complex 'Table of Contents' layout using sophisticated spacing.",
                    "Ensure all text elements meet WCAG AAA contrast ratio standards."
                ],
                guide: [
                    "Step 1: Set up your Figma grid system (12 columns + 8px baseline).",
                    "Step 2: Curate your typeface pairings and establish the global typographic scale.",
                    "Step 3: Design the hero section focusing on 'Display' typography and copy-pacing.",
                    "Step 4: Build the content body using strict vertical rhythm and paragraph spacing.",
                    "Step 5: Conduct a 'Squint Test' to audit visual hierarchy and focal points.",
                    "Step 6: Final audit: Export your design as a high-fidelity 'Typographic Style Guide'."
                ],
                hints: [
                    "Don't be afraid of 'Empty Space'; it is as much a tool as the text itself.",
                    "Line-length (Measure) should be between 45-75 characters for optimal readability.",
                    "Use 'Optical Kerning' for large display headings to ensure perfect character spacing."
                ],
                testCases: [{ name: "Grid Alignment", verify: "100% of elements snap to the defined baseline grid" }, { name: "Contrast Audit", verify: "All text-to-background ratios are > 7:1" }],
            }
        },
        {
            id: "ui-l2",
            title: "Intermediate UI Designer",
            skills: [
                {
                    id: "ui-l2-skill-systems",
                    title: "Design Systems & Components",
                    description: "Scale your design work. Build reusable component libraries and consistent style guides.",
                    resources: [
                        { title: "Atomic Design Methodology", type: "ARTICLE", url: "https://atomicdesign.bradfrost.com/chapter-2/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is an 'Atom' in Atomic Design?", options: JSON.stringify(["A page.", "A complex organism.", "A basic building block like a button or label.", "A color palette."]), correctAnswer: "A basic building block like a button or label.", explanation: "Atoms are the smallest functional units.", order: 1 }
                    ],
                    miniProject: {
                        title: "Component Library Builder",
                        description: "Create a Figma library with 3 primary components (Button, Input, Card) including variants (Hover, Active, Disabled).",
                        requirements: JSON.stringify(["Use Auto Layout.", "Define strict color variables.", "Publish as a library."]),
                        order: 1
                    }
                },
                {
                    id: "ui-l2-skill-responsive",
                    title: "Responsive Web Design",
                    description: "Design interfaces that adapt seamlessly to Mobile, Tablet, and Desktop screens.",
                    resources: [
                        { title: "Responsive Design Best Practices", type: "VIDEO", url: "https://www.youtube.com/watch?v=srvEeCSaMms", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Breakpoint'?", options: JSON.stringify(["A time to rest.", "A pixel width where the layout changes to accommodate screen size.", "A broken link.", "A coding error."]), correctAnswer: "A pixel width where the layout changes to accommodate screen size.", explanation: "Common breakpoints are 768px (tablet) and 1024px (desktop).", order: 1 }
                    ],
                    miniProject: {
                        title: "Adaptive Dashboard",
                        description: "Design a dashboard layout that stacks vertically on mobile but expands to a sidebar layout on desktop.",
                        requirements: JSON.stringify(["Mobile view (320px).", "Tablet view (768px).", "Desktop view (1440px)."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Core-UI - Integrated Design System",
                description: "Architect and build a professional, tokens-based design system in Figma. Focus on Atomic Design principles, component variables, and multi-device responsive engineering.",
                requirements: [
                    "Implement a full Design Token library (Colors, Spacing, Shadow, Typography).",
                    "Develop a set of 15+ Atomic components (Buttons, Modals, Sliders, etc.) with full variant sets.",
                    "Build a fully responsive 'Dashboard' interface using only your design system components.",
                    "Implement 'Auto Layout 5.0' for all complex layouts and components.",
                    "Design a comprehensive 'Style Guide' page documenting component usage and accessibility rules.",
                    "Achieve documented 'Zero-Hardcoding' for all colors and spacing in experimental layouts."
                ],
                guide: [
                    "Step 1: Define the core Design Tokens and map them to their variable counterparts.",
                    "Step 2: Build the 'Atoms' and 'Molecules' using Auto Layout for flexible sizing.",
                    "Step 3: Construct complex 'Organisms' (e.g., Data Tables, Navigation Bars).",
                    "Step 4: Design the 3-tier responsive layout (Mobile, Tablet, Desktop) using the library.",
                    "Step 5: Conduct a 'System Stress Test' by changing one token and observing global updates.",
                    "Step 6: Final demonstration: Publish the library and present the documentation site."
                ],
                hints: [
                    "Use 'Variable Aliasing' (e.g., brand-blue -> primary-background) for maximum flexibility.",
                    "Organize your components using the 'Component/Variant' naming convention for easy swapping.",
                    "Always design the 'Hover', 'Focus', and 'Disabled' states for every interactive component."
                ],
                testCases: [{ name: "System Scalability", verify: "Single token change correctly propagates to 100% of affected views" }, { name: "Responsive Integrity", verify: "Desktop-to-Mobile transition maintains functional parity and visual brand" }],
            }
        },
        {
            id: "ui-l3",
            title: "Senior UI Designer",
            skills: [
                {
                    id: "ui-l3-skill-proto",
                    title: "Advanced Prototyping",
                    description: "Bridge the gap between design and code. Create high-fidelity prototypes with smart animations.",
                    resources: [
                        { title: "Figma: Smart Animate", type: "VIDEO", url: "https://www.youtube.com/watch?v=5V9A7w6x01o", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "Why is high-fidelity prototyping important?", options: JSON.stringify(["It looks pretty.", "It allows testing complex interactions before coding.", "It replaces the final product.", "It saves disk space."]), correctAnswer: "It allows testing complex interactions before coding.", explanation: "It saves development time by validating user flows early.", order: 1 }
                    ],
                    miniProject: {
                        title: "E-Commerce Checkout Flow",
                        description: "Prototype a seamless checkout experience including cart edits, shipping selection, and payment success animation.",
                        requirements: JSON.stringify(["Use interactive components (checkboxes).", "Animate page transitions.", "Simulate loading states."]),
                        order: 1
                    }
                },
                {
                    id: "ui-l3-skill-access",
                    title: "Accessibility (a11y) Design",
                    description: "Ensure your designs are usable by everyone, including people with vision or motor impairments.",
                    resources: [
                        { title: "WCAG 2.1 Guidelines", type: "DOCUMENTATION", url: "https://www.w3.org/WAI/WCAG21/quickref/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the minimum contrast ratio for normal text (AA level)?", options: JSON.stringify(["3:1", "4.5:1", "7:1", "10:1"]), correctAnswer: "4.5:1", explanation: "This ensures text is readable against the background.", order: 1 }
                    ],
                    miniProject: {
                        title: "Accessibility Audit",
                        description: "Take an existing popular website design and 'fix' it to meet AAA standards.",
                        requirements: JSON.stringify(["Increase contrast.", "Add focus states.", "Design distinguishable links (not just color)."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Inertia - Immersive Interactive Prototype",
                description: "Design and prototype a high-fidelity mobile experience with complex micro-interactions, gestures, and state transitions. Focus on immersion, user-feedback loops, and dev-handoff accuracy.",
                requirements: [
                    "Build a 10-screen high-fidelity prototype in Figma with 'Smart Animate'.",
                    "Implement at least 5 complex micro-interactions (e.g., Swipe-to-delete, Pull-to-refresh).",
                    "Design a sophisticated navigation system with parallax effects and staggered transitions.",
                    "Develop a 'Hand-off Specification' with precise documentation for easing and timing (ms).",
                    "Integrate 'Accessibility Overlays' demonstrating screen-reader flow and focus ordering.",
                    "Achieve a 'Seamless' feel with zero glitchy or jarring transition frames."
                ],
                guide: [
                    "Step 1: Wireframe the core interaction loops and define the 'Motion Language'.",
                    "Step 2: Design the pixel-perfect mockups with inclusive attention to state changes.",
                    "Step 3: Implement the advanced prototyping connections with spring-physics easing.",
                    "Step 4: Conduct a 'User Flow Audit' to find friction points and dead-ends.",
                    "Step 5: Build the 'Dev-Spec' package documenting hex-codes, tokens, and durations.",
                    "Step 6: Final demonstration: Record a 2-minute walkthrough showing all micro-interactions."
                ],
                hints: [
                    "Motion should be functional first, aesthetic second: use it to guide the eye.",
                    "Don't over-animate! Good animations are felt more than they are seen.",
                    "Use Figma's 'Section' and 'Flow' features to keep your prototype organized and testable."
                ],
                testCases: [{ name: "Interaction Loop", verify: "Users can complete 100% of tasks without assistance" }, { name: "Spec Accuracy", verify: "Documentation provides all necessary data for 1:1 engineering implementation" }],
            }
        },
        {
            id: "ui-l4",
            title: "Lead UI/Experience Architect",
            skills: [
                {
                    id: "ui-l4-skill-ops",
                    title: "Design Ops & Leadership",
                    description: "Manage design teams, streamlined workflows, and cross-functional collaboration.",
                    resources: [
                        { title: "Design Systems Handbook", type: "ARTICLE", url: "https://www.designbetter.co/design-systems-handbook", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is the goal of Design Ops?", options: JSON.stringify(["To hire more designers.", "To operationalize workflows so designers can focus on design.", "To reduce salaries.", "To replace PMs."]), correctAnswer: "To operationalize workflows so designers can focus on design.", explanation: "It solves the 'how' so designers can solve the 'what'.", order: 1 }
                    ],
                    miniProject: {
                        title: "Design System Governance",
                        description: "Draft a contribution guideline for a corporate design system.",
                        requirements: JSON.stringify(["Define how new icons are added.", "Set up a review process.", "Create a versioning strategy."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Vision-2030 - Strategic Experience Governance",
                description: "Architect the design infrastructure and strategic roadmap for a multi-product enterprise. Focus on Design Ops, cross-platform governance, and the future of human-computer interaction.",
                requirements: [
                    "Design a centralized 'Design Ops' framework for a 50+ person design organization.",
                    "Implement a 'System Governance' workflow for multi-product UI consistency.",
                    "Build a 'Strategic Design Roadmap' illustrating the next 24 months of evolution.",
                    "Develop a 'Cross-Platform' UI strategy (Web, Mobile, TV, Wearables).",
                    "Design a 'Design-to-Code' automation pipeline using Figm-to-React tokens.",
                    "Lead an executive board session on the 'Ethical & Accessible' future of the product suite."
                ],
                guide: [
                    "Step 1: Set the enterprise Design Standards and cross-functional collaboration rules.",
                    "Step 2: Develop the Design System 'Monorepo' strategy for multi-product theme orchestration.",
                    "Step 3: Implement the 'Contribution & Audit' process for maintaining system health.",
                    "Step 4: Build the 'Strategic Vision' prototypes demonstrating future tech integration (AR/AI).",
                    "Step 5: Conduct a 'Global Consistency' audit across all existing digital touchpoints.",
                    "Step 6: Final demonstration: Present the unified Design Infrastructure plan to the simulated C-Suite."
                ],
                hints: [
                    "Design Ops is about 'Efficiency' and 'Alignment'; measure how much time you save for designers.",
                    "A lead architect looks at the 'Whole' system, not just the pixels.",
                    "Strategic roadmaps should prioritize business value alongside user experience."
                ],
                testCases: [{ name: "Organizational Sync", verify: "100% of product teams are successfully utilizing the core system repo" }, { name: "System ROI", verify: "Projected 30% reduction in design-to-development hand-off cycles" }],
            }
        }
    ]
};
