var sayi1 = document.querySelector("#sayi1");
var sayi2 = document.querySelector("#sayi2");
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");

btn.addEventListener("click", () => {
    
    var toplam = parseInt(sayi1.value) + parseInt(sayi2.value);
    result.innerHTML = toplam;
});