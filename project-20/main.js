var modalAc = document.querySelector("#ac");
var modal = document.querySelector("#modal");
var output = document.querySelector("output");

modalAc.addEventListener("click", () => {
    modal.showModal();
});

modal.addEventListener("close", () => {

    if(modal.returnValue == "onay"){
        output.value = "Abone oldunuz.";
    }
    else{
        output.value = "Aboneliği iptal ettiniz.";
    }
});