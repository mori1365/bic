let menu = document.getElementById("menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click", function() {
    if(nav.style.left==="100%"){
        nav.style.left = 0;
    }else{
        nav.style.left="100%";
    }
})
let fullbox = document.querySelector(".fullscreen");
        let closes = document.querySelector(".closed");
        let iframe = document.querySelector("iframe");
        function openbox(url) {
            fullbox.style.left = 0;
            iframe.src = url;
        }
        closes.onclick = () => {
            fullbox.style.left = "100%";
        }