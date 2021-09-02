numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0; i <numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML
    
    switch(buttonInnerHTML) {
      case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play()
        break;

      case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play()
        break;
    }

  })

}


