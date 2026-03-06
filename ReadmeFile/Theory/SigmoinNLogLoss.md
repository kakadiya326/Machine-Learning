4️⃣ Logistic Regression Idea

Instead of predicting directly:

0 or 1

We predict probability.

Example:

Hours	Probability of Pass
1	0.05
2	0.20
3	0.40
4	0.65
5	0.85

Then we convert probability to class.

if P ≥ 0.5 → Pass
if P < 0.5 → Fail
5️⃣ Sigmoid Function

Logistic regression uses Sigmoid function.

4

Formula:

𝑃
=
1
1
+
𝑒
−
𝑧
P=
1+e
−z
1
	​


where

𝑧
=
𝑏
0
+
𝑏
1
𝑥
z=b0+b1x

So full equation:

𝑃
=
1
1
+
𝑒
−
(
𝑏
0
+
𝑏
1
𝑥
)
P=
1+e
−(b0+b1x)
1
	​

6️⃣ Why Sigmoid?

Sigmoid converts any number into 0–1 range.

Input (z)	Output (Probability)
-5	0.006
-2	0.12
0	0.50
2	0.88
5	0.99

So logistic regression does:

Linear equation → Sigmoid → Probability
7️⃣ Full Training Flow

Step-by-step:

Step 1 — Dataset
X → Study hours
Y → Pass(1) / Fail(0)
Step 2 — Linear Equation
𝑧
=
𝑏
0
+
𝑏
1
𝑥
z=b0+b1x
Step 3 — Apply Sigmoid
𝑃
=
1
1
+
𝑒
−
𝑧
P=
1+e
−z
1
	​


Now we get probability.

Step 4 — Calculate Error

Logistic regression uses Log Loss (Binary Cross Entropy).

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

Why?

Because MSE works poorly for classification.

Step 5 — Reduce Cost

Parameters updated using Gradient Descent

b0 = b0 - learning_rate × derivative
b1 = b1 - learning_rate × derivative

Model slowly learns best values.

8️⃣ Decision Boundary

After training we draw a boundary.

4

Example:

x < 3.5 → Fail
x ≥ 3.5 → Pass

That separating line is called Decision Boundary.

9️⃣ Final Prediction Process

For a new student:

Study Hours = 4

Step 1

z = b0 + b1(4)

Step 2

P = sigmoid(z)

Example:

P = 0.72

Step 3

0.72 ≥ 0.5 → Pass

Final Prediction:

Pass
🔟 Why it is called Regression if it does Classification?

Because internally it still fits a linear regression equation:

z = b0 + b1x

But then applies sigmoid transformation to make it classification.

11️⃣ Types of Logistic Regression
Type	Classes
Binary Logistic Regression	2 classes
Multinomial Logistic Regression	3+ classes
Ordinal Logistic Regression	Ordered classes

Example:

Binary:

Spam / Not Spam

Multiclass:

Cat / Dog / Bird
12️⃣ Real World Uses

Logistic regression is used in:

• Email spam detection
• Disease prediction
• Credit card fraud detection
• Customer churn prediction
• Pass / Fail prediction

✅ In one line

Logistic Regression =
Linear equation → Sigmoid → Probability → Class