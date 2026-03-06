Simple Linear Regression (SLR) — Complete Guide (Concepts, Formula, Terminology, Interview-Ready)
4

Simple Linear Regression is the most basic supervised machine learning regression model. It predicts a continuous numeric value using one input feature.

1. Definition

Simple Linear Regression finds a linear relationship between:

Independent variable → X (input)

Dependent variable → Y (output)

It fits a best straight line.

Example:

Predict Salary from Experience

Experience (X)	Salary (Y)
1	20000
2	30000
3	40000
2. Main Goal

Find the best line:

𝑌
=
𝑚
𝑋
+
𝑏
Y=mX+b
𝑚
m
𝑏
b
-10
-8
-6
-4
-2
2
4
6
8
10
-10
-5
5
10
y-intercept
x-intercept

OR in ML notation:

𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
Y
^
=β
0
	​

+β
1
	​

X
3. Terminology (VERY IMPORTANT)
Symbol	Name	Meaning
X	Independent Variable	Input feature
Y	Dependent Variable	Actual output
Ŷ	Predicted Value	Model output
β₀	Intercept	Value when X=0
β₁	Slope	Change in Y when X increases
m	Slope	same as β₁
b	Intercept	same as β₀
ε	Error	Difference between actual and predicted
4. Main Equation (MODEL EQUATION)

Prediction equation:

𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
Y
^
=β
0
	​

+β
1
	​

X

Example:

𝑆
𝑎
𝑙
𝑎
𝑟
𝑦
^
=
10000
+
5000
×
𝐸
𝑥
𝑝
𝑒
𝑟
𝑖
𝑒
𝑛
𝑐
𝑒
Salary
^
	​

=10000+5000×Experience
5. Slope Formula (VERY IMPORTANT INTERVIEW FORMULA)

Slope:

𝛽
1
=
∑
(
𝑋
−
𝑋
ˉ
)
(
𝑌
−
𝑌
ˉ
)
∑
(
𝑋
−
𝑋
ˉ
)
2
β
1
	​

=
∑(X−
X
ˉ
)
2
∑(X−
X
ˉ
)(Y−
Y
ˉ
)
	​

6. Intercept Formula
𝛽
0
=
𝑌
ˉ
−
𝛽
1
𝑋
ˉ
β
0
	​

=
Y
ˉ
−β
1
	​

X
ˉ
7. Mean Formula
𝑋
ˉ
=
∑
𝑋
𝑛
X
ˉ
=
n
∑X
	​

𝑌
ˉ
=
∑
𝑌
𝑛
Y
ˉ
=
n
∑Y
	​

8. Prediction Formula
𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
Y
^
=β
0
	​

+β
1
	​

X

This is used to predict output.

9. Error (Residual)

Residual = Actual − Predicted

𝑒
𝑟
𝑟
𝑜
𝑟
=
𝑌
−
𝑌
^
error=Y−
Y
^

Example:

Actual Salary = 50000
Predicted Salary = 48000

Error = 2000

10. Cost Function (Loss Function)

Used to measure error.

Most common = Mean Squared Error (MSE)

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

Minimize error

11. Why squared error?

Because:

• Removes negative values
• Penalizes large errors more

12. How model finds best line?

Using:

Least Squares Method

Goal:

Minimize:

∑
(
𝑌
−
𝑌
^
)
2
∑(Y−
Y
^
)
2

This gives best slope and intercept.

13. Key Components Summary
Component	Meaning
Feature	Input (X)
Target	Output (Y)
Slope	Change rate
Intercept	Starting value
Prediction	Model output
Error	Difference
Cost function	Total error
14. Assumptions of Simple Linear Regression (VERY IMPORTANT)

Linear relationship exists

No outliers

Constant variance

Independent observations

15. Example Calculation

Dataset:

X	Y
1	2
2	4
3	6

Mean:

𝑋
ˉ
=
2
X
ˉ
=2
𝑌
ˉ
=
4
Y
ˉ
=4

Slope:

𝛽
1
=
2
β
1
	​

=2

Intercept:

𝛽
0
=
0
β
0
	​

=0

Equation:

𝑌
=
2
𝑋
Y=2X
-10
-8
-6
-4
-2
2
4
6
8
10
-10
-5
5
10
16. Graph Interpretation

Straight line equation:

𝑌
=
𝑚
𝑋
+
𝑏
Y=mX+b
𝑚
m
𝑏
b
-10
-8
-6
-4
-2
2
4
6
8
10
-10
-5
5
10
y-intercept
x-intercept

If slope positive → increasing line
If slope negative → decreasing line

17. Advantages

• Simple
• Fast
• Easy to interpret
• Works well with linear data

18. Disadvantages

• Only linear relationship
• Cannot handle complex patterns
• Sensitive to outliers

19. Real-world examples

Predict:

• Salary from experience
• House price from size
• Sales from advertising

20. Interview Questions & Answers
Q1: What is Simple Linear Regression?

Simple linear regression predicts a continuous output using one input variable by fitting a straight line.

Q2: What is equation?
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
Q3: What is slope?

Rate of change of Y with respect to X.

Q4: What is intercept?

Value of Y when X=0.

Q5: What is residual?

Difference between actual and predicted value.

Q6: What is cost function?

Function used to measure error (MSE).

21. Difference between statistics and ML notation

Statistics:

𝑌
=
𝑚
𝑋
+
𝑏
Y=mX+b
𝑚
m
𝑏
b
-10
-8
-6
-4
-2
2
4
6
8
10
-10
-5
5
10
y-intercept
x-intercept

Machine Learning:

𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
Y
^
=β
0
	​

+β
1
	​

X

Same meaning.

22. Code Example (Python)
from sklearn.linear_model import LinearRegression

X = [[1],[2],[3],[4]]
Y = [2,4,6,8]

model = LinearRegression()
model.fit(X,Y)

print(model.coef_)      # slope
print(model.intercept_) # intercept

print(model.predict([[5]]))
23. MOST IMPORTANT THINGS TO REMEMBER (Interview Revision)

Core formula:

𝑌
^
=
𝛽
0
+
𝛽
1
𝑋
Y
^
=β
0
	​

+β
1
	​

X

Slope formula:

𝛽
1
=
∑
(
𝑋
−
𝑋
ˉ
)
(
𝑌
−
𝑌
ˉ
)
∑
(
𝑋
−
𝑋
ˉ
)
2
β
1
	​

=
∑(X−
X
ˉ
)
2
∑(X−
X
ˉ
)(Y−
Y
ˉ
)
	​


Error formula:

𝑒
𝑟
𝑟
𝑜
𝑟
=
𝑌
−
𝑌
^
error=Y−
Y
^

Cost function:

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
24. Foundation for ALL other models

Understanding this helps learn:

• Multiple Linear Regression
• Polynomial Regression
• Logistic Regression
• Ridge, Lasso
• Neural Networks

Because all use:

Prediction
Error
Loss function
Optimization