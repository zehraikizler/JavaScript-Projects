var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    var renk1 = Math.round(Math.random()*255);
    var renk2 = Math.round(Math.random()*255);
    var renk3 = Math.round(Math.random()*255);

    document.body.style.background = `rgb(${renk1}, ${renk2}, ${renk3})`;


    // Bu koduda çalıştırdığımızda arka plan rengini değiştirir.
    //document.body.style.background = "rgb("+renk1+", "+renk2+", "+renk3+")";
})

