Love this topic — scenario-based questions are *perfect* for learning DAX properly. Here are some solid training-style MCQs your students can think through.

---

## **Scenario 1: Sales Total for Current Year**

You have a **Sales** table with columns:
`OrderDate`, `Amount`

You want to create a measure that calculates **total sales only for the current year**, no matter what filters are applied.

**Which DAX formula is correct?**

A.

```DAX
Total Sales CY =
SUM(Sales[Amount])
```

B.

```DAX
Total Sales CY =
CALCULATE(
    SUM(Sales[Amount]),
    YEAR(Sales[OrderDate]) = YEAR(TODAY())
)
```

C.

```DAX
Total Sales CY =
CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL(Sales[OrderDate]),
        YEAR(Sales[OrderDate]) = YEAR(TODAY())
    )
)
```

D.

```DAX
Total Sales CY =
SUMX(
    FILTER(Sales, YEAR(Sales[OrderDate]) = YEAR(TODAY())),
    Sales[Amount]
)
```

---

## **Scenario 2: Ignore Product Filter**

You have:

* **Sales** table → `Amount`, `ProductID`
* **Product** table → `ProductName`

A report page is filtered to show **only Laptops**.
You need a measure that shows **Total Sales for ALL Products**, ignoring the product filter.

**Which DAX formula should you use?**

A.

```DAX
All Product Sales =
SUM(Sales[Amount])
```

B.

```DAX
All Product Sales =
CALCULATE(
    SUM(Sales[Amount]),
    ALL(Product)
)
```

C.

```DAX
All Product Sales =
CALCULATE(
    SUM(Sales[Amount]),
    REMOVEFILTERS(Sales)
)
```

D.

```DAX
All Product Sales =
CALCULATE(
    SUM(Sales[Amount]),
    FILTER(Sales, Product[ProductName] <> "Laptop")
)
```

---

## **Scenario 3: Year-to-Date Sales**

You have a proper **Date table** related to Sales.

You need a measure to calculate **Year-to-Date (YTD) Sales**.

**Which DAX formula is correct?**

A.

```DAX
YTD Sales =
SUM(Sales[Amount])
```

B.

```DAX
YTD Sales =
TOTALYTD(
    SUM(Sales[Amount]),
    'Date'[Date]
)
```

C.

```DAX
YTD Sales =
CALCULATE(
    SUM(Sales[Amount]),
    DATESYTD(Sales[OrderDate])
)
```

D.

```DAX
YTD Sales =
SUMX(
    DATESYTD('Date'[Date]),
    Sales[Amount]
)
```

---

## **Scenario 4: Sales Only When Profit is Positive**

Sales table has:
`Amount`, `Profit`

You want total sales **only for rows where Profit > 0**

**Which DAX formula works?**

A.

```DAX
Positive Sales =
SUM(Sales[Amount])
```

B.

```DAX
Positive Sales =
CALCULATE(
    SUM(Sales[Amount]),
    Sales[Profit] > 0
)
```

C.

```DAX
Positive Sales =
FILTER(
    SUM(Sales[Amount]),
    Sales[Profit] > 0
)
```

D.

```DAX
Positive Sales =
SUMX(
    Sales,
    IF(Sales[Profit] > 0, Sales[Amount])
)
```

---

## **Scenario 5: Count of Customers Who Bought More Than Once**

You have:

* **Sales** table → `CustomerID`, `OrderID`

You want to count **customers who placed more than one order**.

**Which DAX formula is correct?**

A.

```DAX
Repeat Customers =
COUNT(Sales[CustomerID])
```

B.

```DAX
Repeat Customers =
CALCULATE(
    DISTINCTCOUNT(Sales[CustomerID]),
    Sales[OrderID] > 1
)
```

C.

```DAX
Repeat Customers =
COUNTROWS(
    FILTER(
        VALUES(Sales[CustomerID]),
        CALCULATE(COUNT(Sales[OrderID])) > 1
    )
)
```

D.

```DAX
Repeat Customers =
SUMX(
    Sales,
    IF(COUNT(Sales[OrderID]) > 1, 1)
)
```

---

# ✅ **Answers & Explanations**

| Scenario | Correct Answer | Why                                                                                              |
| -------- | -------------- | ------------------------------------------------------------------------------------------------ |
| 1        | **C**          | Uses `CALCULATE` + `FILTER` + `ALL` to ignore existing date filters and force current year logic |
| 2        | **B**          | `ALL(Product)` removes product filters while keeping others intact                               |
| 3        | **B**          | `TOTALYTD` is the standard time intelligence function for YTD                                    |
| 4        | **B**          | `CALCULATE` can directly apply a filter condition                                                |
| 5        | **C**          | Uses `VALUES` + row context + `CALCULATE` to count customers with more than one order            |

---

If you want, I can also give:
✔ Harder DAX scenarios (context transition, EARLIER, RANKX)
✔ Power BI interview-style DAX questions
✔ Practical dataset + questions for classroom exercises
