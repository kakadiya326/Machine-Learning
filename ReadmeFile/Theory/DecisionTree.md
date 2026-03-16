# Decision Tree Classifier

## 1️⃣ What is a Decision Tree Classifier?

A **Decision Tree Classifier** is a **supervised learning algorithm** used to predict **categorical classes**.

Example problems:

| Input         | Prediction           |
| ------------- | -------------------- |
| Email text    | Spam / Not Spam      |
| Patient data  | Disease / No Disease |
| Customer data | Buy / Not Buy        |

The model makes decisions through a sequence of questions.

Example:

```
Credit Score > 700?
     ├─ Yes → Approve Loan
     └─ No
          ├─ Income > 50k?
          │      ├─ Yes → Approve
          │      └─ No → Reject
```

In Machine Learning, this rule structure is called a **Decision Tree**.

---

# 2️⃣ Structure of a Decision Tree

A decision tree has **three main components**.

### Root Node

First split of the data.

Example:

```
Age > 30 ?
```

### Decision Nodes

Intermediate questions.

Example:

```
Income > 50k ?
```

### Leaf Nodes

Final predicted class.

Example:

```
Approved
Rejected
```

---

# 3️⃣ Visual Representation

Each split divides the dataset into **smaller groups**.

Goal:

Each final node should contain **mostly one class**.

---

# 4️⃣ Training Idea (Core Principle)

Decision tree classifier works by **recursively splitting the dataset**.

Goal of each split:

**Make groups more pure**

Meaning:

Each group contains **mostly one class**.

Example dataset:

| Study Hours | Pass |
| ----------- | ---- |
| 1           | Fail |
| 2           | Fail |
| 3           | Fail |
| 4           | Pass |
| 5           | Pass |

Best split might be:

```
Study Hours ≥ 3.5
```

Result:

| Group | Result |
| ----- | ------ |
| 1,2,3 | Fail   |
| 4,5   | Pass   |

Perfect separation.

---

# 5️⃣ Measuring Purity

To find the **best split**, we measure **how pure a node is**.

Three common measures:

1. Entropy  
2. Information Gain  
3. Gini Index  

---

# 6️⃣ Entropy (Impurity Measure)

Entropy measures **uncertainty or disorder**.

Formula:

```
Entropy = − Σ (p_i log₂(p_i))
```

Where:

`p_i` = probability of class *i*

---

### Example 1 (Pure Node)

Dataset:

```
10 Pass
0 Fail
```

Probability:

```
p(pass) = 1
p(fail) = 0
```

Entropy:

```
0
```

Meaning:

**Perfectly pure**

---

### Example 2 (Mixed Node)

Dataset:

```
5 Pass
5 Fail
```

Probabilities:

```
0.5 , 0.5
```

Entropy:

```
1
```

Maximum disorder.

---

# 7️⃣ Information Gain

Information Gain tells **how much a split reduces entropy**.

Formula:

```
IG = Entropy(parent) − WeightedEntropy(children)
```

The tree chooses the split with **highest IG**.

Example

Parent node:

```
5 Pass
5 Fail
Entropy = 1
```

After split:

Group A:

```
4 Pass
1 Fail
Entropy = 0.72
```

Group B:

```
1 Pass
4 Fail
Entropy = 0.72
```

Weighted entropy:

```
0.72
```

Information gain:

```
1 - 0.72 = 0.28
```

The tree compares splits and chooses **highest IG**.

---

# 8️⃣ Gini Index

Another impurity measure.

Formula:

```
Gini = 1 − Σ (p_i²)
```

Example:

Dataset:

```
5 Pass
5 Fail
```

```
Gini = 1 − (0.5² + 0.5²)
```

```
= 1 − (0.25 + 0.25)
= 0.5
```

Lower **Gini** means **better split**.

Libraries like **scikit-learn** use **Gini by default**.

---

# 9️⃣ Training Algorithm (Step-by-Step)

Decision tree classifier training:

```
Start with full dataset
        ↓
Calculate impurity
        ↓
Find best feature split
        ↓
Divide dataset
        ↓
Repeat for each branch
        ↓
Stop when node becomes pure
```

Stopping conditions:

- max_depth reached  
- minimum samples reached  
- node becomes pure  

---

# 🔟 Prediction Process

Prediction follows the **tree rules**.

Example:

```
Age = 40
Income = 60k
Credit Score = 720
```

Tree:

```
Credit Score > 700?
       Yes → Approve
```

Prediction done.

Very fast because it's **just rule checking**.

---

# 1️⃣1️⃣ Why Decision Tree Classifiers Are Powerful

### 1️⃣ Human interpretable

Rules are easy to understand.

Example:

```
IF income > 50k AND credit > 700 → approve
```

### 2️⃣ Works with nonlinear data

No assumption of **linear relationships**.

### 3️⃣ No feature scaling needed

Unlike:

- Logistic Regression  
- SVM  

### 4️⃣ Handles categorical features

Example:

```
Color = red / blue
City = NY / LA
```

---

# 1️⃣2️⃣ Limitations

### Overfitting

Trees can memorize training data.

Example:

```
Depth = 50
```

Bad generalization.

### High Variance

Small dataset change → **different tree**.

This problem leads to ensemble models like:

- Random Forest  
- AdaBoost  
- Gradient Boosting  

---

# 1️⃣3️⃣ Controlling Overfitting (Pruning)

Common hyperparameters:

```
max_depth
min_samples_split
min_samples_leaf
max_features
```

These prevent **overly complex trees**.

---

# 1️⃣4️⃣ Real World Applications

Decision Tree Classifier used in:

- medical diagnosis  
- credit scoring  
- fraud detection  
- marketing prediction  
- recommendation systems  

---

# 1️⃣5️⃣ Where Decision Trees Fit in ML

Many modern algorithms are **based on trees**.

Tree family:

- Decision Tree  
- Random Forest  
- AdaBoost  
- Gradient Boosting  
- XGBoost  
- LightGBM  
- CatBoost  

These dominate **tabular data problems**.