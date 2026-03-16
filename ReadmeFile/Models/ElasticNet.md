# Elastic Net Regression

## 1️⃣ Why Elastic Net Exists

First understand the problem with **ordinary linear regression**.

Linear regression minimizes:

Loss = (1/n) * Σ (y - ŷ)²

This works well only if features are **clean and independent**.

But in real datasets we often have:

- Many features
- Highly correlated features
- Noise
- Overfitting

### Example

Predict **house price** using:

- Area
- Number of rooms
- Number of bathrooms
- House size
- Square feet

These features are **highly correlated**.

Regular linear regression becomes **unstable**.

---

# 2️⃣ Solution: Regularization

Regularization adds **penalty terms** to the loss function.

### Purpose

- Prevent overfitting
- Control coefficient size
- Improve generalization

---

# Ridge Regression (L2)

Loss function:

Loss = MSE + λ Σ β²

### Effect

- Shrinks coefficients
- But **never makes them zero**

So **Ridge keeps all features**.

---

# Lasso Regression (L1)

Loss function:

Loss = MSE + λ Σ |β|

### Effect

- Shrinks coefficients
- Some become **exactly zero**

So **Lasso performs feature selection**.

---

# 3️⃣ Problem with Ridge and Lasso

Each has limitations.

## Ridge Problem

If there are many **irrelevant features**:

Ridge keeps them all.

So the **model stays complex**.

---

## Lasso Problem

If features are **strongly correlated**:

Lasso randomly selects **one feature**  
and removes the others.

This can **lose useful information**.

---

# 4️⃣ Elastic Net Idea

Elastic Net combines **both penalties**.

Loss function:

Loss = MSE + λ₁ Σ |β| + λ₂ Σ β²

More commonly written as:

Loss = MSE + λ( α Σ |β| + (1 − α) Σ β² )

Where:

- λ = regularization strength
- α = mixing parameter

---

# Meaning of α

| α value         | Model becomes |
| --------------- | ------------- |
| 0               | Ridge         |
| 1               | Lasso         |
| Between 0 and 1 | Elastic Net   |

So **Elastic Net is flexible**.

---

# 5️⃣ Intuition Behind Elastic Net

Elastic Net achieves **two things simultaneously**.

### Feature Selection

From **L1 penalty**.

### Coefficient Shrinkage

From **L2 penalty**.

So the model:

- Removes useless features
- Reduces coefficient variance
- Handles correlated variables

---

# 6️⃣ Mathematical Objective

Final optimization problem:

min β [ (1/(2n)) Σ (yᵢ − xᵢβ)² + λ( α||β||₁ + (1 − α)||β||₂² ) ]

Where:

- ||β||₁ = **L1 norm**
- ||β||₂ = **L2 norm**

---

# 7️⃣ Geometry Intuition

Regularization works by **constraining coefficient space**.

### Ridge constraint

Circle-shaped region.

### Lasso constraint

Diamond-shaped region.

### Elastic Net

Combination of **both shapes**.

Because of this mixed constraint:

- Some coefficients become **zero**
- Others **shrink smoothly**

---

# 8️⃣ Example

Suppose model:

y = β₀ + β₁x₁ + β₂x₂

Without regularization:

```
β1 = 10
β2 = 12
```

With Elastic Net:

```
β1 = 4
β2 = 5
```

Or sometimes:

```
β1 = 0
β2 = 5
```

Meaning **feature x₁ removed**.

---

# 9️⃣ Why Elastic Net Is Powerful

Elastic Net works best when:

### Many features

Example:

```
1000+ features
```

### Highly correlated features

Example domains:

- Genomics
- Finance
- Text data

### High dimensional data

```
features > samples
```

Common in **bioinformatics and NLP**.

---

# 🔟 Training Algorithm

Elastic Net parameters are learned using:

- Gradient Descent
- Coordinate Descent

### Steps

1. Initialize coefficients
2. Compute predictions
3. Compute loss + penalties
4. Update coefficients
5. Repeat until convergence

---

# 1️⃣1️⃣ Elastic Net vs Other Regression Models

| Model             | Feature Selection | Handles Correlation |
| ----------------- | ----------------- | ------------------- |
| Linear Regression | ❌                 | ❌                   |
| Ridge             | ❌                 | ✅                   |
| Lasso             | ✅                 | ❌                   |
| Elastic Net       | ✅                 | ✅                   |

Elastic Net combines **the best of both worlds**.

---

# 1️⃣2️⃣ Example in Python

Using **scikit-learn**

```python
from sklearn.linear_model import ElasticNet

model = ElasticNet(alpha=1.0, l1_ratio=0.5)

model.fit(X, y)

print(model.coef_)
print(model.intercept_)
```

### Parameters

- **alpha** = λ (regularization strength)
- **l1_ratio** = α (mix between L1 and L2)

---

# 1️⃣3️⃣ When to Use Elastic Net

Use Elastic Net when:

- Dataset has **many features**
- Features are **correlated**
- Need **feature selection**
- Ridge or Lasso **alone not working well**

---

# 1️⃣4️⃣ Real World Applications

Elastic Net is widely used in:

- Genomics
- Stock prediction
- Text classification
- Image recognition
- Marketing analytics

Especially when **number of features is very large**.

---

# Final Intuition

Elastic Net is basically:

```
Linear Regression
+ L1 penalty (feature selection)
+ L2 penalty (stability)
```

So it creates a **balanced regularized model**.