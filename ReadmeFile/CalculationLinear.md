1️⃣ Single Feature (Simple Linear Regression)
2️⃣ Multiple Features (Multilinear Regression)

For BOTH we will show:

Model Formula

Cost Function

Matrix Algebra Solution

Gradient Descent Updates (how values change step-by-step)

✅ PART 1 — SIMPLE LINEAR REGRESSION (ONE INPUT)
🔹 Step 0 — Dataset
X	Y
1	2
2	4
3	6
4	8
🔹 Step 1 — Model (Hypothesis Function)

We assume:

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

This is our learning equation.

🔹 Step 2 — Cost Function (What We Minimize)
𝐽
(
𝛽
0
,
𝛽
1
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
J(β
0
	​

,β
1
	​

)=
n
1
	​

∑(Y−
Y
^
)
2

This measures total model error.

🔹 Step 3 — Visual Idea
4

We must move the line until it fits best.

🔵 METHOD A — MATRIX ALGEBRA (DIRECT SOLUTION)
Step 4 — Build Design Matrix

We add column of 1s (for intercept):

𝑋
=
[
1
	
1


1
	
2


1
	
3


1
	
4
]
X=
	​

1
1
1
1
	​

1
2
3
4
	​

	​

𝑌
=
[
2


4


6


8
]
Y=
	​

2
4
6
8
	​

	​

Step 5 — Formula
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
Step 6 — Compute 
𝑋
𝑇
𝑋
X
T
X
𝑋
𝑇
𝑋
=
[
4
	
10


10
	
30
]
X
T
X=[
4
10
	​

10
30
	​

]
Step 7 — Inverse
(
𝑋
𝑇
𝑋
)
−
1
=
[
1.5
	
−
0.5


−
0.5
	
0.2
]
(X
T
X)
−1
=[
1.5
−0.5
	​

−0.5
0.2
	​

]
Step 8 — Compute 
𝑋
𝑇
𝑌
X
T
Y
𝑋
𝑇
𝑌
=
[
20


60
]
X
T
Y=[
20
60
	​

]
Step 9 — Final Multiply
𝛽
=
[
0


2
]
β=[
0
2
	​

]

✅ Learned Parameters:

𝛽
0
=
0
,
𝛽
1
=
2
β
0
	​

=0,β
1
	​

=2

Final Model:

𝑌
^
=
2
𝑋
Y
^
=2X
🔵 METHOD B — GRADIENT DESCENT (VALUE CHANGES ITERATIVELY)

Now we see how parameters move step-by-step.

Step 1 — Start With Guess
𝛽
0
=
0
,
 
𝛽
1
=
0
β
0
	​

=0, β
1
	​

=0

Predictions:

𝑌
^
=
0
Y
^
=0
Step 2 — Compute Gradients

Gradient formulas:

∂
𝐽
∂
𝛽
0
=
−
2
𝑛
∑
(
𝑌
−
𝑌
^
)
∂β
0
	​

∂J
	​

=−
n
2
	​

∑(Y−
Y
^
)
∂
𝐽
∂
𝛽
1
=
−
2
𝑛
∑
𝑋
(
𝑌
−
𝑌
^
)
∂β
1
	​

∂J
	​

=−
n
2
	​

∑X(Y−
Y
^
)
Step 3 — Calculate Values (Iteration 1)

Residuals:

[
2
,
4
,
6
,
8
]
[2,4,6,8]
∑
(
𝑌
−
𝑌
^
)
=
20
∑(Y−
Y
^
)=20
∑
𝑋
(
𝑌
−
𝑌
^
)
=
60
∑X(Y−
Y
^
)=60

Gradient:

∂
𝐽
∂
𝛽
0
=
−
2
4
(
20
)
=
−
10
∂β
0
	​

∂J
	​

=−
4
2
	​

(20)=−10
∂
𝐽
∂
𝛽
1
=
−
2
4
(
60
)
=
−
30
∂β
1
	​

∂J
	​

=−
4
2
	​

(60)=−30
Step 4 — Update Rule
𝛽
:
=
𝛽
−
𝛼
⋅
𝑔
𝑟
𝑎
𝑑
𝑖
𝑒
𝑛
𝑡
β:=β−α⋅gradient

Let learning rate 
𝛼
=
0.1
α=0.1

𝛽
0
=
0
−
0.1
(
−
10
)
=
1
β
0
	​

=0−0.1(−10)=1
𝛽
1
=
0
−
0.1
(
−
30
)
=
3
β
1
	​

=0−0.1(−30)=3
After Iteration 1

Model becomes:

𝑌
^
=
1
+
3
𝑋
Y
^
=1+3X

We moved closer to correct line.

Step 5 — Next Iteration (Repeat Same Process)

New predictions → new residuals → new gradient → update again.

After few iterations:

𝛽
0
→
0
β
0
	​

→0
𝛽
1
→
2
β
1
	​

→2
🔻 That is how Gradient Descent “learns”.

It walks toward minimum error.

✅ PART 2 — MULTIPLE FEATURES (MULTILINEAR REGRESSION)

Now dataset:

X₁	X₂	Y
1	2	5
2	1	6
3	2	9
4	3	13
🔹 Step 1 — Model Equation
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


Now model learns plane instead of line.

🔹 Visualization Idea
4

We now fit a surface in 3D.

🔵 MATRIX SOLUTION (MULTIPLE FEATURES)
Step 2 — Build Matrix
𝑋
=
[
1
	
1
	
2


1
	
2
	
1


1
	
3
	
2


1
	
4
	
3
]
X=
	​

1
1
1
1
	​

1
2
3
4
	​

2
1
2
3
	​

	​

𝑌
=
[
5


6


9


13
]
Y=
	​

5
6
9
13
	​

	​

Step 3 — Same Formula
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

Now matrices are larger but process IDENTICAL.

Matrix algebra gives solution directly:

𝛽
0
=
1
,
𝛽
1
=
2
,
𝛽
2
=
1
β
0
	​

=1,β
1
	​

=2,β
2
	​

=1
Final Model
𝑌
^
=
1
+
2
𝑋
1
+
1
𝑋
2
Y
^
=1+2X
1
	​

+1X
2
	​

🔵 GRADIENT DESCENT FOR MULTIPLE FEATURES

Update rule generalizes:

𝛽
𝑗
:
=
𝛽
𝑗
−
𝛼
⋅
∂
𝐽
∂
𝛽
𝑗
β
j
	​

:=β
j
	​

−α⋅
∂β
j
	​

∂J
	​


Where:

∂
𝐽
∂
𝛽
𝑗
=
−
2
𝑛
∑
𝑋
𝑗
(
𝑌
−
𝑌
^
)
∂β
j
	​

∂J
	​

=−
n
2
	​

∑X
j
	​

(Y−
Y
^
)

Each feature gets its own update.

🔥 FINAL TRAINING FLOW (REAL ML PIPELINE)
1️⃣ Assume model form (Hypothesis)
2️⃣ Start with random β values
3️⃣ Predict Ŷ
4️⃣ Compute Residuals
5️⃣ Compute Cost (MSE)
6️⃣ Adjust β using:
      → Matrix Algebra (direct)
      OR
      → Gradient Descent (iterative)
7️⃣ Repeat until Cost is minimum
8️⃣ Final β stored = trained model
9️⃣ Use model only for prediction
🎯 MOST IMPORTANT UNDERSTANDING

Matrix Algebra = Solve optimization analytically
Gradient Descent = Solve optimization numerically

Both are doing SAME JOB:

min
⁡
𝛽
𝐽
(
𝛽
)
β
min
	​

J(β)

They only differ in HOW they reach minimum.