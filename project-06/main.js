var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var sayac = 1;

    var satir = document.getElementById("satir").value;
    var sutun = document.getElementById("sutun").value;

    var table = document.createElement("table");
    for(var i=0; i<satir; i++){
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for(var j=0; j<sutun; j++){
            var td = document.createElement("td");
            td.innerHTML = sayac++;
            tr.appendChild(td);           
        }
    }
    var boxs = document.getElementById("boxs");
    boxs.innerHTML = "";
    boxs.appendChild(table);
})

/* tablo HTML kodları
    <table>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
    </table>
*/