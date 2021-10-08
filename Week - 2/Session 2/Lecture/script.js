// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
console.log("hello my favorite human, js is loaded")

let startBtn = document.getElementById("start")
let mWindow = document.getElementById("window")
let potatoBtn = document.getElementById("potato-btn")
let total = document.getElementById("total")

// adding eventlistener to the variables
potatoBtn.addEventListener("click", potato)

function start() {
    // turn on the microwave by changing the color of the window to on
    mWindow.classList.replace("off", "on")
}

function stop() {
    mWindow.style.backgroundImage = ""
    mWindow.classList.replace("on", "off")
}

// (this) is being brought over to be called "element" inside this function
function hover(element) {
    // when mouse is over, change the background color to the dark green color
    element.style.backgroundColor = "#011111"
}

function hoverOut(element) {
    element.style.backgroundColor = "#000"

}

function potato() {
    alert("we are cooking potato")
    mWindow.style.backgroundImage = "url(./img/potato.jpg)"
    mWindow.style.backgroundPosition = "center"
    mWindow.style.backgroundSize = "cover"
    mWindow.style.opacity = "0.7"
}

function addToTotal() {
    let newTotal = total.innerHTML
    newTotal++
    total.innerHTML = newTotal
}