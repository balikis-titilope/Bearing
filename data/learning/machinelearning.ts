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
            ],
            finalProject: {
                title: "Predict-Flow - Optimized Linear Engine",
                description: "Design and implement a professional-grade predictive engine using statistical regression foundations. Focus on rigorous data validation, feature scaling, and production-ready Python patterns.",
                requirements: [
                    "Develop a robust preprocessing pipeline using Scikit-Learn's 'ColumnTransformer'.",
                    "Implement a series of linear models (Ridge, Lasso, ElasticNet) and compare performance.",
                    "Build a custom 'Outlier Detector' using Z-score and IQR methods.",
                    "Achieve an R-Squared score of >0.85 on a complex real-estate dataset.",
                    "Serialize the trained model using 'joblib' with integrated version metadata.",
                    "Implement a suite of unit tests for data-shape and type validation."
                ],
                guide: [
                    "Step 1: Perform comprehensive Exploratory Data Analysis (EDA) to find feature correlations.",
                    "Step 2: Build the 'Predict-Flow' transformation suite (Scaling, Encoding, Imputing).",
                    "Step 3: Implement the cross-validation strategy to prevent data leakage.",
                    "Step 4: Train and tune the linear ensemble using Bayesian optimization.",
                    "Step 5: Conduct a residual analysis audit to verify model assumptions.",
                    "Step 6: Final demonstration: Deploy the serialized model and perform bulk inference."
                ],
                hints: [
                    "Slightly biased models (Regularization) often generalize better than complex ones.",
                    "Log-transform highly skewed features to improve linear model performance.",
                    "Always standardize features before using L1/L2 regularization."
                ],
                testCases: [{ name: "Inference Stability", verify: "Model handles missing categorical inputs without crashing" }, { name: "Prediction Accuracy", verify: "Mean Absolute Error < 10% of target mean" }],
            }
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
            ],
            finalProject: {
                title: "Neuro-Scan - Industrial Object Recognition",
                description: "Architect and train a deep learning system for high-accuracy image recognition. This project focuses on custom CNN design, transfer learning, and advanced data augmentation for computer vision.",
                requirements: [
                    "Implement a custom PyTorch model utilizing Depthwise Separable Convolutions.",
                    "Develop a data augmentation pipeline (Rotation, Jitter, Mixup) to improve robustness.",
                    "Use 'Transfer Learning' with a pre-trained EfficientNet backbone for specific domains.",
                    "Achieve an F1-score of >0.92 on a noisy industrial dataset.",
                    "Implement 'Grad-CAM' visualizations to explain the model's focus points.",
                    "Optimize training using learning-rate warmups and cosine annealing."
                ],
                guide: [
                    "Step 1: Curate and balance the image dataset using stratified sampling.",
                    "Step 2: Build the 'Neuro-Scan' training loop with integrated validation checkpoints.",
                    "Step 3: Implement the augmentation suite and audit its impact on validation loss.",
                    "Step 4: Execute the Transfer Learning workflow and fine-tune the top layers.",
                    "Step 5: Perform a qualitative audit using saliency maps (Grad-CAM).",
                    "Step 6: Final demonstration: Deploy the model to an edge-device simulator and measure FPS."
                ],
                hints: [
                    "Class imbalance is deadly in vision; use 'WeightedRandomSampler' in your DataLoader.",
                    "Label smoothing can significantly reduce model overconfidence and improve calibration.",
                    "Start with a small image resolution (e.g., 128x128) to iterate quickly before scaling up."
                ],
                testCases: [{ name: "Model FPS", verify: ">30 FPS sustained on targeted hardware" }, { name: "Recall Score", verify: "Detects 95%+ of critical anomalies" }],
            }
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
            ],
            finalProject: {
                title: "Linguist-AI - Multilingual BERT Finetuning",
                description: "Design and fine-tune a state-of-the-art transformer model for multilingual text understanding. This project focuses on Hugging Face ecosystems, tokenization, and domain adaptation.",
                requirements: [
                    "Fine-tune a multilingual BERT or RoBERTa model for complex intent classification.",
                    "Implement a custom 'Tokenizer' extension to handle domain-specific jargon.",
                    "Develop a production-grade inference engine using ONNX Runtime for 4x speedup.",
                    "Achieve >90% cross-lingual transfer accuracy across 3 major languages.",
                    "Implement 'Active Learning' to iteratively improve the model with human-in-the-loop.",
                    "Design a multi-tenant monitoring dashboard for tracking model drift per region."
                ],
                guide: [
                    "Step 1: Curate the multilingual dataset and perform domain-specific text normalizations.",
                    "Step 2: Build the finetuning pipeline using Hugging Face 'Accelerator' for multi-GPU support.",
                    "Step 3: Implement the ONNX export and optimization (Quantization) workflow.",
                    "Step 4: Develop the inference API with custom logging for drift detection.",
                    "Step 5: Conduct a 'Cross-Lingual' audit to verify language-agnostic understanding.",
                    "Step 6: Final demonstration: Deploy the system and process a 5-language intent stream."
                ],
                hints: [
                    "Freeze the base transformer layers initially to avoid catastrophic forgetting during finetuning.",
                    "Use 'BPE' (Byte Pair Encoding) or 'WordPiece' for the most efficient tokenization.",
                    "Monitor 'Confusion Matrices' per language to find specific linguistic weaknesses."
                ],
                testCases: [{ name: "Language Invariance", verify: "Accuracy variance across languages < 5%" }, { name: "Throughput", verify: "Handles 500 requests/sec with ONNX optimization" }],
            }
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
            ],
            finalProject: {
                title: "Omni-ML - Global MLOps Infrastructure",
                description: "Architect a self-healing, global-scale MLOps platform for an enterprise. Focus on automated model governance, continuous training (CT), and multi-cloud inference serving.",
                requirements: [
                    "Design a multi-region Model Registry using MLflow with integrated lineage tracking.",
                    "Implement an automated 'Continuous Training' (CT) pipeline triggered by data drift.",
                    "Build a 'Shadow Deployment' and 'Canary' infrastructure for risk-free model rollouts.",
                    "Implement a 'Feature Store' (Feast/Hopsworks) to eliminate train-serve skew.",
                    "Design a global monitoring engine using Prometheus and specialized ML alert rules.",
                    "Lead a strategic AI ethics review for all models deployed on the platform."
                ],
                guide: [
                    "Step 1: Architect the 'Platform-as-a-Service' layer for ML using Kubernetes (Kubeflow).",
                    "Step 2: Develop the automation for 'Self-Serve' feature engineering and registration.",
                    "Step 3: Implement the CT/CI/CD pipelines with integrated model-quality gates.",
                    "Step 4: Build the observability layer for both infrastructure and model behavior.",
                    "Step 5: Execute a 'Shadow' and 'Live' promotion of a mission-critical model.",
                    "Step 6: Final demonstration: Present the unified MLOps platform architecture to stakeholders."
                ],
                hints: [
                    "A 'Feature Store' is expensive but vital for consistency; start with offline-only if needed.",
                    "Automated 'Rollback' on accuracy drop is your best friend in production ML.",
                    "Think of 'Model Governance' as the CI/CD equivalent for data and weights."
                ],
                testCases: [{ name: "Drift Remediation", verify: "Automated retraining triggers and succeeds upon drift detection" }, { name: "Audit Lineage", verify: "100% of production models can be traced back to raw data and hyperparams" }],
            }
        }
    ]
};
