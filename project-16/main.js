var panelDiv = document.querySelector("#panel");
var ekleBtn = document.querySelector("#ekle");
var sayac = 1;

ekleBtn.onclick = function() {
    var btn = document.createElement("button");
    btn.textContent = sayac++;
    btn.classList = "button-square";
    panelDiv.appendChild(btn);
}