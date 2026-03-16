# Tree Pruning

Pruning means **cutting unnecessary branches**.

## Goal

- Reduce model complexity
- Improve generalization

Two main types.

---

# 1️⃣ Pre-Pruning (Early Stopping)

Stop tree growth early.

### Common Rules

```
max_depth = 5
min_samples_split = 10
min_samples_leaf = 5
```

Example:

```
If depth reaches 5 → stop splitting
```

### Advantages

- Fast  
- Simple  

### Disadvantage

- May stop too early

---

# 2️⃣ Post-Pruning (Cost Complexity Pruning)

Tree grows **fully first**.

Then **weak branches are removed**.

### Idea

If removing a branch **improves validation performance → prune it**.

Used in algorithms like **CART**.

---

# Cost Function

```
Cost = Error(tree) + α × NumberOfLeaves
```

Where:

- **α** controls complexity penalty  
- Higher **α → smaller tree**

---

# Example of Pruning

### Before Pruning

```
Age < 30?
   ├─ Income < 40k?
   │      ├─ City = NY → Buy
   │      └─ City = LA → Buy
   └─ Income > 40k → Buy
```

This branch is unnecessary because **all outcomes = Buy**.

### After Pruning

```
Age < 30 → Buy
```

Tree becomes **simpler**.

---

# Full Decision Tree Learning Pipeline

```
Dataset
   ↓
Calculate impurity (Entropy / Gini)
   ↓
Try all feature splits
   ↓
Choose best split
   ↓
Repeat recursively
   ↓
Stop condition reached
   ↓
Pruning (optional)
   ↓
Final decision tree
```

---

# Why Trees Are Important in Modern ML

Tree models are foundation for many powerful algorithms:

- Decision Tree
- Random Forest
- Gradient Boosting
- XGBoost
- LightGBM
- CatBoost
- AdaBoost

These models dominate **structured / tabular datasets**.

---

# Final Intuition

Decision trees learn rules like:

```
IF condition1 AND condition2 AND condition3
THEN class
```

That makes them:

- interpretable
- flexible
- powerful