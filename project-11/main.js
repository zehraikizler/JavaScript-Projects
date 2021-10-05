var y1 = document.querySelector("#y1");
var y2 = document.querySelector("#y2");
var y3 = document.querySelector("#y3");
var sonuc = document.querySelector("#sonuc");
var hesapla = document.querySelector("#hesapla");
var sonucYaz = document.querySelector("#sonuc-yaz");

// text kutularına girilen değerleri kontrol edelim. <0 ve >100 durumları

[y1, y2, y3].forEach(function(nesne){

    // nesnelerin veri girişini kontrol edelim.
    nesne.oninput = function(){
        var sayi = Number(nesne.value);
        if(sayi<0 || sayi>100){
            nesne.value = "";
            this.focus();
        }
    }
});

// butona tıklamayı kontrol edelim.
hesapla.onclick = function(){

    // sayıların ortalamasının hesaplanması
    var ort = (Number(y1.value) + Number(y2.value) + Number(y3.value)) / 3;
    sonuc.value = ort; // sonucu yazdırıyoruz.
    if(ort<50){
        sonucYaz.innerHTML = "<strong style='color:red'>Başarısız Oldunuz.</strong>"
    }
    else{
        sonucYaz.innerHTML = "<strong style='color:green'>Başarılı Oldunuz.</strong>"
    }
}