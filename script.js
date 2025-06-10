const aumentarFuente = document.querySelector("#aumentarFuente");
const disminuirFuente = document.querySelector("#disminuirFuente")
const body = document.body;

let TamFuente = 16;

aumentarFuente.addEventListener("click", () => {
    TamFuente = Math.min(264, TamFuente + 2);
    body.style.fontSize = TamFuente + "px";
});

disminuirFuente.addEventListener("click", () => {
    TamFuente = Math.max(10, TamFuente - 2);
    body.style.fontSize = TamFuente + "px";
});