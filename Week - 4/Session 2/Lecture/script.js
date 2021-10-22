// let randomDoge = 'https://dog.ceo/api/breeds/image/random'
let listOfImgs = 'https://dog.ceo/api/breed/hound/images'
let hereDoge = document.getElementById("here-doge")
let hereDoge2 = document.getElementById("here-doge2")


async function getDoge() {
    // what do?
    // fetch from the url
    let response = await fetch(listOfImgs)
    let info = await response.json()
    // let imgUrl = info['message']
    // console.log(imgUrl)
    console.log(info)
    // simple method to show the image in the div
    // hereDoge.innerHTML = `<img src="${imgUrl}" alt="doggie">`
    // console.log(hereDoge.innerHTML)
    // console.log(`imgUrl: ${imgUrl}`)
    // other way using node by creation

    for(let i = 0; i < 20; i++) {
        // create new image
        let newImg = document.createElement("img")
        let imgUrl = info['message'][i]
        // add the imgUrl as source <img src
            newImg.src = imgUrl
            console.log(newImg)
        // add the new image to hereDoge
            hereDoge2.append(newImg)
    }
}

async function getDoge2() {
    let response

    await fetch(listOfImgs)
    .then(function(data) {
        // console.log('Success:', data);
        response = data.json()
        
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
        console.log(response)
}

    // let info = await response.json()
    // use response.data instead with a promise
    // console.log(info)
    // for(let i = 0; i < 20; i++) {
    //     // create new image
    //     let newImg = document.createElement("img")
    //     let imgUrl = info['message'][i]
    //     // add the imgUrl as source <img src
    //         newImg.src = imgUrl
  

// how to get image url?
/* 
info {
     message: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5734.jpg',

     status: 'success'
 }

 */