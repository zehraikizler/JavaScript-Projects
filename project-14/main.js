var s1 = document.querySelector("#sayi1");
var s2 = document.querySelector("#sayi2");
var hesapla = document.querySelector("#hesapla");
var sonuc = document.querySelector("#sonuc");

hesapla.addEventListener("click", () => {
    var hipotenus = Math.sqrt(s1.value*s1.value + s2.value*s2.value);
    sonuc.textContent = "Hipotenüs Değeri: " + hipotenus;
})

// hesapla.onclick = function(){
//     var hipotenus = Math.sqrt(s1.value*s1.value + s2.value*s2.value);
//     sonuc.textContent = hipotenus;
// }