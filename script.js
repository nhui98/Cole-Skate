const hamburger = document.getElementById("hamburger");
const navClose = document.getElementById("nav-close");
const nav = document.getElementById("nav");
const body = document.querySelector("body");

console.log(body);

function toggleMenu() {
    nav.classList.toggle("open");
    body.classList.toggle("stop-scrolling");
}

hamburger.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);