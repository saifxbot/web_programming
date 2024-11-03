function calculateSum() {
    let totalSum = 0;
    let resultDiv = document.getElementById("sumResult");
    resultDiv.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        totalSum += i;
        resultDiv.innerHTML += `${i}: ${totalSum}<br>`;
    }
}
calculateSum();
