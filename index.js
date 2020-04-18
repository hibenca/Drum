// Number of buttons
let numberOfDrumButtons = document.querySelectorAll(".btn").length;

// Detecting Button Press
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonFlash(buttonInnerHTML);
    })
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    buttonFlash(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            return key;
    }
}

function buttonFlash(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    try {
        activeButton.classList.add("pressed");
    }
    catch(e) {
        return null;
    }

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

// End of JS document