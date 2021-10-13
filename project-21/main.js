var menuAc = document.querySelector("#menuAc");
var menu = document.querySelector("#menu");
var kapatBtn = document.querySelector("#kapatBtn");

menuAc.addEventListener("click", () => {
    menu.style.left = "0vw";
});

kapatBtn.addEventListener("click", () => {
    menu.style.left = "-100vw";
});