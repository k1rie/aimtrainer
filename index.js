const score = document.querySelector("#score")

var screenwidth = screen.width

var screenheight = screen.height

var scorecount = 0





setInterval(()=>{
    const target = document.createElement("div")
    target.style.position = "fixed"
    target.style.backgroundColor = "black"
    target.style.width = "50px"
    target.style.height = "50px"
    target.style.borderRadius = "100%"
    target.style.top = `${Math.floor(Math.random() * screenheight)}px`
    target.style.left = `${Math.floor(Math.random() * screenwidth)}px`
    target.style.transition = "1s all"
    document.querySelector("body").append(target)
    setTimeout(()=>{
        target.style.width = "0px"
        target.style.height = "0px"
    },1000)
target.addEventListener("click",(e)=>{
target.style.display = "none"
scorecount++
score.textContent = `score:${scorecount}`
})
},400)




