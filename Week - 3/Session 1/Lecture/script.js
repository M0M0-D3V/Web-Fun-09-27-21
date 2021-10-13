let count = 0
let classes = document.getElementById("classes")

function addToMyClass() {
    count++
    classes.innerText = count
    // classes.innerText++
}

function addLike(name) {
    let like = document.getElementById(name)
    like.innerText++
}

function showKakashi(element) {
    element.src = "./images/sensei.jpg"
}
function showJason(element) {
    element.src = "./images/jason.png"
}
function showAaron(element) {
    element.src = "./images/aaron.png"
}
function showDevon(element) {
    element.src = "./images/devon.png"
}
function showMonica(element) {
    element.src = "./images/monica.png"
}