// Show Current Date
function thisDay() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    document.getElementById("dateField").textContent = formattedDate;
}

// Show and Hide Paragraph
function hideParagraph() {
    document.getElementById("hiddenParagraph").style.visibility = "hidden";
}

function showParagraph() {
    document.getElementById("hiddenParagraph").style.visibility = "visible";
}

// Change Background Color
function changeColor() {
    const selectedColor = document.getElementById("colorSelector").value;
    document.body.style.backgroundColor = selectedColor;
}

// Show Textfield Text
function showText() {
    const text = document.getElementById("inputText").value;
    document.getElementById("displayText").textContent = text;
}

// Calculate Sum of Two Numbers
function calculateNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("resultSum").textContent = "The sum is: " + sum;
}

// Area of Circle
function calculateCircleArea(diameter) {
    const radius = diameter / 2;
    return Math.PI * radius * radius;
}

function calculateAreaOfCircle() {
    const diameter = parseFloat(document.getElementById("diameter").value);
    const area = calculateCircleArea(diameter);
    document.getElementById("resultArea").textContent = "The area of the circle is: " + area.toFixed(2);
}

// Counter for Button Clicks
let clicksCount = 0;

function countClicks() {
    clicksCount++;
    document.getElementById("clickCount").textContent = "Button clicked " + clicksCount + " times";
}

// Add click event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    button.addEventListener("click", countClicks);
});

// Area of Triangle
function triangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    const area = (base * height) / 2;
    document.getElementById("resultTriangle").textContent = "The area of the triangle is: " + area;
}

// Change Image
function changeImage() {
    const selectedImage = document.getElementById("imageSelector").value;
    const imageElement = document.getElementById("selectedImage");

    if (selectedImage) {
        imageElement.src = selectedImage;
        imageElement.style.display = "block";
    } else {
        imageElement.src = "";
        imageElement.style.display = "none";
    }
}

// Calculate Name Length
function calculateNameLength() {
    const name = document.getElementById("nameInput").value;
    const length = name.length;
    document.getElementById("nameLengthResult").textContent = "The length of the name is: " + length;
}
