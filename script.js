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
            return "You win! Rock beats scissors";
        } else {
            console.log("Result: computer victory");
            return "You lose! Paper beats rock"
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("Result: player victory");
            return "You win! Paper beats rock.";
        } else {
            console.log("Result: computer victory");
            return "You lose! Scissors beat paper."
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("Result: player victory");
            return "You win! Scissors beat paper.";
        } else {
            console.log("Result: computer victory");
            return "You lose! Rock beats scissors."
        }
    } else {
        console.log("Result: player entered invalid choice");
        alert("Please play by the rules! Enter only Rock, Paper, or Scissors.");
        return playRound(getPlayerChoice(), getComputerChoice());
    }
}