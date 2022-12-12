function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

const playerSelection = 0;
const computerSelection = getComputerChoice();

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

console.log(playRound(playerSelection, computerSelection));

