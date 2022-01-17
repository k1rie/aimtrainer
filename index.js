const score = document.querySelector("#score")

const pausebtn = document.querySelector("#pausebtn")

const totaltargets = document.querySelector("#totaltargets")

const select = document.querySelector("#dificulty")

const quiticon = document.querySelector("#quiticon")

const menu = document.querySelector("#menu")

const settings = document.querySelector("#settings")

const save = document.querySelector("#savebtn")

const targeturl = document.querySelector("#targeturl")

const backgroundurl = document.querySelector("#backgroundurl")

var screenwidth = screen.width

var screenheight = screen.height

var scorecount = 0

var targetscount = 0

const easy = 2000

const medium = 1300

const hard = 700

quiticon.addEventListener("click",()=>{
menu.style.display = "none"
})

settings.addEventListener("click",()=>{
    menu.style.display = "flex"
})

save.addEventListener("click",()=>{
    localStorage.setItem("targeturl",targeturl.value)
    localStorage.setItem("backgroundurl",backgroundurl.value)
})







pausebtn.addEventListener("click",()=>{
    if(pausebtn.checked === true){
        scorecount = 0
        totaltargets.textContent = `Total Targets:${targetscount}`
    }
 
        if(select.value === "easy"){
        const gentarget = setInterval(()=>{
           if(pausebtn.checked === false && select.value === "easy"){
                const target = document.createElement("img")
            target.style.position = "fixed"
            target.src = localStorage.getItem("targeturl")
            target.style.backgroundColor = "black"
            target.style.objectFit = "cover"
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
            
          targetscount++  
    }
        },easy)
    }

    if(select.value === "medium"){
        const gentarget = setInterval(()=>{
            if(pausebtn.checked === false && select.value === "medium"){
                const target = document.createElement("img")
            target.style.position = "fixed"
            target.src = localStorage.getItem("targeturl")
            target.style.backgroundColor = "black"
            target.style.objectFit = "cover"
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
            
          targetscount++ 
    } 
        },medium)
    }

    if(select.value === "hard"){
        const gentarget = setInterval(()=>{
            if(pausebtn.checked === false && select.value === "hard"){
                const target = document.createElement("img")
            target.style.position = "fixed"
            target.src = localStorage.getItem("targeturl")
            target.style.backgroundColor = "black"
            target.style.objectFit = "cover"
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
            
          targetscount++  
    }
        },hard)
    }

    console.log(select.value)
})
