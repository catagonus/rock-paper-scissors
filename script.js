const playbuttons = document.querySelectorAll('.playbutton');

const results = document.querySelector('#results');

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const replayButton = document.querySelector('#playAgain');
replayButton.style.display = 'none';

playbuttons.forEach( button => {
    button.addEventListener('click', playRound);
})

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "Error in computer choice.";
    }
}

function playRound(e) {

    while (results.hasChildNodes()) results.removeChild(results.firstChild);

    replayButton.style.display = 'none';

    playbuttons.forEach( button => {
        button.style.display = 'inline';
    })

    document.querySelectorAll('.score').forEach(each => each.style.display = 'block');

    console.log(e.target.getAttribute('id'));

    const playerChoice = e.target.getAttribute('id');
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const para = document.createElement('p');

    if (playerChoice === computerChoice) {
        para.textContent = "You tied this round. Try again.";
        results.appendChild(para);
        
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            para.textContent = "You win this round. Rock beats scissors.";
            results.appendChild(para);
            playerScore.textContent = +playerScore.textContent + 1;
        } else {
            para.textContent = "You lose this round. Paper beats rock.";
            results.appendChild(para);
            computerScore.textContent = +computerScore.textContent + 1;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            para.textContent = "You win this round. Paper beats rock.";
            results.appendChild(para);
            playerScore.textContent = + playerScore.textContent + 1;
        } else {
            para.textContent = "You lose this round. Scissors beats paper.";
            results.appendChild(para);
            computerScore.textContent = +computerScore.textContent + 1;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            para.textContent = "You win this round. Scissors beats paper.";
            results.appendChild(para);
            playerScore.textContent = +playerScore.textContent + 1;
        } else {
            para.textContent = "You lose this round. Rock beats scissors.";
            results.appendChild(para);
            computerScore.textContent = +computerScore.textContent + 1;
        }
    } else {
        console.log("Result: player entered invalid choice");
        
        
    }
    console.log(`player score: ${playerScore.textContent}`);
    console.log(`computer score: ${computerScore.textContent}`);

    if (+playerScore.textContent == 3 || +computerScore.textContent == 3) {
        const finalResult = document.createElement('h3');
        const resultDetails = document.createElement('p');
        if (+playerScore.textContent > +computerScore.textContent) {
            finalResult.textContent = `VICTORY! Congratulations, you win the game with a score of ${playerScore.textContent}!`;
        } else {
            finalResult.textContent = `FAILURE! Better luck next time. You lose the game with a score of ${playerScore.textContent}.`;
        }
        resultDetails.textContent = `Final scores: Player: ${playerScore.textContent} vs. Computer: ${computerScore.textContent}`;

        results.appendChild(finalResult);
        results.appendChild(resultDetails);

        document.querySelectorAll('.score').forEach(each => {
            each.style.display = 'none';
        });

        replayButton.style.display = 'block';
        playbuttons.forEach( button => {
            button.style.display = 'none';
        });

        replayButton.addEventListener('click', playRound);
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        
    }

}

