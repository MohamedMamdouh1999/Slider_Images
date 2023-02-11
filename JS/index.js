let items = Array.from(document.querySelectorAll(".item img"))
let lightContainer = document.getElementById("lightContainer")
let lightBox = document.getElementById("lightBox")
let previous = document.getElementById("previous")
let btnclose = document.getElementById("close")
let next = document.getElementById("next")
let currentIndex = 0

for(let i=0;i<items.length;i++){
    items[i].addEventListener("click", event =>{
        openSlider(event)
    })
}
function openSlider(event){
    let currentSrc = event.target.src
    lightContainer.style.display = "flex"
    lightBox.style.backgroundImage = `url(${currentSrc})`
    currentIndex = items.indexOf(event.target)

}
let closeBox = _=> lightContainer.style.display = "none"
function nextItem(){
    currentIndex++
    if(currentIndex === items.length){
        currentIndex = 0
    }
    let currentSrc = items[currentIndex].src
    lightBox.style.backgroundImage = `url(${currentSrc})`
}
function previousItem(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = items.length - 1
    }
    let currentSrc = items[currentIndex].src
    lightBox.style.backgroundImage = `url(${currentSrc})`
}

btnclose.addEventListener("click",closeBox)
next.addEventListener("click",nextItem)
previous.addEventListener("click",previousItem)

document.addEventListener("keydown", event =>{
    if(event.key === "Escape"){
        closeBox()
    } else if(event.key === "ArrowRight"){
        nextItem()
    } else if(event.key === "ArrowLeft"){
        previousItem()
    }
})
document.addEventListener("click",event=>{
    if(event.target.id === "lightContainer"){
        closeBox()
    }
})
