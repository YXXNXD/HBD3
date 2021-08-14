window.addEventListener("DOMContentLoaded" , () => {

    const randomText = ["อ่านทำห่าไร" , "ยีนหล่อ" , "ยีนหล่อเหี้ยๆ"]
    //                        0              1             2
    const numberImg = 3
    let random = Math.floor(Math.random()*(randomText.length))
    let randomImg = Math.floor(Math.random()*numberImg)
    
    let message = document.getElementById('message')

    let btn = document.getElementById('btn')

    let img = document.getElementById('img')

    img.setAttribute('src',`${randomImg}.PNG`)

    message.innerHTML = randomText[random]

    console.log(randomText)

    btn.addEventListener("click" ,  ()  => {
        let random = Math.floor(Math.random()*(randomText.length))
        let randomImg = Math.floor(Math.random()*numberImg)
        message.innerHTML = randomText[random]
        img.setAttribute('src',`${randomImg}.PNG`)
    })





})