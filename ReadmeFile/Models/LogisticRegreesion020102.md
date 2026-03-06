3️⃣ Multiclass Logistic Regression (Softmax)

Binary logistic regression:

Classes = 2

Example:

Spam / Not Spam

But sometimes we have more than 2 classes.

Example:

Image	Class
🐱	Cat
🐶	Dog
🐦	Bird

This requires Multiclass Logistic Regression.

Softmax Function

Softmax converts scores into probabilities.

Formula:

𝑃
(
𝑐
𝑙
𝑎
𝑠
𝑠
𝑖
)
=
𝑒
𝑧
𝑖
∑
𝑗
=
1
𝑘
𝑒
𝑧
𝑗
P(class
i
	​

)=
∑
j=1
k
	​

e
z
j
	​

e
z
i
	​

	​


Where

k = number of classes
Example Calculation

Suppose model outputs scores:

Cat = 2.0
Dog = 1.0
Bird = 0.1

Step 1 — Exponent

e² = 7.39
e¹ = 2.71
e⁰·¹ = 1.10

Step 2 — Sum

7.39 + 2.71 + 1.10 = 11.20

Step 3 — Probabilities

Cat:

7.39 / 11.20 = 0.66

Dog:

2.71 / 11.20 = 0.24

Bird:

1.10 / 11.20 = 0.10

Final prediction:

Cat (highest probability)
Why Softmax is useful

Softmax ensures:

All probabilities between 0 and 1
Sum of probabilities = 1

Example:

Cat = 0.66
Dog = 0.24
Bird = 0.10

Total:

1.00

Perfect probability distribution.

🔑 Final Big Picture

Binary Logistic Regression:

Linear model → Sigmoid → Probability → Class

Multiclass Logistic Regression:

Linear model → Softmax → Probability of each class → Choose highest