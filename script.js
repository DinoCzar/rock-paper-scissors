function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

console.log(getComputerChoice());

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection = "rock" && computerSelection === 0) {
    return "It's a tie!";
    } else if (playerSelection = "rock" && computerSelection === 1) {
    return "You lost!";
    } else if (playerSelection = "rock" && computerSelection === 2) {
    return "You won!";
    } else if (playerSelection = "paper" && computerSelection === 0) {
    return "You won!";
    } else if (playerSelection = "paper" && computerSelection === 1) {
    return "It's a tie!";
    } else if (playerSelection = "paper" && computerSelection === 2) {
    return "You lost!";
    } else if (playerSelection = "scissors" && computerSelection === 0) {
    return "You lost!";
    } else if (playerSelection = "scissors" && computerSelection === 1) {
    return "You won!";
    } else if (playerSelection = "scissors" && computerSelection === 2) {
    return "It's a tie!";
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log("Testing to make sure it's all good");