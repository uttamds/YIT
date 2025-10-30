# Create a matrix with numbers 1 to 9 (3 rows, 3 columns)
mat <- matrix(1:9, nrow = 3, ncol = 3)
print(mat)


==================

mat <- matrix(1:9, nrow = 3, byrow = TRUE)
print(mat)


Assignment:
=============

Here’s a **use case–based lab assignment** that helps students *apply matrices in a realistic scenario* 👇

---

## 🎯 **Lab Assignment: Student Performance Analysis Using Matrices**

### **Scenario**

A college maintains marks of students in three subjects — **Maths**, **Science**, and **English** — for two different classes: **Class A** and **Class B**.
You are required to analyze and compare the overall performance using **matrices** in R.

---

### **Tasks**

1. **Create Matrices**

   * Create two matrices:

     * `classA` → Marks of 3 students (rows) in 3 subjects (columns)
     * `classB` → Marks of 3 students (rows) in 3 subjects (columns)
   * Example structure:

     ```
     Students → Rows
     Subjects → Columns
     ```

2. **Name the Rows and Columns**

   * Rows → Student1, Student2, Student3
   * Columns → Maths, Science, English

3. **Perform the Following Operations**
   a. Calculate the **total marks** of each student using `rowSums()`
   b. Calculate the **average marks** in each subject using `colMeans()`
   c. Find the **difference in average subject performance** between Class A and Class B.
   d. Combine both classes into one large matrix using `rbind()`
   e. Compute the **highest marks in each subject** across all students.

4. **Bonus Task (Optional)**

   * Use `apply()` function to compute total marks per student and per subject (instead of rowSums/colMeans).
   * Identify which class performed better overall.

---

### **Expected Outcome**

Students should be able to:

* Construct and label matrices in R
* Access and manipulate data using matrix operations
* Apply aggregate functions like `rowSums()`, `colMeans()`, and `apply()`
* Compare datasets meaningfully using matrix-based analysis

---

Would you like me to include a **sample solution code** for this lab (for instructor reference)?


# Solution:

<img width="862" height="812" alt="image" src="https://github.com/user-attachments/assets/9547095f-010b-4699-9b22-5000112de8d6" />
<img width="420" height="169" alt="image" src="https://github.com/user-attachments/assets/deffe416-6615-4ed2-a824-85a208bc805e" />



