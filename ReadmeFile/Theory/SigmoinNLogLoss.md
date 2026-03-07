# Logistic Regression

Logistic Regression is a **classification algorithm** used to predict the probability that an input belongs to a particular class.

Instead of predicting the class directly, the model **predicts probability**, which is then converted into a class label using a threshold.

---

# 1️⃣ Logistic Regression Idea

Instead of predicting:

0 or 1


The model predicts the **probability of belonging to a class**.

### Example

| Hours Studied | Probability of Pass |
| ------------- | ------------------- |
| 1             | 0.05                |
| 2             | 0.20                |
| 3             | 0.40                |
| 4             | 0.65                |
| 5             | 0.85                |

Then we convert probability into class labels.

If P ≥ 0.5 → Pass
If P < 0.5 → Fail


---

# 2️⃣ Sigmoid Function

Logistic regression uses the **Sigmoid (Logistic) Function**.

\[
P = \frac{1}{1 + e^{-z}}
\]

Where:

\[
z = b_0 + b_1 x
\]

Full equation:

\[
P = \frac{1}{1 + e^{-(b_0 + b_1 x)}
}
\]

---

# 3️⃣ Why Sigmoid Function?

The sigmoid function converts **any real number into a value between 0 and 1**.

| Input (z) | Output (Probability) |
| --------- | -------------------- |
| -5        | 0.006                |
| -2        | 0.12                 |
| 0         | 0.50                 |
| 2         | 0.88                 |
| 5         | 0.99                 |

So the process becomes:


Linear equation → Sigmoid → Probability


---

# 4️⃣ Full Training Flow

## Step 1 — Dataset

Input feature:

X → Study hours

Output label:

Y → Pass(1) / Fail(0)


---

## Step 2 — Linear Equation

\[
z = b_0 + b_1 x
\]

---

## Step 3 — Apply Sigmoid Function

\[
P = \frac{1}{1 + e^{-z}}
\]

Now we obtain the **probability of belonging to class 1**.

---

## Step 4 — Calculate Error

Logistic regression uses **Log Loss (Binary Cross-Entropy)**.

\[
Cost = -\frac{1}{n}\sum [y \log(p) + (1-y)\log(1-p)]
\]

Why not MSE?

Because **Mean Squared Error performs poorly for classification problems**.

---

## Step 5 — Reduce Cost

Parameters are updated using **Gradient Descent**.


b0 = b0 - learning_rate × derivative
b1 = b1 - learning_rate × derivative


The model gradually learns the **best parameter values**.

---

# 5️⃣ Decision Boundary

After training, the model creates a **decision boundary** that separates classes.

Example:

x < 3.5 → Fail
x ≥ 3.5 → Pass


This separating line is called the **Decision Boundary**.

---

# 6️⃣ Final Prediction Process

Suppose a new student studies **4 hours**.

### Step 1

\[
z = b_0 + b_1 (4)
\]

### Step 2

\[
P = sigmoid(z)
\]

Example:

P = 0.72

### Step 3

0.72 ≥ 0.5 → Pass

Final Prediction:

Pass


---

# 7️⃣ Why Is It Called Regression?

Although it performs classification, the algorithm internally fits a **linear regression equation**.

\[
z = b_0 + b_1 x
\]

Then it applies a **sigmoid transformation** to convert the output into probability.

So it is called **Logistic Regression**.

---

# 8️⃣ Types of Logistic Regression

| Type                            | Classes         |
| ------------------------------- | --------------- |
| Binary Logistic Regression      | 2 classes       |
| Multinomial Logistic Regression | 3+ classes      |
| Ordinal Logistic Regression     | Ordered classes |

### Examples

Binary classification:

Spam / Not Spam

Multiclass classification:

Cat / Dog / Bird


---

# 9️⃣ Real-World Applications

Logistic regression is widely used in:

- Email spam detection
- Disease prediction
- Credit card fraud detection
- Customer churn prediction
- Pass / Fail prediction

---

# 🔟 One-Line Summary
Logistic Regression =
Linear Equation → Sigmoid Function → Probability → Class