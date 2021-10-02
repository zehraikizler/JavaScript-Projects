
var btn = document.getElementById("mesaj");
btn.addEventListener("click", () => {
    var ad = document.getElementById("txtAd");
    window.alert("Hoşgeldin " + ad.value);
})

/*

    // Metin kutusunun içindeki değer value özelliğinde tutulur.
    // değeri almak ya da değiştirmek için value özelliği kullanılır.

    // Değeri değiştirdik.
document.getElementById("txtAd").value = "Gizem";

    // Değeri mesaj ile gösterelim.
var ad = document.getElementById("txtAd");
window.alert(ad.value);

*/