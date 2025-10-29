# Create a vector of marks
marks <- c(75, 82, 90, 68, 88, 79)

# Calculate average marks
average <- mean(marks)
cat("Average Marks:", average, "\n")

# Display marks greater than 80
cat("Marks greater than 80:\n")
print(marks[marks > 80])
====================================================================
Program 2
===================================================================

# Vector of marks
marks <- c(95, 72, 88, 65, 91, 78, 83, 59, 87)

# Calculate average marks
average <- mean(marks)
cat("Class Average:", round(average, 2), "\n\n")

# Find marks above 80
high_scorers <- marks[marks > 80]

# Display results with conditions
cat("Marks greater than 80:\n")
print(high_scorers)

# Additional analysis
cat("\nNumber of students scoring above 80:", length(high_scorers), "\n")

# Classify performance using ifelse
performance <- ifelse(marks >= 80, "Distinction", 
                      ifelse(marks >= 60, "Pass", "Fail"))

# Combine marks and performance into a data frame
result <- data.frame(Marks = marks, Performance = performance)

======================================================

cat("\nDetailed Performance:\n")
print(result)
