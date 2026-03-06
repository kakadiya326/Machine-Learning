1️⃣ Why Log Loss is used instead of MSE
First recall our goal

In Machine Learning classification we predict probability.

Example:

True Label	Predicted Probability
1	0.9
1	0.8
0	0.2
0	0.1

These predictions are good.

But look at bad predictions:

True Label	Predicted Probability
1	0.2
1	0.1
0	0.8
0	0.9

These are very wrong.

A cost function should punish wrong predictions strongly.

If we use MSE
𝑀𝑆𝐸=1𝑛∑(𝑦−𝑦^)2
MSE=n1∑(y−y^)2
Example:

True label = 1

Prediction = 0.1

Error:

(
1
−
0.1
)
2
=
0.81
(1−0.1)
2
=0.81

But prediction 0.4:

(
1
−
0.4
)
2
=
0.36
(1−0.4)
2
=0.36

Difference is not very large.

MSE does not punish confident wrong predictions strongly.

Problem with MSE in Logistic Regression

Because of sigmoid curve, MSE creates non-convex optimization.

Meaning:

🚫 Many local minimum
🚫 Gradient descent may stop early
🚫 Training becomes unstable

Log Loss (Binary Cross Entropy)

Logistic regression uses:

𝐶
𝑜
𝑠
𝑡
=
−
1
𝑛
∑
[
𝑦
log
⁡
(
𝑝
)
+
(
1
−
𝑦
)
log
⁡
(
1
−
𝑝
)
]
Cost=−
n
1
	​

∑[ylog(p)+(1−y)log(1−p)]

Where

y = actual value
p = predicted probability
Why Log Loss is better

Case 1: Correct prediction

y = 1
p = 0.9

Loss:

−
log
⁡
(
0.9
)
=
0.10
−log(0.9)=0.10

Small penalty 👍

Case 2: Wrong prediction

y = 1
p = 0.1

Loss:

−
log
⁡
(
0.1
)
=
2.30
−log(0.1)=2.30

Huge penalty 🚨

So log loss strongly punishes confident wrong predictions.

Key idea

Log loss encourages model to predict true probabilities.

That is why logistic regression uses Log Loss.

2️⃣ Full Logistic Regression Calculation (Step-by-Step)

Dataset:

Study Hours (x)	Result (y)
1	0
2	0
3	0
4	1
5	1
Step 1 — Model Equation

Logistic regression:

𝑧
=
𝑏
0
+
𝑏
1
𝑥
z=b0+b1x
𝑝
=
1
1
+
𝑒
−
𝑧
p=
1+e
−z
1
	​

Step 2 — Assume Initial Weights
b0 = -3
b1 = 1
Step 3 — Compute z

Example:

For x = 4

𝑧
=
−
3
+
1
(
4
)
z=−3+1(4)
𝑧
=
1
z=1
Step 4 — Apply Sigmoid
𝑝
=
1
1
+
𝑒
−
1
p=
1+e
−1
1
	​

𝑝
=
0.73
p=0.73

Prediction:

Probability of Pass = 0.73
Step 5 — Calculate Loss

True value:

y = 1

Log loss:

𝐿
𝑜
𝑠
𝑠
=
−
log
⁡
(
0.73
)
Loss=−log(0.73)
𝐿
𝑜
𝑠
𝑠
=
0.31
Loss=0.31
Step 6 — Do for All Data
x	y	z	p
1	0	-2	0.12
2	0	-1	0.27
3	0	0	0.50
4	1	1	0.73
5	1	2	0.88

Then compute average log loss.

Step 7 — Reduce Loss

Parameters updated using Gradient Descent

Update rule:

𝑏
1
=
𝑏
1
−
𝛼
∂
𝐿
∂
𝑏
1
b1=b1−α
∂b1
∂L
	​

𝑏
0
=
𝑏
0
−
𝛼
∂
𝐿
∂
𝑏
0
b0=b0−α
∂b0
∂L
	​


After many iterations:

b0 → best intercept
b1 → best slope

Then model predicts correctly.