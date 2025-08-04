var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

//var diceImage1 = document.querySelector(".img1");
//var diceImage2 = document.querySelector(".img2");
var diceImage = document.querySelectorAll("img")

//diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
//diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
diceImage[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
diceImage[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 Wins"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = " Its a Draw"
}
