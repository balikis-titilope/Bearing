export const machinelearningContent = {
    levels: [
        {
            id: "mle-l1",
            title: "Junior ML Engineer",
            skills: [
                {
                    id: "mle-l1-skill-python",
                    title: "Python for ML Production",
                    description: "Learn how to write clean, modular Python specifically for machine learning models.",
                    resources: [
                        { title: "Google Machine Learning Crash Course", type: "VIDEO", url: "https://developers.google.com/machine-learning/crash-course", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Overfitting'?", options: JSON.stringify(["When a model is too small.", "When a model learns the training data too well, failing to generalize to new data.", "When a model is too fast.", "When a model uses too much RAM."]), correctAnswer: "When a model learns the training data too well, failing to generalize to new data.", explanation: "Generalization is the goal of ML.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Linear Regressor",
                        description: "Build a model from scratch that predicts house prices based on historical data.",
                        requirements: JSON.stringify(["Implement using Scikit-learn.", "Split data into Train/Test.", "Evaluate using MSE."]),
                        order: 1
                    }
                }
            ]
        },
        {
            id: "mle-l2",
            title: "Intermediate ML Engineer",
            skills: [
                {
                    id: "mle-l2-skill-dl",
                    title: "Deep Learning with PyTorch",
                    description: "Build and train neural networks for complex tasks like image recognition and NLP.",
                    resources: [
                        { title: "Deep Learning with PyTorch: A 60 Minute Blitz", type: "DOCUMENTATION", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Tensor'?", options: JSON.stringify(["A headache.", "A multi-dimensional array used for efficient computation on GPUs.", "A type of neuron.", "A database."]), correctAnswer: "A multi-dimensional array used for efficient computation on GPUs.", explanation: "Tensors are the fundamental data structure in PyTorch and TensorFlow.", order: 1 }
                    ],
                    miniProject: {
                        title: "Image Classifier",
                        description: "Train a Convolutional Neural Network (CNN) to classify images from the CIFAR-10 dataset.",
                        requirements: JSON.stringify(["Define a custom CNN architecture.", "Train for 10 epochs.", "Achieve >70% accuracy on test set."]),
                        order: 1
                    }
                },
                {
                    id: "mle-l2-skill-feat",
                    title: "Feature Engineering",
                    description: "Transform raw data into meaningful features that improve model performance.",
                    resources: [
                        { title: "Feature Engineering for Machine Learning", type: "BOOK_SUMMARY", url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'One-Hot Encoding'?", options: JSON.stringify(["Compressing data.", "Converting categorical variables into binary vectors.", "Heating the CPU.", "Encryption."]), correctAnswer: "Converting categorical variables into binary vectors.", explanation: "It prevents the model from assuming ordinal relationships between categories.", order: 1 }
                    ],
                    miniProject: {
                        title: "Titanic Survival Predictor",
                        description: "Participate in the classic Kaggle competition, focusing purely on feature engineering.",
                        requirements: JSON.stringify(["Extract titles from names.", "Create family size feature.", "Impute missing age values intelligently."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "mle-l3",
            title: "Senior ML Engineer",
            skills: [
                {
                    id: "mle-l3-skill-ops",
                    title: "MLOps & Model Deployment",
                    description: "Take models from notebooks to production APIs using Docker and FastAPI.",
                    resources: [
                        { title: "MLOps: Continuous Delivery for ML", type: "ARTICLE", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Data Drift'?", options: JSON.stringify(["Moving data to a new server.", "When the statistical properties of the input data change over time, degrading model performance.", "Accidental deletion.", "Fast driving."]), correctAnswer: "When the statistical properties of the input data change over time, degrading model performance.", explanation: "Drift monitoring is essential for maintaining production models.", order: 1 }
                    ],
                    miniProject: {
                        title: "Real-time Inference API",
                        description: "Wrap your Image Classifier in a FastAPI application and dockerize it.",
                        requirements: JSON.stringify(["Endpoint accepts image upload.", "Returns predicted class and confidence.", "Optimized for latency."]),
                        order: 1
                    }
                },
                {
                    id: "mle-l3-skill-nlp",
                    title: "Natural Language Processing (NLP)",
                    description: "Analyzed text data using modern techniques like Word Embeddings and RNNs.",
                    resources: [
                        { title: "Hugging Face Course", type: "DOCUMENTATION", url: "https://huggingface.co/course/chapter1/1", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'Tokenization' do?", options: JSON.stringify(["Encrypts text.", "Splits text into smaller units (tokens) for processing.", "Translates languages.", "Summarizes text."]), correctAnswer: "Splits text into smaller units (tokens) for processing.", explanation: "It's the first step in any NLP pipeline.", order: 1 }
                    ],
                    miniProject: {
                        title: "Sentiment Analyzer",
                        description: "Fine-tune a BERT model to classify movie reviews as positive or negative.",
                        requirements: JSON.stringify(["Use Hugging Face Transformers.", "Fine-tune on IMDB dataset.", "Evaluate F1 score."]),
                        order: 2
                    }
                }
            ]
        },
        {
            id: "mle-l4",
            title: "Principal ML Architect",
            skills: [
                {
                    id: "mle-l4-skill-llm",
                    title: "Large Language Models (LLMs)",
                    description: "Architect systems using LLMs. Understand Prompt Engineering, RAG, and fine-tuning strategies.",
                    resources: [
                        { title: "State of GPT", type: "VIDEO", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'RAG'?", options: JSON.stringify(["Red Amber Green.", "Retrieval-Augmented Generation.", "Random Access Generator.", "Real-time AI Graphics."]), correctAnswer: "Retrieval-Augmented Generation.", explanation: "RAG combines an LLM with an external knowledge base to reduce hallucinations.", order: 1 }
                    ],
                    miniProject: {
                        title: "Custom RAG Chatbot",
                        description: "Build a chatbot that can answer questions about your private documents.",
                        requirements: JSON.stringify(["Ingest PDF documents.", "Store embeddings in a Vector Database (e.g., Pinecone).", "Query using OpenAI API."]),
                        order: 1
                    }
                }
            ]
        }
    ]
};

