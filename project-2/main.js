// Anlık olarak toplama işlemini iki farklı yol ile yaptım.

// 1.Yol: setInterval() ile

///////////////////////////////////////////////////
var sayi1 = document.querySelector("#sayi1");
var sayi2 = document.querySelector("#sayi2");
var result = document.querySelector("#result");

function topla(){
    var toplam = Number(sayi1.value) + Number(sayi2.value);
    result.innerHTML = toplam;

}

hesapla = setInterval(topla, 100);
///////////////////////////////////////////////////

// setInterval Nedir?
// Otomatik olarak kod bloklarımızı işletmek için kullanmaktayız.

// 2.Yol: .oninput ile

///////////////////////////////////////////////////////
// var sayi1 = document.querySelector("#sayi1");
// var sayi2 = document.querySelector("#sayi2");
// var result = document.querySelector("#result");
// function topla(){
//     var toplam = Number(sayi1.value) + Number(sayi2.value);
//     result.innerHTML = toplam;
// }
// sayi1.oninput = topla;
// sayi2.oninput = topla;
////////////////////////////////////////////////////////

// .oninput Nedir?
// “.oninput” nesneye değer girildiğinde veya nesnenin içerisindeki değer değiştirildiğinde 
//butona gerek duymaksızın, belirlenen yere sonucu yazdırır.