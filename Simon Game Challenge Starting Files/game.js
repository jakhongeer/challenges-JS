const buttonColors = ["red", "blue", "green", "yellow"]

const gamePattern = [] 

function nextSequence() {
    randomNumber = Math.floor(Math.random() *4)
    
    randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)
}



 
