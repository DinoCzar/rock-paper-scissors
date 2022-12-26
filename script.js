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
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || 
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || 
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        return playerSelection + " vs " + computerSelection + ". Player Score: " + ++playerScore + " / Computer Score: " + computerScore;
    } else {
        return "Not a valid entry, please enter Rock, Paper, or Scissors";
    }
}

function game() {
    for (var i = 1; i < 7; i++) {
        if (i<6) {
            console.log(playRound());
        } else {
            if (playerScore > computerScore) {
                console.log("FINAL SCORE: Player: " + playerScore + " / Computer: " + computerScore + " / YOU WIN! ");
            } else if (playerScore < computerScore) {
                console.log("FINAL SCORE: Player: " + playerScore + " / Computer: " + computerScore + " / YOU LOSE! ");
            } else {
                console.log("FINAL SCORE: Player: " + playerScore + " / Computer: " + computerScore + " / IT'S A TIE! ");
            }
        }
    }
}

game();

