const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const yas = document.querySelector("#yas");
const ekle = document.querySelector("#ekle");
const liste = document.querySelector("#liste");

// butona tıklanınca çalıştırma
ekle.addEventListener("click", () => {

    // td elementleri oluşturma (sütunlar)
    let tAd = document.createElement("td");
    let tSoyad = document.createElement("td");
    let tYas = document.createElement("td");

    // textboxtan değeri okuyup aktarma (sütunlara değerleri aktarma)
    tAd.textContent = ad.value; 
    tSoyad.textContent = soyad.value;
    tYas.textContent = yas.value;

    // tr elementlerini oluşturma (satır)
    let tr = document.createElement("tr");

    // tdleri tr içine ekleme (sütunları satıra ekleme)

    tr.appendChild(tAd);
    tr.appendChild(tSoyad);
    tr.appendChild(tYas);

    // tr elementini liste (tablo) içine ekleme
    liste.appendChild(tr);

    // nesneleri listeye aktardıktan sonra textboxları temizleme
    ad.value = "";
    soyad.value = "";
    yas.value = "";

    // temizledikten sonra ad textboxına odaklama
    ad.focus();
})