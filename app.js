let menu = document.getElementById("menu");
let fullbox = document.querySelector(".fullbox");
let closes = document.querySelector(".closes");

menu.onclick = () => {
    fullbox.style.left = 0;
}
closes.onclick = () => {
    fullbox.style.left="100%";
}
window.onscroll = () =>{
    fullbox.style.left="100%";
    navbar.style.left="100%";
}
const activePage = window. location. pathname;
const navLinks = document. querySelectorAll('.navbar a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
const header = document.getElementsByClassName('header');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})


let menuicon = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
menuicon.addEventListener('click', function() {
    if(navbar.style.left==="100%"){
        navbar.style.left=0;
    }else{
        navbar.style.left="100%";
    }
})

const slider = document.getElementById('slider');
    let translateX = 0;
    let slideIndex = 0;
    const slideWidth = document.querySelector('.slide').clientWidth;
    const slides = document.querySelectorAll('.slide');

    function nextSlide() {
      slideIndex++;
      translateX -= slideWidth;
      slider.style.transform = `translateX(${translateX}px)`;

      if (slideIndex === slides.length) {
        setTimeout(() => {
          slideIndex = 0;
          translateX = 0;
          slider.style.transform = `translateX(${translateX}px)`;
        }, 400);
      }
    }

    function previousSlide() {
      if (slideIndex === 0) {
        slideIndex = slides.length - 1;
        translateX = -slideWidth * (slides.length - 1);
      } else {
        slideIndex--;
        translateX += slideWidth;
      }

      slider.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(nextSlide, 3000);