let drumButtons = document.querySelectorAll(".drum")

drumButtons.forEach(function(drumButton){
    drumButton.addEventListener("click", function(){
        let audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    })
})
