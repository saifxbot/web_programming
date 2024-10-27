function checkUserNumber(userGuess) {
    let randomNumber = Math.floor(Math.random()*10) + 1;
    if (userGuess===randomNumber) {
        return('Yes, you quessed right');
    } else if(userGuess>randomNumber) {
        return('Your guess was too high.');
    } else {
        return('Your guess was too low');
    }
}
function guessNumber() {
    let userGuess= parseInt(document.getElementById('guessInput').value);
    let result= checkUserNumber(userGuess);
    document.getElementById('result').textContent= result;
}
console.log(checkUserNumber(5));
console.log(checkUserNumber(6));