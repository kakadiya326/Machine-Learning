# Why Log Loss is Used Instead of MSE in Logistic Regression

## 1. Goal of Classification Models

In **machine learning classification**, the model predicts **probabilities**.

### Example (Good Predictions)

| True Label | Predicted Probability |
| ---------- | --------------------- |
| 1          | 0.9                   |
| 1          | 0.8                   |
| 0          | 0.2                   |
| 0          | 0.1                   |

These predictions are **good** because the probabilities are close to the true labels.

---

### Example (Bad Predictions)

| True Label | Predicted Probability |
| ---------- | --------------------- |
| 1          | 0.2                   |
| 1          | 0.1                   |
| 0          | 0.8                   |
| 0          | 0.9                   |

These predictions are **very wrong**.

A **cost function should punish wrong predictions strongly**.

---

# Problem with Using MSE

Mean Squared Error:

$$
MSE = \frac{1}{n} \sum (y - \hat{y})^2
$$

### Example

True label:

$$
y = 1
$$

Prediction:

$$
\hat{y} = 0.1
$$

Error:

$$
(1 - 0.1)^2 = 0.81
$$

If prediction is **0.4**

$$
(1 - 0.4)^2 = 0.36
$$

The difference between **0.81 and 0.36 is not very large**.

So **MSE does not punish confident wrong predictions strongly**.

---

# Optimization Problem with MSE

In logistic regression we use a **sigmoid function**.

When MSE is used with sigmoid, the loss function becomes **non-convex**.

Meaning:

- 🚫 Many local minima
- 🚫 Gradient descent may stop early
- 🚫 Training becomes unstable

---

# Log Loss (Binary Cross Entropy)

Logistic regression uses **Log Loss**.

$$
Cost = -\frac{1}{n} \sum [y \log(p) + (1-y)\log(1-p)]
$$

Where:

- **y** = actual value
- **p** = predicted probability

---

# Why Log Loss is Better

## Case 1 — Correct Prediction

$$
y = 1
$$

$$
p = 0.9
$$

Loss:

$$
-\log(0.9) = 0.10
$$

Small penalty 👍

---

## Case 2 — Wrong Prediction

$$
y = 1
$$

$$
p = 0.1
$$

Loss:

$$
-\log(0.1) = 2.30
$$

Huge penalty 🚨

---

## Key Idea

**Log Loss strongly punishes confident wrong predictions.**

Therefore:

**Logistic Regression uses Log Loss instead of MSE.**

---

# Full Logistic Regression Calculation (Step-by-Step)

## Dataset

| Study Hours (x) | Result (y) |
| --------------- | ---------- |
| 1               | 0          |
| 2               | 0          |
| 3               | 0          |
| 4               | 1          |
| 5               | 1          |

---

# Step 1 — Model Equation

Logistic Regression model:

$$
z = b_0 + b_1 x
$$

Sigmoid function:

$$
p = \frac{1}{1 + e^{-z}}
$$

---

# Step 2 — Assume Initial Weights

$$
b_0 = -3
$$

$$
b_1 = 1
$$

---

# Step 3 — Compute z

Example for:

$$
x = 4
$$

$$
z = -3 + 1(4)
$$

$$
z = 1
$$

---

# Step 4 — Apply Sigmoid

$$
p = \frac{1}{1 + e^{-1}}
$$

$$
p \approx 0.73
$$

Prediction:

**Probability of Pass = 0.73**

---

# Step 5 — Calculate Loss

True value:

$$
y = 1
$$

Log Loss:

$$
Loss = -\log(0.73)
$$

$$
Loss = 0.31
$$

---

# Step 6 — Do for All Data

| x   | y   | z   | p    |
| --- | --- | --- | ---- |
| 1   | 0   | -2  | 0.12 |
| 2   | 0   | -1  | 0.27 |
| 3   | 0   | 0   | 0.50 |
| 4   | 1   | 1   | 0.73 |
| 5   | 1   | 2   | 0.88 |

Then compute **average log loss**.

---

# Step 7 — Reduce Loss

Parameters are updated using **Gradient Descent**.

Update rule:

$$
b_1 = b_1 - \alpha \frac{\partial L}{\partial b_1}
$$

$$
b_0 = b_0 - \alpha \frac{\partial L}{\partial b_0}
$$

Where:

- **α** = learning rate
- **L** = loss function

After many iterations:

- **b₀ → best intercept**
- **b₁ → best slope**

Then the model predicts correctly.