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
                        { title: "Pandas: 10 minutes to pandas", type: "DOCUMENTATION", url: "https://pandas.pydata.org/docs/user_guide/10min.html", duration: 20, order: 1 },
                        { title: "Data Cleaning with Pandas", type: "ARTICLE", url: "https://realpython.com/python-data-cleaning-numpy-pandas/", duration: 45, order: 2 }
                    ],
                    questions: [
                        { question: "What is the main 2D data structure in Pandas?", options: JSON.stringify(["Series", "DataFrame", "Table", "Grid"]), correctAnswer: "DataFrame", explanation: "A DataFrame is a 2D labeled data structure with columns of potentially different types.", order: 1 },
                        { question: "How do you read a CSV file into a DataFrame?", options: JSON.stringify(["pd.read_file()", "pd.read_csv()", "pd.open_csv()", "pd.load()"]), correctAnswer: "pd.read_csv()", explanation: "read_csv is the most common function used to load tabular data.", order: 2 },
                        { question: "What does 'df.head()' do?", options: JSON.stringify(["Shows the last 5 rows.", "Shows the first 5 rows.", "Calculates the mean.", "Deletes the header."]), correctAnswer: "Shows the first 5 rows.", explanation: "Head() is vital for a quick peek at the data.", order: 3 },
                        { question: "Which method is used to handle missing values by filling them with a specific value?", options: JSON.stringify(["dropna()", "fillna()", "replace()", "clean()"]), correctAnswer: "fillna()", explanation: "fillna allows you to replace NaN values with 0, mean, or any other value.", order: 4 },
                        { question: "What is the difference between 'loc' and 'iloc'?", options: JSON.stringify(["No difference.", "loc uses labels; iloc uses integer positions.", "loc is faster.", "iloc is only for rows."]), correctAnswer: "loc uses labels; iloc uses integer positions.", explanation: "loc is label-based indexing, whereas iloc is integer-location based.", order: 5 },
                        { question: "How do you filter rows where the 'age' column is greater than 30?", options: JSON.stringify(["df['age'] > 30", "df.filter(30)", "df[df['age'] > 30]", "df.where(30)"]), correctAnswer: "df[df['age'] > 30]", explanation: "This is boolean indexing, creating a mask to filter the DataFrame.", order: 6 },
                        { question: "What does 'df.describe()' provide?", options: JSON.stringify(["Column names.", "Technical data types.", "Summary statistics (mean, std, min, max).", "A list of strings."]), correctAnswer: "Summary statistics (mean, std, min, max).", explanation: "Describe provides a statistical overview of numerical columns.", order: 7 },
                        { question: "How do you group data by a specific column and calculate the sum?", options: JSON.stringify(["df.summarize()", "df.groupby('column').sum()", "df.total()", "pd.group()"]), correctAnswer: "df.groupby('column').sum()", explanation: "Groupby is the core of the split-apply-combine pattern in Pandas.", order: 8 },
                        { question: "What is a 'Series' in Pandas?", options: JSON.stringify(["A 1D labeled array.", "A type of chart.", "A database connection.", "A 3D object."]), correctAnswer: "A 1D labeled array.", explanation: "A DataFrame is essentially a collection of Series objects (columns).", order: 9 },
                        { question: "How do you drop a column named 'temp'?", options: JSON.stringify(["df.remove('temp')", "df.drop('temp', axis=1)", "df.delete('temp')", "del df['temp']"]), correctAnswer: "df.drop('temp', axis=1)", explanation: "axis=1 specifies that we are dropping a column, not a row.", order: 10 },
                        { question: "What does 'df.isnull().sum()' show?", options: JSON.stringify(["Total number of rows.", "Count of missing values in each column.", "The sum of all numbers.", "An error report."]), correctAnswer: "Count of missing values in each column.", explanation: "Highly useful for initial data quality assessment.", order: 11 },
                        { question: "How do you rename a column 'old_name' to 'new_name'?", options: JSON.stringify(["df.rename(columns={'old_name': 'new_name'})", "df.change_name()", "df.name = 'new'", "pd.rename()"]), correctAnswer: "df.rename(columns={'old_name': 'new_name'})", explanation: "The rename method uses a dictionary to map old names to new ones.", order: 12 },
                        { question: "What is 'Melting' a DataFrame?", options: JSON.stringify(["Deleting data.", "Unpivoting a DataFrame from wide format to long format.", "Combining tables.", "Sorting rows."]), correctAnswer: "Unpivoting a DataFrame from wide format to long format.", explanation: "Melting is common for preparing data for visualization libraries.", order: 13 },
                        { question: "How do you merge two DataFrames on a common column?", options: JSON.stringify(["df1 + df2", "pd.merge(df1, df2, on='key')", "df1.join(df2)", "pd.combine()"]), correctAnswer: "pd.merge(df1, df2, on='key')", explanation: "Merge functions like SQL JOINs.", order: 14 },
                        { question: "Purpose of 'df.T'?", options: JSON.stringify(["Total.", "Transpose (swaps rows and columns).", "Technical data.", "Time-series."]), correctAnswer: "Transpose (swaps rows and columns).", explanation: "T is an attribute that returns the transposed DataFrame.", order: 15 }
                    ],
                    miniProject: {
                        title: "The Titanic Survival Analyst",
                        description: "Analyze the classic Titanic dataset to find predictors of survival using advanced Pandas techniques.",
                        requirements: JSON.stringify(["Load and clean the dataset (handle missing 'Age').", "Create new features like 'FamilySize'.", "Use pivot tables to analyze survival by Class and Gender.", "Detect and handle outliers in 'Fare'."]),
                        guide: JSON.stringify([
                            "Step 1: Download the dataset and load it into a Pandas DataFrame.",
                            "Step 2: Use 'df.isnull()' to identify columns with missing data.",
                            "Step 3: Impute missing 'Age' values using the median of each Passenger Class.",
                            "Step 4: Use 'pd.cut()' to bin 'Age' into categories (Child, Adult, Senior).",
                            "Step 5: Generate a report showing survival rate per embarkation point."
                        ]),
                        hints: JSON.stringify([
                            "The 'Cabin' column has many missing values; consider dropping it or extracting the Deck letter.",
                            "Use 'df.groupby' for almost all passenger profile analysis.",
                            "Check for correlations using 'df.corr()'."
                        ]),
                        stuckLinks: JSON.stringify([
                            { title: "Pandas Cheat Sheet", url: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf" },
                            { title: "Kaggle: Titanic Tutorial", url: "https://www.kaggle.com/c/titanic" }
                        ]),
                        testCases: JSON.stringify([{ name: "Data Cleaning", verify: "No Null values in 'Age' column" }, { name: "Feature Engineering", verify: "FamilySize column exists and is accurate" }]),
                        order: 2
                    }
                }
            ]
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
                        description: "Build a regression model to predict housing prices based on features like square footage and location.",
                        requirements: JSON.stringify(["Train a Linear Regression model.", "Evaluate using RMSE.", "Tune hyperparameters using GridSearch."]),
                        order: 1
                    }
                },
                {
                    id: "ds-l2-skill-feat",
                    title: "Feature Engineering & Selection",
                    description: "Select the most important variables. Dimensionality reduction (PCA) and Feature scaling.",
                    resources: [
                        { title: "Feature Engineering for ML", type: "ARTICLE", url: "https://www.trainindata.com/post/feature-engineering-integration-and-selection", duration: 60, order: 1 }
                    ],
                    questions: [
                        { question: "Why do we normalize data?", options: JSON.stringify(["To remove data.", "To ensure all features contribute equally to the distance calculation.", "To make data bigger.", "To encrypt data."]), correctAnswer: "To ensure all features contribute equally to the distance calculation.", explanation: "Algorithms like KNN and SVM are sensitive to the scale of input features.", order: 1 }
                    ],
                    miniProject: {
                        title: "Credit Card Fraud Detection",
                        description: "Detect fraudulent transactions in a highly imbalanced dataset.",
                        requirements: JSON.stringify(["Handle class imbalance (SMOTE).", "Use PCA for visualization.", "Optimize for Recall."]),
                        order: 2
                    }
                }
            ]
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
                        description: "Build a model to classify movie reviews and deploy it as a simple Streamlit app.",
                        requirements: JSON.stringify(["Train a text classifier (Naive Bayes or LSTM).", "Build a UI with Streamlit.", "Allow user input."]),
                        order: 2
                    }
                }
            ]
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
                }
            ]
        }
    ]
};
