# Create a vector of marks
marks <- c(75, 82, 90, 68, 88, 79)

# Calculate average marks
average <- mean(marks)
cat("Average Marks:", average, "\n")

# Display marks greater than 80
cat("Marks greater than 80:\n")
print(marks[marks > 80])
