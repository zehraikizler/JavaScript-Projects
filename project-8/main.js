var txtVize = document.getElementById("txtVize");
var txtFinal = document.getElementById("txtFinal");
var btnHesapla = document.getElementById("btn");
var sonuc = document.getElementById("sonuc");

btnHesapla.addEventListener("click", () => {
    var vize = parseInt(txtVize.value);
    var final = parseInt(txtFinal.value);

    var ortalama = vize*40/100 + final*60/100;
    
    var durum = "";
    if(ortalama>=50 && final>=50){
        durum = "GEÇTİNİZ.";
    } 
    else if(ortalama>=50 && final<50){
        durum = "FİNAL NOTU 50 PUAN ALTINDA, KALDINIZ!!!";
    }
    else {
        durum = "FİNAL VE ORTALAMA NOTUNUZ 50'NİN ALTINDA, KALDINIZ."
    }
    sonuc.innerHTML = "Notunuz : " + ortalama + "<br>" + durum;
})