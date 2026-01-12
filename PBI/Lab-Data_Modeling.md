Perfect 👍
Below are **READY-TO-USE CSV files** **exactly matching the lab** I gave earlier.

👉 You can **copy–paste each block**, save as `.csv`, and load directly into **Power BI Desktop**.

---

## 📁 1️⃣ `Customers.csv`

```csv
CustomerID,CustomerName,City,State
C001,Amit Sharma,Bengaluru,Karnataka
C002,Neha Verma,Pune,Maharashtra
C003,Rahul Iyer,Chennai,Tamil Nadu
C004,Priya Singh,Delhi,Delhi
C005,Ankit Patel,Ahmedabad,Gujarat
```

---

## 📁 2️⃣ `Products.csv`

```csv
ProductID,ProductName,Category,UnitPrice
P001,Laptop,Electronics,55000
P002,Mobile Phone,Electronics,25000
P003,Office Chair,Furniture,7000
P004,Desk,Furniture,12000
P005,Printer,Electronics,18000
```

---

## 📁 3️⃣ `Date.csv`

```csv
Date,Year,Month,MonthName,Quarter
2023-01-05,2023,1,January,Q1
2023-02-10,2023,2,February,Q1
2023-03-15,2023,3,March,Q1
2023-04-20,2023,4,April,Q2
2023-05-25,2023,5,May,Q2
2023-06-30,2023,6,June,Q2
```

👉 After loading, **Mark this as Date Table**
(Model View → Date → Mark as date table → Date column)

---

## 📁 4️⃣ `Sales.csv` (FACT TABLE)

```csv
OrderID,OrderDate,CustomerID,ProductID,Quantity,SalesAmount
O1001,2023-01-05,C001,P001,1,55000
O1002,2023-02-10,C002,P002,2,50000
O1003,2023-03-15,C003,P003,3,21000
O1004,2023-04-20,C004,P004,1,12000
O1005,2023-05-25,C005,P005,2,36000
O1006,2023-06-30,C001,P002,1,25000
```

---

## 🔗 Relationships to Create (IMPORTANT)

| From (Sales) | To                    | Cardinality |
| ------------ | --------------------- | ----------- |
| CustomerID   | Customers[CustomerID] | Many → One  |
| ProductID    | Products[ProductID]   | Many → One  |
| OrderDate    | Date[Date]            | Many → One  |

Filter Direction → **Single**

---

## ✅ This Dataset Supports

✔ Star Schema
✔ Slicers (Customer / Product / Date)
✔ Measures like `Total Sales`, `Total Quantity`
✔ Filter Flow Demo
✔ Beginner-friendly numbers (easy to verify manually)

---

## 🧪 Trainer Tip

Ask students:

* “What breaks if I remove the Date table?”
* “Why does Sales sit in the center?”
* “Why don’t we join Products ↔ Customers?”

---

If you want next, I can give:

* 📄 **Printable lab sheet (PDF style)**
* 🧪 **Wrong model CSV (to show mistakes)**
* 🎯 **MCQs based on THIS SAME dataset**
* 📊 **Power Query cleaning version of same files**

Just tell me 👌
