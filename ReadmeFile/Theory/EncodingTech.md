# 📊 Categorical Encoding in Machine Learning

------------------------------------------------------------------------

## 🔥 1️⃣ Why Encoding is Needed

Machine Learning models understand only:

-   Numbers
-   Mathematical relationships

But real-world data contains:

-   Names
-   Cities
-   Categories
-   Labels

### ❌ Problem

Color = Red, Blue, Green

Model cannot understand text.

------------------------------------------------------------------------

### ❌ Wrong Approach (Label Encoding directly)

Red = 0\
Blue = 1\
Green = 2

👉 Model assumes: Green \> Blue \> Red (False relationship)

------------------------------------------------------------------------

### ✅ Solution

Convert categories → numbers without introducing false meaning

👉 This process is called Categorical Encoding

------------------------------------------------------------------------

## 🧠 2️⃣ Types of Categorical Data

### 🔹 Nominal Data (No Order)

Examples: - Colors (Red, Blue, Green) - Cities - Countries

------------------------------------------------------------------------

### 🔹 Ordinal Data (Has Order)

Examples: - Low \< Medium \< High - Grade A \< Grade B \< Grade C

------------------------------------------------------------------------

## ⚙️ 3️⃣ Encoding Techniques

------------------------------------------------------------------------

## 🔹 1. Label Encoding

Example: Red → 0\
Blue → 1\
Green → 2

``` python
from sklearn.preprocessing import LabelEncoder

data = ["Red", "Blue", "Green"]

le = LabelEncoder()
encoded = le.fit_transform(data)

print(encoded)
```

------------------------------------------------------------------------

## 🔹 2. One-Hot Encoding

Example: Red → \[1,0,0\]\
Blue → \[0,1,0\]\
Green → \[0,0,1\]

``` python
from sklearn.preprocessing import OneHotEncoder
import numpy as np

data = np.array(["Red", "Blue", "Green"]).reshape(-1, 1)

ohe = OneHotEncoder(sparse=False)
encoded = ohe.fit_transform(data)

print(encoded)
```

------------------------------------------------------------------------

## 🔹 3. Ordinal Encoding

Example: Low → 1\
Medium → 2\
High → 3

``` python
from sklearn.preprocessing import OrdinalEncoder
import numpy as np

data = np.array(["Low", "Medium", "High"]).reshape(-1, 1)

oe = OrdinalEncoder(categories=[["Low", "Medium", "High"]])
encoded = oe.fit_transform(data)

print(encoded)
```

------------------------------------------------------------------------

## 🔹 4. Binary Encoding

``` python
import pandas as pd
from category_encoders import BinaryEncoder

df = pd.DataFrame({"Color": ["Red", "Blue", "Green"]})

encoder = BinaryEncoder(cols=["Color"])
encoded = encoder.fit_transform(df)

print(encoded)
```

------------------------------------------------------------------------

## 🔹 5. Target Encoding

``` python
import pandas as pd
from category_encoders import TargetEncoder

df = pd.DataFrame({
    "City": ["A", "B", "A", "B"],
    "Salary": [50000, 60000, 55000, 65000]
})

encoder = TargetEncoder(cols=["City"])
df["City_encoded"] = encoder.fit_transform(df["City"], df["Salary"])

print(df)
```

------------------------------------------------------------------------

## 🔹 6. Frequency Encoding

``` python
import pandas as pd

df = pd.DataFrame({"Color": ["Red", "Blue", "Red", "Green", "Red"]})

freq = df["Color"].value_counts()
df["Color_encoded"] = df["Color"].map(freq)

print(df)
```

------------------------------------------------------------------------

## 🎯 When to Use What

-   Nominal → One-Hot Encoding\
-   Ordinal → Ordinal Encoding\
-   Target → Label Encoding\
-   High Cardinality → Target / Binary Encoding

------------------------------------------------------------------------

## 🚨 Biggest Mistake

❌ Using Label Encoding for nominal data

------------------------------------------------------------------------

## 🧠 Final Thought

Encoding = Representation of meaning
