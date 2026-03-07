# Gradient Descent

Gradient Descent is an **iterative optimization algorithm** used to minimize a differentiable function by updating its parameters in the direction of **steepest descent** (the negative of the gradient).

It is one of the **most fundamental algorithms in Machine Learning and Deep Learning**, where it adjusts model weights to minimize the **loss or cost function** and improve prediction accuracy.

Gradient Descent was originally proposed by **Augustin-Louis Cauchy in 1847** and remains one of the most widely used numerical optimization methods.

---

# Key Facts

| Property | Description |
|---|---|
| Invented | 1847 |
| Inventor | Augustin-Louis Cauchy |
| Goal | Minimize a cost or loss function |
| Core Parameter | Learning Rate (step size) |
| Common Variants | Batch, Stochastic, Mini-batch |
| Used In | Neural networks, regression, optimization, AI training |

---

# How Gradient Descent Works

Gradient Descent starts with an **initial guess for model parameters**.

Then it repeatedly updates them to reduce the **cost function**.

At each iteration:

1. Compute the **gradient** of the cost function.
2. The gradient indicates the **direction of steepest increase**.
3. Move in the **opposite direction** (steepest decrease).
4. Repeat until the cost stops decreasing.

Mathematically:

\[
\theta = \theta - \alpha \nabla J(\theta)
\]

Where:

- \( \theta \) = Model parameters  
- \( \alpha \) = Learning rate  
- \( \nabla J(\theta) \) = Gradient of cost function  

---

# Role of Learning Rate

The **learning rate** determines the step size of parameter updates.

| Learning Rate | Effect |
|---|---|
| Too Large | Overshoots minimum, may diverge |
| Too Small | Converges very slowly |
| Proper Value | Efficient convergence |

Choosing the right learning rate is critical.

---

# Convergence

The algorithm continues updating parameters until:

- The **cost function stops decreasing**, or
- The **gradient becomes very small**.

At this point the algorithm has reached:

- A **local minimum**, or
- A **global minimum**.

---

# Variants of Gradient Descent

## Batch Gradient Descent

Uses the **entire dataset** to compute the gradient at each step.

### Characteristics

- Stable updates
- Accurate gradient estimate
- Computationally expensive for large datasets

---

## Stochastic Gradient Descent (SGD)

Updates parameters **using one training example at a time**.

### Characteristics

- Faster updates
- Noisy convergence
- Can escape shallow local minima

---

## Mini-batch Gradient Descent

Uses **small batches of data** to compute gradients.

### Characteristics

- Balanced approach
- Faster than batch gradient descent
- More stable than SGD

This is the **most commonly used method in practice**.

---

# Advanced Gradient Descent Extensions

Several modern optimizers improve Gradient Descent performance.

| Method | Idea |
|---|---|
| Momentum | Uses past gradients to accelerate learning |
| RMSprop | Adapts learning rate per parameter |
| Adam | Combines Momentum + RMSprop |

These optimizers improve **speed and stability** when training deep neural networks.

---

# Challenges of Gradient Descent

Gradient Descent may encounter several issues:

| Problem | Explanation |
|---|---|
| Local Minima | Algorithm may stop at non-global minimum |
| Saddle Points | Flat regions slow convergence |
| Learning Rate Sensitivity | Wrong rate causes divergence or slow learning |
| High Dimensionality | Optimization becomes more complex |

Despite these challenges, Gradient Descent remains the **core optimization technique in machine learning**.

---

# Importance in Machine Learning

Gradient Descent is used to train many models:

- Linear Regression
- Logistic Regression
- Neural Networks
- Deep Learning models
- Support Vector Machines
- Reinforcement Learning systems

It enables models to **learn optimal parameters from data**.

---

# Simple Intuition

Think of Gradient Descent as **walking downhill in fog**.

You cannot see the whole landscape, but you:

1. Check the slope under your feet.
2. Take a step downhill.
3. Repeat until you reach the lowest point.

That lowest point is the **minimum of the cost function**.

---

# Final Insight

Gradient Descent is the **engine of learning in Machine Learning**.

It allows models to automatically adjust parameters so that predictions become **more accurate over time**.