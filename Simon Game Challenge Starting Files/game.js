
const buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

level = 0;

started = false;

$(document).keypress(function() {

    if (!started) {
        $("#level-title").text( "Level " + level)
        nextSequence()
        started = true;
    }

    
})

$(".btn").on("click",(function clickedButton() {
    var userChosenColor = this.id

    userClickedPattern.push(userChosenColor)
 

    animatePress(userChosenColor)
    playSound(userChosenColor)

    checkAnswer(userClickedPattern.length-1)
}))

function playSound(colorName) {
    var audio = new Audio(`sounds/${colorName}.mp3`);
    audio.play();
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success")

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 1000)
        }
    
    }

    else {
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level)

    randomNumber = Math.floor(Math.random() *4)
    
    randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed")
    setTimeout(function() {
        $("." + currentColor).removeClass("pressed")
    }, 100)


}