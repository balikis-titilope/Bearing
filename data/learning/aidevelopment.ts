export const aiDevelopmentContent = {
    levels: [
        {
            id: "ai-l1",
            title: "Junior AI Engineer",
            skills: [
                {
                    id: "ai-l1-skill-basics",
                    title: "Foundations of Artificial Intelligence",
                    description: "Explore the journey from symbolic AI to modern deep learning. Master the terminology and the core algorithms that power the AI revolution.",
                    resources: [
                        { title: "Elements of AI: Introduction", type: "ARTICLE", url: "https://www.elementsofai.com/", duration: 60, order: 1 },
                        { title: "Andrej Karpathy: State of GPT", type: "VIDEO", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A", duration: 45, order: 2 }
                    ],
                    questions: [
                        { question: "What is the difference between AI, Machine Learning, and Deep Learning?", options: JSON.stringify(["They are the same.", "AI is the broad field; ML is a subset using statistical methods; DL is a subset of ML using deep neural networks.", "ML is the only part that matter.", "AI is only about robots."]), correctAnswer: "AI is the broad field; ML is a subset using statistical methods; DL is a subset of ML using deep neural networks.", explanation: "Think of them as nesting dolls, with AI being the largest and DL the smallest, most specific subset.", order: 1 },
                        { question: "What is 'Supervised Learning'?", options: JSON.stringify(["Learning without data.", "Training a model on labeled data where the answer is known.", "Learning by trial and error.", "Grouping data automatically."]), correctAnswer: "Training a model on labeled data where the answer is known.", explanation: "In supervised learning, we provide both input and the correct target output.", order: 2 },
                        { question: "What is a 'Perceptron'?", options: JSON.stringify(["A type of hard drive.", "The simplest form of a neural network (a single layer).", "A cloud platform.", "A sorting algorithm."]), correctAnswer: "The simplest form of a neural network (a single layer).", explanation: "Perceptrons are the building blocks of artificial neural networks.", order: 3 },
                        { question: "What is 'Backpropagation'?", options: JSON.stringify(["Moving forward in a queue.", "The algorithm used to calculate gradients and update weights in a neural network.", "Saving data to a database.", "Encryption."]), correctAnswer: "The algorithm used to calculate gradients and update weights in a neural network.", explanation: "Backpropagation is how neural networks learn from their mistakes by adjusting parameters.", order: 4 },
                        { question: "What does an 'Activation Function' do?", options: JSON.stringify(["Starts the computer.", "Introduces non-linearity into the network, allowing it to learn complex patterns.", "Speeds up data download.", "Deletes old data."]), correctAnswer: "Introduces non-linearity into the network, allowing it to learn complex patterns.", explanation: "Without non-linearity (like ReLU), multiple layers would just behave like a single linear layer.", order: 5 },
                        { question: "What is an 'Epoch'?", options: JSON.stringify(["A year.", "One complete pass of the entire training dataset through the neural network.", "A type of dataset.", "A measure of accuracy."]), correctAnswer: "One complete pass of the entire training dataset through the neural network.", explanation: "Models often require many epochs to reach high accuracy.", order: 6 },
                        { question: "What is 'Overfitting'?", options: JSON.stringify(["When a model is too small.", "When a model learns the training data too well, failing to generalize to new, unseen data.", "When data is too large.", "A fast training process."]), correctAnswer: "When a model learns the training data too well, failing to generalize to new, unseen data.", explanation: "Overfitting is like memorizing the exam questions instead of understanding the subject.", order: 7 },
                        { question: "What is 'Inference' in the context of AI?", options: JSON.stringify(["Training the model.", "Using a trained model to make predictions on new data.", "Cleaning the dataset.", "Updating the hardware."]), correctAnswer: "Using a trained model to make predictions on new data.", explanation: "Inference is the 'production' stage where the model provides value.", order: 8 },
                        { question: "What is a 'Turing Test'?", options: JSON.stringify(["A hardware benchmark.", "A test of a machine's ability to exhibit intelligent behavior indistinguishable from that of a human.", "A security test.", "A coding exam."]), correctAnswer: "A test of a machine's ability to exhibit intelligent behavior indistinguishable from that of a human.", explanation: "Proposed by Alan Turing in 1950 as a benchmark for AI.", order: 9 },
                        { question: "What is 'Natural Language Processing' (NLP)?", options: JSON.stringify(["Creating better speech.", "The field of AI focused on the interaction between computers and human language.", "A type of database.", "Scientific computing."]), correctAnswer: "The field of AI focused on the interaction between computers and human language.", explanation: "NLP powers tools like translation, chatbots, and sentiment analysis.", order: 10 },
                        { question: "What is 'Reinforcement Learning'?", options: JSON.stringify(["Learning from labels.", "Learning through rewards and penalties to reach a goal.", "Comparing two images.", "Deleting old models."]), correctAnswer: "Learning through rewards and penalties to reach a goal.", explanation: "RL is used for games (AlphaGo) and autonomous systems.", order: 11 },
                        { question: "What is a 'Large Language Model' (LLM)?", options: JSON.stringify(["A very big book.", "An AI model trained on massive amounts of text to generate human-like language.", "A type of dictionary.", "A fast server."]), correctAnswer: "An AI model trained on massive amounts of text to generate human-like language.", explanation: "Models like GPT-4 are examples of LLMs.", order: 12 },
                        { question: "What is 'Feature Engineering'?", options: JSON.stringify(["Building the computer.", "Selecting and transforming raw data into meaningful inputs for the model.", "Designing the logo.", "Writing the user manual."]), correctAnswer: "Selecting and transforming raw data into meaningful inputs for the model.", explanation: "Good features are often more important than complex models.", order: 13 },
                        { question: "What is 'Computer Vision'?", options: JSON.stringify(["Better screens.", "The field of AI that enables computers to derive meaningful information from digital images and videos.", "A pair of glasses.", "3D printing."]), correctAnswer: "The field of AI that enables computers to derive meaningful information from digital images and videos.", explanation: "CV is used in self-driving cars, facial recognition, and medical imaging.", order: 14 },
                        { question: "What is 'Bias' in AI systems?", options: JSON.stringify(["A type of storage.", "Prejudice in data or algorithms resulting in unfair outcomes.", "Fast computation.", "The error rate."]), correctAnswer: "Prejudice in data or algorithms resulting in unfair outcomes.", explanation: "Addressing bias is a critical part of ethical AI development.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Intelligent Sentiment Classifier",
                        description: "Build a classic AI system that can distinguish between positive and negative feedback using basic NLP techniques.",
                        requirements: JSON.stringify(["Pre-process text data (tokenization, stop-word removal).", "Implement a Bag-of-Words or TF-IDF representation.", "Train a Naive Bayes or Logistic Regression classifier.", "Evaluate the model using a confusion matrix."]),
                        guide: JSON.stringify([
                            "Step 1: Collect a small dataset of reviews (or use the IMDB dataset).",
                            "Step 2: Clean the text by removing punctuation and converting to lowercase.",
                            "Step 3: Convert the text into numerical vectors using Scikit-Learn's 'CountVectorizer'.",
                            "Step 4: Split your data into training (80%) and testing (20%) sets.",
                            "Step 5: Train the model and output the accuracy score."
                        ]),
                        hints: JSON.stringify([
                            "Ensure you don't 'leak' info from the test set into the training set.",
                            "Try adding n-grams (sequences of 2-3 words) to capture more context.",
                            "Visualize the top keywords that lead to 'Negative' classifications."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Scikit-Learn: Working with Text Data", url: "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html" },
                            { title: "Introduction to NLP with Python", url: "https://www.youtube.com/watch?v=X2vAabgKiuM" }
                        ]),
                        testCases: JSON.stringify([{ name: "Accuracy", verify: "Model achieves > 75% on test set" }, { name: "Preprocessing", verify: "Tokens correctly identified" }]),
                        order: 1
                    }
                }
            ]
        },
        {
            id: "ai-l2",
            title: "Intermediate AI Engineer",
            skills: [
                {
                    id: "ai-l2-skill-prompt",
                    title: "Advanced Prompt Engineering",
                    description: "Unlock the power of LLMs. Learn Chain-of-Thought, Few-Shot Prompting, and how to effectively structure inputs for consistent outputs.",
                    resources: [
                        { title: "OpenAI Cookbook", type: "DOCUMENTATION", url: "https://cookbook.openai.com/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Few-Shot Prompting'?", options: JSON.stringify(["Asking a few times.", "Providing a few examples of the desired output in the prompt.", "Using a small model.", "Generating a few tokens."]), correctAnswer: "Providing a few examples of the desired output in the prompt.", explanation: "It significantly improves performance on specific tasks without retraining.", order: 1 }
                    ],
                    miniProject: {
                        title: "Context-Aware Chatbot",
                        description: "Build a chatbot using the OpenAI API that maintains conversation history.",
                        requirements: JSON.stringify(["Use 'gpt-3.5-turbo' or 'gpt-4'.", "Implement a sliding window for context management.", "Create a system prompt to define the bot's persona."]),
                        order: 1
                    }
                },
                {
                    id: "ai-l2-skill-api",
                    title: "LLM API Integration",
                    description: "Integrate AI into applications. Handle rate limits, streaming responses, and function calling.",
                    resources: [
                        { title: "Building Systems with ChatGPT", type: "COURSE", url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Function Calling' in the context of LLM APIs?", options: JSON.stringify(["Calling a python function.", "The ability of the model to intelligently return a JSON object containing arguments to call a function.", "Running code on the server.", "A debugging tool."]), correctAnswer: "The ability of the model to intelligently return a JSON object containing arguments to call a function.", explanation: "It allows LLMs to interact with external tools and APIs reliably.", order: 1 }
                    ],
                    miniProject: {
                        title: "AI-Powered Data Extractor",
                        description: "Build a tool that extracts structured data (JSON) from unstructured text (emails/PDFs) using an LLM.",
                        requirements: JSON.stringify(["Define a Pydantic/Zod schema.", "Use Function Calling to enforce output structure.", "Process a batch of documents."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "ai-l3",
            title: "Senior AI Engineer",
            skills: [
                {
                    id: "ai-l3-skill-rag",
                    title: "Retrieval Augmented Generation (RAG)",
                    description: "Connect LLMs to your data. Vector databases (Pinecone, Chroma), Embeddings, and Semantic Search.",
                    resources: [
                        { title: "LangChain Documentation", type: "DOCUMENTATION", url: "https://python.langchain.com/docs/get_started/introduction", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Vector Embedding'?", options: JSON.stringify(["A list of words.", "A numerical representation of data (text/image) that captures semantic meaning.", "A database key.", "A sorting algorithm."]), correctAnswer: "A numerical representation of data (text/image) that captures semantic meaning.", explanation: "Objects with similar meanings will have vectors that are close together in space.", order: 1 }
                    ],
                    miniProject: {
                        title: "Document Q&A Bot",
                        description: "Build a RAG system that allows users to chat with a PDF document.",
                        requirements: JSON.stringify(["Ingest and chunk a PDF.", "Store embeddings in a Vector DB.", "Retrieve relevant chunks for the context window.", "Generate an answer with citations."]),
                        order: 1
                    }
                },
                {
                    id: "ai-l3-skill-agents",
                    title: "Autonomous Agents",
                    description: "Build systems that can plan and execute actions. ReAct pattern, Tool use, and Memory.",
                    resources: [
                        { title: "Agents (LangChain)", type: "DOCUMENTATION", url: "https://python.langchain.com/docs/modules/agents/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'ReAct' pattern?", options: JSON.stringify(["React.js framework.", "Reasoning and Acting.", "Repeat and Act.", "Real-time Action."]), correctAnswer: "Reasoning and Acting.", explanation: "It enables models to generate reasoning traces and task-specific actions in an interleaved manner.", order: 1 }
                    ],
                    miniProject: {
                        title: "Research Assistant Agent",
                        description: "Create an agent that can browse the web to answer complex questions.",
                        requirements: JSON.stringify(["Give the agent access to a Search tool (e.g., Tavily/Google).", "Implement a scratchpad for reasoning.", "Summarize findings from multiple sources."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "ai-l4",
            title: "Principal AI Architect",
            skills: [
                {
                    id: "ai-l4-skill-finetune",
                    title: "Fine-Tuning & SLMs",
                    description: "Customize models for specific domains. PEFT (LoRA), QLoRA, and running Small Language Models locally.",
                    resources: [
                        { title: "Hugging Face PEFT Docs", type: "DOCUMENTATION", url: "https://huggingface.co/docs/peft/index", duration: 150, order: 1 }
                    ],
                    questions: [
                        { question: "What is the main benefit of LoRA (Low-Rank Adaptation)?", options: JSON.stringify(["It makes the model bigger.", "It reduces the number of trainable parameters, making fine-tuning much faster and cheaper.", "It increases accuracy on all tasks.", "It removes the need for a GPU."]), correctAnswer: "It reduces the number of trainable parameters, making fine-tuning much faster and cheaper.", explanation: "It freezes the pre-trained weights and injects trainable rank decomposition matrices.", order: 1 }
                    ],
                    miniProject: {
                        title: "Domain-Specific SLM Fine-Tuning",
                        description: "Fine-tune a small model (like Llama 3 or Mistral) on a specific dataset (e.g., medical or legal).",
                        requirements: JSON.stringify(["Prepare a JSONL dataset.", "Use QLoRA for memory efficiency.", "Evaluate the fine-tuned model against the base model."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};
