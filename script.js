const myArray = ["Rock", "Paper", "Scissors"];

var playerScore = 0;

var computerScore = 0;

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
    for (var i = 1; i < 6; i++) {
        console.log(playRound());
    }
}
