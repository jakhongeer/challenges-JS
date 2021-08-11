function randomNumber(){
    var firstPlayerDice = Math.floor(Math.random()*7);
    var secondPlayerDice = Math.floor(Math.random()*7);
    return {
        firstPlayerDice,
        secondPlayerDice
    };
}
randomNumber()