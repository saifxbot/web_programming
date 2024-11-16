function calculateDeposit() {
    // Get input values from text fields
    let initialDeposit = parseFloat(document.getElementById("initialDeposit").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseInt(document.getElementById("years").value);

    // Check if the input values are valid
    if (isNaN(initialDeposit) || isNaN(annualRate) || isNaN(years)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Get the table body where results will be displayed
    let resultBody = document.getElementById("resultBody");

    // Clear any previous results
    resultBody.innerHTML = "";

    // Initialize year counter
    let year = 1;

    // Calculate and display deposit value for each year
    while (year <= years) {
        // Calculate the future value using compound interest formula
        let futureValue = initialDeposit * Math.pow(1 + annualRate / 100, year);

        // Create a new row and cells for year and future value
        let row = document.createElement("tr");
        let yearCell = document.createElement("td");
        let valueCell = document.createElement("td");

        // Set the text content of the cells
        yearCell.textContent = year;
        valueCell.textContent = futureValue.toFixed(2); // Limit to 2 decimal places

        // Append cells to the row, and row to the table body
        row.appendChild(yearCell);
        row.appendChild(valueCell);
        resultBody.appendChild(row);

        // Move to the next year
        year++;
    }
}
