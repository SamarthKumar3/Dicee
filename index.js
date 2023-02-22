var Randomnumber1 = Math.floor(Math.random() * 6) + 1;

var Randomnumber2 = Math.floor(Math.random() * 6) + 1;

var Diceimage1 = "dice" + Randomnumber1 + ".png";
var Diceimage2 = "dice" + Randomnumber2 + ".png";

var Imagesrc1 = "images/" + Diceimage1;
var Imagesrc2 = "images/" + Diceimage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", Imagesrc1);
image2.setAttribute("src", Imagesrc2);


if (Randomnumber1 > Randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (Randomnumber2 > Randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}