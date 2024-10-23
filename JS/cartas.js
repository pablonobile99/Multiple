const cantidadCartas = 5;
let cantidadCartasGanadoras = 1;
let cantidadCartasNeutras = 1;
let cantidadCartasMalas = 3;
let intentos = 1;

let cartas = [];
let imagen = [];


let cartasActivas = [];
let cartasVoletadas = [];

for (i = 0; i < cantidadCartas; i++) {
    cartasActivas.push(false);
    cartasVoletadas.push(false);
}

const srcCarta = {
    "0": "../img/cartas/ganar.png",
    "1": "../img/cartas/+1intento.png",
    "2": "../img/cartas/-1vida.png",
    "3": "../img/cartas/nosuerte.png"
}

const imagenCarta = {}

function crearBancoImg() {
    let valor = 0;
    let cartasRestantes;
    cartasRestantes = cantidadCartas - cantidadCartasGanadoras - cantidadCartasMalas - cantidadCartasNeutras;

    for (i = 0; i < cantidadCartasGanadoras; i++) {
        valor = i;
        imagenCarta[valor] = srcCarta["0"];
    }
    for (i = 0; i < cantidadCartasNeutras; i++) {
        valor = i + cantidadCartasGanadoras;
        imagenCarta[valor] = srcCarta["1"];
    }
    for (i = 0; i < cantidadCartasMalas; i++) {
        valor = i + cantidadCartasGanadoras + cantidadCartasNeutras;
        imagenCarta[valor] = srcCarta["2"];
    }
    for (i = 0; i < cartasRestantes; i++) {
        valor = i + cantidadCartasGanadoras + cantidadCartasMalas + cantidadCartasNeutras;
        imagenCarta[valor] = srcCarta["3"];
    }
}

crearBancoImg();

//PUNTAJE------------------------------------------------------
const puntaje = document.getElementById("puntaje");
const textoIntentos = document.createElement("p");
const textoVidas = document.createElement("p");
const textoVictorias = document.createElement("p");
textoIntentos.innerHTML = "Intentos: " + intentos;
textoVidas.innerHTML = "vidas: " + vidas;
textoVictorias.innerHTML = "victorias: " + victorias;
puntaje.appendChild(textoIntentos);
puntaje.appendChild(textoVidas);
puntaje.appendChild(textoVictorias);

function mostrarPuntaje() {
    textoIntentos.innerHTML = "Intentos: " + intentos;
    textoVidas.innerHTML = "vidas: " + vidas;
    textoVictorias.innerHTML = "victorias: " + victorias;
}

mostrarPuntaje();

//---------------------------------------------------------------

function voltearCarta(i) {
    if (cartasActivas[i] === false) {
        if (intentos > 0) {
            if (cartasVoletadas[i] == true) {
                cartasActivas[i] = true;
                document.getElementById("carta" + i).setAttribute("src", imagen[i]);
                accionCarta(i);
                mostrarPuntaje();
            }
        }
    }
}

const crearCarta = (tipo) => {
    const img = document.createElement("img");
    img.src = "../img/cartas/back.png";
    img.id = "carta" + tipo;
    img.orden = tipo;
    img.addEventListener("click",
        function () {
            cartasVoletadas[img.orden] = true;
            voltearCarta(img.orden);
        }
    );
    return img;
}

const crearTablero = () => {
    const tablero = document.getElementById("tablero");
    for (let cardNumber = 0; cardNumber < cantidadCartas; cardNumber++) {
        const card = crearCarta(cardNumber);
        tablero.appendChild(card);
        cartas.push(card);
    }
};

crearTablero();

function accionCarta(numero) {
    intentos--;
    if (imagen[numero] == srcCarta[0]) victorias++;
    if (imagen[numero] == srcCarta[1]) intentos += 1;
    if (imagen[numero] == srcCarta[2]) vidas--;
}

imagen = recorrerobjeto(imagenCarta);
