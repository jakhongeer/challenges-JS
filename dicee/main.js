var firstPlayerDice = Math.floor(Math.random() * 6 + 1);
var secondPlayerDice = Math.floor(Math.random() * 6 + 1);

document.getElementById(
  "firstPlayer"
).src = `images/dice${firstPlayerDice}.png`;
document.getElementById(
  "secondPlayer"
).src = `images/dice${secondPlayerDice}.png`;



if (firstPlayerDice > secondPlayerDice) {
  document.getElementById("crown1").style.visibility = "visible"
  document.getElementById("title").innerHTML = "Player 1 wins!";
  
} else if (firstPlayerDice < secondPlayerDice) {
  document.getElementById("crown2").style.visibility = "visible"
  document.getElementById("title").innerHTML = "Player 2 wins!";
} else {
  document.getElementById("title").innerHTML = "Draw!";
}

