1️⃣ What is Classification?

In Machine Learning, problems are mainly of two types:

Type	Output
Regression	Predicts a number
Classification	Predicts a category / class
Example
Problem	Type	Output
Predict house price	Regression	350000
Predict if email is spam	Classification	Spam / Not Spam
Predict disease	Classification	Sick / Healthy
Predict exam result	Classification	Pass / Fail

So:

👉 Classification = Predict which category something belongs to.

2️⃣ Example Dataset

Suppose we want to predict Pass or Fail based on study hours.

Study Hours (X)	Result (Y)
1	Fail
2	Fail
3	Fail
4	Pass
5	Pass
6	Pass

We want a model that learns:

Input → Study Hours
Output → Pass or Fail
3️⃣ Problem with Linear Regression for Classification

If we apply linear regression:

𝑦
=
𝑏
0
+
𝑏
1
𝑥
y=b0+b1x

Example prediction:

Hours	Prediction
1	-0.2
3	0.3
6	1.4

But classification should only be:

0 = Fail
1 = Pass

Linear regression may give:

-0.3
0.6
1.8

❌ This is not valid probability.

So we need something that always gives values between:

0 and 1