var mesaj = document.getElementById("mesaj");
mesaj.innerHTML = sayıUret(20, 80);

function sayıUret(min, max){
    var sayi = Math.floor(Math.random()*(max-min)+min);
    return sayi;
}