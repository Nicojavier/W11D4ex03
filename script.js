const aumentarFuente = document.querySelector("#aumentarFuente");
const disminuirFuente = document.querySelector("#disminuirFuente")
const cambiarModo =document.querySelector("#cambiarModo");
const body = document.body;


let TamFuente = 16;

aumentarFuente.addEventListener("click", () => {
    TamFuente = Math.min(26, TamFuente + 2);
    body.style.fontSize = TamFuente + "px";
});

disminuirFuente.addEventListener("click", () => {
    TamFuente = Math.max(10, TamFuente - 2);
    body.style.fontSize = TamFuente + "px";
});

cambiarModo.addEventListener("click", () => {
    body.style.backgroundColor = body.style.backgroundColor === "black" ? "white" : "black";
    body.style.color = body.style.color === "white" ? "black" : "white";
});