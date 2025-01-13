// Select the button and result span
const calculateButton = document.querySelector("button");
const resultSpan = document.querySelector("h2 span");

// Function to calculate the average grade
calculateButton.addEventListener("click", () => {
  // Get values from all input fields
  const inputs = document.querySelectorAll("input[type='number']");
  const grades = Array.from(inputs).map(input => parseFloat(input.value) || 0); // Parse values or default to 0

  // Calculate the total and average
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  // Display the final grade as a percentage
  resultSpan.textContent = isNaN(average) ? "0%" : average.toFixed(2) + "%";
});
