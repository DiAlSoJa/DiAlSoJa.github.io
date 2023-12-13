const toClose = document.getElementById("close");
const toActive= document.getElementById("active");
// const form = document.querySelector(".formulario");
// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");
// const numero = document.getElementById("numero");
// const mensage = document.getElementById("mensage");

toClose.addEventListener("click",()=>document.querySelector(".navigation-container").classList.remove("open"));
toActive.addEventListener("click",()=>document.querySelector(".navigation-container").classList.add("open"));

