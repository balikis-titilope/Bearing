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
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
};
