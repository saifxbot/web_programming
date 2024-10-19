alert("saif")
console.log(4 * 5);

console.log(document);

console.log(new Date());

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn1");
    
    button.addEventListener("click", function() {
        alert("Button was clicked!");
        console.log("Check the console for more info.");
    });
});
