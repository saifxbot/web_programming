let headsCount = 0;
let tailsCount = 0;
let wins = 0;
let losses = 0;

function playGame(userGuess) {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    headsCount++;
  } else {
    tailsCount++;
  }

  if (userGuess === randomNumber) {
    wins++;
    return true;
  } else {
    losses++;
    return false;
  }
}

function headsSelected() {
  const result = playGame(0);
  document.getElementById("resultDisplay").innerText = result ? "Correct guess!" : "Wrong guess!";
}

function tailsSelected() {
  const result = playGame(1); 
  document.getElementById("resultDisplay").innerText = result ? "Correct guess!" : "Wrong guess!";
}

function showResults() {
  document.getElementById("resultDisplay").innerText = 
    `Machine drew ${headsCount} heads and ${tailsCount} tails. You won ${wins} times and lost ${losses} times.`;

  headsCount = 0;
  tailsCount = 0;
  wins = 0;
  losses = 0;
}
