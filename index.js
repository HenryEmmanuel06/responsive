let menuBtn = document.querySelector(".menu")
let navBar = document.getElementById("nav");
let closeBtn = document.querySelector(".close")

menuBtn.addEventListener("click", function(){
    navBar.style.display = "block"
    
})
closeBtn.addEventListener("click", function(){
    navBar.style.display = "none"
})