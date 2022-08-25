const result = document.querySelector('.result');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const buttons = document.querySelectorAll('button');
let playerCount = 0;
let computerCount = 0;


/* Create randomized Computer Selection */

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber < 1) {computerChoice = "Rock"}
    else if (randomNumber < 2) {computerChoice = "Paper"}
    else computerChoice = "Scissors";

    return computerChoice;
};

/* takes player and computerselecton, compares them, declares winner while adding a point to the counter */

 function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        h2.textContent = 'Diesmal ist es unentschieden!';
        result.appendChild(h2);
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        h2.textContent = 'You lose, Paper beats Rock!';
        result.appendChild(h2);
        computerCount++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        h2.textContent = 'You lose! Paper beats Scissors.';
        result.appendChild(h2);
        computerCount++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        h2.textContent = 'You lose, Rock beats Scissors!';
        result.appendChild(h2);
        computerCount++;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        h2.textContent = 'You win, Rock beats Scissors!';
        result.appendChild(h2);
        playerCount++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        h2.textContent = 'You win, Paper beats Rock!';
        result.appendChild(h2);
        playerCount++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        h2.textContent = 'You win, Scissors beats Paper!';
        result.appendChild(h2);
        playerCount++;
    }
 }

/* plays determineWinner function after user selects option. if one players playercount reaches 5, it declares winner */ 

function playRound() {

    let playerSelection = buttons.forEach((button) => {
        button.addEventListener('click', event => {
            if (event.target.id == "1" ) {
                playerSelection = "Rock";
                let computerSelection = computerPlay();
                determineWinner(playerSelection, computerSelection);
                console.log(playerSelection, computerSelection);
            } 
            else if (event.target.id == "2") {
                playerSelection = "Paper";
                let computerSelection = computerPlay();
                determineWinner(playerSelection, computerSelection);
                console.log(playerSelection, computerSelection);
            }
            else if (event.target.id == "3") {
                playerSelection = "Scissors";
                let computerSelection = computerPlay();
                determineWinner(playerSelection, computerSelection);
                console.log(playerSelection, computerSelection);
            }

        console.log(playerCount, computerCount);
        h3.textContent = playerCount + " - " + computerCount;
        result.appendChild(h3);

        if (playerCount == 5) {
            h1.textContent = "Du hast gewonnen - Herzlichen Glückwunsch!"
            result.appendChild(h1);
        } else if (computerCount == 5) {
            h1.textContent = "Der Computer hat gewonnen du pleb"
            result.appendChild(h1);
        }
        });
    });
}

playRound();