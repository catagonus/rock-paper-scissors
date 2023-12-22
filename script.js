function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Error in computer choice.";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors:");
    playerChoice = 
        playerChoice.charAt(0).toUpperCase() + 
        playerChoice.slice(1).toLocaleLowerCase();
    return playerChoice;
}