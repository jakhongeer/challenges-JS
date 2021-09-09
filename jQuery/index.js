$("h1").css("color", "blue");


$("button").addClass("button2")

$("h1").text("How are you doing?")

$("button").click(function() {
    $("button").css("color", "yellow")
})
$("button").click(function () {
    $("h1").css("color", "purple")
})

$("input").keypress(function(event) { 
    $("h1").text(event.key)
})

$("h2").before("<h3>You are strong man.</h3>")

$("h2").after("<h3>I believe you.</h3>")
//.append() .prepend()

$(".btn").on("click", function() {
    $("h2").toggle()
})
//.hide() .show()