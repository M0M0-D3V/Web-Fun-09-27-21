// remember we have access to the other js file beefy.js imported from html
console.log(beefObject)
let beefRegions = beefObject['regions']
console.log(beefRegions)

// get the id for regions from html
let regionsHtml = document.getElementById("regions")
// let regionsHtml = document.querySelector("#regions")
let cutsHtml = document.getElementById("cuts")


// 1. Use a for loop to build a new array with just the names of each region of the beefObject. Then display it to browser by manipulating the DOM selecting the id "regions" and using divs and class name "region"

function showRegions() {
    regionsHtml.innerText = ""
    for(let i = 0; i < beefRegions.length; i++) {
        let newName = beefRegions[i]['name']
        // console.log(newName)
        let newDiv = document.createElement("div")
        newDiv.classList.add("region")
        newDiv.innerText = newName
        // console.log(newDiv)
        regionsHtml.append(newDiv)
    }
}

function hideRegions() {
    regionsHtml.innerText = ""
}

// 2. Add a button to trigger the visual of region names in the box




// 4. Bonus - How can we show all the 'cuts'?
function showCuts() {
    for(let i = 0; i < beefRegions.length; i++) {
        for(let j = 0; j < beefRegions[i]['cuts'].length; j++) {
            let newName = beefRegions[i]['cuts'][j]['name']
            // console.log(beefRegions[i]['cuts'][j]['name'])
            let newDiv = document.createElement("div")
            newDiv.classList.add("cut")
            newDiv.innerText = newName
            // add image here! 
            newDiv.innerHTML += `<img src="./images/${newName}.png">`  // <-- backticks `` instead of "" or ''
            cutsHtml.append(newDiv)
        }
    }
}


// 5. Bonus - How can we include images from the folder to each cut?

// for loops
// arrays
// let arr = [4, 2, 1, 6, 2, 7]
// // length => # of spaces (6)
// // index => position # starting with 0 (arr[5])
// //      start;  stop; step; 
// for(var i = 0; i < 6; i++) {
//     // block of code
//     console.log("i: ", i)
// }


// // while loops
// // print numbers up to 6
// let j = 0
// while(j < 6) {
//     // code here
//     console.log("j: ", j)
//     j++
// }
// let k =0
// let text = ""
// do {
//     text += "k is " + k;
//     k++;
//   }
//   while (k < 0);

// console.log(text)
// console.log(i)
                // stop at full count of array
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

let age = 20
if(age >= 21) {
    console.log("you are legal to drink!")
}
// else if(age == 20) { 
//     console.log("just one more year!")
// }
else { // age < 21
    console.log("sorry, you are too young")
}


if(age < 21) {
    console.log("you are not of legal age yet, yo")
}
