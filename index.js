let randNum1 = Math.floor(Math.random() * 6) + 1; // random number generate 1-6

let ranDiceImg = "dice" + randNum1 + ".png"; // random pic choosing 1-6: dice2.png

let ranImgSrc = "images/" + ranDiceImg;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ranImgSrc);

//////////

let ranNum2 = Math.floor(Math.random() * 6) + 1;

let ranImgSrc2 = "images/dice" + ranNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2);

if (randNum1 > ranNum2) {
  document.querySelector("h1").innerHTML = "♨️ Player 1 Wins the game!";
} else if (ranNum2 > randNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins the game! ♨️";
} else {
  document.querySelector("h1").innerHTML = "It's DRAW 🤝";
}
