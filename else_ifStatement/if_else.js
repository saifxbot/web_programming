let age = 14;

if (age < 13) {
    console.log("You are a child.");
} else if (age > 13 && age <= 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
//Ternary operator//
let dogage = 2;
let isAdult = (dogage >= 5) ? "Your dog is an adult." : "Your dog is not an adult.";
console.log(isAdult);
// Switch statement//
let day = new Date().getDay();
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`today is ${dayName}`);



