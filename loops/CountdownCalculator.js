function countdown() {
    let number = parseInt(document.getElementById("startingNumber").value);
    let resultDiv = document.getElementById("countdownResult");
    resultDiv.innerHTML = "";  // Clear previous results

    while (number >= 0) {
        resultDiv.innerHTML += number + "<br>";
        number--;
    }
}
