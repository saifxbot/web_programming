function calculateArea(diameter){
    const radius = diameter/2;
    return Math.PI* radius**2;
}
function calculateAreaOfCircle(){
    const diameter= parseFloat(document.getElementById('diameter').value);
    const area = calculateArea(diameter);
    document.getElementById('result').textContent= `The area of the circle is: ${area.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculateButton');
    button.addEventListener('click', calculateAreaOfCircle);
});