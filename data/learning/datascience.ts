export const dataScienceContent = {
    levels: [
        {
            id: "ds-l1",
            title: "Junior Data Scientist",
            skills: [
                {
                    id: "ds-l1-skill-python",
                    title: "Python for Data Analysis (NumPy)",
                    description: "Master the fundamental library for scientific computing in Python. Understand ND-Arrays, vectorization, and broadcasting.",
                    resources: [
                        { title: "NumPy: The absolute basics for beginners", type: "DOCUMENTATION", url: "https://numpy.org/doc/stable/user/absolute_beginners.html", duration: 40, order: 1 },
                        { title: "Python for Data Science Handbook", type: "ARTICLE", url: "https://jakevdp.github.io/PythonDataScienceHandbook/", duration: 120, order: 2 }
                    ],
                    questions: [
                        { question: "What is the primary data structure in NumPy?", options: JSON.stringify(["List", "Dictionary", "ndarray (N-dimensional array)", "DataFrame"]), correctAnswer: "ndarray (N-dimensional array)", explanation: "The ndarray is a fast, flexible container for large data sets in Python.", order: 1 },
                        { question: "What is 'Vectorization' in NumPy?", options: JSON.stringify(["Drawing vectors.", "Performing operations on entire arrays without explicit loops in Python.", "Converting lists to strings.", "Compiling code."]), correctAnswer: "Performing operations on entire arrays without explicit loops in Python.", explanation: "Vectorization significantly speeds up computation by pushing loops to C-level internally.", order: 2 },
                        { question: "What is 'Broadcasting'?", options: JSON.stringify(["Streaming data.", "How NumPy treats arrays with different shapes during arithmetic operations.", "Sending data over a network.", "Copying arrays."]), correctAnswer: "How NumPy treats arrays with different shapes during arithmetic operations.", explanation: "Broadcasting allows the smaller array to be 'broadcast' across the larger array so they have compatible shapes.", order: 3 },
                        { question: "Which function is used to change the shape of an array without changing its data?", options: JSON.stringify(["resize()", "reshape()", "convert()", "change()"]), correctAnswer: "reshape()", explanation: "reshape() returns an array containing the same data with a new shape.", order: 4 },
                        { question: "Difference between NumPy arrays and Python lists?", options: JSON.stringify(["Lists are faster.", "NumPy arrays are more memory efficient and allow element-wise operations.", "Lists only support numbers.", "NumPy arrays cannot be sorted."]), correctAnswer: "NumPy arrays are more memory efficient and allow element-wise operations.", explanation: "NumPy arrays use contiguous memory and are designed for numerical performance.", order: 5 },
                        { question: "Result of 'np.array([1, 2, 3]) + 1'?", options: JSON.stringify(["Error.", "[2, 3, 4]", "[1, 2, 3, 1]", "[11, 21, 31]"]), correctAnswer: "[2, 3, 4]", explanation: "This is an example of scalar broadcasting where 1 is added to every element.", order: 6 },
                        { question: "What does 'dtype' tell you?", options: JSON.stringify(["Data type.", "Database type.", "Array length.", "Dimension."]), correctAnswer: "Data type.", explanation: "dtype describes the type of the elements in the array (e.g., int64, float32).", order: 7 },
                        { question: "How do you select the first 5 elements of a NumPy array 'a'?", options: JSON.stringify(["a[5]", "a[:5]", "a[1-5]", "a.first(5)"]), correctAnswer: "a[:5]", explanation: "Standard Python slicing works on NumPy arrays.", order: 8 },
                        { question: "What is the result of 'np.zeros((2, 3))'?", options: JSON.stringify(["An array with 6 ones.", "A 2x3 matrix filled with zeros.", "A list of strings.", "A 3x2 matrix."]), correctAnswer: "A 2x3 matrix filled with zeros.", explanation: "It initializes an array of specific shape with all zeros.", order: 9 },
                        { question: "What does axis=0 represent in a 2D NumPy array?", options: JSON.stringify(["Columns.", "Rows.", "The total sum.", "The diagonal."]), correctAnswer: "Rows.", explanation: "Axis 0 usually refers to the vertical axis (rows) in NumPy operations like sum or mean.", order: 10 },
                        { question: "How do you perform matrix multiplication in NumPy?", options: JSON.stringify(["a * b", "np.dot(a, b)", "a + b", "a.multiply(b)"]), correctAnswer: "np.dot(a, b)", explanation: "The * operator performs element-wise multiplication; np.dot or the @ operator performs matrix multiplication.", order: 11 },
                        { question: "What is 'Fancy Indexing'?", options: JSON.stringify(["Using random numbers.", "Indexing using arrays of integers or booleans to access multiple elements at once.", "Styling arrays.", "Sorting by length."]), correctAnswer: "Indexing using arrays of integers or booleans to access multiple elements at once.", explanation: "Fancy indexing is powerful for complex data selection.", order: 12 },
                        { question: "What is np.nan?", options: JSON.stringify(["A number.", "Not a Number (floating-point representation of missing values).", "A string.", "A zero."]), correctAnswer: "Not a Number (floating-point representation of missing values).", explanation: "NaN is the standard way to represent missing data in numerical arrays.", order: 13 },
                        { question: "Purpose of np.linspace(0, 10, 5)?", options: JSON.stringify(["Counts from 0 to 10.", "Generates 5 evenly spaced numbers between 0 and 10.", "Random numbers.", "Checks for parity."]), correctAnswer: "Generates 5 evenly spaced numbers between 0 and 10.", explanation: "Linspace is useful for generating coordinates for plotting.", order: 14 },
                        { question: "How to flatten a 2D array?", options: JSON.stringify(["a.hide()", "a.flatten()", "a.reduce()", "a.sum()"]), correctAnswer: "a.flatten()", explanation: "Flatten returns a copy of the array collapsed into one dimension.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Vectorized Image Filter",
                        description: "Process raw image data (stored as NumPy arrays) to implement custom filters like grayscale, brightness adjust, and edge detection using pure vectorization.",
                        requirements: JSON.stringify(["Load image data into NumPy.", "Perform color transformations without for-loops.", "Implement a convolution-based sharpening filter.", "Save the processed array back to an image file."]),
                        guide: JSON.stringify([
                            "Step 1: Use 'matplotlib.image' or 'PIL' to load an image into a NumPy array.",
                            "Step 2: Calculate grayscale using the weighted average formula: 0.299R + 0.587G + 0.114B via dot product.",
                            "Step 3: Implement brightness adjustment by adding/subtracting a scalar value.",
                            "Step 4: Use 'slicing' to implement a simple 3x3 kernel operation (e.g., blurring).",
                            "Step 5: Compare the execution time of vectorized vs loop-based processing."
                        ]),
                        hints: JSON.stringify([
                            "Image arrays are usually (Height, Width, 3).",
                            "Remember to clip values between 0 and 255 after arithmetic operations.",
                            "Use 'np.uint8' as the final data type for saving images."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "NumPy for Image Processing", url: "https://scikit-image.org/docs/stable/user_guide/numpy_images.html" },
                            { title: "Convolution Visualization", url: "https://ml-cheatsheet.readthedocs.io/en/latest/layers.html#convolution" }
                        ]),
                        testCases: JSON.stringify([{ name: "Vectorization", verify: "No explicit 'for' loops in the filter logic" }, { name: "Shape Integrity", verify: "Final image matches original dimensions" }]),
                        order: 1
                    }
                },
                {
                    id: "ds-l1-skill-pandas",
                    title: "Exploratory Data Analysis (Pandas)",
                    description: "Learn to clean, transform, and analyze tabular data. Master DataFrames, time-series analysis, and grouping.",
                    resources: [
                        { title: "Pandas: 10 minutes to pandas", type: "DOCUMENTATION", url: "https://pandas.pydata.org/docs/user_guide/10min.html", duration: 20, order: 1 }
                    ],
                    questions: [
                        { question: "What is the main 2D data structure in Pandas?", options: JSON.stringify(["Series", "DataFrame", "Table", "Grid"]), correctAnswer: "DataFrame", explanation: "A DataFrame is a 2D labeled data structure.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Titanic Survival Analyst",
                        description: "Analyze the classic Titanic dataset to find predictors of survival.",
                        requirements: JSON.stringify(["Load and clean the dataset.", "Use pivot tables to analyze survival."]),
                        order: 2
                    }
                },
                {
                    id: "ds-l1-skill-stats",
                    title: "Applied Statistics & Hypothesis Testing",
                    description: "Master the foundations of data-driven decision making. Learn about p-values, confidence intervals, and the Central Limit Theorem.",
                    resources: [
                        { title: "Khan Academy: Statistics & Probability", type: "COURSE", url: "https://www.khanacademy.org/math/statistics-probability", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'p-value'?", options: JSON.stringify(["A price value.", "The probability of obtaining results at least as extreme as the observed results, assuming the null hypothesis is true.", "A type of average.", "A database entry."]), correctAnswer: "The probability of obtaining results at least as extreme as the observed results, assuming the null hypothesis is true.", explanation: "Low p-values (usually < 0.05) suggest the observed effect is unlikely to be due to chance.", order: 1 }
                    ],
                    miniProject: {
                        title: "The A/B Test Validator",
                        description: "Analyze two sets of user behavior data to determine if a UI change resulted in a statistically significant increase in clicks.",
                        requirements: JSON.stringify(["Perform a t-test.", "Calculate confidence intervals.", "Visualize the distribution of both groups."]),
                        order: 3
                    }
                },
                {
                    id: "ds-l1-skill-cleaning",
                    title: "Data Cleaning & Imputation at Scale",
                    description: "Data is messy. Learn advanced strategies for handling missing values, outliers, and inconsistent categorical data at enterprise scale.",
                    resources: [
                        { title: "Scikit-Learn: Imputation of missing values", type: "DOCUMENTATION", url: "https://scikit-learn.org/stable/modules/impute.html", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Iterative Imputer'?", options: JSON.stringify(["Deleting rows.", "A strategy that models each feature with missing values as a function of other features.", "Filling with 0.", "Using random numbers."]), correctAnswer: "A strategy that models each feature with missing values as a function of other features.", explanation: "Iterative imputer is more sophisticated than simple mean/median filling.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Dirty Data Pipeline",
                        description: "Take a dataset with 30% missing values and implement a multi-stage cleaning pipeline that restores integrity without introducing bias.",
                        requirements: JSON.stringify(["Use KNN Imputer.", "Analyze the impact of imputation on variance.", "Implement outlier detection using Isolation Forest."]),
                        order: 4
                    }
                },
                {
                    id: "ds-l1-skill-sql-ds",
                    title: "SQL for Data Science",
                    description: "The data scientist's primary tool. Master complex joins, window functions, and CTEs to extract insights directly from the warehouse.",
                    resources: [
                        { title: "Mode: SQL Tutorial", type: "COURSE", url: "https://mode.com/sql-tutorial/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "How is a WINDOW function different from a GROUP BY?", options: JSON.stringify(["It's not.", "WINDOW functions allow access to other rows in the result set without collapsing them into a single summary row.", "GROUP BY is faster.", "WINDOW functions are only for numbers."]), correctAnswer: "WINDOW functions allow access to other rows in the result set without collapsing them into a single summary row.", explanation: "Window functions are vital for time-series and ranking operations.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Warehouse Analyst",
                        description: "Write a SQL query that calculates the running total of sales and the 7-day moving average for a retail database.",
                        requirements: JSON.stringify(["Use the OVER() clause.", "Implement a self-join for comparison.", "Optimize query performance using indexes."]),
                        order: 5
                    }
                },
                {
                    id: "ds-l1-skill-viz",
                    title: "Data Visualization & Communication",
                    description: "Storytelling with data. Learn the principles of effective visualization (Tufte) and how to build interactive charts with Plotly/Seaborn.",
                    resources: [
                        { title: "Storytelling with Data (Cole Knaflic)", type: "ARTICLE", url: "https://www.storytellingwithdata.com/blog", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Data-Ink Ratio'?", options: JSON.stringify(["The price of ink.", "The proportion of ink used to present actual data vs decorations.", "A printer setting.", "A type of chart."]), correctAnswer: "The proportion of ink used to present actual data vs decorations.", explanation: "Tufte argues for maximizing the data-ink ratio for clarity.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Executive Dashboard",
                        description: "Take a complex analysis and boil it down to 3 high-impact interactive visualizations that tell a clear story.",
                        requirements: JSON.stringify(["Use Plotly for interactivity.", "Minimize non-data ink.", "Include clear annotations for key insights."]),
                        order: 6
                    }
                },
                {
                    id: "ds-l1-skill-py-internals",
                    title: "Python Internals for Data Science",
                    description: "Go beyond the basics. Learn about memory management, generators, and decorators to write efficient data processing scripts.",
                    resources: [
                        { title: "Real Python: Memory Management", type: "ARTICLE", url: "https://realpython.com/python-memory-management/", duration: 45, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Generator' in Python?", options: JSON.stringify(["A battery.", "A function that returns an iterator which yields items one at a time, saving memory.", "A type of class.", "A build tool."]), correctAnswer: "A function that returns an iterator which yields items one at a time, saving memory.", explanation: "Generators are essential for processing large datasets that don't fit in RAM.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Large-File Streamer",
                        description: "Write a Python script that processes a 10GB CSV file using generators, ensuring memory usage stays under 100MB.",
                        requirements: JSON.stringify(["Implementation using 'yield'.", "Memory profiling using 'memory_profiler'.", "Perform on-the-fly data aggregation."]),
                        order: 7
                    }
                }
            ],
            finalProject: {
                title: "MarketPulse - Real-time Consumer Intelligence",
                description: "Build a high-performance data processing engine that analyzes consumer behavior in real-time. This project integrates advanced NumPy vectorization for high-throughput calculation and Pandas for complex data orchestration.",
                requirements: [
                    "Implement a vectorized engine to calculate consumer sentiment indices in under 10ms.",
                    "Perform automated data cleaning on a 1GB+ dataset with 99.9% accuracy.",
                    "Build a multi-dimensional pivot table system for regional market analysis.",
                    "Detect and handle outliers in real-time purchase streams using Z-score logic.",
                    "Generate automated executive summaries using Pandas-to-PDF orchestration.",
                    "Achieve significant performance gains (50x+) by replacing all loops with vectorization."
                ],
                guide: [
                    "Step 1: Design the data ingestion layer using NumPy for raw numerical throughput.",
                    "Step 2: Develop the 'MarketPulse' cleaning pipeline to handle missing/noisy records.",
                    "Step 3: Build the core vectorized calculation engine for market metrics.",
                    "Step 4: Implement complex cross-joins and merge logic for multi-source data.",
                    "Step 5: Develop the automated reporting layer using Pandas styler and export tools.",
                    "Step 6: Perform a full benchmark comparison between primitive and vectorized logic."
                ],
                hints: [
                    "Use 'np.einsum' or 'np.tensordot' for the most advanced linear algebra operations.",
                    "Pandas 'query' and 'eval' can often be faster for very large DataFrames.",
                    "Avoid 'df.apply' for numerical operations; always use native vectorized functions."
                ],
                testCases: [{ name: "Throughput", verify: "Processes 1M+ records in under 500ms" }, { name: "Accuracy", verify: "Indices match gold-standard statistical baseline" }],
            }
        },
        {
            id: "ds-l2",
            title: "Intermediate Data Scientist",
            skills: [
                {
                    id: "ds-l2-skill-ml",
                    title: "Applied Machine Learning (Scikit-Learn)",
                    description: "Build predictive models. Regression, Classification, Clustering, and Evaluation metrics.",
                    resources: [
                        { title: "Hands-On Machine Learning with Scikit-Learn", type: "BOOK_SUMMARY", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "What is the difference between Supervised and Unsupervised learning?", options: JSON.stringify(["No difference.", "Supervised learning uses labeled data; Unsupervised uses unlabeled data.", "Supervised is faster.", "Unsupervised is for images only."]), correctAnswer: "Supervised learning uses labeled data; Unsupervised uses unlabeled data.", explanation: "In Supervised learning, the model learns a mapping from inputs to targets.", order: 1 }
                    ],
                    miniProject: {
                        title: "House Price Predictor",
                        description: "Build a regression model to predict housing prices.",
                        requirements: JSON.stringify(["Train a Linear Regression model.", "Evaluate using RMSE."]),
                        order: 1
                    }
                },
                {
                    id: "ds-l2-skill-ensemble",
                    title: "Ensemble Methods: XGBoost & LightGBM",
                    description: "Go beyond simple trees. Master Boosting and Bagging techniques that win Kaggle competitions. Learn about feature importance and early stopping.",
                    resources: [
                        { title: "XGBoost Documentation", type: "DOCUMENTATION", url: "https://xgboost.readthedocs.io/en/stable/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Gradient Boosting'?", options: JSON.stringify(["A type of coffee.", "An additive model that trains new models to predict the residuals (errors) of previous models.", "A manual process.", "A random search."]), correctAnswer: "An additive model that trains new models to predict the residuals (errors) of previous models.", explanation: "Boosting reduces bias by focusing on previous mistakes.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Kaggle Competitor",
                        description: "Train an XGBoost model on a tabular dataset and optimize the learning rate and tree depth for maximum accuracy.",
                        requirements: JSON.stringify(["Implement early stopping.", "Visualize feature importance.", "Achieve a Top-10% score on the validation set."]),
                        order: 2
                    }
                },
                {
                    id: "ds-l2-skill-serve",
                    title: "Model Serialization & Deployment",
                    description: "A model is useless if it's not in production. Learn how to serialize models (Pickle/Joblib) and serve them via a high-performance FastAPI server.",
                    resources: [
                        { title: "FastAPI: ML Production Guide", type: "ARTICLE", url: "https://fastapi.tiangolo.com/deployment/", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "Why use 'Joblib' over 'Pickle' for ML models?", options: JSON.stringify(["It's faster.", "It's more efficient for objects that carry large NumPy arrays.", "It's more secure.", "It's newer."]), correctAnswer: "It's more efficient for objects that carry large NumPy arrays.", explanation: "Joblib is optimized for numerical data structures common in ML.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Prediction Microservice",
                        description: "Wrap a trained Scikit-learn model in a FastAPI app, including pydantic validation for incoming inference requests.",
                        requirements: JSON.stringify(["Implement /predict endpoint.", "Include request validation.", "Containerize the app with Docker."]),
                        order: 3
                    }
                },
                {
                    id: "ds-l2-skill-tuning",
                    title: "Hyperparameter Optimization at Scale",
                    description: "Stop using GridSearch. Master Bayesian optimization and automated tuning libraries like Optuna to find the perfect model parameters in minutes.",
                    resources: [
                        { title: "Optuna: Efficient Hyperparameter Tuning", type: "DOCUMENTATION", url: "https://optuna.org/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is the advantage of 'Bayesian Optimization' over 'Random Search'?", options: JSON.stringify(["It's easier to write.", "It uses information from previous trials to pick the next set of hyperparameters, finding the optimum faster.", "It doesn't need data.", "It only works for linear models."]), correctAnswer: "It uses information from previous trials to pick the next set of hyperparameters, finding the optimum faster.", explanation: "Bayesian search is far more efficient than brute-force methods.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Optuna Optimizer",
                        description: "Run an automated hyperparameter sweep for a Random Forest model, optimizing for the F1-score across a 5-fold cross-validation.",
                        requirements: JSON.stringify(["Define a search space.", "Use Optuna Dashboard for visualization.", "Identify the best trial."]),
                        order: 4
                    }
                },
                {
                    id: "ds-l2-skill-timeseries",
                    title: "Time Series & Forecasting",
                    description: "Predict the future. Master ARIMA, Exponential Smoothing, and modern libraries like Facebook Prophet for business forecasting.",
                    resources: [
                        { title: "Forecasting: Principles and Practice", type: "BOOK_SUMMARY", url: "https://otexts.com/fpp3/", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Stationarity' in Time Series?", options: JSON.stringify(["Standing still.", "A property where statistical properties (mean, variance) do not change over time.", "A type of growth.", "A seasonal trend."]), correctAnswer: "A property where statistical properties (mean, variance) do not change over time.", explanation: "Many time series models assume stationarity or require it for accurate prediction.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Stock Volatility Radar",
                        description: "Build a forecasting model for stock prices, accounting for seasonality and trend using Prophet.",
                        requirements: JSON.stringify(["Handle missing time markers.", "Incorporate holidays/custom events.", "Evaluate using MAE (Mean Absolute Error)."]),
                        order: 5
                    }
                },
                {
                    id: "ds-l2-skill-dim",
                    title: "Dimensionality Reduction: PCA & t-SNE",
                    description: "Visualize the high-dimensional. Master Principal Component Analysis (PCA) and t-distributed Stochastic Neighbor Embedding (t-SNE) for data compression and exploration.",
                    resources: [
                        { title: "StatQuest: PCA Main Ideas", type: "VIDEO", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ", duration: 30, order: 1 }
                    ],
                    questions: [
                        { question: "What does PCA maximize?", options: JSON.stringify(["The error.", "The variance explained by each principal component.", "The number of features.", "The file size."]), correctAnswer: "The variance explained by each principal component.", explanation: "PCA tries to find the axis that retains the most information (variance).", order: 1 }
                    ],
                    miniProject: {
                        title: "The Data Map",
                        description: "Take a dataset with 50+ features and use PCA to compress it to 3 dimensions for 3D interactive visualization.",
                        requirements: JSON.stringify(["Explain 'Explained Variance Ratio'.", "Visualize clusters in 3D space.", "Compare results with t-SNE."]),
                        order: 6
                    }
                },
                {
                    id: "ds-l2-skill-rec",
                    title: "Recommender Systems",
                    description: "The engine of the internet. Learn about Collaborative Filtering, Content-Based Filtering, and Matrix Factorization (SVD).",
                    resources: [
                        { title: "Google Developers: Recommender Systems", type: "COURSE", url: "https://developers.google.com/machine-learning/recommendation", duration: 70, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Cold Start' problem?", options: JSON.stringify(["When a server is cold.", "The difficulty in recommending items to new users (or recommending new items) due to lack of historical data.", "A type of software bug.", "A network issue."]), correctAnswer: "The difficulty in recommending items to new users (or recommending new items) due to lack of historical data.", explanation: "Hybrid systems are often used to mitigate cold start issues.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Movie Engine",
                        description: "Implement a collaborative filtering recommender using the MovieLens dataset.",
                        requirements: JSON.stringify(["Build a user-item matrix.", "Implement Cosine Similarity.", "Generate Top-K recommendations."]),
                        order: 7
                    }
                }
            ],
            finalProject: {
                title: "LendWise - AI Risk Orchestration",
                description: "Architect and deploy a high-stakes credit risk assessment model. This project focuses on sophisticated feature engineering, imbalance handling, and model interpretability for enterprise lending.",
                requirements: [
                    "Implement a pipeline to handle extreme class imbalance using SMOTE and Cost-Sensitive learning.",
                    "Develop a custom feature engineering suite that extracts temporal spending patterns.",
                    "Build a voting ensemble (Random Forest, XGBoost, CatBoost) for maximum robustness.",
                    "Achieve an ROC-AUC score of >0.92 on a blinded test set.",
                    "Implement 'SHAP' or 'LIME' for model interpretability and regulatory compliance.",
                    "Automate the hyperparameter search using Bayesian Optimization (Optuna/Hyperopt)."
                ],
                guide: [
                    "Step 1: Perform deep exploratory data analysis (EDA) to find the 'signal' in the noise.",
                    "Step 2: Build the preprocessing pipeline with automated scaling and encoders.",
                    "Step 3: Implement the imbalance strategy and evaluate its impact on Precision-Recall.",
                    "Step 4: Train and stack multiple gradient-boosted trees for the lending ensemble.",
                    "Step 5: Conduct the interpretability audit to explain 'Why' the model rejects specific loans.",
                    "Step 6: Final evaluation: Perform 'Stress Testing' on the model with edge-case scenarios."
                ],
                hints: [
                    "In financial risk, the 'False Negative' cost is usually 10x higher than a 'False Positive'.",
                    "Use 'ColumnTransformer' in Scikit-Learn to keep your pipeline clean and serializable.",
                    "Always validate on a 'Time-Split' rather than a random split for financial data."
                ],
                testCases: [{ name: "Recall Score", verify: "Fraud detection recall > 85%" }, { name: "Fairness Audit", verify: "Model parity score > 90% across demographics" }],
            }
        },
        {
            id: "ds-l3",
            title: "Senior Data Scientist",
            skills: [
                {
                    id: "ds-l3-skill-dl",
                    title: "Deep Learning Foundations",
                    description: "Neural Networks from scratch (or Keras). CNNs for Image and RNNs for Sequence data.",
                    resources: [
                        { title: "Deep Learning Specialization (Andrew Ng)", type: "COURSE", url: "https://www.coursera.org/specializations/deep-learning", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Backpropagation'?", options: JSON.stringify(["A network protocol.", "The algorithm used to calculate gradients and update weights in a neural network.", "Forward pass.", "Data cleaning."]), correctAnswer: "The algorithm used to calculate gradients and update weights in a neural network.", explanation: "It applies the chain rule to minimize the loss function.", order: 1 }
                    ],
                    miniProject: {
                        title: "Digit Recognizer (MNIST)",
                        description: "Train a Convolutional Neural Network (CNN) to recognize handwritten digits.",
                        requirements: JSON.stringify(["Use Keras/TensorFlow.", "Achieve >98% accuracy.", "Visualize the confusion matrix."]),
                        order: 1
                    }
                },
                {
                    id: "ds-l3-skill-nlp",
                    title: "Natural Language Processing (NLP)",
                    description: "Text classification, Sentiment Analysis, and an introduction to Transformers.",
                    resources: [
                        { title: "Hugging Face Course", type: "DOCUMENTATION", url: "https://huggingface.co/course/chapter1/1", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'TF-IDF'?", options: JSON.stringify(["Term Frequency - Inverse Document Frequency.", "Total Frequency - ID Frequency.", "Text Format - ID Format.", "A deep learning model."]), correctAnswer: "Term Frequency - Inverse Document Frequency.", explanation: "It measures the importance of a word in a document relative to a corpus.", order: 1 }
                    ],
                    miniProject: {
                        title: "Sentiment Analysis Web App",
                        description: "Build a model to classify movie reviews.",
                        requirements: JSON.stringify(["Train a text classifier.", "Build a UI with Streamlit."]),
                        order: 2
                    }
                },
                {
                    id: "ds-l3-skill-cv-adv",
                    title: "Advanced Computer Vision: Object Detection",
                    description: "Go beyond classification. Master Object Detection (YOLO, Faster R-CNN) and Image Segmentation (U-Net) for complex visual tasks.",
                    resources: [
                        { title: "PyImageSearch: Object Detection fundamentals", type: "ARTICLE", url: "https://pyimagesearch.com/category/object-detection/", duration: 70, order: 1 }
                    ],
                    questions: [
                        { question: "What does 'YOLO' stand for in Computer Vision?", options: JSON.stringify(["You Only Live Once.", "You Only Look Once.", "Your Object Locating Optimizer.", "Yellow Object Linear Operator."]), correctAnswer: "You Only Look Once.", explanation: "YOLO is a fast, real-time object detection system that processes the whole image in one pass.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Traffic Sentinel",
                        description: "Implement a pre-trained YOLO model to detect and count vehicles in a real-time traffic video stream.",
                        requirements: JSON.stringify(["Implement bounding box visualization.", "Calculate object counts per frame.", "Optimize for real-time inference speed."]),
                        order: 3
                    }
                },
                {
                    id: "ds-l3-skill-transformers",
                    title: "Transformers & Attention Mechanisms",
                    description: "The heart of modern AI. Master the Attention mechanism, Encoder-Decoder architectures (BERT, GPT), and the 'Attention is All You Need' breakthrough.",
                    resources: [
                        { title: "The Illustrated Transformer", type: "ARTICLE", url: "https://jalammar.github.io/illustrated-transformer/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is the primary benefit of the 'Attention' mechanism?", options: JSON.stringify(["It makes models smaller.", "It allows the model to focus on specific parts of the input sequence that are most relevant to the current output.", "It removes the need for data.", "It speeds up training only."]), correctAnswer: "It allows the model to focus on specific parts of the input sequence that are most relevant to the current output.", explanation: "Attention allows models to capture long-range dependencies far better than RNNs.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Multilingual Translator",
                        description: "Fine-tune a pre-trained Transformer model from Hugging Face for a specific domain translation task (e.g., Medical English to Spanish).",
                        requirements: JSON.stringify(["Use the 'datasets' library for data loading.", "Compute BLEU scores for evaluation.", "Implement a simple inference pipeline."]),
                        order: 4
                    }
                },
                {
                    id: "ds-l3-skill-rl",
                    title: "Reinforcement Learning (RL)",
                    description: "Learning through interaction. Master Markov Decision Processes, Q-Learning, and Policy Gradients for building autonomous agents.",
                    resources: [
                        { title: "OpenAI: Spinning Up in Deep RL", type: "DOCUMENTATION", url: "https://spinningup.openai.com/en/latest/", duration: 120, order: 1 }
                    ],
                    questions: [
                        { question: "In RL, what is the 'Exploration vs. Exploitation' trade-off?", options: JSON.stringify(["Choosing between food and water.", "The balance between trying new actions to find better rewards (exploration) vs. choosing the best-known action (exploitation).", "A security term.", "A database concept."]), correctAnswer: "The balance between trying new actions to find better rewards (exploration) vs. choosing the best-known action (exploitation).", explanation: "An agent must explore to find global optima but exploit to maximize cumulative reward.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Gym Master",
                        description: "Train a Deep Q-Network (DQN) agent to play a classic Atari game or solve the 'CartPole' environment using OpenAI Gym.",
                        requirements: JSON.stringify(["Implement the 'Replay Buffer'.", "Use a target network for stability.", "Visualize the reward curve over time."]),
                        order: 5
                    }
                },
                {
                    id: "ds-l3-skill-dist-ml",
                    title: "Distributed Training at Scale",
                    description: "When one GPU isn't enough. Learn how to train massive models using data parallelism and model parallelism on Kubernetes clusters using Ray or Horovod.",
                    resources: [
                        { title: "Ray Train: Scaling Deep Learning", type: "DOCUMENTATION", url: "https://docs.ray.io/en/latest/train/train.html", duration: 80, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Data Parallelism'?", options: JSON.stringify(["Copying data multiple times.", "Splitting the training data across multiple devices, where each device has a full copy of the model.", "A type of data backup.", "Parallelizing database queries."]), correctAnswer: "Splitting the training data across multiple devices, where each device has a full copy of the model.", explanation: "Data parallelism is the most common way to speed up deep learning training.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Billion-Parameter Trainer",
                        description: "Set up a distributed training job for a BERT model across multiple virtual GPUs, measuring the speedup and scaling efficiency.",
                        requirements: JSON.stringify(["Use PyTorch Lightning for distributed logic.", "Achieve linear scaling (near-perfect).", "Handle device failures gracefully."]),
                        order: 6
                    }
                },
                {
                    id: "ds-l3-skill-ethics",
                    title: "AI Ethics & Fairness Audit",
                    description: "Build responsible AI. Master bias detection metrics, counterfactual explanations, and the ethical implications of automated decision-making.",
                    resources: [
                        { title: "Google: Responsible AI Practices", type: "DOCUMENTATION", url: "https://ai.google/responsibility/principles/", duration: 40, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Selection Bias'?", options: JSON.stringify(["Choosing a wrong model.", "Bias introduced when the sample data is not representative of the target population.", "A color choice.", "A ranking error."]), correctAnswer: "Bias introduced when the sample data is not representative of the target population.", explanation: "Selection bias can lead to models that perform poorly on specific subgroups.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Fairness Audit",
                        description: "Analyze a financial lending model for discriminatory bias and implement a remediation strategy (e.g., re-weighting) to ensure parity.",
                        requirements: JSON.stringify(["Calculate 'Equalized Odds' metric.", "Perform a 'Slice Analysis'.", "Document the trade-off between fairness and accuracy."]),
                        order: 7
                    }
                }
            ],
            finalProject: {
                title: "VisionCore - Industrial Quality Control AI",
                description: "Design and implement a computer vision system that detects manufacturing defects at scale. This project combines sophisticated CNN architectures with high-performance model optimization.",
                requirements: [
                    "Develop a custom CNN optimized for low-latency inference (MobileNet/EfficientNet).",
                    "Implement a data augmentation pipeline that simulates industrial lighting/noise.",
                    "Build a 'Transfer Learning' workflow using pre-trained ImageNet weights.",
                    "Achieve an F1-score of >0.95 on the industrial defect dataset.",
                    "Quantize the model for edge-device deployment using TensorFlow Lite.",
                    "Implement 'Grad-CAM' to visualize which part of the image triggered a 'Defect' alert."
                ],
                guide: [
                    "Step 1: Curate the defect dataset and implement strict quality-assurance labeling.",
                    "Step 2: Architect the 'VisionCore' network with a focus on spatial attention.",
                    "Step 3: Train the model using mixed-precision to accelerate convergence.",
                    "Step 4: Execute the 'Grad-CAM' audit to verify the model is looking at the defect, not the background.",
                    "Step 5: Perform post-training quantization and measure the latency-accuracy trade-off.",
                    "Step 6: Final deployment: Simulate a real-time video stream for defect flagging."
                ],
                hints: [
                    "Class imbalance is huge in manufacturing (99% perfect products); use focal loss.",
                    "Learning rate schedulers (like 'ReduceLROnPlateau') are vital for CNN stability.",
                    "Always visualize your augmentations to ensure they remain 'realistic' for the domain."
                ],
                testCases: [{ name: "Inference Latency", verify: "<50ms per frame on CPU" }, { name: "Alert Precision", verify: "False Alarm rate < 1%" }],
            }
        },
        {
            id: "ds-l4",
            title: "Principal Data Scientist",
            skills: [
                {
                    id: "ds-l4-skill-mlops",
                    title: "MLOps & Production AI",
                    description: "Deploy and monitor models. Model drift, A/B testing models, and serving at scale.",
                    resources: [
                        { title: "Machine Learning Engineering for Production (MLOps)", type: "COURSE", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'Model Serving'?", options: JSON.stringify(["Training a model.", "Making a trained model available to receive inference requests via an API.", "Saving a model to disk.", "Cleaning data."]), correctAnswer: "Making a trained model available to receive inference requests via an API.", explanation: "It bridges the gap between training and user consumption.", order: 1 }
                    ],
                    miniProject: {
                        title: "End-to-End ML Pipeline",
                        description: "Build a reproducible pipeline that covers Data Validation -> Training -> Deployment -> Monitoring.",
                        requirements: JSON.stringify(["Use tools like MLflow or TFX.", "Implement automated retraining triggers.", "Dashboard for monitoring prediction drift."]),
                        order: 1
                    }
                },
                {
                    id: "ds-l4-skill-platform",
                    title: "MLOps Platform Engineering",
                    description: "Build the factory, not just the product. Master Kubeflow, TFX, and Vertex AI for orchestrating massive machine learning workflows at enterprise scale.",
                    resources: [
                        { title: "Kubeflow: Introduction", type: "DOCUMENTATION", url: "https://www.kubeflow.org/docs/started/introduction/", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "What is a 'Feature Store'?", options: JSON.stringify(["A shop for AI.", "A centralized repository that allows teams to share, discover, and use highly curated features.", "A type of database.", "A version control system."]), correctAnswer: "A centralized repository that allows teams to share, discover, and use highly curated features.", explanation: "Feature stores ensure training-serving consistency and reduce redundant engineering.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Enterprise Feature Store",
                        description: "Design and implement a simple feature store using Redis for online serving and Parquet files for offline training, ensuring 0ms skew.",
                        requirements: JSON.stringify(["Implement a unified ingestion API.", "Design for versioned features.", "Demonstrate consistent retrieval between training and inference."]),
                        order: 2
                    }
                },
                {
                    id: "ds-l4-skill-llm-adv",
                    title: "LLM Architecture & Fine-tuning",
                    description: "Go beyond prompting. Master Retrieval-Augmented Generation (RAG), Parameter-Efficient Fine-Tuning (PEFT, LoRA), and RLHF (Reinforcement Learning from Human Feedback).",
                    resources: [
                        { title: "DeepLearning.AI: Finetuning Large Language Models", type: "COURSE", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/", duration: 90, order: 1 }
                    ],
                    questions: [
                        { question: "What is 'LoRA' (Low-Rank Adaptation)?", options: JSON.stringify(["A type of coffee.", "A technique for fine-tuning LLMs by only updating a small subset of parameters (low-rank matrices).", "A ranking algorithm.", "A network protocol."]), correctAnswer: "A technique for fine-tuning LLMs by only updating a small subset of parameters (low-rank matrices).", explanation: "LoRA dramatically reduces the memory and compute needed for fine-tuning large models.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Custom LLM Specialist",
                        description: "Implement a RAG system using a vector database (Pinecone/Chroma) and fine-tune a Llama-3 model using LoRA for a specific specialized domain.",
                        requirements: JSON.stringify(["Implement semantic search retrieval.", "Optimize the prompt context window.", "Evaluate the model's factual accuracy vs. base model."]),
                        order: 3
                    }
                },
                {
                    id: "ds-l4-skill-strategy",
                    title: "AI Strategy & Governance",
                    description: "Lead the AI revolution. Master the strategic selection of AI projects, ROI calculation, and the governance frameworks (Responsible AI) needed at the board level.",
                    resources: [
                        { title: "MIT: AI Business Strategy", type: "COURSE", url: "https://executive.mit.edu/course/artificial-intelligence-implications-for-business-strategy/a056f00000XUnX7AAL.html", duration: 180, order: 1 }
                    ],
                    questions: [
                        { question: "What is the 'Build vs Buy' dilemma in AI?", options: JSON.stringify(["Buying groceries.", "Choosing between developing custom models internally vs. using off-the-shelf APIs/SaaS.", "A hardware choice.", "A stock market term."]), correctAnswer: "Choosing between developing custom models internally vs. using off-the-shelf APIs/SaaS.", explanation: "Strategic leaders must balance custom edge (Build) with speed-to-market and cost (Buy).", order: 1 }
                    ],
                    miniProject: {
                        title: "The AI Portfolio Roadmap",
                        description: "Audit a hypothetical company's operations and design a 3-year AI roadmap, prioritizing projects based on feasibility and business impact.",
                        requirements: JSON.stringify(["Create a 'Complexity vs Impact' matrix.", "Define success metrics for each phase.", "Outline a resource/hiring plan."]),
                        order: 4
                    }
                },
                {
                    id: "ds-l4-skill-gnn",
                    title: "Graph Neural Networks (GNNs)",
                    description: "Understand the connections. Master Graph Convolutional Networks (GCNs) for social networks, molecular biology, and fraud detection maps.",
                    resources: [
                        { title: "Stanford: CS224W Machine Learning with Graphs", type: "COURSE", url: "http://web.stanford.edu/class/cs224w/", duration: 240, order: 1 }
                    ],
                    questions: [
                        { question: "In a GNN, what is 'Message Passing'?", options: JSON.stringify(["Sending emails.", "The process where nodes exchange information with their neighbors to update their own representations.", "A network protocol.", "A type of database query."]), correctAnswer: "The process where nodes exchange information with their neighbors to update their own representations.", explanation: "Message passing allows GNNs to capture the topology of the graph.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Fraud Map Detective",
                        description: "Build a GNN to detect fraudulent transactions by modeling accounts and transactions as a heterogeneous graph.",
                        requirements: JSON.stringify(["Use PyTorch Geometric.", "Implement node classification.", "Visualize the fraud clusters in the graph."]),
                        order: 5
                    }
                },
                {
                    id: "ds-l4-skill-leadership-ds",
                    title: "Technical Leadership in AI",
                    description: "Go beyond the model. Learn how to manage high-uncertainty R&D teams, bridge the gap between business and research, and drive technical excellence.",
                    resources: [
                        { title: "Harvard: Leading in the Age of AI", type: "ARTICLE", url: "https://hbr.org/2023/07/leadership-in-the-age-of-ai", duration: 50, order: 1 }
                    ],
                    questions: [
                        { question: "How do you manage 'Research Risk' in Data Science?", options: JSON.stringify(["Avoiding research.", "Using iterative experimentation gates and time-boxing highly uncertain research phases.", "Only doing simple tasks.", "Ignoring it."]), correctAnswer: "Using iterative experimentation gates and time-boxing highly uncertain research phases.", explanation: "Managing uncertainty is the core challenge of AI leadership.", order: 1 }
                    ],
                    miniProject: {
                        title: "The Research RFC",
                        description: "Write a technical proposal for a major new AI capability, addressing technical feasibility, data requirements, and risk mitigation.",
                        requirements: JSON.stringify(["Clear hypothesis.", "Detailed experiment plan.", "Analysis of potential failure modes."]),
                        order: 6
                    }
                }
            ],
            finalProject: {
                title: "Global-Node - Autonomous AI Infrastructure",
                description: "Architect a self-healing ML-Ops infrastructure that manages hundreds of models in production. Focus on automated lifecycle management, drift-based retraining, and high-availability serving.",
                requirements: [
                    "Design a multi-region model registry using MLflow or DVC.",
                    "Implement a 'Feature Store' to ensure training-serving consistency.",
                    "Build a 'Shadow Deployment' system for safe canary testing of new models.",
                    "Implement automated 'Model Drift' detection with Prometheus and Grafana alerts.",
                    "Design a Kubernetes-based serving layer that handles 10,000+ RPS.",
                    "Develop a strategic AI roadmap for enterprise-wide model governance."
                ],
                guide: [
                    "Step 1: Set up the centralized MLOps control plane for model orchestration.",
                    "Step 2: Implement the 'Feature Store' using Redis or specialized offline/online layers.",
                    "Step 3: Develop the automated CI/CD/CT (Continuous Training) pipeline.",
                    "Step 4: Architect the 'Shadow' and 'A/B' testing logic for production gates.",
                    "Step 5: Build the observability dashboard for data and concept drift.",
                    "Step 6: Final demonstration: Auto-retrain a model and deploy it without human intervention."
                ],
                hints: [
                    "Monitoring 'Data Drift' is often more important than monitoring the model once deployed.",
                    "A 'Feature Store' solves the number one cause of production ML bugs: train-serve skew.",
                    "Infrastructure as Code (Terraform) should manage your ML resources as well as your servers."
                ],
                testCases: [{ name: "Retraining Trigger", verify: "Pipeline starts automatically when drift > threshold" }, { name: "Serving Stability", verify: "99.9% uptime during model hot-swap" }],
            }
        }
    ]
};
