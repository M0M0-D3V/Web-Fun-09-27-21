let count = 0

function addClass() {
    let link = document.getElementById("class-count")
    count++
    link.innerText = count
}

function addLike(id) {
    let element = document.getElementById(id)
    let number = element.innerText
    number++
    element.innerText = number
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