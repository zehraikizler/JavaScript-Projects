const btn = document.querySelector("#btn");

btn.onclick = function(){
    let kirmizi = Math.floor(Math.random()*255);
    let yesil = Math.floor(Math.random()*255);
    let mavi = Math.floor(Math.random()*255);

    let renk = `rgb(${kirmizi}, ${yesil}, ${mavi})`;
    btn.style.background = renk;

    // seçilen rengi tarayıcıya kaydetme
    localStorage.setItem('renk', renk);
}

// renk adında kayıtlı değer varsa tarayıcıda onu çağırma.
if(localStorage.getItem('renk')){
    btn.style.background = localStorage.getItem('renk'); // sayfa yüklendiğinde rengi butona aktarma
}