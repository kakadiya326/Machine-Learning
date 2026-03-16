# Random Forest

## 1️⃣ What is Ensemble Learning?

**Ensemble = Combination of multiple models**

Instead of using one model, we combine many models.

Idea:

Weak models + Weak models + Weak models  
↓  
Strong model

### Real-life analogy

Imagine asking **one doctor vs 10 doctors** for diagnosis.

- 1 doctor → may be wrong  
- 10 doctors → majority decision → more reliable  

This idea is called **Ensemble Learning**.

One of the most popular ensemble algorithms is:

**Random Forest**

---

# 2️⃣ What is Random Forest?

Random Forest is basically:

```
Many Decision Trees
        +
Randomness
        +
Averaging predictions
```

Instead of building **one decision tree**, we build **many trees**.

### Example

Tree predictions:

```
Tree 1 → Pass
Tree 2 → Pass
Tree 3 → Fail
Tree 4 → Pass
Tree 5 → Pass
```

Final prediction:

```
Majority vote → Pass
```

---

# 3️⃣ Why Random Forest Was Invented

Decision Trees have two big problems.

## Problem 1 — Overfitting

A single tree can **memorize training data**.

Example:

```
Depth = 25
Training accuracy = 100%
Test accuracy = poor
```

---

## Problem 2 — High Variance

Small change in data → completely different tree.

Example:

```
Remove 1 sample
Tree structure changes entirely
```

Random Forest solves this by **averaging many trees**.

---

# 4️⃣ Core Idea of Random Forest

Random Forest improves prediction using **two types of randomness**.

---

## 1️⃣ Bootstrap Sampling

Create multiple datasets from the original data.

Example dataset:

```
1 2 3 4 5 6 7 8
```

Random samples **with replacement**:

```
Dataset 1 → 1 3 4 4 6 7 8 8
Dataset 2 → 2 2 3 5 6 6 7 8
Dataset 3 → 1 1 2 4 5 6 8 8
```

Each dataset trains **one decision tree**.

This process is called:

**Bagging (Bootstrap Aggregation)**

---

## 2️⃣ Random Feature Selection

When splitting nodes, the tree **does not consider all features**.

Instead it selects a **random subset of features**.

Example features:

- Age
- Salary
- Education
- City
- Experience
- CreditScore

Instead of using all features, a split might randomly choose:

```
Salary
Experience
City
```

This ensures trees are **different from each other**.

---

# 5️⃣ Training Process of Random Forest

Step-by-step algorithm:

### Step 1
Take original dataset.

### Step 2
Create bootstrap samples.

### Step 3
Train a decision tree on each sample.

### Step 4
At each split choose a random subset of features.

### Step 5
Repeat for many trees (100–1000).

### Step 6
Combine predictions.

---

# 6️⃣ How Predictions Are Made

## Classification

Use **majority voting**.

Example:

```
Tree outputs:

Spam
Spam
Not Spam
Spam
Spam
```

Final prediction:

```
Spam
```

---

## Regression

Use **average prediction**.

Example:

```
Tree predictions:

210000
220000
215000
205000
```

Final prediction:

```
Average = 212500
```

---

# 7️⃣ Visualization Idea

Imagine **many trees voting together**.

Each tree gives a prediction →  
The **majority decision becomes the final result**.

---

# 8️⃣ Why Random Forest Works (Key Insight)

Decision trees have **high variance**.

Meaning predictions change a lot depending on training data.

Random Forest reduces variance using **averaging**.

Mathematically:

```
Variance_ensemble = Variance_tree / N
```

Where:

```
N = number of trees
```

So:

```
More trees → more stable model
```

---

# 9️⃣ Important Hyperparameters

Common parameters in **scikit-learn**.

## n_estimators

Number of trees.

Example:

```
n_estimators = 100
```

---

## max_depth

Maximum depth of each tree.

Controls **overfitting**.

---

## max_features

Number of features considered at each split.

Common rule:

```
sqrt(total_features)
```

---

## min_samples_split

Minimum samples required to split a node.

---

# 🔟 Advantages of Random Forest

### High accuracy

Works well on many problems.

### Handles nonlinear relationships

No linear assumptions required.

### Works with large datasets

Scales well.

### Handles missing data

More robust than single trees.

### Feature importance

Random Forest can measure **feature importance**.

Example:

```
Age → 0.45 importance
Income → 0.30
Education → 0.15
City → 0.10
```

---

# 1️⃣1️⃣ Limitations

### Less interpretable

Many trees make the model complex.

### Slower than a single tree

More computation required.

### Large memory usage

Storing hundreds of trees.

---

# 1️⃣2️⃣ Example in Python

Using **scikit-learn**

```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=100,
    max_depth=5,
    random_state=42
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)
```

---

# 1️⃣3️⃣ Where Random Forest Is Used

Random Forest works great for **tabular data**.

Common applications:

- Fraud detection
- Customer churn prediction
- Credit risk scoring
- Medical diagnosis
- Stock prediction
- Recommendation systems

---

# Final Intuition

```
Random Forest =
Many Decision Trees
       +
Bootstrap sampling
       +
Random feature selection
       +
Voting / Averaging
```

This makes the model:

- More stable
- Less overfitting
- Higher accuracy