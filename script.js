const myArray = ["Rock", "Paper", "Scissors"];

var playerScore = 0;

var computerScore = 0;

const container = document.querySelector('#container');
const content = document.createElement('div');
container.appendChild(content);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        var computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
        var playerSelection = button.id;
        if (playerScore === 5) {
            content.textContent = "Player Wins!"
        } else if (computerScore === 5) {
            content.textContent = "Computer Wins!"
        } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            content.textContent = (playerSelection + " vs " + computerSelection + ". Player Score: " + playerScore + " / Computer Score: " + computerScore);
        } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || 
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || 
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
            content.textContent = (playerSelection + " vs " + computerSelection + ". Player Score: " + playerScore + " / Computer Score: " + ++computerScore);
        } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || 
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || 
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
            content.textContent = (playerSelection + " vs " + computerSelection + ". Player Score: " + ++playerScore + " / Computer Score: " + computerScore);
        } else {
            content.textContent = ("Not a valid entry, please enter Rock, Paper, or Scissors");
        }    
    });
});

