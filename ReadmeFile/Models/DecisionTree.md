# Building a Decision Tree Manually (Step-by-Step)

Let’s use a small dataset.

## Problem
Predict if a student will pass.

| Study Hours | Attendance | Result |
| ----------- | ---------- | ------ |
| 1           | Low        | Fail   |
| 2           | Low        | Fail   |
| 3           | Medium     | Fail   |
| 4           | Medium     | Pass   |
| 5           | High       | Pass   |
| 6           | High       | Pass   |

**Target variable**

```
Result = Pass / Fail
```

---

# Step 1 — Calculate Entropy of Root Node

Dataset:

```
Pass = 3
Fail = 3
```

Probability:

```
P(pass) = 3/6 = 0.5
P(fail) = 3/6 = 0.5
```

Entropy formula:

```
Entropy = − Σ (p_i log₂(p_i))
```

Calculation:

```
Entropy = − (0.5 log₂ 0.5 + 0.5 log₂ 0.5)
Entropy = 1
```

Meaning:

**Maximum disorder**

So we must split the dataset.

---

# Step 2 — Try Splitting Using "Attendance"

### Groups

### Low

```
Fail
Fail
```

Entropy:

```
0
```

### Medium

```
Fail
Pass
```

Entropy:

```
− (0.5 log₂ 0.5 + 0.5 log₂ 0.5) = 1
```

### High

```
Pass
Pass
```

Entropy:

```
0
```

---

# Weighted Entropy

Group sizes:

```
Low = 2
Medium = 2
High = 2
```

Formula:

```
Weighted Entropy =
(2/6 × 0) + (2/6 × 1) + (2/6 × 0)
```

Result:

```
= 0.333
```

---

# Information Gain

Formula:

```
IG = Entropy(parent) − WeightedEntropy(children)
```

Calculation:

```
IG = 1 − 0.333
IG = 0.667
```

---

# Step 3 — Compare with "Study Hours"

We must test splits like:

```
StudyHours ≤ 3.5
StudyHours ≤ 4.5
StudyHours ≤ 5.5
```

Trees evaluate **many thresholds**.

Suppose the best split is:

```
StudyHours ≤ 3.5
```

### Groups

### Group 1

```
1,2,3 → Fail
```

Entropy:

```
0
```

### Group 2

```
4,5,6 → Pass
```

Entropy:

```
0
```

---

# Weighted Entropy

```
0
```

# Information Gain

```
1 − 0 = 1
```

This is a **perfect split**.

So the tree chooses:

```
Root node = StudyHours ≤ 3.5
```

---

# Final Tree

```
StudyHours ≤ 3.5 ?
     ├─ Yes → Fail
     └─ No → Pass
```

This is a **perfect classifier** for this dataset.

---

# How Continuous Features Are Split

Continuous features (numbers) require **threshold selection**.

Example feature:

```
Age
```

Values:

```
18, 21, 25, 30, 35, 40
```

Possible splits:

```
Age ≤ 19.5
Age ≤ 23
Age ≤ 27.5
Age ≤ 32.5
Age ≤ 37.5
```

---

# Where Do These Values Come From?

They are **midpoints between sorted values**.

Example:

```
(18 + 21) / 2 = 19.5
(21 + 25) / 2 = 23
```

---

# Tree Algorithm for Continuous Features

1. Sort feature values  
2. Generate midpoints  
3. Compute information gain for each  
4. Choose the best threshold  

This is how decision trees **split numeric features mathematically**.