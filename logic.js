console.log('hello world');
function getComputerChoice(){
    const x = Math.floor(Math.random() * 3);
    if(x == 1){
        return 'rock';
    }
    else if(x == 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }

}
function playRound(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase();
    if(p == computerSelection){
        return -1;
    }
    if(p == 'rock'){
        if(computerSelection == 'paper'){
            console.log("You lose, Paper beats Rock");
            return 1;
        }
        else {
            console.log("You win, Rock beats scissors");
            return 0;
        }
    }
    else if(p == 'paper'){
        if(computerSelection == 'rock'){
            console.log("You win, Paper beats rock");
            return 0;
        }
        else {
            console.log("You lose, Scissors beats paper");
            return 1;
        }
    }
    else {
        if(computerSelection == 'paper'){
            console.log("You win, Scissors beats paper");
            return 0;
        }
        else {
            console.log("You lose, Rock beats scissors");
            return 1;
        }
    }
}
function game(){
    let player = 0;
    let computer = 0;
    for(let i = 0; i < 5; i++){
        const ans = playRound(prompt("enter a string"), getComputerChoice());
        if(ans == -1){
            i -=1;
            continue;
        }
        else if (ans == 0){
            player +=1;
        }
        else {
            computer +=1;
        }
    }
    if(player > computer){
        console.log("you won");
    }
    else {
        console.log("you lost boy");
    }

    console.log("final scores player: " + player  + " computer: " + computer);
}

game();