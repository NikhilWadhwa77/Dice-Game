

function myFunction(){

var diceOneNum = Math.floor(Math.random()*6) + 1;
var diceTwoNum = Math.floor(Math.random()*6) + 1;

if(diceOneNum === 1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png")
}else if(diceOneNum === 2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png")
}else if(diceOneNum === 3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
}else if(diceOneNum === 4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
}else if(diceOneNum === 5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
}else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png")
}

if(diceTwoNum === 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
}else if(diceTwoNum === 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png")
}else if(diceTwoNum === 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png")
}else if(diceTwoNum === 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png")
}else if(diceTwoNum === 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png")
}else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png")
}

if(diceOneNum > diceTwoNum){
    document.querySelector(".main-refresh").innerHTML = "Player 1 Wins";
    document.querySelector(".secondary-refresh").innerHTML = "Player 1 Wins";
}else if(diceOneNum < diceTwoNum){
    document.querySelector(".main-refresh").innerHTML = "Player 2 Wins";
    document.querySelector(".secondary-refresh").innerHTML = "Player 2 Wins";
}else{
    document.querySelector(".main-refresh").innerHTML = "Draw"
    document.querySelector(".secondary-refresh").innerHTML = "Draw";
}

}