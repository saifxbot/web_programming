function showText() {
    const textInput = document.getElementById('textInput').value;
    const displayText = document.getElementById('displayText');
    displayText.textContent= textInput;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showButton');
    button.addEventListener('click', showText);
});