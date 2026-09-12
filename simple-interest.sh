```bash
#!/bin/bash

# Simple Interest Calculator

echo "Simple Interest Calculator"
echo "--------------------------"

# Get principal from user
read -p "Enter Principal Amount: " principal

# Get rate of interest from user
read -p "Enter Rate of Interest (%): " rate

# Get time period from user
read -p "Enter Time Period (years): " time

# Calculate simple interest
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Calculate total amount
total_amount=$(echo "scale=2; $principal + $simple_interest" | bc)

# Display results
echo ""
echo "--------------------------"
echo "Principal Amount : $principal"
echo "Rate of Interest : $rate%"
echo "Time Period      : $time years"
echo "Simple Interest  : $simple_interest"
echo "Total Amount     : $total_amount"
echo "--------------------------"
```
