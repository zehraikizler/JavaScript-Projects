const urun = document.querySelector("#urun");
const ekle = document.querySelector("#ekle");
const liste = document.querySelector("#liste");

ekle.addEventListener("click", () => {
    // liste elemanlarını oluşturma (li)
    let li = document.createElement("li");

    // textboxa girilen değeri li'ye aktarma
    li.textContent = urun.value;

    // li elementini liste içine ekleme
    liste.appendChild(li);

    // textbox içerisine girilen değer listeye aktarılanca textboxı temizleyip odaklama
    urun.value= "";
    urun.focus();
})