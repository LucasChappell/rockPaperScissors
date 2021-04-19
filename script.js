let aiNum = null
function newAI()
{aiNum = Math.floor((Math.random()*3)+1)}
/*function computerPlay() {
    if (aiNum == 1){
        console.log("Rock"f)
    } 
    else if (aiNum == 2){
        console.log("Paper")
    }
    else {
        console.log("Scissors")
    }
}*/
let rockButton = document.getElementById("rock")
let playerType = '0'
let scissorsButton = document.getElementById("scissors")
let paperButton = document.getElementById("paper")
let rockIsClicked = false;
function clickHandler(){
    rockIsClicked = true;
    playerType = 'rock'
}
rockButton.addEventListener("click", clickHandler);
function selectRoll(){
    playerType = prompt("Rock, Paper or Scissors?").toLowerCase();
   /*if (rockIsClicked = true){
       playerType = 'rock'
   }
   if (playerType = '0'){
       setTimeout(function(){findWinner()},5000);
   } else {findWinner()}*/

}



let restart = "0";
let winStat = 0;
let lossStat = 0;
let tieStat = 0;
function findWinner(){
switch(playerType){
    case '0':
        console.log("Type an answer")
        break;
    case 'rock':
        if (aiNum == 1){
            console.log("You Tied!");
            tieStat++
        } else if (aiNum == 2) {
            console.log("You Lost!");
            lossStat++
    }
        else {
            console.log("You Won!")
            winStat++
    }
    break;
    case 'scissors':
        if (aiNum == 1){
            console.log("You Lost!")
            lossStat++
        } else if (aiNum == 2) {
            console.log("You Won!")
            winStat++
        }
        else {
            console.log("You Tied!")
            tieStat++
        }
    break;
    case 'paper':
        if (aiNum == 1){
            console.log("You Won!")
            winStat++
        } else if (aiNum == 2) {
            console.log("You Tied!")
            tieStat++
        }
        else {
            console.log("You Lost!")
            lossStat++
        }
    break;
    default:
    console.log("That is not an option.")
}}
function reportScore(){
    console.log(winStat + " W - " + lossStat + " L - " + tieStat + " T")
}
function round(){
    newAI()
    selectRoll()
    findWinner()
    reportScore()
}
function game(){
    for (let roundCount = 0; roundCount < 5; roundCount++){
        round()  
    }
    playAgain()
}
//game()

function playAgain(){
    restart = prompt("Play Again?").toLowerCase();
    switch(restart){
        case "0":
            break;
        case "yes":
            game()
            break;
        default:
            console.log("See you next time!")
    }
}