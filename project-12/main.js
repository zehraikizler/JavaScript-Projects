var sayi = document.getElementById("sayi");
var btnHesapla = document.getElementById("hesapla");
var sonuc = document.getElementById("sonuc");

btnHesapla.onclick = function(){
    if(sayi.value%2 == 0){
        sonuc.textContent = sayi.value + " sayısı çift sayıdır.";
    }
    else{
        sonuc.textContent = sayi.value + " sayısı tek sayıdır.";
    }
}