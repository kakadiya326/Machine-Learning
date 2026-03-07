# Multiple Linear Regression (MLR)

## 1. What is Multiple Linear Regression?

Multiple Linear Regression is an extension of **Simple Linear Regression**.

Instead of using **one input feature**, it uses **two or more features** to predict a **continuous value**.

### Simple Linear Regression

$$
Y = \beta_0 + \beta_1 X
$$

### Multiple Linear Regression

$$
\hat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 X_3 + \dots + \beta_n X_n
$$

---

# 2. Why Do We Need Multiple Linear Regression?

In real life, output depends on **many factors**, not just one.

### Example: House Price Prediction

| Size (X₁) | Bedrooms (X₂) | Age (X₃) | Price (Y) |
| --------- | ------------- | -------- | --------- |
| 1000      | 2             | 5        | 20L       |
| 1500      | 3             | 2        | 30L       |

Price depends on:

- Size
- Bedrooms
- Age

So we use **Multiple Linear Regression**.

---

# 3. Terminology (Must Know)

| Symbol                  | Meaning                                |
| ----------------------- | -------------------------------------- |
| $X_1, X_2, ..., X_n$    | Independent variables (features)       |
| $Y$                     | Actual value                           |
| $\hat{Y}$               | Predicted value                        |
| $\beta_0$               | Intercept                              |
| $\beta_1, \beta_2, ...$ | Coefficients (slopes for each feature) |
| Residual                | $Y - \hat{Y}$                          |
| Cost Function           | Total model error                      |

---

# 4. Model Equation Explained

$$
\hat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2
$$

### Example

$$
\hat{Price} = 5 + 2(Size) + 3(Bedrooms)
$$

For:

Size = 1000  
Bedrooms = 2

$$
\hat{Y} = 5 + 2(1000) + 3(2)
$$

$$
\hat{Y} = 5 + 2000 + 6 = 2011
$$

Each feature contributes **separately**.

---

# 5. Matrix Form (Very Important)

Scikit-learn internally uses **matrix notation**:

$$
\hat{Y} = X\beta
$$

Where:

$$
X =
\begin{bmatrix}
1 & X_1 & X_2 \\
1 & X_1 & X_2
\end{bmatrix}
$$

$$
\beta =
\begin{bmatrix}
\beta_0 \\
\beta_1 \\
\beta_2
\end{bmatrix}
$$

---

# 6. How Model Finds Coefficients

Using the **Normal Equation**:

$$
\beta = (X^T X)^{-1} X^T Y
$$

This computes:

- intercept
- all coefficients together

That is why **scikit-learn returns**


coef_ = [β1, β2, β3]
intercept_ = β0


---

# 7. Cost Function (Same as Simple Regression)

We minimize **Mean Squared Error (MSE)**.

$$
MSE = \frac{1}{n} \sum (Y - \hat{Y})^2
$$

Goal:

Find **β values** that minimize the total error.

---

# 8. Geometry Interpretation

Simple Regression → **Line**

Multiple Regression → **Plane or Hyperplane**

Example:

| Features    | Shape      |
| ----------- | ---------- |
| 1 feature   | Line       |
| 2 features  | Plane      |
| 3+ features | Hyperplane |

---

# 9. Assumptions of Multiple Linear Regression

Important for interviews.

1. Linear relationship
2. No multicollinearity
3. Homoscedasticity (constant variance)
4. Independent residuals
5. Normally distributed errors

---

# 10. Multicollinearity (Common Problem)

If features are strongly related:

Example:

- Size in **square feet**
- Size in **square meters**

The model becomes **confused**, causing unstable coefficients.

---

# 11. Output Interpretation (Scikit-learn)

Example:
model.coef_ = [2.1, -0.5, 3.2]
model.intercept_ = 4



Model equation becomes:

$$
Y = 4 + 2.1X_1 - 0.5X_2 + 3.2X_3
$$

Each feature has **its own slope**.

---

# 12. Example Code (Python)

```python
from sklearn.linear_model import LinearRegression

X = [
    [1000,2],
    [1500,3],
    [2000,4]
]

Y = [20,30,40]

model = LinearRegression()
model.fit(X,Y)

print("Intercept:", model.intercept_)
print("Coefficients:", model.coef_)

# Prediction
model.predict([[1800,3]])