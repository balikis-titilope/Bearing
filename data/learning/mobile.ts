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
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
};
