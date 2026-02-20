export const mobileContent = {
    levels: [
        {
            id: "mo-l1",
            title: "Junior Mobile Engineer",
            skills: [
                {
                    id: "mo-l1-skill-basics",
                    title: "React Native Fundamentals",
                    description: "Learn the core components of React Native: View, Text, Image, and ScrollView.",
                    resources: [
                        { title: "React Native: Core Components", type: "DOCUMENTATION", url: "https://reactnative.dev/docs/intro-react-native-components", duration: 20, order: 1 }
                    ],
                    questions: [
                        { question: "Which component is use for displaying text in React Native?", options: JSON.stringify(["<div>", "<p>", "<Text>", "<span>"]), correctAnswer: "<Text>", explanation: "React Native uses custom components, not web HTML tags.", order: 1 }
                    ],
                    miniProject: {
                        title: "Personal Profile App",
                        description: "Create a simple one-page mobile app showing your bio, skills, and contact info.",
                        requirements: JSON.stringify(["Use View and Text components.", "Include an Image.", "Implement styling using StyleSheet."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Aura - Immersive Portfolio Experience",
                description: "Design and build a professional-grade mobile portfolio that utilizes native layout engines and sophisticated styling. This project focuses on pixel-perfect UI execution, responsive design across device sizes, and efficient asset management.",
                requirements: [
                    "Implement a complex nested layout using flexbox and absolute positioning.",
                    "Develop a custom 'Theme' system with support for Light and Dark modes.",
                    "Optimize image assets using dynamic sizing and progressive loading patterns.",
                    "Achieve consistent 60FPS scrolling performance across multiple list types.",
                    "Implement a persistent 'Bio' data layer using AsyncStorage.",
                    "Include a contact form with real-time validation and localized error messages."
                ],
                guide: [
                    "Step 1: Design the wireframes for both iOS and Android (Material + Cupertino).",
                    "Step 2: Build the core layout skeleton using semantic view hierarchies.",
                    "Step 3: Implement the global styling system with dynamic tokens for typography and color.",
                    "Step 4: Develop the asset pipeline for optimized high-DPI image rendering.",
                    "Step 5: Integrate the local storage layer for user-defined configuration.",
                    "Step 6: Final audit: Verify the UI layout on at least 3 different device aspect ratios."
                ],
                hints: [
                    "Use 'StyleSheet.create' to ensure your styles are sent across the bridge only once.",
                    "Leverage 'SafeAreView' to prevent your content from overlapping with notches and status bars.",
                    "Always use 'flex: 1' on your root containers to ensure they fill the available screen space."
                ],
                testCases: [{ name: "Render Speed", verify: "Initial mount and paint completed in <150ms" }, { name: "Theme Consistency", verify: "100% of components respond to system color-scheme changes" }],
            }
        },
        {
            id: "mo-l2",
            title: "Intermediate Mobile Dev",
            skills: [
                {
                    id: "mo-l2-skill-nav",
                    title: "React Native Navigation",
                    description: "Master React Navigation to create complex, multi-screen applications with stacks, tabs, and drawers.",
                    resources: [
                        { title: "React Navigation Docs", type: "DOCUMENTATION", url: "https://reactnavigation.org/docs/getting-started", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "Which navigator is best for a standard 'Back' button history behavior?", options: JSON.stringify(["Tab Navigator", "Drawer Navigator", "Stack Navigator", "Switch Navigator"]), correctAnswer: "Stack Navigator", explanation: "Stack Navigator pushes screens onto a stack, allowing standard back navigation.", order: 1 }
                    ],
                    miniProject: {
                        title: "Navigation Master",
                        description: "Build an app with a bottom tab bar by default, where one tab has a nested stack navigator for details.",
                        requirements: JSON.stringify(["Implement Bottom Tabs.", "Create a Details screen inside the Feed tab.", "Pass parameters between screens."]),
                        order: 1
                    }
                },
                {
                    id: "mo-l2-skill-state",
                    title: "State Management (Zustand/Redux)",
                    description: "Manage global app state efficiently using modern libraries like Zustand.",
                    resources: [
                        { title: "Zustand Course", type: "VIDEO", url: "https://www.youtube.com/watch?v=_pClM62-kLM", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "Why is a global state manager useful?", options: JSON.stringify(["It makes the app faster.", "It allows sharing data between deeply nested components without prop drilling.", "It replaces the database.", "It improves SEO."]), correctAnswer: "It allows sharing data between deeply nested components without prop drilling.", explanation: "Prop drilling becomes unmanageable in large apps.", order: 1 }
                    ],
                    miniProject: {
                        title: "Shopping Cart State",
                        description: "Add a shopping cart feature to your app using Zustand to track items globally.",
                        requirements: JSON.stringify(["Add/Remove items from any screen.", "Show cart count in a header badge.", "Persist cart data using AsyncStorage."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Shop-Flow - High-Concurrency Commerce",
                description: "Architect and build a sophisticated e-commerce app with deep navigation and global state orchestration. Focus on high-performance data fetching, caching, and secure checkout flows.",
                requirements: [
                    "Design a multi-layered navigation structure (Tabs -> Stacks -> Modals).",
                    "Implement a centralized global state using Zustand with custom middleware.",
                    "Develop a high-performance product list using FlashList with virtualization.",
                    "Implement a robust 'Offline-First' strategy for browsing cached products.",
                    "Build a multi-step checkout wizard with complex form validation and state-persistence.",
                    "Achieve sub-second interaction latency for all global state updates."
                ],
                guide: [
                    "Step 1: Architect the navigation graph for the entire commerce flow.",
                    "Step 2: Build the global data stores and implement persistence persistence layers.",
                    "Step 3: Develop the optimized product feed with staggered image loading.",
                    "Step 4: Implement the 'Cart' and 'Wishlist' logic with real-time UI synchronization.",
                    "Step 5: Conduct a performance audit on the navigation transitions and state-bridges.",
                    "Step 6: Final demonstration: Perform a full purchase flow while offline and verify sync on reconnect."
                ],
                hints: [
                    "Use 'react-query' or 'swr' to handle complex API fetching and caching automatically.",
                    "Always use 'memo' on list items to prevent unnecessary re-renders during scroll.",
                    "React Navigation's 'setParams' is great for updating header titles dynamically."
                ],
                testCases: [{ name: "Navigation Latency", verify: "Push-to-Mount transition completed in <300ms" }, { name: "State Reliability", verify: "Cart data survives app force-close and restart" }],
            }
        },
        {
            id: "mo-l3",
            title: "Senior Mobile Engineer",
            skills: [
                {
                    id: "mo-l3-skill-native",
                    title: "Native Modules & Bridging",
                    description: "Access native iOS/Android APIs that aren't available in standard React Native.",
                    resources: [
                        { title: "Native Modules Intro", type: "DOCUMENTATION", url: "https://reactnative.dev/docs/native-modules-intro", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What language is primarily used for iOS native modules?", options: JSON.stringify(["Java", "Swift/Objective-C", "Python", "Rust"]), correctAnswer: "Swift/Objective-C", explanation: "iOS development uses Swift or Objective-C.", order: 1 }
                    ],
                    miniProject: {
                        title: "Battery Level Bridge",
                        description: "Write a native module to fetch the device's exact battery level and display it in JS.",
                        requirements: JSON.stringify(["Write iOS Swift code.", "Write Android Kotlin code.", "Expose a 'getBatteryLevel' promise to JS."]),
                        order: 1
                    }
                },
                {
                    id: "mo-l3-skill-anim",
                    title: "Advanced Animations (Reanimated)",
                    description: "Create 60FPS animations using React Native Reanimated 2/3.",
                    resources: [
                        { title: "Can it be done in React Native?", type: "VIDEO", url: "https://www.youtube.com/c/wcandill", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "Why does Reanimated run smoother than standard Animated API?", options: JSON.stringify(["It uses magic.", "It runs animations on the UI thread, bypassing the JS bridge.", "It uses WebGL.", "It reduces image quality."]), correctAnswer: "It runs animations on the UI thread, bypassing the JS bridge.", explanation: "The JS bridge is often the bottleneck for smooth gestures.", order: 1 }
                    ],
                    miniProject: {
                        title: "Swipeable List",
                        description: "Build a list where items can be swiped left to delete with smooth, interactive physics.",
                        requirements: JSON.stringify(["Use useSharedValue.", "Levarage useAnimatedStyle.", "Handle gesture events with react-native-gesture-handler."]),
                        order: 2
                    }
                }
            ],
            finalProject: {
                title: "Swift-Bridge - High-Performance Native Utility",
                description: "Design and develop a custom bridge between JavaScript and Native iOS/Android modules. This project focuses on high-performance native calls, advanced gestures, and immersive 60FPS animations.",
                requirements: [
                    "Implement a custom Native Module in Swift and Kotlin for high-speed sensor data.",
                    "Develop a set of immersive 60FPS animations using Reanimated and Gesture Handler.",
                    "Build a custom 'Native UI Component' that renders a GPU-accelerated view.",
                    "Implement a thread-safe 'Promise' bridge for heavy background calculations.",
                    "Achieve sub-ms latency for native-to-js event emissions.",
                    "Document the architectural differences between the New Architecture (Fabric/TurboModules) and the bridge."
                ],
                guide: [
                    "Step 1: Architect the native module signatures and shared data structures.",
                    "Step 2: Build the iOS/Android native implementations with high-fidelity error handling.",
                    "Step 3: Develop the Reanimated animation drivers for complex gesture interactions.",
                    "Step 4: Bridge the native events into the React context using custom hooks.",
                    "Step 5: Conduct a performance audit on the UI thread vs the JS thread.",
                    "Step 6: Final demonstration: A real-time sensor dashboard with fluid 60FPS rendering."
                ],
                hints: [
                    "Use 'ReadableMap' and 'WritableMap' for passing complex objects across the bridge.",
                    "Reanimated 'worklets' are your best friend for high-performance physics calculations.",
                    "Always verify native permissions (Camera, Sensors) at runtime before calling native methods."
                ],
                testCases: [{ name: "Native Call Speed", verify: "Round-trip native execution < 5ms" }, { name: "Animation Fluidity", verify: "Zero dropped frames (60FPS) during complex list interaction" }],
            }
        },
        {
            id: "mo-l4",
            title: "Lead Mobile Architect",
            skills: [
                {
                    id: "mo-l4-skill-deploy",
                    title: "CI/CD & App Store Deployment",
                    description: "Automate the build and release process using Fastlane.",
                    resources: [
                        { title: "Fastlane Docs", type: "DOCUMENTATION", url: "https://docs.fastlane.tools/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "What does Fastlane match do?", options: JSON.stringify(["Finds dating matches.", "Syncs certificates and provisioning profiles across the team.", "Matches code styles.", "Matches unit tests."]), correctAnswer: "Syncs certificates and provisioning profiles across the team.", explanation: "It solves the 'code signing hell' on iOS.", order: 1 }
                    ],
                    miniProject: {
                        title: "One-Command Release",
                        description: "Set up Fastlane to automatically build, sign, and upload your app to TestFlight/Play Console.",
                        requirements: JSON.stringify(["Configure Fastfile.", "Handle certificates automatically.", "Increment build numbers automatically."]),
                        order: 1
                    }
                }
            ],
            finalProject: {
                title: "Apex-Release - Automated Enterprise Pipeline",
                description: "Architect a global-scale CI/CD and deployment strategy for a multi-app organization. Focus on automated code-signing, enterprise-distribution, and OTA (Over-The-Air) update patterns.",
                requirements: [
                    "Design a multi-flavor build system for Dev, Staging, and Production environments.",
                    "Implement automated 'Over-the-Air' (OTA) updates using Expo Updates or CodePush.",
                    "Build a Fastlane-based pipeline for automated App Store and Play Store submissions.",
                    "Implement 'Match' for secure, centralized certificate and profile management.",
                    "Design a strategy for automated Screenshot generation and localization for 10+ regions.",
                    "Develop a strategic mobile roadmap for enterprise-wide design-system adoption."
                ],
                guide: [
                    "Step 1: Architect the centralized CI/CD infrastructure using GitHub Actions + Fastlane.",
                    "Step 2: Implement the automated certificate management and code-signing logic.",
                    "Step 3: Develop the OTA update strategy and rollback protocols.",
                    "Step 4: Build the automated build-flavoring logic for multiple app variants.",
                    "Step 5: Conduct a full 'One-Click' release audit to verify all stores receive the build.",
                    "Step 6: Final presentation: Present the mobile architectural governance plan to stakeholders."
                ],
                hints: [
                    "Over-The-Air (OTA) updates are powerful but must comply with App Store policy (no core logic changes).",
                    "Fastlane 'Match' should be the only way certificates are managed to prevent 'Signing Hell'.",
                    "Modularizing your mobile app into 'Packages' makes testing and deployment much cleaner for large teams."
                ],
                testCases: [{ name: "Release Autonomy", verify: "New build reaches TestFlight in <15 minutes with zero manual input" }, { name: "OTA Integrity", verify: "App correctly self-updates and restarts upon new JS-bundle detection" }],
            }
        }
    ]
};
