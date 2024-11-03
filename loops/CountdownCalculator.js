// Function to calculate and display the sum of numbers from 1 to 10
function calculateSum() {
    let totalSum = 0; // Variable to hold the total sum
    let resultDiv = document.getElementById("sumResult");
    resultDiv.innerHTML = ""; // Clear previous results

    for (let i = 1; i <= 10; i++) {
        totalSum += i; // Add the current number to the total sum
        resultDiv.innerHTML += `${i}: ${totalSum}<br>`; // Display current number and total sum
    }
}

// Call the function to calculate the sum when the script loads
calculateSum();
