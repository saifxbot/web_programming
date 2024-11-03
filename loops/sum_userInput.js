function totalSumForNumbers() {
    let userNumber = Number(document.getElementById("inputNum").value);
    let totalSum = 0;
    let resultText = "";

    for (let i = 0; i <= userNumber; i++) {
        totalSum += i;
        resultText += `${i}: ${totalSum}<br>`;
    }
    document.getElementById("result").innerHTML = `${resultText}Total sum: ${totalSum}`;
}
