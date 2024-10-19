console.log('Hello');
alert('Hello');
console.log(4 * 5);
console.log(document);
console.log(Date());
console.log(Math.random());
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('elem1').innerHTML;
    console.log(content);
});

let firstName = 'saif';
console.log(firstName);

let lastName = 'Reza';
console.log(lastName);
let age = 20;
console.log(age);

let isStudent = true;
console.log(isStudent);
console.log('my name is '+ firstName + lastName + ' I am' + age  );

let a = 5;
let b = 10;
let c = 15;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

let diameter = 6;
let radius = diameter/2;
let area = Math.PI*radius**2; 
console.log(area);

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
console.log(planets);
console.log(planets.length);

let foods = ['Pizza', 'Burger', 'Sushi', 'Lemon'];
console.log(foods.length);
foods.push('orange');
console.log(foods);
foods.pop();
console.log(foods);

foods.unshift('tacos');
console.log(foods);

foods.shift();
console.log(foods);

foods.splice(2, 2);
console.log(foods);
console.log(foods.length);


let alice_candies = 121;
let bob_candies = 77;
let carol_candies = 109;
let all_candies = (alice_candies + bob_candies+carol_candies);
console.log(all_candies);

let candy_smashed= all_candies % 3;
console.log(candy_smashed);

let studentScore = 6;
let maxScore = 19;

let percentage = (studentScore / maxScore) * 100;
let rounded_percentage = Math.round(percentage);
console.log(rounded_percentage);

let celciusTemparature = 20;
let farenheitTemoparature = celciusTemparature*(9/5) +32;
console.log('Temparature: ' + celciusTemparature+ '°C is '+ farenheitTemoparature+'°F.');

let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * time* rate)/100;
console.log('The interest is after '+ time + ' years will be '+ simpleInterest);

let fullName = 'saif ibna reza';
let greetings = 'hello ' + fullName;
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());

let currentSalary = 5000;
let raisePercentage = 10;
let newSalary = currentSalary + (currentSalary*raisePercentage/100);
console.log('$'+currentSalary);
console.log(raisePercentage+'%');
console.log('$'+ newSalary);


function calculateTriangleArea() {
    let triangleHeight = 4;
    let triangleWidth = 5;
    let triangleArea = (triangleWidth * triangleHeight) / 2;
    console.log("Triangle area is " + triangleArea);
}

calculateTriangleArea();

function divideWithTWo(usernumber) {
    let result = usernumber / 2;
    console.log(result);
}
divideWithTWo(10);
divideWithTWo(5);

function calculateDogAge(puppyAge){
    let humanYear = puppyAge * 7;
    console.log('Your dog is '+ humanYear + ' years old in human years');
}
calculateDogAge(4);
function calculateBMI(height, weight){
    let bmi = weight/height**2;
    console.log(bmi);
}
calculateBMI(1.86, 85);


function favoriteBook(title, author){
    console.log(title + ' was written by ' + author);
}
favoriteBook('axf', 'byq');


function areaOfCircle(diameter_1){
    let radius = diameter_1/2;
    let area = Math.PI*radius**2;
    console.log(area.toFixed(2));
}
areaOfCircle(2);
areaOfCircle(4);

function calculateCircumference(radius_1){
    let circleCircumference = 2* Math.PI * radius_1;
    return circleCircumference.toFixed(2);
}
console.log(calculateCircumference(2));
console.log(calculateCircumference(5));
console.log(calculateCircumference(12));

function renderPerson(name, age, gender, dateOfBirth, eyeColor){
    return(name + ' is a '+ age + ' years old ' + gender+','+ ' born in '+ dateOfBirth+ ' eyes: '+ eyeColor);
}

console.log(renderPerson('saif', 20, 'male', '15-01-2993', 'black'));

function costOfTrip(price, durationOfVacation, priceOfHotel, carRentalFee){
   let totalCost =  price + (priceOfHotel*durationOfVacation) + carRentalFee;
   return totalCost;
}
let totalcostparis = costOfTrip(200, 7, 20, 200);
console.log('vacation in city Paris costs $'+ totalcostparis +' dollars.');

