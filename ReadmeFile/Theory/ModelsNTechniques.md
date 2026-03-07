# Machine Learning: Models vs Techniques

Machine Learning can be broadly understood as a combination of **Models** and **Techniques**.

- **Models** → Algorithms that learn patterns from data  
- **Techniques** → Methods used to improve, evaluate, or prepare data for models

---

# 1. Models (Algorithms)

Models are the **actual learning algorithms** that make predictions.

---

## A. Regression Models

Used when the **output is a continuous numeric value**.

Examples:

- Simple Linear Regression
- Multiple Linear Regression
- Polynomial Regression
- Elastic Net Regression
- AdaBoost Regression
- Random Forest Regression

---

## B. Classification Models

Used when the **output is a category or class label**.

Examples:

- Logistic Regression
- Decision Tree Classifier
- Random Forest Classifier
- AdaBoost Classifier

---

## C. Ensemble Models

These models **combine multiple algorithms** to improve prediction accuracy.

Examples:

- Random Forest
- AdaBoost
- Bagging-based models

---

# 2. Techniques (Support Methods)

Techniques are **methods that help models perform better**.

They may help with:

- preventing overfitting
- preparing data
- evaluating performance
- improving accuracy

---

## A. Regularization Techniques

Used to **prevent overfitting** by penalizing large model coefficients.

Examples:

- L1 Regularization (Lasso)
- L2 Regularization (Ridge)
- Elastic Net

---

## B. Encoding Techniques

Used to **convert categorical variables into numeric form** so models can process them.

Examples:

- Label Encoding
- One Hot Encoding

---

## C. Performance Evaluation Techniques

Used to **measure how well a model performs**.

Examples:

- Confusion Matrix
- Accuracy
- Precision
- Recall
- F1 Score

---

## D. Ensemble Techniques

Methods used to **combine multiple models** to improve predictions.

Examples:

- Bagging
- Boosting
- Ensemble Learning

> Note: Models like **Random Forest** and **AdaBoost** are created using these ensemble techniques.

---

# 3. Final Table: Models vs Techniques

| Topic | Type | Category |
|------|------|----------|
| Simple Linear Regression | Model | Regression |
| Multiple Linear Regression | Model | Regression |
| Polynomial Regression | Model | Regression |
| Logistic Regression | Model | Classification |
| Decision Tree | Model | Both |
| Random Forest | Model | Ensemble |
| AdaBoost | Model | Ensemble |
| AdaBoost Classifier | Model | Classification |
| AdaBoost Regression | Model | Regression |
| Elastic Net | Model + Technique | Regression |
| L1 Regularization | Technique | Regularization |
| L2 Regularization | Technique | Regularization |
| Bagging | Technique | Ensemble |
| Ensemble Learning | Technique | Ensemble |
| Confusion Matrix | Technique | Evaluation |
| Performance Metrics | Technique | Evaluation |
| Label Encoding | Technique | Data Preprocessing |
| One Hot Encoding | Technique | Data Preprocessing |

---

# 4. Easy Way to Remember (Interview Trick)

**Models → Learn from data**

**Techniques → Help models learn better**

Examples:

- Model → Logistic Regression  
  Technique → One Hot Encoding  

- Model → Random Forest  
  Technique → Bagging  

- Model → Linear Regression  
  Technique → L1 / L2 Regularization  

---

# 5. Short Interview Answer

Machine learning consists of **models and techniques**.  
Models are algorithms such as linear regression, logistic regression, decision trees, random forests, and AdaBoost that learn patterns from data. Techniques like regularization, encoding, ensemble methods, and performance metrics help improve model accuracy, prevent overfitting, and evaluate performance.