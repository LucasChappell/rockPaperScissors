
//let aiNum = Math.floor((Math.random()*3)+1)
let aiNum = null
function newAI()
{aiNum = Math.floor((Math.random()*3)+1)}
function computerPlay() {
    if (aiNum == 1){
        console.log("Rock")
    } 
    else if (aiNum == 2){
        console.log("Paper")
    }
    else {
        console.log("Scissors")
    }
}
//let playerType = prompt("Rock, Paper or Scissors?").toLowerCase();
let playerType = '0'
function selectRoll(){
    playerType = prompt("Rock, Paper or Scissors?").toLowerCase();
}
function findWinner(){
switch(playerType){
    case '0':
        console.log("Type an answer")
        break;
    case 'rock':
        if (aiNum == 1){
            console.log("You Tied!")
        } else if (aiNum == 2) {console.log("You Lost!")}
        else {console.log("You Won!")}
    break;
    case 'scissors':
        if (aiNum == 1){
            console.log("You Lost!")
        } else if (aiNum == 2) {console.log("You Won!")}
        else {console.log("You Tied!")}
    break;
    case 'paper':
        if (aiNum == 1){
            console.log("You Won!")
        } else if (aiNum == 2) {console.log("You Tied!")}
        else {console.log("You Lost!")}
    break;
    default:
    console.log("That is not an option.")
}}
function round(){
    newAI()
    selectRoll()
    findWinner()
}
round()