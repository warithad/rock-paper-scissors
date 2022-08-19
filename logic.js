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

const body = document.body;

const rock = document.createElement('button');
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.textContent = 'Paper';

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

const results = document.createElement('div');

const playerRunning = document.createElement('div');
const computerRunning = document.createElement('div');
const finalWinner = document.createElement('h1');


body.append(rock, paper, scissors);
body.appendChild(results);

body.appendChild(playerRunning);
body.appendChild(computerRunning);
body.appendChild(finalWinner);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        if(playerScore == 0 && computerScore == 0){
            finalWinner.textContent = "";
        }
        results.textContent = playRound(button.textContent.toLowerCase(), getComputerChoice());

        if(results.textContent.includes('won')) playerScore++;
        else if(results.textContent.includes('lost')) computerScore++;
        
        if(playerScore == 5 || computerScore == 5){
            if(playerScore == 5) finalWinner.textContent = 'You win';
            else if(computerScore == 5) finalWinner.textContent = 'Computer wins you lose';

            playerScore = 0;
            computerScore = 0;
        }
        playerRunning.textContent = 'Player Score: ' + playerScore;
        computerRunning.textContent = 'Computer Score: ' + computerScore;
    });
});


