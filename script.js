
const choice = ["ROCK", "PAPER", "SCISSOR"];
let win = 0;
let loss = 0;
for(let i = 0; i < 5; i++){
    let playerChoice = prompt("Enter your choice(ROCK, PAPER, SCISSOR)");
    computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = game(playerChoice, computerChoice);
    if(result == 1){
        win++;
    }
    else if(result == 2){
        i--;
    }
    else{
        loss++
    }

}
if(win > loss){
    console.log("Congratulations :) !!! You are the Winner!")
}
else{
    console.log("Sorry :( ! You loss!")
}
function game(playerChoice , computerChoice){
    if(playerChoice == computerChoice){
        console.log("Match tie!!! Play again!");
        return 2;
    }
    else if(playerChoice == "ROCK"){
        if(computerChoice == "PAPER"){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(playerChoice == "PAPER"){
        if(computerChoice == "SCISSOR"){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(playerChoice == "SCISSOR"){
        if(computerChoice == "ROCK"){
            return 0;
        }
        else{
            return 1;
        }
    }
    return;
}

