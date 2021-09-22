var sayi = document.querySelector("#sayi");
var btn = document.querySelector("#hesapla");
var result = document.querySelector("#result");

var sonuc = 1;

btn.addEventListener("click", () => {
    for(var i=1; i <= sayi.value; i++){      
        sonuc*=i;
    }
    result.innerHTML = sonuc;
    sayi.value = "";
});