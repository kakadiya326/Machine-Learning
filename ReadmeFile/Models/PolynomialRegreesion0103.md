# Polynomial Regression

## What is Polynomial Regression?

### Definition

Polynomial Regression is a regression model used when the relationship between **input (X)** and **output (Y)** is **non-linear (curved)** but still predictable.

Instead of fitting a straight line:

$$
\hat{Y} = \beta_0 + \beta_1 X
$$

we fit a curve:

$$
\hat{Y} = \beta_0 + \beta_1 X + \beta_2 X^2 + \beta_3 X^3 + \dots
$$

---

# Visual Understanding

### Linear Regression (Straight Line)

Model assumes:

- Change in **Y** is constant.

### Polynomial Regression (Curved Fit)

Model allows:

- Bending curve to match real data.

---

# Why Linear Regression Sometimes Fails

Real-world relationships are rarely straight lines.

### Example

| Hours Studied | Score |
| ------------- | ----- |
| 1             | 40    |
| 2             | 55    |
| 3             | 70    |
| 4             | 82    |
| 5             | 90    |

Increase slows down later → curve shape.

A **linear model cannot capture this pattern**.

---

# Polynomial Regression Model (Mathematically)

Suppose **degree = 2**

$$
\hat{Y} = \beta_0 + \beta_1 X + \beta_2 X^2
$$

If **degree = 3**

$$
\hat{Y} = \beta_0 + \beta_1 X + \beta_2 X^2 + \beta_3 X^3
$$

---

# Important Insight ⭐

Polynomial regression is actually:

**Linear Regression on transformed features**

Because the model is still **linear in parameters (β)**.

---

# Feature Transformation

Original feature:

$$
X
$$

Create new features:

$$
X_1 = X
$$

$$
X_2 = X^2
$$

$$
X_3 = X^3
$$

Now the equation becomes:

$$
\hat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 X_3
$$

This looks exactly like **Multiple Linear Regression**.

---

# Training Process

Polynomial regression follows the same pipeline:

1. Create polynomial features  
2. Predict $\hat{Y}$  
3. Calculate residuals  
4. Compute **MSE cost**  
5. Optimize β using:
   - Matrix Algebra  
   - Gradient Descent  
6. Final curve is learned

Nothing new mathematically — only **features change**.

---

# Example Calculation

### Dataset

| X   | Y   |
| --- | --- |
| 1   | 1   |
| 2   | 4   |
| 3   | 9   |
| 4   | 16  |

This looks like:

$$
Y = X^2
$$

---

## Step 1 — Create Polynomial Features

$$
X^2 = [1,4,9,16]
$$

Design matrix:

$$
X =
\begin{bmatrix}
1 & 1 & 1 \\
1 & 2 & 4 \\
1 & 3 & 9 \\
1 & 4 & 16
\end{bmatrix}
$$

Columns represent:

- Intercept
- X
- X²

---

## Step 2 — Model

$$
\hat{Y} = \beta_0 + \beta_1 X + \beta_2 X^2
$$

---

## Step 3 — Solve

Using **Normal Equation**

$$
\beta = (X^T X)^{-1} X^T Y
$$

Result:

$$
\beta_0 = 0
$$

$$
\beta_1 = 0
$$

$$
\beta_2 = 1
$$

Final model:

$$
\hat{Y} = X^2
$$

Perfect curve learned.

---

# Polynomial vs Multiple Linear Regression

## Multiple Linear Regression

Used when **multiple different inputs affect output**.

Example:

$$
Price = f(Size, Bedrooms, Location)
$$

Model:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 X_3
$$

Each feature represents a **different real variable**.

---

## Polynomial Regression

Used when **one input behaves non-linearly**.

Example:

$$
Speed \rightarrow Fuel\ Consumption
$$

Model:

$$
Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \beta_3 X^3
$$

---

# Core Difference

| Aspect       | Multilinear            | Polynomial           |
| ------------ | ---------------------- | -------------------- |
| Inputs       | Multiple real features | One feature expanded |
| Relationship | Linear                 | Non-linear curve     |
| Purpose      | Combine variables      | Capture curvature    |
| Example      | House prediction       | Growth trend         |

---

# Why Not Always Use Multilinear Instead?

Multilinear assumes:

- Effect of feature is **linear**

But real systems may have:

- Growth acceleration
- Saturation
- Turning points

Polynomial regression can model **bending curves**.

---

# Intuition (Very Important)

Think of it this way:

- **Multilinear Regression → More dimensions**
- **Polynomial Regression → More flexibility**

---

# Cost Function

Still the same as linear regression.

$$
MSE = \frac{1}{n}\sum (Y - \hat{Y})^2
$$

Optimization methods:

- Matrix Algebra
- Gradient Descent

No change.

---

# Real-Life Applications

Polynomial regression is used in:

- Population growth modeling
- Temperature trend analysis
- Economic curve modeling
- Physics motion equations
- Demand forecasting

---

# Ultimate Understanding

Polynomial Regression is **not a new learning algorithm**.

It is:

**Linear Regression applied after creating power features**  
$(X^2, X^3, X^4 ...)$

---

# One-Line Memory Rule

**Multilinear Regression → many variables**

**Polynomial Regression → one variable behaving non-linearly**