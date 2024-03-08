let menu = document.getElementById("menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click", function() {
    if(nav.style.left==="100%"){
        nav.style.left = 0;
    }else{
        nav.style.left="100%";
    }
})