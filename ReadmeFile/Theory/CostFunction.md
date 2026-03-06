🔷 Why Do We Need a Cost Function?

When we build a model, we don’t know:

What should be slope?

What should be intercept?

How good is our prediction?

So we need a measurement of error.

👉 Cost Function = A tool to measure how wrong our model is.

🔶 Without Cost Function

We guess a line randomly:

𝑌
=
1
+
10
𝑋
Y=1+10X

But how do we know if it’s good or bad?

We need something that says:

❌ “This model is bad.”
✔ “This model is better.”

That “something” is the Cost Function.

🔷 What Cost Function Does

It compares:

Actual Value 
(
𝑌
)
𝑣
𝑠
Predicted Value 
(
𝑌
^
)
Actual Value (Y)vsPredicted Value (
Y
^
)

And gives one number = total error.

🔶 Most Common Cost Function (MSE)
𝐽
(
𝛽
)
=
1
𝑛
∑
(
𝑌
−
𝑌
^
)
2
J(β)=
n
1
	​

∑(Y−
Y
^
)
2

If predictions are wrong → Cost is BIG
If predictions are accurate → Cost is SMALL

🔷 Why Do We Need to Reduce Cost Function?

Because:

👉 Lower cost = better predictions
👉 Minimum cost = best possible model

Machine Learning = Finding parameters that minimize error.

🔶 Think Like This (Real Life Example)

Suppose you throw darts at a target 🎯

Far from center → high error (high cost)

Near center → low error (low cost)

Learning = adjusting throws to hit center.

🔷 What Happens When Cost is Reduced?

When cost decreases:

✔ Predictions become closer to actual values
✔ Model becomes more accurate
✔ Generalization improves
✔ Over time → best-fit model is found

🔷 Why We Need Matrix Algebra?

Matrix Algebra helps us solve all parameters together.

Instead of solving 100 equations separately, we write:

𝛽
=
(
𝑋
𝑇
𝑋
)
−
1
𝑋
𝑇
𝑌
β=(X
T
X)
−1
X
T
Y

This gives the exact solution in one computation.

Used When:

Dataset is small

Features are limited

Exact solution is possible

🔷 Why We Need Gradient Descent?

Matrix inverse becomes extremely expensive when:

Millions of rows

Thousands of features

So we don’t solve directly.

Instead we search for the minimum step by step.

🔶 Gradient Descent Idea

We start with random parameters:

𝛽
0
,
𝛽
1
=
random
β
0
	​

,β
1
	​

=random

Then repeatedly adjust them to reduce cost.

🔷 How Gradient Descent Reduces Cost?

It uses derivative of cost function:

𝛽
=
𝛽
−
𝛼
∂
𝐽
∂
𝛽
β=β−α
∂β
∂J
	​


This moves parameters in direction where error decreases fastest.

🔶 Visual Meaning of Cost Minimization
4

The algorithm moves downhill until reaching lowest error point.

🔷 How Reducing Cost Improves the Model?

Let’s see progression:

Iteration	Parameters	Cost	Prediction
Start	Random	High	Bad
Update	Adjusted	Lower	Better
More Updates	Optimized	Very Low	Accurate
Final	Optimal	Minimum	Best Fit

So model learns from mistakes.

🔷 Why Squared Error?

We square error because:

(
𝑌
−
𝑌
^
)
2
(Y−
Y
^
)
2

✔ Avoids negative cancellation
✔ Penalizes large mistakes more
✔ Makes function smooth → easier to optimize

🔷 Machine Learning in One Sentence

Machine Learning =
Choose parameters that minimize a cost function.

🔷 Matrix Algebra vs Gradient Descent Role
Method	Purpose
Matrix Algebra	Solve cost minimization directly
Gradient Descent	Search minimum iteratively
Both	Try to minimize same cost function
🔷 Why Everything in ML Depends on This?

Because almost all ML models are solving:

Minimize Error
Minimize Error

Examples:

Linear Regression → minimize MSE

Logistic Regression → minimize log loss

Neural Networks → minimize cross-entropy

SVM → minimize hinge loss

All are cost minimization problems.

🔷 Final Intuition

Cost function = teacher
Gradient descent = learning process
Parameters = student
Minimum cost = mastery

✅ Interview Answer

We use a cost function to quantify how far the model’s predictions are from actual values. Machine learning algorithms adjust model parameters to minimize this cost. Matrix algebra provides a direct mathematical solution, while gradient descent iteratively updates parameters to reach the minimum error, especially for large datasets. Reducing cost improves prediction accuracy and leads to the best-fitting model.