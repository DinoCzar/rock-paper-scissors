function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

// let userInput = prompt("Choose Rock, Paper, or Scissors");

const playerSelection = 0;
const computerSelection = getComputerChoice();

var userInput=prompt("Enter Rock, Paper, or Scissors:");

function userSelection() {
   if (userInput.toLowerCase() === "rock") {
    return 0;
   } else if (userInput.toLowerCase() === "paper") {
    return 1;
   } else if (userInput.toLowerCase() === "scissors") {
    return 2;
   } else {
    return "Not a valid entry, Please enter Rock, Paper, or Scissors"
   }
}

console.log(userSelection());

// playerSelection and computerSelection 0 = Rock, 1 = Paper, 2 = Scissors
// result 0 = Tie, 1 = Player Win, 2 = Computer Win

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 0) {
    return 0;
    } else if (playerSelection === 0 && computerSelection === 1) {
    return 2;
    } else if (playerSelection === 0 && computerSelection === 2) {
    return 1;
    } else if (playerSelection === 1 && computerSelection === 0) {
    return 1;
    } else if (playerSelection === 1 && computerSelection === 1) {
    return 0;
    } else if (playerSelection === 1 && computerSelection === 2) {
    return 2;
    } else if (playerSelection === 2 && computerSelection === 0) {
    return 2;
    } else if (playerSelection === 2 && computerSelection === 1) {
    return 1;
    } else if (playerSelection === 2 && computerSelection === 2) {
    return 0;
    }
}

console.log(playRound(playerSelection, computerSelection));

for (let i = 1; i < 6; i++) {
    const playerScore = 0;
    const computerScore = 0;
    console.log("Round " + i + ": SCORE: Player: " + playerScore + " / Computer: " + computerScore);
}



/*
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 0) {
    return "It's a tie! Rock ties with Rock.";
    } else if (playerSelection === 0 && computerSelection === 1) {
    return "You lost! Paper beats Rock.";
    } else if (playerSelection === 0 && computerSelection === 2) {
    return "You won! Rock beats Scissors.";
    } else if (playerSelection === 1 && computerSelection === 0) {
    return "You won! Paper beats Rock.";
    } else if (playerSelection === 1 && computerSelection === 1) {
    return "It's a tie! Paper ties with Paper.";
    } else if (playerSelection === 1 && computerSelection === 2) {
    return "You lost! Scissors beats Paper.";
    } else if (playerSelection === 2 && computerSelection === 0) {
    return "You lost! Rock beats Scissors.";
    } else if (playerSelection === 2 && computerSelection === 1) {
    return "You won! Scissors beats Paper.";
    } else if (playerSelection === 2 && computerSelection === 2) {
    return "It's a tie! Scissors ties with Scissors.";
    }
}
*/