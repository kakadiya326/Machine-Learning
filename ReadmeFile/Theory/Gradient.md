Gradient Descent
Gradient Descent is an iterative optimization algorithm used to minimize a differentiable function by updating its parameters in the direction of steepest descent—the negative of the gradient. It is foundational in machine learning and deep learning, where it adjusts model weights to minimize the loss or cost function and improve prediction accuracy. Originally proposed by mathematician Augustin-Louis Cauchy in 1847, it remains one of the most widely applied numerical methods in optimization. 

Key facts
Invented: 1847, by Augustin-Louis Cauchy

Goal: Minimize a cost or loss function

Core parameter: Learning rate (step size)

Main variants: Batch, Stochastic, Mini-batch gradient descent

Used in: Neural networks, regression, optimization, and AI model training

How it works
Gradient Descent begins with an initial guess for parameters and repeatedly updates them to reduce the loss. Each iteration computes the gradient—the vector of partial derivatives indicating the slope of the cost function—and subtracts a scaled version of it from current parameters. The learning rate controls how large each step is; if too large, the algorithm may overshoot the minimum, and if too small, convergence becomes slow. The process continues until changes in loss become negligible, indicating convergence toward a local or global minimum. 

Variants
Batch Gradient Descent: Uses the entire dataset to compute gradients per iteration; accurate but computationally heavy.

Stochastic Gradient Descent (SGD): Updates parameters using one sample at a time; faster but noisier convergence.

Mini-batch Gradient Descent: A compromise using small subsets of data; balances stability and speed.
Advanced extensions like Momentum, RMSprop, and Adam adaptively adjust step sizes for faster, more stable convergence in complex models. 

Challenges and significance
Gradient Descent can struggle with local minima, saddle points, and poorly chosen learning rates, but remains essential because of its simplicity, scalability, and adaptability. It underpins algorithms across domains—from training neural networks and logistic regression to large-scale optimization in computer vision, natural language processing, and reinforcement learning.