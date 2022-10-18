
let hands = ["Rock", "Paper", "Scissors"]
let computerSelection = ""
let playerSelection = ""
let playerEl = document.getElementById("player-el")
let computerEl = document.getElementById("computer-el")
let whoWon = document.getElementById("who-won")
let playerScore = 0
let computerScore = 0
let playerPoints = document.getElementById("player-points")
let computerPoints = document.getElementById("computer-points")

let playerWon = 5
let computerWon = 5



function computerChoice() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

function chooseRock() {
    playerSelection = "Rock"
    playGame()
}

function choosePaper() {
    playerSelection = "Paper";
    playGame()
}

function chooseScissors() {
    playerSelection = "Scissors";
    playGame()
}

function playGame(){

    if (playerScore != playerWon && computerScore != computerWon) {
        playRound()
    }
    else{
        if (playerScore = playerWon){
            console.log("player won");
        }
        else if(computerScore = computerWon){
            console.log("computer won")
        }
    }
}


function playRound() {

    playerEl.textContent = "Player choice: " + playerSelection
    computerSelection = computerChoice()
    computerEl.textContent = "Computer choice: " + computerSelection
    console.log(playerSelection);
    console.log(computerSelection);
    

    if  ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {

        whoWon.textContent = "Player won!"
        playerScore = playerScore + 1;
        playerPoints.textContent = "Player points: " + playerScore
    }
    else if ((computerSelection === "Rock" && playerSelection === "Scissors")
        || (computerSelection === "Paper" && playerSelection === "Rock")
        || (computerSelection === "Scissors" && playerSelection === "Paper")){

        whoWon.textContent = "Computer won!"
        computerScore = computerScore + 1;
        computerPoints.textContent = "Computer points: " + computerScore 
    }
    else{
        whoWon.textContent = "draw"
    }
}



