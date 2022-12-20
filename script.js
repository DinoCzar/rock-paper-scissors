
/*
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

const computerSelection = getComputerChoice();

// playerSelection and computerSelection 0 = Rock, 1 = Paper, 2 = Scissors
// result 0 = Tie, 1 = Player Win, 2 = Computer Win

for (let i = 1; i < 6; i++) {
    const playerScore = 0;
    const computerScore = 0;
    console.log("Round " + i + ": SCORE: Player: " + playerScore + " / Computer: " + computerScore);
}

var playerSelection=prompt("Enter Rock, Paper, or Scissors:"); 

function playerSelection() {
    if (playerSelection.toLowerCase() === "rock") {
        return 0;
        } else if (playerSelection.toLowerCase() === "paper") {
        return 1;
        } else if (playerSelection.toLowerCase() === "scissors") {
        return 2;
        } else {
        return "Not a valid entry, Please enter Rock, Paper, or Scissors"
        }
}

function playRound() {
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

console.log(computerSelection)
console.log(playRound());

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


const myArray = ["Rock", "Paper", "Scissors"];

var playerScore;

var computerScore;

function playRound() {
    var playerSelection = prompt("Enter Rock, Paper, or Scissors:"); 
    var computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return playerSelection + " vs " + computerSelection + ". Player Score: " + playerScore + " / Computer Score: " + computerScore;
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || 
        (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || 
        (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
        return playerSelection + " vs " + computerSelection + ". Player Score: " + playerScore + " / Computer Score: " + ++computerScore;
    } else {
        return playerSelection + " vs " + computerSelection + ". Player Score: " + ++playerScore + " / Computer Score: " + computerScore;
    }
}

game();

function game() {
    playerScore = 0;
    computerScore = 0;
    for (var i = 1; i < 6; i++) {
        console.log(playRound());
    }
}

/*

for (var i = 0; i < 6; i++) {
    console.log("Round " + i + " SCORE: Player: " + playerScore + " / Computer: " + computerScore) 
    if (playRound() === "Win") {
        playerScore++;
    } else if (playRound() === "Lose") {
        computerScore++;
    } else {
        playerScore;
        computerScore;
    }
}
*/




/*


const myArray = [
    'Rock',
    'Paper',
    'Scissors'
];

function computerPlay() {
  return myArray[~~(Math.random()*myArray.length)]
}

let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

game();

function game () {
  computerScore=0;
  playerScore=0;
  for (let i=0; i<5; i++) {
    onUserInput();
  }
  console.log(declareWinner());
  
  function declareWinner() {
    if (playerScore===computerScore) {
      alert(playerScore + '-' + computerScore + '\nTie game!');
      return playerScore + '-' + computerScore + '\nTie game!';
    } else if (playerScore>computerScore) {
      alert(playerScore + '-' + computerScore + '\nYou win!!');
      return playerScore + '-' + computerScore + '\nYou win!!';
    } else {
      alert(playerScore + '-' + computerScore + '\nYou lost. Better luck next time!');
      return playerScore + '-' + computerScore + '\nYou lost. Better luck next time!';
    }
  }
}

function onUserInput() {
  playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase()=='rock')
        ||(playerSelection.toLowerCase()=='paper')
        ||(playerSelection.toLowerCase()=='scissors')) {
      console.log(playRound(playerSelection,computerSelection));
    } else {
    alert('That\'s not a valid choice.');
    onUserInput();
  }
}

function playRound() {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection==playerSelection) {
        alert('Tie game!');
        return 'Tie game\nComputer Score: ' + 
                computerScore + '\nYour Score: ' + playerScore;
    } else if ((computerSelection=='rock' && playerSelection=='scissors') 
              || (computerSelection=='scissors' && playerSelection=='paper') 
              || (computerSelection=='paper' && playerSelection=='rock')) {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 'Computer Score: ' + ++computerScore + 
                '\nYour Score: ' + playerScore;
    } else {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 'Your Score: ' + ++playerScore + 
                '\nComputer Score: ' + computerScore;
    }
}

*/
