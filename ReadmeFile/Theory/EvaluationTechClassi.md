These topics belong to model evaluation in classification.
When you build a classifier (like Logistic Regression), you must answer one important question:

How good is the model?

Just predicting classes is not enough — we must measure performance.
That’s why we use:

1️⃣ Confusion Matrix
2️⃣ Accuracy, Precision, Recall, F1 Score
3️⃣ ROC Curve & AUC

All of these are core evaluation tools in Machine Learning.

1️⃣ Confusion Matrix (Foundation of All Metrics)

First understand the problem structure.

Suppose we are building a model to detect disease.

Actual	Prediction
Sick	Sick
Sick	Healthy
Healthy	Sick
Healthy	Healthy

We categorize predictions into 4 groups.

	Predicted Positive	Predicted Negative
Actual Positive	True Positive (TP)	False Negative (FN)
Actual Negative	False Positive (FP)	True Negative (TN)

This table is called the Confusion Matrix.

Meaning of Each Term
True Positive (TP)

Model correctly predicts positive.

Example:

Actual = Sick
Predicted = Sick

Model is correct.

True Negative (TN)

Model correctly predicts negative.

Actual = Healthy
Predicted = Healthy

Correct again.

False Positive (FP)

Model predicts positive but actually negative.

Actual = Healthy
Predicted = Sick

This is called Type I Error.

Example:

Spam filter marks normal email as spam.

False Negative (FN)

Model predicts negative but actually positive.

Actual = Sick
Predicted = Healthy

This is Type II Error.

Example:

Cancer detection model misses a cancer patient.

This can be very dangerous.

Example Confusion Matrix

Suppose we tested a model on 100 patients.

	Predicted Sick	Predicted Healthy
Sick	40	10
Healthy	5	45

So:

TP = 40
FN = 10
FP = 5
TN = 45

Everything else is calculated from this matrix.

2️⃣ Accuracy, Precision, Recall, F1 Score

These metrics measure different aspects of model performance.

Accuracy
Definition

How many predictions were correct overall.

Formula:

𝐴
𝑐
𝑐
𝑢
𝑟
𝑎
𝑐
𝑦
=
𝑇
𝑃
+
𝑇
𝑁
𝑇
𝑃
+
𝑇
𝑁
+
𝐹
𝑃
+
𝐹
𝑁
Accuracy=
TP+TN+FP+FN
TP+TN
	​


Example:

TP = 40
TN = 45
FP = 5
FN = 10
Total = 100
𝐴
𝑐
𝑐
𝑢
𝑟
𝑎
𝑐
𝑦
=
40
+
45
100
=
0.85
Accuracy=
100
40+45
	​

=0.85

Accuracy = 85%

Problem with Accuracy

Accuracy can be misleading when data is imbalanced.

Example:

1000 emails

Spam = 10
Not spam = 990

Model predicts:

All emails = Not spam

Accuracy:

990 / 1000 = 99%

But model detects zero spam.

So accuracy alone is not reliable.

Precision

Precision answers this question:

Of all predicted positives, how many were correct?

Formula:

𝑃
𝑟
𝑒
𝑐
𝑖
𝑠
𝑖
𝑜
𝑛
=
𝑇
𝑃
𝑇
𝑃
+
𝐹
𝑃
Precision=
TP+FP
TP
	​


Example:

TP = 40
FP = 5
𝑃
𝑟
𝑒
𝑐
𝑖
𝑠
𝑖
𝑜
𝑛
=
40
45
=
0.89
Precision=
45
40
	​

=0.89

Precision = 89%

When Precision Matters

Precision is important when false positives are costly.

Examples:

Spam filter

Fraud detection alerts

Recommendation systems

You don't want to wrongly flag normal items.

Recall (Sensitivity)

Recall answers:

Of all actual positives, how many did we detect?

Formula:

𝑅
𝑒
𝑐
𝑎
𝑙
𝑙
=
𝑇
𝑃
𝑇
𝑃
+
𝐹
𝑁
Recall=
TP+FN
TP
	​


Example:

TP = 40
FN = 10
𝑅
𝑒
𝑐
𝑎
𝑙
𝑙
=
40
50
=
0.80
Recall=
50
40
	​

=0.80

Recall = 80%

When Recall Matters

Recall is critical when missing positives is dangerous.

Examples:

Cancer detection

Fraud detection

Security systems

Missing a fraud or disease is worse than a false alarm.

Precision vs Recall Tradeoff

Increasing recall often reduces precision.

Example:

If model predicts everyone sick

Recall = 100%
Precision = very low

So we need balance.

F1 Score

F1 Score combines precision and recall.

Formula:

𝐹
1
=
2
×
𝑃
𝑟
𝑒
𝑐
𝑖
𝑠
𝑖
𝑜
𝑛
×
𝑅
𝑒
𝑐
𝑎
𝑙
𝑙
𝑃
𝑟
𝑒
𝑐
𝑖
𝑠
𝑖
𝑜
𝑛
+
𝑅
𝑒
𝑐
𝑎
𝑙
𝑙
F1=2×
Precision+Recall
Precision×Recall
	​


Example:

Precision = 0.89
Recall = 0.80
𝐹
1
=
0.84
F1=0.84

F1 is harmonic mean of precision and recall.

It punishes imbalance.

Summary of Metrics
Metric	Focus
Accuracy	Overall correctness
Precision	Quality of positive predictions
Recall	Ability to detect positives
F1 Score	Balance of precision & recall
3️⃣ ROC Curve & AUC

Now we move to threshold-based evaluation.

Most classifiers output probabilities, not labels.

Example from Logistic Regression:

Patient A = 0.90
Patient B = 0.70
Patient C = 0.40
Patient D = 0.10

But to decide class we choose a threshold.

Common threshold:

0.5
Threshold Effect

If threshold changes:

0.5 → moderate predictions
0.3 → more positives
0.8 → fewer positives

Changing threshold changes:

TP
FP
FN
TN

So metrics change too.

ROC Curve

ROC means:

Receiver Operating Characteristic

It plots:

X-axis = False Positive Rate (FPR)
Y-axis = True Positive Rate (Recall)

Where:

𝑇
𝑃
𝑅
=
𝑇
𝑃
𝑇
𝑃
+
𝐹
𝑁
TPR=
TP+FN
TP
	​

𝐹
𝑃
𝑅
=
𝐹
𝑃
𝐹
𝑃
+
𝑇
𝑁
FPR=
FP+TN
FP
	​


Each threshold creates one point on the graph.

4
Understanding ROC
Perfect Model

Curve goes top-left corner.

Meaning:

High TPR
Low FPR

Excellent classifier.

Random Model

Straight diagonal line.

Means predictions are random.

AUC (Area Under Curve)

AUC measures area under ROC curve.

Range:

0.5 → random model
0.7 → acceptable
0.8 → good
0.9 → excellent
1.0 → perfect

Interpretation:

Probability that model ranks a random positive
higher than a random negative.

Example:

AUC = 0.85

Means:

85% chance model ranks positive example higher.

Why ROC & AUC Are Important

They evaluate model independent of threshold.

Accuracy depends on threshold.

ROC evaluates overall ranking ability.

Final Big Picture

Model evaluation flow:

Model predictions
       ↓
Confusion Matrix
       ↓
Accuracy / Precision / Recall / F1
       ↓
ROC Curve
       ↓
AUC Score

These tools help us choose best classifier