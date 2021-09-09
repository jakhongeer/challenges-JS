const buttonColors = ["red", "blue", "green", "yellow"]

const gamePattern = [] 

function nextSequence() {
    randomNumber = Math.floor(Math.random() *4)
    
    randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)
}

$(".btn").on("click",(function() {
    buttonId = this.id
    $("#" + buttonId).fadeOut(100).fadeIn(100);
    
    playSound(buttonId)
}))

function playSound(colorName) {
    var audio = new Audio(`sounds/${colorName}.mp3`);
    audio.play();
}

