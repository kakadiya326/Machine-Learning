# Model Evaluation for Classification

When building a **classification model** (like Logistic Regression), we must answer an important question:

> **How good is the model?**

Simply predicting classes is not enough.  
We need **evaluation metrics** to measure performance.

Key evaluation tools:

1. Confusion Matrix  
2. Accuracy, Precision, Recall, F1 Score  
3. ROC Curve & AUC  

These are **core evaluation techniques in Machine Learning**.

---

# 1️⃣ Confusion Matrix

The **Confusion Matrix** is the foundation of all classification metrics.

### Example Problem

Suppose we are building a model to **detect disease**.

| Actual | Prediction |
|---|---|
| Sick | Sick |
| Sick | Healthy |
| Healthy | Sick |
| Healthy | Healthy |

Predictions fall into **four categories**.

| | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | True Positive (TP) | False Negative (FN) |
| **Actual Negative** | False Positive (FP) | True Negative (TN) |

This table is called the **Confusion Matrix**.

---

# Meaning of Each Term

### True Positive (TP)

Model correctly predicts positive.

Example:

Actual = Sick  
Predicted = Sick  

✔ Correct prediction

---

### True Negative (TN)

Model correctly predicts negative.

Actual = Healthy  
Predicted = Healthy  

✔ Correct prediction

---

### False Positive (FP)

Model predicts **positive but actually negative**.

Actual = Healthy  
Predicted = Sick  

This is called **Type I Error**.

Example:

Spam filter marking a normal email as spam.

---

### False Negative (FN)

Model predicts **negative but actually positive**.

Actual = Sick  
Predicted = Healthy  

This is **Type II Error**.

Example:

Cancer detection model missing a cancer patient.

⚠ This can be extremely dangerous.

---

# Example Confusion Matrix

Suppose we test a model on **100 patients**.

| | Predicted Sick | Predicted Healthy |
|---|---|---|
| Sick | 40 | 10 |
| Healthy | 5 | 45 |

So:

TP = 40  
FN = 10  
FP = 5  
TN = 45  

All other metrics are calculated from this matrix.

---

# 2️⃣ Evaluation Metrics

## Accuracy

### Definition

Accuracy measures **overall correctness**.

\[
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
\]

### Example

TP = 40  
TN = 45  
FP = 5  
FN = 10  

Total = 100

\[
Accuracy = \frac{40 + 45}{100} = 0.85
\]

Accuracy = **85%**

---

# Problem with Accuracy

Accuracy can be misleading for **imbalanced datasets**.

### Example

1000 emails:

Spam = 10  
Not spam = 990  

Model predicts:

All emails = Not spam

Accuracy:

\[
990/1000 = 99\%
\]

But the model detects **zero spam**.

Therefore **accuracy alone is not reliable**.

---

# Precision

Precision answers:

> Of all predicted positives, how many were correct?

\[
Precision = \frac{TP}{TP + FP}
\]

### Example

TP = 40  
FP = 5  

\[
Precision = \frac{40}{45} = 0.89
\]

Precision = **89%**

---

### When Precision Matters

Precision is important when **false positives are costly**.

Examples:

- Spam filtering
- Fraud detection alerts
- Recommendation systems

You don't want to incorrectly flag normal items.

---

# Recall (Sensitivity)

Recall answers:

> Of all actual positives, how many did we correctly detect?

\[
Recall = \frac{TP}{TP + FN}
\]

### Example

TP = 40  
FN = 10  

\[
Recall = \frac{40}{50} = 0.80
\]

Recall = **80%**

---

### When Recall Matters

Recall is critical when **missing positives is dangerous**.

Examples:

- Cancer detection
- Fraud detection
- Security systems

Missing a real case is worse than a false alarm.

---

# Precision vs Recall Tradeoff

Increasing recall usually **reduces precision**.

Example:

If the model predicts **everyone as sick**:

Recall = 100%  
Precision = Very Low

So we need a balance.

---

# F1 Score

F1 Score combines **Precision and Recall**.

\[
F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}
\]

### Example

Precision = 0.89  
Recall = 0.80  

\[
F1 \approx 0.84
\]

F1 Score = **0.84**

F1 is the **harmonic mean** of precision and recall.

It penalizes imbalance between them.

---

# Summary of Metrics

| Metric | Focus |
|---|---|
| Accuracy | Overall correctness |
| Precision | Quality of positive predictions |
| Recall | Ability to detect positives |
| F1 Score | Balance between precision and recall |

---

# 3️⃣ ROC Curve & AUC

Most classifiers output **probabilities**, not class labels.

Example from Logistic Regression:

| Patient | Probability |
|---|---|
| A | 0.90 |
| B | 0.70 |
| C | 0.40 |
| D | 0.10 |

To convert probabilities into classes, we choose a **threshold**.

Common threshold:

\[
0.5
\]

---

# Threshold Effect

Changing threshold changes predictions:

| Threshold | Effect |
|---|---|
| 0.5 | Moderate predictions |
| 0.3 | More positives |
| 0.8 | Fewer positives |

This changes:

- TP
- FP
- FN
- TN

Therefore metrics change too.

---

# ROC Curve

ROC stands for:

**Receiver Operating Characteristic**

It plots:

X-axis → **False Positive Rate (FPR)**  
Y-axis → **True Positive Rate (TPR)**

### True Positive Rate

\[
TPR = \frac{TP}{TP + FN}
\]

### False Positive Rate

\[
FPR = \frac{FP}{FP + TN}
\]

Each threshold produces **one point on the ROC curve**.

---

# Understanding ROC

### Perfect Model

Curve goes to **top-left corner**.

Meaning:

- High TPR
- Low FPR

Excellent classifier.

---

### Random Model

Diagonal line.

Means predictions are **random guesses**.

---

# AUC (Area Under Curve)

AUC measures the **area under the ROC curve**.

Range:

| AUC | Interpretation |
|---|---|
| 0.5 | Random model |
| 0.7 | Acceptable |
| 0.8 | Good |
| 0.9 | Excellent |
| 1.0 | Perfect |

---

# AUC Interpretation

AUC represents the probability that the model ranks:

**A random positive sample higher than a random negative sample.**

Example:

AUC = **0.85**

Meaning:

There is an **85% chance the model ranks a positive case higher than a negative one**.

---

# Why ROC & AUC Are Important

Accuracy depends on a **specific threshold**.

ROC and AUC evaluate **model performance across all thresholds**.

They measure the **ranking ability of the classifier**.

---

# Final Big Picture

Model evaluation workflow:
