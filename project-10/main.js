// genel değişkenler

var optDurum = false;
    opt = "";
    sonuc = 0;

// nesnelerin oluşturulması

var btnRakam = document.querySelectorAll(".btnRakam"); // rakamlar
var gosterge = document.querySelector("#gosterge"); // gösterge paneli
var btnOpt = document.querySelectorAll(".btnOpt"); // işlem butonlarının kontrolü
var islem = document.querySelector("#islem");
var btnC = document.querySelector(".btnC");
var btnCe = document.querySelector(".btnCe");

// butonlara basıldı kontrolü (foreach)

btnRakam.forEach(function(element){
    element.onclick = function(e){
        // baştaki 0 değerini kaldırmak için 
    if(gosterge.textContent=="0" || optDurum)
    gosterge.textContent = "";

    // text nesnesini okuyup td içindeki değerlerle birleştirme
    gosterge.textContent+=this.textContent;
    optDurum = false; // +, - gibi operatör işlemi yapıldıysa text kutusunu sıfırlaması gerekiyor
    }
})

btnOpt.forEach(function(element){
    element.onclick=function(e){
        optDurum=true;
        var yeniOpt=this.textContent;

        // işlem paneli
        islem.textContent=islem.textContent+" "+gosterge.textContent+" "+yeniOpt;

        // sonuç 
        switch(opt){
            case "+" : 
            gosterge.textContent = (sonuc + Number(gosterge.textContent));
            break;
            case "-" : 
            gosterge.textContent = (sonuc + Number(gosterge.textContent));
            break;
            case "*" : 
            gosterge.textContent = (sonuc + Number(gosterge.textContent));
            break;
            case "/" : 
            gosterge.textContent = (sonuc + Number(gosterge.textContent));
            break;
            default: break;
        }

        sonuc = Number(gosterge.textContent);
        opt =yeniOpt;
    }
});

btnC.onclick = function(e){
    gosterge.textContent = "0";
}

btnCe.onclick = function(e){
    gosterge.textContent = "0";
    islem.textContent = "";
    sonuc = 0;
    opt = "";
}

