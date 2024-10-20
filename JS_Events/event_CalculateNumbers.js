function calculateNumbers() {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    const sum = number1 + number2;
    document.getElementById('result').textContent = `The sum is: ${sum}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn1');
    button.addEventListener('click', calculateNumbers);
});
