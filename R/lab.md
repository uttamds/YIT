Here’s a **small yet conceptually rich (complex) R program** — short enough for class demo, but covering multiple ideas like **data frame creation, filtering, aggregation, and plotting** 👇

---

### 🧩 **Program: Sales Data Analysis**

```r
# -------------------------------
# Small yet complex R program
# -------------------------------

# Step 1: Create a sample sales data frame
sales <- data.frame(
  Product = c("Pen", "Pencil", "Book", "Pen", "Book", "Pencil", "Pen"),
  Region  = c("North", "South", "East", "West", "North", "East", "South"),
  Sales   = c(120, 80, 200, 150, 180, 90, 130)
)

# Step 2: Display original data
print("Original Data:")
print(sales)

# Step 3: Calculate total sales per product
total_sales <- aggregate(Sales ~ Product, data = sales, FUN = sum)
print("Total Sales per Product:")
print(total_sales)

# Step 4: Filter sales above 100
high_sales <- subset(sales, Sales > 100)
print("Sales above 100:")
print(high_sales)

# Step 5: Visualize sales by product
barplot(
  total_sales$Sales,
  names.arg = total_sales$Product,
  col = "skyblue",
  main = "Total Sales by Product",
  ylab = "Sales Value"
)
```

---

### 🧠 **Concepts Demonstrated**

* Data frame creation
* Data filtering (`subset()`)
* Aggregation (`aggregate()`)
* Printing results
* Simple visualization (`barplot()`)

---

Would you like me to make a **student-use case statement** around this (e.g., “A stationery shop wants to analyze product-wise sales…”)? It helps frame it as a mini-lab exercise.
