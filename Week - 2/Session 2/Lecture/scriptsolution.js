// declare variables up front. This top area is called "global"
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let meatBtn = document.getElementById("Meat-btn")
let potBtn = document.getElementById("Potato-btn")
let mWindow = document.getElementById("window")
let progBtns = document.getElementsByClassName("program-btn")
let minBtns = document.getElementsByClassName("min-btn")

let total = document.getElementById("total")

// remember console.log is your best friend

// set attributes to both buttons to run respective functions
startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
meatBtn.addEventListener("click", meat)
potBtn.addEventListener("click", potato)

// what does this do?
for(let i = 0; i < minBtns.length; i++) {
    minBtns[i].addEventListener("click", function() { minBtn(i) })
}

for(let j = 0; j < progBtns.length; j++) {
    progBtns[j].addEventListener("click", addToTotal)
}

// ********************************************
// Each function will run when their name is called. They each have their own things to do

function start() {
    // turn on the microwave by changing color to yellow
    // mWindow.style.backgroundColor = "#dace9d"
    if(mWindow.classList.contains("off")){
        mWindow.classList.replace("off", "on")
    }
    else {
        mWindow.classList.add("on")
    }
}

function stop() {
    // turn off by changing color back to original
    // mWindow.style.background = "#011111"
    // check if something was cooking before
    mWindow.style.backgroundImage = ""
    if(!mWindow.classList.contains("on")) {
        mWindow.classList.add("off")
    }
    else {
        mWindow.classList.replace("on", "off")
    }
}

function meat() {
    alert("cooking meat")
    mWindow.classList.remove("off")
    // mWindow.classNam
    mWindow.style.backgroundImage = "url(./img/meat.jpg)"
    mWindow.style.backgroundPosition = "center"
    mWindow.style.backgroundSize = "cover"
    mWindow.style.opacity = "0.7"
}

function potato() {
    alert("cooking potato")
    mWindow.style.backgroundImage = "url(./img/potato.jpg)"
    mWindow.style.backgroundPosition = "center"
    mWindow.style.backgroundSize = "cover"
    mWindow.style.opacity = "0.7"
}

function minBtn(num) {
    if(num < 9) {
        alert(`cooking ${num + 1} minutes`)
        start()
    }
}

function addToTotal() {
    let newtotal = total.innerHTML
    newtotal++
    total.innerHTML = newtotal
}

function addToThis(element) {
    let name = element.innerHTML + "-ct"
    let thisSpan = document.getElementById(name)
    let thisCount = thisSpan.innerHTML
    thisCount++
    thisSpan.innerHTML = thisCount
}