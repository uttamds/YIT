
# 📘  Short Notes (Data Science Basics)

---

## 🟢 Missing Values

Missing values are data entries that are not recorded (NaN/NULL).
They can affect model accuracy and must be handled before training.

---

## 🟢 Methods to Handle Missing Numerical Data

Common methods include:

* **Mean imputation** – replaces missing values with average
* **Median imputation** – useful when data has outliers

---

## 🟢 Categorical Data in Machine Learning

Machine learning models work only with numerical values.
Text or categories must be converted into numbers using encoding.

---

## 🟢 Feature Scaling

Feature scaling brings different features to a common scale.
It prevents features with large values from dominating the model.

---

## 🟢 Test Size in Train–Test Split

`test_size=0.2` means:

* 20% data is used for testing
* 80% data is used for training

---

## 🟡 Mean vs Mode Imputation

* **Mean** is used for numerical data
* **Mode** is used for categorical data
  Choosing the correct method preserves data consistency.

---

## 🟡 Label Encoding vs One-Hot Encoding

* **Label Encoding** assigns numbers to categories (Yes=1, No=0)
* **One-Hot Encoding** creates separate columns for each category
  One-Hot Encoding avoids false order in categorical data.

---

## 🟡 Effect of Not Applying Feature Scaling

Without scaling:

* Features with larger values dominate
* Model performance becomes biased
  This is common with features like Salary vs Age.

---

## 🟡 Role of `random_state`

`random_state` ensures reproducibility of results.
Using the same value gives the same train–test split every time.

---

## 🟡 Detecting Missing Values in Pandas

Pandas provides built-in functions to detect missing data:

* `isnull()` identifies missing values
* `sum()` counts them per column

---

## 📊 What is Machine Learning?

* Machine learns patterns from *data*
* No hard-coded rules

Example idea:

* Give marks → Predict pass/fail

---

## 📦 Basic Python Libraries for AI

| Library        | Purpose          |
| -------------- | ---------------- |
| numpy        | Numbers          |
| pandas       | Tables (data)    |
| matplotlib   | Graphs           |
| scikit-learn | Machine Learning |

---

## 🔢 Step 1: Numbers with NumPy

python
import numpy as np

marks = np.array([35, 60, 75])
print(marks)


👉 NumPy helps AI work with numbers fast.

---

## 📋 Step 2: Data with Pandas

python
import pandas as pd

data = {
    "Marks": [35, 60, 75],
    "Result": ["Fail", "Pass", "Pass"]
}

df = pd.DataFrame(data)
print(df)


👉 AI *learns from tables (data)*.

---

## 📈 Step 3: Visualize Data

python
import matplotlib.pyplot as plt

plt.plot(df["Marks"])
plt.show()


👉 Graphs help humans *see patterns*.

---

## 🤖 Step 4: First Machine Learning Idea

*Problem:*
👉 Predict result based on marks

| Marks | Result |
| ----- | ------ |
| 35    | Fail   |
| 60    | Pass   |
| 75    | Pass   |

---

## 🧪 Step 5: Train a Very Simple Model

python
from sklearn.linear_model import LinearRegression

X = [[35], [60], [75]]   # input
y = [0, 1, 1]            # output (0=Fail, 1=Pass)

model = LinearRegression()
model.fit(X, y)

print(model.predict([[50]]))


👉 Output closer to 1 means *Pass*

---

## 🧠 What Just Happened?

* We *gave data*
* Model *learned pattern*
* Model *predicted new value*

That is *AI learning*

---

## 🔁 Basic AI Workflow (Must Remember)

1. Collect Data
2. Clean Data
3. Train Model
4. Test Model
5. Predict

---

## 🧾 AI vs Normal Program

| Normal Program         | AI Program              |
| ---------------------- | ----------------------- |
| Rules written by human | Rules learned from data |
| Same output always     | Improves with more data |

---

## 🎯 Key Takeaways (Exam / Interview Ready)

* AI mimics human intelligence
* Python is best for AI beginners
* Machine Learning = learning from data
* Model = program that learns
* Prediction is final goal




# 📊 Data Science Lesson Plan (Foundations)

## 🎯 Learning Outcomes

By the end of this session, students will be able to:

* Handle missing data
* Encode categorical variables
* Apply feature scaling
* Perform train–test split

---

## 🧩 Sample Dataset (Used Throughout)

```python
import pandas as pd

data = {
    "Age": [22, 25, None, 28, 35],
    "Salary": [30000, 40000, 35000, None, 50000],
    "City": ["Bangalore", "Delhi", "Bangalore", "Mumbai", None],
    "Purchased": ["Yes", "No", "Yes", "No", "Yes"]
}

df = pd.DataFrame(data)
df
```

---

## 1️⃣ Missing Values Handling

### 🔹 Identify Missing Values

```python
df.isnull()
```

```python
df.isnull().sum()
```

### 🔹 Handling Techniques

#### (a) Mean Imputation (Numerical)

```python
df["Age"].fillna(df["Age"].mean(), inplace=True)
df["Salary"].fillna(df["Salary"].mean(), inplace=True)
```

#### (b) Mode Imputation (Categorical)

```python
df["City"].fillna(df["City"].mode()[0], inplace=True)
```

✅ **Students learn:**

* Real-world datasets always contain missing values
* Numerical → mean/median
* Categorical → mode

---

## 2️⃣ Encoding (Categorical → Numerical)

### 🔹 Label Encoding

```python
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
df["Purchased"] = le.fit_transform(df["Purchased"])
```

### 🔹 One-Hot Encoding

```python
df_encoded = pd.get_dummies(df, columns=["City"])
df_encoded
```

✅ **Students learn:**

* ML models work only with numbers
* Label Encoding for binary values
* One-Hot Encoding for multi-category features

---

## 3️⃣ Feature Scaling

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
df_encoded[["Age", "Salary"]] = scaler.fit_transform(
    df_encoded[["Age", "Salary"]]
)
df_encoded
```

✅ **Students learn:**

* Features with large values dominate models
* Scaling brings features to a common range
* StandardScaler centers data around zero

---

## 4️⃣ Train / Test Split

```python
from sklearn.model_selection import train_test_split

X = df_encoded.drop("Purchased", axis=1)
y = df_encoded["Purchased"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(X_train.shape)
print(X_test.shape)
```

✅ **Students learn:**

* Why models must be tested on unseen data
* Typical split: 80% train / 20% test
* Role of `random_state`

---

## 🧠 Learning Flow Summary

```
Raw Data
   ↓
Missing Values
   ↓
Encoding
   ↓
Scaling
   ↓
Train / Test Split
```

---

## 📝 Quick Student Activities

1. Replace missing salary using **median**
2. Convert `City` using One-Hot Encoding
3. Try `test_size=0.3`
4. Print `X_test` only

