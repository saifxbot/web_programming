function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    if (b===0){
        return 'Cannot divide by zero';
    }
    return a/b;
}
function calculate() {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;

let result;
switch (operator) {
    case '+':
        result = add(number1, number2);
        break;
    case '-':
        result = subtract(number1, number2);
        break;
    case '*':
        result = multiply(number1, number2);
        break;
    case '/':
        result = divide(number1, number2);
        break;
        default:
            result = 'Invalid result';
}

document.getElementById('result').textContent = `result is ${result}`;
}
