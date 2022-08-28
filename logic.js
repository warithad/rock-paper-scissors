let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const comChoice = Math.floor(Math.random() * 3);

    if(comChoice === 1) return 'rock';
    else if(comChoice === 2) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection, computerSelection){

    if(computerSelection === playerSelection){ 
        return 'Draw match! ' + computerSelection + " is equal to " + playerSelection;
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper') {
            return 'You lost! ' + computerSelection + ' beats ' + playerSelection;
        }
        else {
            return 'You won! ' + playerSelection + ' beats ' + computerSelection;
    }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return 'You lost! ' + computerSelection + ' beats ' + playerSelection;
        }           
         else {
                return 'You won! ' + playerSelection + ' beats ' + computerSelection;
        }
    }
    else{
        if(computerSelection === 'rock'){
             return 'You lost! ' + computerSelection + ' beats ' + playerSelection;
        }
         else {
            return 'You won! ' + playerSelection + ' beats ' + computerSelection;
         }
    }
}
function reset(p, c){
    p = 0;
    c = 0;
}

const btns = document.querySelectorAll(".choice");
const currentWinner = document.querySelector(".currentWinner"); 

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const modal = document.querySelector(".modal");
const declare = document.querySelector(".declare");

const playAgain = document.querySelector(".play-again");

playAgain.addEventListener('click', () => {
    modal.close();
})

btns.forEach(btn => 
    btn.addEventListener('click', () => {
        const ans = playRound(btn.textContent, getComputerChoice());
        if(ans.includes('won')) {
            playerScore++;
            player.textContent = "Player Score: " + playerScore;
        }
        else if(ans.includes('lost')) {
            computerScore++;
            computer.textContent = "Computer Score: " + computerScore;
        }
        currentWinner.textContent = ans;

        if(playerScore == 5 || computerScore == 5){
            if(playerScore == 5) {
                declare.textContent = "You win!";
            }
            else if(computerScore == 5) {
                declare.textContent = "You lose!";
            }
            modal.showModal();
            playerScore = 0;
            computerScore = 0;
            
            player.textContent = "Player Score: 0";
            computer.textContent = "Computer Score: 0";
        }
}));



