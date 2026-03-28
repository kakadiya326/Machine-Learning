# AdaBoost (Adaptive Boosting)

AdaBoost stands for **Adaptive Boosting**.  
It is an **ensemble learning algorithm** that combines multiple **weak learners** to create a **strong predictive model**.

Unlike Random Forest, AdaBoost trains models **sequentially**, where each new model focuses on the **errors of previous models**.

---

# 1. Core Idea of AdaBoost

AdaBoost combines many **weak learners** into one strong model.

A weak learner is usually a **Decision Stump**.

### Decision Stump

A decision stump is a **decision tree with depth = 1**.

Example:


StudyHours > 3 ?
├── Yes → Pass
└── No → Fail


One stump is weak, but **many stumps together create a strong model**.

---

# 2. Why AdaBoost Was Created

Single models often struggle with complex patterns.

AdaBoost improves performance by repeatedly focusing on **difficult samples**.

Idea:


Train model
↓
Find mistakes
↓
Focus more on mistakes
↓
Train new model
↓
Repeat


Each new learner **focuses on previously misclassified samples**.

---

# 3. AdaBoost Training Process (High Level)

Step-by-step process:

1. Assign **equal weights to all training samples**
2. Train a **weak learner**
3. Calculate **prediction errors**
4. Increase weight of **misclassified samples**
5. Train next learner using updated weights
6. Combine learners using **weighted voting**

Key idea:

Hard samples receive **more attention** in later models.

---

# 4. Example Dataset

Binary classification dataset:

| Sample | Feature | Label |
| ------ | ------- | ----- |
| 1      | 1       | +1    |
| 2      | 2       | +1    |
| 3      | 3       | -1    |
| 4      | 4       | -1    |

Initial weights:


w1 = w2 = w3 = w4 = 0.25


---

# 5. First Weak Learner

Suppose the first stump rule:


Feature ≤ 2 → +1
Feature > 2 → -1


Predictions:

| Sample | True | Pred |
| ------ | ---- | ---- |
| 1      | +1   | +1   |
| 2      | +1   | +1   |
| 3      | -1   | -1   |
| 4      | -1   | -1   |

Error:


Error = 0


This is rare in practice.

Usually some errors occur.

---

# 6. Example with Errors

Predictions:

| Sample | True | Pred |
| ------ | ---- | ---- |
| 1      | +1   | +1   |
| 2      | +1   | -1 ❌ |
| 3      | -1   | -1   |
| 4      | -1   | -1   |

Error rate:


error = 0.25


---

# 7. Model Weight Calculation

Each weak learner receives a **weight** based on its error.

Formula:


α = 1/2 * ln((1 - error) / error)


Example:


error = 0.25

α = 0.5 * ln(3)

α ≈ 0.55


Meaning:

Better models receive **higher weight**.

---

# 8. Updating Sample Weights

AdaBoost increases weights of **misclassified samples**.

Rules:


Correct prediction → decrease weight
Wrong prediction → increase weight


Example after normalization:

| Sample | New Weight |
| ------ | ---------- |
| 1      | 0.16       |
| 2      | 0.50       |
| 3      | 0.17       |
| 4      | 0.17       |

Notice:

Sample **2 weight increased**, so the next model focuses on it.

---

# 9. Training Second Weak Learner

Now the dataset effectively emphasizes **sample 2**.

Second stump may learn a rule like:


Feature ≤ 3 → +1
Feature > 3 → -1


This process repeats multiple times.

---

# 10. Final Prediction

Final prediction is calculated using **weighted sum of learners**.

Formula:


F(x) = sign( Σ αm * hm(x) )


Where:


αm = weight of learner
hm(x) = prediction of learner


Example:

| Model | Weight | Prediction |
| ----- | ------ | ---------- |
| Tree1 | 0.55   | +1         |
| Tree2 | 0.40   | -1         |
| Tree3 | 0.60   | +1         |

Weighted vote:


0.55(+1) + 0.40(-1) + 0.60(+1)
= +0.75


Final class:


+1


---

# 11. Visualization Idea


Model 1 → makes mistakes
↓
Model 2 → focuses on those mistakes
↓
Model 3 → focuses on remaining errors


Each new model **corrects previous errors**.

---

# 12. Key Characteristics of AdaBoost

AdaBoost uses:

- Sequential learning
- Weighted samples
- Weighted voting
- Weak learners (usually decision stumps)

---

# 13. Important Hyperparameters

In **scikit-learn**:

| Parameter      | Meaning                                  |
| -------------- | ---------------------------------------- |
| n_estimators   | Number of weak learners                  |
| learning_rate  | Controls contribution of each model      |
| base_estimator | Base model (usually decision tree stump) |

Example:

```python
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier

model = AdaBoostClassifier(
    base_estimator=DecisionTreeClassifier(max_depth=1),
    n_estimators=50,
    learning_rate=1.0
)

model.fit(X_train, y_train)
14. AdaBoost for Regression

AdaBoost can also solve regression problems.

It is called:

AdaBoost.R2

Goal:

Predict continuous values.

Examples:

House price prediction

Temperature prediction

Sales forecasting

Stock value prediction

15. Regression Error Calculation

For regression, error is calculated using absolute difference.

Formula:

error_i = |yi - ŷi|

Where:

yi = actual value
ŷi = predicted value

Example:

Actual	Prediction	Error
100	110	10
200	195	5
150	130	20

Large errors receive higher weights.

16. Final Prediction in AdaBoost Regression

Final prediction uses weighted average or weighted median.

Example:

Model	Prediction	Weight
Tree1	200000	0.5
Tree2	210000	0.3
Tree3	205000	0.2

Final prediction:

Weighted Average ≈ 204000
17. Python Example (Regression)
from sklearn.ensemble import AdaBoostRegressor
from sklearn.tree import DecisionTreeRegressor

model = AdaBoostRegressor(
    base_estimator=DecisionTreeRegressor(max_depth=3),
    n_estimators=100,
    learning_rate=0.1
)

model.fit(X_train, y_train)

pred = model.predict(X_test)
18. AdaBoost vs Random Forest
Feature	Random Forest	AdaBoost
Training	Parallel	Sequential
Idea	Bagging	Boosting
Goal	Reduce variance	Reduce bias
Trees	Independent trees	Correct previous mistakes
19. Advantages of AdaBoost

High accuracy

Works well with weak learners

Captures complex patterns

Less overfitting than a single tree

20. Limitations of AdaBoost

AdaBoost is sensitive to:

Noise

Outliers

Mislabelled data

Because misclassified samples receive higher weights repeatedly.

21. Modern Algorithms Inspired by AdaBoost

Many powerful algorithms extend the ideas of boosting:

Gradient Boosting

XGBoost

LightGBM

CatBoost

These algorithms dominate Kaggle competitions and industry ML systems.