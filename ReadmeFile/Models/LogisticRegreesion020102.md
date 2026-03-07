# Multiclass Logistic Regression (Softmax)

Binary Logistic Regression works when the number of classes is **2**.

Example:

| Email         | Class    |
| ------------- | -------- |
| Email message | Spam     |
| Email message | Not Spam |

But many real-world problems contain **more than two classes**.

Example:

| Image | Class |
| ----- | ----- |
| 🐱     | Cat   |
| 🐶     | Dog   |
| 🐦     | Bird  |

To solve this, we use **Multiclass Logistic Regression**, which uses the **Softmax Function**.

---

# Softmax Function

Softmax converts **model scores into probabilities**.

Formula:

$$
P(class_i) =
\frac{e^{z_i}}{\sum_{j=1}^{k} e^{z_j}}
$$

Where:

- **k** = number of classes  
- **zᵢ** = score for class *i*

---

# Example Calculation

Suppose the model outputs these **scores**:

| Class | Score |
| ----- | ----- |
| Cat   | 2.0   |
| Dog   | 1.0   |
| Bird  | 0.1   |

---

## Step 1 — Exponentiation

$$
e^{2} = 7.39
$$

$$
e^{1} = 2.71
$$

$$
e^{0.1} = 1.10
$$

---

## Step 2 — Sum of Exponents

$$
7.39 + 2.71 + 1.10 = 11.20
$$

---

## Step 3 — Convert to Probabilities

### Cat

$$
P(Cat) = \frac{7.39}{11.20} = 0.66
$$

### Dog

$$
P(Dog) = \frac{2.71}{11.20} = 0.24
$$

### Bird

$$
P(Bird) = \frac{1.10}{11.20} = 0.10
$$

---

# Final Prediction

| Class | Probability |
| ----- | ----------- |
| Cat   | 0.66        |
| Dog   | 0.24        |
| Bird  | 0.10        |

Final predicted class:

**Cat** (highest probability)

---

# Why Softmax is Useful

Softmax ensures:

- All probabilities are between **0 and 1**
- The **sum of probabilities = 1**

Example:

| Class | Probability |
| ----- | ----------- |
| Cat   | 0.66        |
| Dog   | 0.24        |
| Bird  | 0.10        |

Total:

$$
0.66 + 0.24 + 0.10 = 1.00
$$

This creates a **perfect probability distribution**.

---

# Final Big Picture

## Binary Logistic Regression
