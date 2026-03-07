# Linear Regression Explained

This document explains Linear Regression from scratch including:

- Simple Linear Regression (Single Feature)
- Multiple Linear Regression (Multiple Features)
- Model Formula
- Cost Function
- Matrix Algebra Solution (Normal Equation)
- Gradient Descent Optimization

---

# 1. Simple Linear Regression (Single Feature)

## Dataset

| X   | Y   |
| --- | --- |
| 1   | 2   |
| 2   | 4   |
| 3   | 6   |
| 4   | 8   |

---

# Step 1 — Model (Hypothesis Function)

We assume the relationship between X and Y is linear.

Model equation:

Ŷ = β0 + β1X

Where

- β0 = Intercept
- β1 = Slope
- Ŷ = Predicted value

---

# Step 2 — Cost Function

We minimize prediction error using **Mean Squared Error (MSE)**.

J(β0, β1) = (1/n) Σ (Y − Ŷ)²

Where

- J = Cost function
- n = number of samples
- Y = actual value
- Ŷ = predicted value

Goal:

minimize J(β)

---

# Step 3 — Visual Idea

Linear regression tries to move a line until it fits the data best.

Example visualization:

Points:
(1,2)
(2,4)
(3,6)
(4,8)

Best fit line:

Ŷ = 2X

---

# METHOD A — Matrix Algebra (Normal Equation)

## Step 4 — Design Matrix

Add a column of 1s for the intercept.

X =

|1 1|
|1 2|
|1 3|
|1 4|

Y =

|2|
|4|
|6|
|8|

---

## Step 5 — Normal Equation

β = (XᵀX)⁻¹ XᵀY

---

## Step 6 — Compute XᵀX

XᵀX =

|4 10|
|10 30|

---

## Step 7 — Matrix Inverse

(XᵀX)⁻¹ =

|1.5  -0.5|
|-0.5  0.2|

---

## Step 8 — Compute XᵀY

XᵀY =

|20|
|60|

---

## Step 9 — Final Multiplication

β =

|0|
|2|

---

## Learned Parameters

β0 = 0  
β1 = 2  

Final Model

Ŷ = 2X

---

# METHOD B — Gradient Descent

Instead of solving directly, we iteratively update parameters.

---

## Step 1 — Initial Guess

β0 = 0  
β1 = 0  

Predictions

Ŷ = 0

---

## Step 2 — Gradient Formulas

dJ/dβ0 = -(2/n) Σ(Y − Ŷ)

dJ/dβ1 = -(2/n) Σ X(Y − Ŷ)

---

## Step 3 — First Iteration

Residuals

[2,4,6,8]

Sum of residuals

Σ(Y − Ŷ) = 20

Weighted sum

ΣX(Y − Ŷ) = 60

Gradients

dJ/dβ0 = -10  
dJ/dβ1 = -30  

---

## Step 4 — Update Rule

β := β − α × gradient

Learning rate

α = 0.1

Updates

β0 = 0 − 0.1(-10) = 1  
β1 = 0 − 0.1(-30) = 3  

---

## Model After Iteration 1

Ŷ = 1 + 3X

After several iterations:

β0 → 0  
β1 → 2  

This is how Gradient Descent learns.

---

# 2. Multiple Linear Regression

Now the dataset has multiple features.

## Dataset

| X1  | X2  | Y   |
| --- | --- | --- |
| 1   | 2   | 5   |
| 2   | 1   | 6   |
| 3   | 2   | 9   |
| 4   | 3   | 13  |

---

# Step 1 — Model Equation

Ŷ = β0 + β1X1 + β2X2

Now the model learns a **plane instead of a line**.

---

# Matrix Solution

## Step 2 — Design Matrix

X =

|1 1 2|
|1 2 1|
|1 3 2|
|1 4 3|

Y =

|5|
|6|
|9|
|13|

---

## Step 3 — Normal Equation

β = (XᵀX)⁻¹ XᵀY

---

## Final Parameters

β0 = 1  
β1 = 2  
β2 = 1  

---

## Final Model

Ŷ = 1 + 2X1 + 1X2

---

# Gradient Descent for Multiple Features

General update rule

βj := βj − α × (∂J/∂βj)

Where

∂J/∂βj = -(2/n) Σ Xj (Y − Ŷ)

Each feature has its own parameter update.

---

# Final Machine Learning Training Flow

1. Assume model form (Hypothesis)
2. Initialize β parameters
3. Predict Ŷ
4. Compute residuals
5. Compute cost (MSE)
6. Update parameters using
   - Matrix Algebra (direct solution)
   - Gradient Descent (iterative optimization)
7. Repeat until cost is minimized
8. Store final β values
9. Use trained model for prediction

---

# Key Insight

Matrix Algebra and Gradient Descent solve the **same optimization problem**.

Both try to minimize:

min J(β)

Difference:

Matrix Algebra → Analytical solution  
Gradient Descent → Numerical optimization