const ust = document.querySelector("#ust");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        ust.style.position = "fixed";
        ust.style.top = "0px";
        ust.style.background = "#555";
    }
    else{
        ust.style.position = "static";
        ust.style.background = "#252525";
    }
});