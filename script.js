let intento = 6;
let diccionario = ["PLUMA", "LIMON", "COCHE", "PISTA", "RELOJ"];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log(palabra);

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);

function intentar() {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    const INTENTO = leerIntento();

    if (INTENTO.length !== 5) {
        alert("Palabra de 5 letras");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.style.display = "inline-block";

        if (palabra[i] === INTENTO[i]) {
            SPAN.style.background = "#ffcc00"; 
            SPAN.innerHTML = INTENTO[i];
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.style.background = "#33cc33"; 
            SPAN.innerHTML = INTENTO[i];
        } else {
            SPAN.style.background = "#ff6666"; 
            SPAN.innerHTML = "_";
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    let aciertos = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === INTENTO[i]) {
            aciertos++;
        }
    }

    if (aciertos === palabra.length) {
        terminar("<h1>¡GANASTE! :)</h1>");
        return;
    }

    intento--;
    if (intento === 0) {
        terminar("<h1>¡PERDISTE! :(</h1>");
        return;
    }
}

function leerIntento() {
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
