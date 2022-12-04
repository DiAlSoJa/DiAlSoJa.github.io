const toClose = document.getElementById("close");
const toActive= document.getElementById("active");

toClose.addEventListener("click",()=>document.querySelector(".navigation-container").classList.remove("open"));
toActive.addEventListener("click",()=>document.querySelector(".navigation-container").classList.add("open"));

// typing
const typed = new Typed(".typing",{
    strings: ["Javascript","Full Stack MERN","Frontend....","Backend....",""],
    typeSpeed: 100,
    startDelay: 500,
    backDelay: 500,
    cursorChar: '_',
    backSpeed: 0,
    loop: true
});