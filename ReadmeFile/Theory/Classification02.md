# Classification in Machine Learning

## 1️⃣ What is Classification?

In Machine Learning, problems are mainly divided into **two types**.

| Type           | Output                      |
| -------------- | --------------------------- |
| Regression     | Predicts a number           |
| Classification | Predicts a category / class |

---

## Examples

| Problem                  | Type           | Output          |
| ------------------------ | -------------- | --------------- |
| Predict house price      | Regression     | 350000          |
| Predict if email is spam | Classification | Spam / Not Spam |
| Predict disease          | Classification | Sick / Healthy  |
| Predict exam result      | Classification | Pass / Fail     |

---

### Key Idea

**Classification = Predict which category something belongs to.**

---

# 2️⃣ Example Dataset

Suppose we want to **predict Pass or Fail based on study hours**.

| Study Hours (X) | Result (Y) |
| --------------- | ---------- |
| 1               | Fail       |
| 2               | Fail       |
| 3               | Fail       |
| 4               | Pass       |
| 5               | Pass       |
| 6               | Pass       |

The model should learn:

**Input → Study Hours**

**Output → Pass or Fail**

---

# 3️⃣ Problem with Linear Regression for Classification

If we try to apply **Linear Regression**, the model equation is:

\[
y = b_0 + b_1 x
\]

Example predictions might look like this:

| Hours | Prediction |
| ----- | ---------- |
| 1     | -0.2       |
| 3     | 0.3        |
| 6     | 1.4        |

---

## But Classification Needs Binary Output

For this problem we expect:

| Value | Meaning |
| ----- | ------- |
| 0     | Fail    |
| 1     | Pass    |

However **Linear Regression can output any number**:

- -0.3  
- 0.6  
- 1.8  

❌ These are **not valid probabilities**.

---

# Why This Is a Problem

Probabilities must always lie between:

\[
0 \leq P \leq 1
\]

But Linear Regression can produce values **less than 0 or greater than 1**.

So it **cannot properly represent probability for classification problems**.

---

# Conclusion

Because of this limitation, we need a model that:

- Always produces values between **0 and 1**
- Can represent **probabilities**

This leads to the **Logistic Regression model**, which uses a **Sigmoid function** to convert predictions into valid probabilities.