function changeColor(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
}
document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', changeColor);
});