let totalcostLondon = costOfTrip(250, 7, 30, 120);
console.log('vacation in city London costs $'+ totalcostLondon +' dollars.');

let totalcostDubai = costOfTrip(370, 7, 15, 80);
console.log('vacation in city Dubai costs $'+ totalcostDubai +' dollars.');

let totalcostMumbai = costOfTrip(450, 7, 10, 70);
console.log('vacation in city Mumbai costs $'+ totalcostMumbai +' dollars.');



let totalcostparis3 = costOfTrip(200, 3, 20, 200);
console.log('3 days vacation in city Paris costs $'+ totalcostparis3 +' dollars.');

let totalcostLondon3 = costOfTrip(250, 3, 30, 120);
console.log('3 days vacation in city London costs $'+ totalcostLondon3 +' dollars.');

let totalcostDubai3 = costOfTrip(370, 3, 15, 80);
console.log('3 days vacation in city Dubai costs $'+ totalcostDubai3 +' dollars.');

let totalcostMumbai3 = costOfTrip(450, 3, 10, 70);
console.log('3 Days vacation in city Mumbai costs $'+ totalcostMumbai3 +' dollars.');

//cheapestcostcounting 

let cheapestCost = Math.min(totalcostDubai3, totalcostLondon3, totalcostDubai3, totalcostMumbai3);
let cheapestCity;
if (cheapestCost === totalcostparis3) cheapestCity = "Paris";
else if (cheapestCost === totalcostLondon3) cheapestCity = "London";
else if (cheapestCost === totalcostDubai3) cheapestCity = "Dubai";
else cheapestCity = "Mumbai";

console.log("The cheapest city for a 3-day vacation is " + cheapestCity + ", costing $" + cheapestCost + " dollars.");


function celciusToFarenheit(celcius) {
    let celciustofarenheit = celcius*1.8+32;
    return celciustofarenheit;
}
function farenheitToCelcius(farenheit) {
    let farenheittocelcius = (farenheit-32)/1.8;
    return farenheittocelcius;
}
function farenheitToKelvin(farenheit){
    let farenheittokelvin = (farenheit+459.67)/1.8;
    return farenheittokelvin;
}
let celcius = 20;
let farenheit = celciusToFarenheit(celcius);
console.log(celcius + '°C is ' + farenheit.toFixed(2) + '°F');

// Convert Fahrenheit to Kelvin
let kelvin = farenheitToKelvin(farenheit);
console.log(farenheit.toFixed(2) + '°F is ' + kelvin.toFixed(2) + ' K');


function calculatePoints(twoPointScore, threePointScore) {
    let result = (2*twoPointScore)+(3*threePointScore);
    return result;
}
console.log('Total points with 1x 2-point and 1x 3-point scores: '+ calculatePoints(1, 1));
console.log('total point with 7x 2-point and 5x 3x-point scores: '+ calculatePoints(7, 5));



function findTheBiggestNumber (numbers){
    numbers.sort((a, b) => a-b);
    return numbers[numbers.length - 1];
}
console.log('Biggest number in [1,5,6,9] is '+ findTheBiggestNumber([1,5,6,9]));
console.log('Biggest number in[10,90,2,400,1,5] is '+ findTheBiggestNumber([10,90,2,400,1,5]));



function rentalCost(days, dailyCost1, insuranceCost, deliveryFee) {
    let totalCOST = (days* dailyCost1) + insuranceCost+deliveryFee;
    return totalCOST;
}
let TotalRentalCost = rentalCost(5, 20, 15, 30);
console.log('total rentalcost1 is $'+ TotalRentalCost);

let TotalRentalCost2 = rentalCost(10, 25, 10, 20);
console.log('total rentalcost2 is $'+ TotalRentalCost2);

let TotalRentalCost3 = rentalCost(3, 18, 0, 15);
console.log('total rentalcost3 is $'+ TotalRentalCost3);
