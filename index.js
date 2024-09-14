let allbuttons = document.querySelectorAll(".drum").length;

function play(value){
    switch(value){
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            buttonanimation(value)
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            buttonanimation(value)
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            buttonanimation(value)
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            buttonanimation(value)
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            buttonanimation(value)
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            buttonanimation(value)
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            buttonanimation(value)
            break;    
    }

} 
function buttonanimation(value){
    let activebutton = document.querySelector("."+value)
    activebutton.classList.add('pressed')
    setTimeout(function(){
        activebutton.classList.remove('pressed')
    },100)
}
for (let i = 0; i < allbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let btn = this.innerHTML
        play(btn)
    });
}

document.addEventListener("keypress",function(event){
    let key = event['key']
    play(key)
})

