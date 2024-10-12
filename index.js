let drumButtons = document.querySelectorAll(".drum")

drumButtons.forEach(function(drumButton){
    drumButton.addEventListener("click", function(){
        alert("I've got clicked")
    })
})
