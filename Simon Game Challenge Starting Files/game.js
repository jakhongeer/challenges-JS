
const buttonColors = ["red", "blue", "green", "yellow"]

const gamePattern = []

const userClickedPattern = []

$(".btn").on("click",(function clickedButton() {
    var userChosenColor = this.id

    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)

    playSound(userChosenColor)
}))

function playSound(colorName) {
    var audio = new Audio(`sounds/${colorName}.mp3`);
    audio.play();
}

 

function nextSequence() {
    randomNumber = Math.floor(Math.random() *4)
    
    randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}



