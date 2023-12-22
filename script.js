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
    console.log(playerChoice);
    if (playerChoice === null) {
        alert("You have canceled the game.");
        return;
    }
    playerChoice = 
        playerChoice.charAt(0).toUpperCase() + 
        playerChoice.slice(1).toLocaleLowerCase();
    if (playerChoice) {
        return playerChoice;
    } else {
        alert("You have canceled the game.");
    }
}

function playRound(playerChoice, computerChoice) {
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("Result: tie");
        alert("You tied! Try again.");
        return playRound(getPlayerChoice(), getComputerChoice());
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("Result: player victory");
            return 1;
        } else {
            console.log("Result: computer victory");
            return 0;
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("Result: player victory");
            return 1;
        } else {
            console.log("Result: computer victory");
            return 0;
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("Result: player victory");
            return 1;
        } else {
            console.log("Result: computer victory");
            return 0;
        }
    } else {
        console.log("Result: player entered invalid choice");
        alert("Please play by the rules! Enter only Rock, Paper, or Scissors.");
        return playRound(getPlayerChoice(), getComputerChoice());
    }
}

function game() {
    let gameScore = 0;
    for (let i=0; i<5; i++) {
        gameScore += playRound(getPlayerChoice(), getComputerChoice());
    }
    if (gameScore >= 3) {
        console.log(`The player wins with a score of ${gameScore} out of 5. Congratulations!`);
    } else {
        console.log(`The computer wins with a score of ${5 - gameScore} out of 5. Better luck next time!`);
    }
}

function customGame() {
    let numberOfGames = +prompt("How many games would you like to play?");
    let gameScore = 0;
    console.log(numberOfGames);
    console.log(typeof numberOfGames);
    for (let i=0; i<numberOfGames; i++) {
        gameScore += playRound(getPlayerChoice(), getComputerChoice());
    } if (gameScore === (numberOfGames/2)) {
        console.log("Congratulations! The result is a friendly tie.");
    } else if (gameScore > (numberOfGames / 2)) {
        console.log(`The player wins with a score of ${gameScore} out of ${numberOfGames}. Congratulations!`);
    } else {
        console.log(`The computer wins with a score of ${numberOfGames - gameScore} out of ${numberOfGames}. Better luck next time!`);
    }
}