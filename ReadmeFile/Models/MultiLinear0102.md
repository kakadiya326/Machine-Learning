Multiple Linear Regression (MLR)
4
1️⃣ What is Multiple Linear Regression?

Multiple Linear Regression is an extension of Simple Linear Regression.

👉 Instead of using one input feature, it uses two or more features to predict a continuous value.

Simple Linear Regression:
𝑌
=
𝛽
0
+
𝛽
1
𝑋
Y=β
0
	​

+β
1
	​

X
Multiple Linear Regression:
𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
1
+
𝛽
2
𝑋
2
+
𝛽
3
𝑋
3
+
⋯
+
𝛽
𝑛
𝑋
𝑛
Y
^
=β
0
	​

+β
1
	​

X
1
	​

+β
2
	​

X
2
	​

+β
3
	​

X
3
	​

+⋯+β
n
	​

X
n
	​

2️⃣ Why do we need Multiple Linear Regression?

In real life, output depends on many factors, not just one.

Example: House Price Prediction
Size (X₁)	Bedrooms (X₂)	Age (X₃)	Price (Y)
1000	2	5	20L
1500	3	2	30L

Price depends on:

Size

Bedrooms

Age

So we use Multiple Linear Regression.

3️⃣ Terminology (Must Know)
Symbol	Meaning

𝑋
1
,
𝑋
2
,
…
𝑋
𝑛
X
1
	​

,X
2
	​

,…X
n
	​

	Independent variables (features)

𝑌
Y	Actual value

𝑌
^
Y
^
	Predicted value

𝛽
0
β
0
	​

	Intercept

𝛽
1
,
𝛽
2
…
β
1
	​

,β
2
	​

…	Coefficients (slopes for each feature)
Residual	
𝑌
−
𝑌
^
Y−
Y
^

Cost Function	Total model error
4️⃣ Model Equation Explained
𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
1
+
𝛽
2
𝑋
2
Y
^
=β
0
	​

+β
1
	​

X
1
	​

+β
2
	​

X
2
	​

Suppose:
𝑃
𝑟
𝑖
𝑐
𝑒
^
=
5
+
2
(
𝑆
𝑖
𝑧
𝑒
)
+
3
(
𝐵
𝑒
𝑑
𝑟
𝑜
𝑜
𝑚
𝑠
)
Price
^
=5+2(Size)+3(Bedrooms)

For:
Size = 1000, Bedrooms = 2

𝑌
^
=
5
+
2
(
1000
)
+
3
(
2
)
Y
^
=5+2(1000)+3(2)
𝑌
^
=
5
+
2000
+
6
=
2011
Y
^
=5+2000+6=2011

Each feature contributes separately.

5️⃣ Matrix Form (Very Important)

Sklearn internally uses matrix equation:

𝑌
^
=
𝑋
𝛽
Y
^
=Xβ

Where:

𝑋
=
[
1
	
𝑋
1
	
𝑋
2


1
	
𝑋
1
	
𝑋
2
]
X=[
1
1
	​

X
1
	​

X
1
	​

	​

X
2
	​

X
2
	​

	​

]
𝛽
=
[
𝛽
0


𝛽
1


𝛽
2
]
β=
	​

β
0
	​

β
1
	​

β
2
	​

	​

	​

6️⃣ How Model Finds Coefficients?

Using Normal Equation:

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

This computes:

intercept

all coefficients together

This is why sklearn gives:

coef_ = [β1, β2, β3]
intercept_ = β0
7️⃣ Cost Function (Same as Simple Regression)

We still minimize Mean Squared Error:

𝑀
𝑆
𝐸
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
MSE=
n
1
	​

∑(Y−
Y
^
)
2

Goal:
➡ Find β values that minimize total error.

8️⃣ Geometry Interpretation

Simple regression → fits a line

Multiple regression → fits a plane (or hyperplane)

Example:

1 feature → Line

2 features → Plane

3+ features → Hyperplane

9️⃣ Assumptions of Multiple Linear Regression

These are very important for interviews.

1️⃣ Linear relationship
2️⃣ No multicollinearity (features should not depend on each other)
3️⃣ Homoscedasticity (constant variance)
4️⃣ Residuals should be independent
5️⃣ Normally distributed errors

🔟 Multicollinearity (Common Problem)

If features are strongly related:

Example:

Size in sq.ft

Size in sq.meters

Model gets confused.

This causes unstable coefficients.

1️⃣1️⃣ Output Interpretation (Sklearn)

Example:

model.coef_ = [2.1, -0.5, 3.2]
model.intercept_ = 4

Means:

𝑌
=
4
+
2.1
𝑋
1
−
0.5
𝑋
2
+
3.2
𝑋
3
Y=4+2.1X
1
	​

−0.5X
2
	​

+3.2X
3
	​


Each feature has its own slope.

1️⃣2️⃣ Example Code (Python)
from sklearn.linear_model import LinearRegression

X = [
    [1000,2],
    [1500,3],
    [2000,4]
]

Y = [20,30,40]

model = LinearRegression()
model.fit(X,Y)

print("Intercept:", model.intercept_)
print("Coefficients:", model.coef_)

Prediction:

model.predict([[1800,3]])
1️⃣3️⃣ Difference: Simple vs Multiple Regression
Feature	Simple	Multiple
No. of Inputs	1	2+
Graph	Line	Plane
Equation	
𝛽
0
+
𝛽
1
𝑋
β
0
	​

+β
1
	​

X	
𝛽
0
+
𝛽
1
𝑋
1
+
𝛽
2
𝑋
2
β
0
	​

+β
1
	​

X
1
	​

+β
2
	​

X
2
	​


Real-world use	Limited	Practical
Complexity	Low	Higher
1️⃣4️⃣ Advantages

✅ Works with real-world data
✅ Captures multiple influences
✅ Easy to interpret
✅ Fast training

1️⃣5️⃣ Limitations

❌ Cannot model non-linear patterns
❌ Sensitive to correlated features
❌ Needs feature scaling sometimes

1️⃣6️⃣ Real-Life Applications

Used in:

House price prediction

Sales forecasting

Medical risk prediction

Demand prediction

Financial modeling

1️⃣7️⃣ Interview One-Line Answer

Multiple Linear Regression is a supervised learning algorithm used to predict a continuous outcome using two or more independent variables by fitting a hyperplane that minimizes the squared error between actual and predicted values.