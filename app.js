

// We can add an event listener to the first drum button on the page with the following code
// document.querySelector("button").addEventListener("click", clickRespond)

// function clickRespond () {
//     alert("I got clicked!")
// }



// OR you can write out all of the above as follows, using an "anonymous function" (function with no name)
//   document.querySelector("button").addEventListener("click", function() {
//      alert("I got clicked!")
//  })
// Notice that all of the anonymous function code must fall within the paretheses of the addEventListener




// But we want to add an event listener to ALL buttons on our page, so we'll combine a for loop and a querySelector
let numOfDrums = document.querySelectorAll(".drum").length

for (let i = 0; i < numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML

        makeSound(buttonInnerHTML)
        
        })
}

// This block of code ^^ won't work unless you include [i] after whatever you're trying to target, so the for loop knows what
// to look for. example: querySelectorAll(".drum")[i]

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
})


function makeSound(key) {
    
    switch (key) {

        case "w":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "a":
            let bass = new Audio("sounds/kick-bass.mp3")
            bass.play()
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case "4":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "8":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case "6":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default: console.log(buttonInnerHTML)
    }
}