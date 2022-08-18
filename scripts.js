/* 
Globale Variablen - Ich weiß nicht, ob diese besser innerhalb einer Funktion stehen sollten?
*/

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

/* Take both Selections as Arguments and compares them. Prints out Winner and increases Counter of Winning Side */


 function playRound(playerSelection, computerSelection) {

    
    if (playerSelection === computerSelection) {
         console.log("It's a draw") && console.log(playerSelection, computerSelection,) ;  
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerCount++;
        return console.log("You lose, Paper beats Rock!");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerCount++;
        return console.log("You lose, Scissors beats Paper!")
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerCount++;
        return console.log("You lose, Rock beats Scissors!")
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerCount++;
        return console.log("You win, Rock beats Scissors!")
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerCount++;
        return console.log("You win, Paper beats Rock!") 
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerCount++;
        return console.log("You win, Scissors beats Paper!") 
    }
 }
 



function game() {

    let computerSelection = computerPlay();  
    let playerSelect = prompt();
    const playerSelectLowerCase = playerSelect.toLowerCase()
    const playerSelection = playerSelectLowerCase.charAt(0).toUpperCase() + playerSelectLowerCase.slice(1);

    playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    
}



for (let i = 1; i < 6; i++) {
    console.log("Round " + i + " - Fight!");
    game();
    
    console.log(playerCount, computerCount);
    console.log("-------------------------");
    
    if (i == 5 && playerCount > computerCount) {
        console.log("Du hast gewonnen!");
    } else if (i == 5 && playerCount < computerCount) {
        console.log("Du hast verloren!");
    } else if (i == 5 && playerCount == computerCount) {
        console.log("Unentschieden.");
    }
 }
 


