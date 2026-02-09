Ahhh this is a *core DAX superpower* topic 🔥 Once students understand this, DAX starts to *click*.

---

# 🧠 What does **CALCULATE overrides filters** really mean?

In DAX, **filters control what data is visible** to a measure.

👉 `CALCULATE()` can **change, replace, or remove** those filters before doing the calculation.

So instead of just accepting whatever the report page is filtering…

**CALCULATE says:**

> “Wait… I want to evaluate this using *my* filters instead.”

---

## 🔍 Normal Behavior (Without CALCULATE)

Suppose your report has a slicer filtering:

**Product = Laptop**

And you have a simple measure:

```DAX
Total Sales = SUM(Sales[Amount])
```

This measure will ONLY show **Laptop sales** because it obeys the current filter context.

---

## 🚀 Enter CALCULATE – The Filter Changer

```DAX
Total Sales All Products =
CALCULATE(
    SUM(Sales[Amount]),
    ALL(Product)
)
```

### What happens here?

Even if the report says:

> Show only **Laptops**

`CALCULATE` says:

> Nope. Remove Product filters. Show sales for **all products**.

💡 **Result:** This measure ignores the slicer.

---

## 🎯 Example 1: Overriding a Slicer Filter

You have a slicer:

📅 Year = 2024

Normal measure:

```DAX
Sales = SUM(Sales[Amount])
```

➡ Shows **only 2024 sales**

Now:

```DAX
Sales for 2023 =
CALCULATE(
    SUM(Sales[Amount]),
    'Date'[Year] = 2023
)
```

Even though slicer = 2024…

👉 `CALCULATE` overrides it and forces **2023**.

---

## 🔄 How CALCULATE Overrides Filters

CALCULATE can:

### 1️⃣ **Replace existing filters**

If a column is already filtered, CALCULATE replaces it.

```DAX
CALCULATE(SUM(Sales[Amount]), Product[Category] = "Mobile")
```

If report is filtered to **Laptops**, this measure switches it to **Mobiles**.

---

### 2️⃣ **Add new filters**

If no filter exists, CALCULATE adds one.

```DAX
CALCULATE(SUM(Sales[Amount]), Sales[Profit] > 0)
```

Now it calculates only rows where profit is positive.

---

### 3️⃣ **Remove filters**

Using `ALL`, `REMOVEFILTERS`

```DAX
CALCULATE(SUM(Sales[Amount]), ALL(Product))
```

Ignores any product filter from slicers or visuals.

---

## 🧩 Visual Understanding

### Without CALCULATE

![Image](https://okviz.com/content/blog/design-guide-for-power-bi-slicers-and-filters/Design-Guide-for-Power-BI-Slicers-and-Filters-01.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/0%2Ap2wvzJSfJfykLbLm.png)

![Image](https://community.fabric.microsoft.com/t5/image/serverpage/image-id/697188iA1544D368CF18C35?v=v2)

![Image](https://community.fabric.microsoft.com/t5/image/serverpage/image-id/418010i4899FAFB2A8BF5A6?v=v2)

Report Filter ➝ Measure obeys filter ➝ Result changes

---

### With CALCULATE

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/0%2Ap2wvzJSfJfykLbLm.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1200/1%2A0fCx947XUfFmweRhf7KICg.png)

![Image](https://learn.microsoft.com/en-us/power-bi/transform-model/media/desktop-visual-calculations-overview/desktop-visual-calculations-01.png)

![Image](https://learn.microsoft.com/en-us/power-bi/transform-model/media/desktop-visual-calculations-overview/desktop-visual-calculations-hex-example-01.png)

Report Filter ➝ **CALCULATE modifies filter** ➝ Measure uses new filter ➝ Result changes

---

## 🧠 The Golden Rule

> **CALCULATE evaluates an expression in a *modified filter context***.

That’s the technical definition — but in simple words:

🗣️ **“CALCULATE can ignore, change, or add filters before doing the math.”**

---

## 💥 Real Interview-Style Example

**Question:**
Report shows sales for **Laptop**.
You need a measure that shows **% of total company sales**.

```DAX
% of Total Sales =
DIVIDE(
    SUM(Sales[Amount]),
    CALCULATE(SUM(Sales[Amount]), ALL(Product))
)
```

Top part = Laptop sales
Bottom part = Sales of ALL products (filter removed)

👉 That denominator works only because **CALCULATE overrides the filter**

---

## ⚠ Important Clarification

CALCULATE does **not randomly ignore everything**.

It only overrides filters on the columns you mention.

If you only remove Product filter:

✔ Product ignored
❌ Date, Region, Customer filters still apply

---

## 🏁 One-Line Summary

**Without CALCULATE:** Measure follows report filters
**With CALCULATE:** Measure can rewrite the filter rules

---

If you'd like, next I can explain
👉 **Row Context vs Filter Context** (this is where CALCULATE becomes magical)
