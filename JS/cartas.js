const cantidadCartas = 12;
let cantidadCartasGanadoras = 2;
let cantidadCartasNeutras = 4;
let cantidadCartasMalas = 3;


let cartas = [];
let imagen = [];


let cartasActivas = [];
let cartasVolteadas = [];

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

//---------------------------------------------------------------
function accionCarta(numero) {
    intentos--;
    if (imagen[numero] == srcCarta[0]) victorias++;
    if (imagen[numero] == srcCarta[1]) intentos += 1;
    if (imagen[numero] == srcCarta[2]) vidas--;
}

function revelarCarta(i) {
    if (cartasActivas[i] === false) {
        if (intentos > 0) {
            if (cartasVolteadas[i] == true) {
                cartasActivas[i] = true;
                document.getElementById("carta" + i).setAttribute("src", imagen[i]);
                accionCarta(i);
                mostrarPuntaje();
                mostrarIntentos();
            }
        }
    }
}

const crearCarta = (tipo) => {
    cartasActivas.push(false);
    cartasVolteadas.push(false);
    const img = document.createElement("img");
    img.src = "../img/cartas/back.png";
    img.id = "carta" + tipo;
    img.orden = tipo;
    img.style = "display: flexbox;";
    img.addEventListener("click",
        function () {
            cartasVolteadas[img.orden] = true;
            revelarCarta(img.orden);
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


function borrarCartas(){
    if(document.getElementById("carta0")){
        for (let cardNumber = 0; cardNumber < cantidadCartas; cardNumber++) {
            let card = document.getElementById("carta" + cardNumber);
            tablero.removeChild(card);
        }
        cartasActivas = [];
        cartasVolteadas = [];
    }
}

function crearCartas(){
    crearTablero();
    imagen = recorrerobjeto(imagenCarta);
}

function reiniciarCartas(){
    borrarCartas();
    crearCartas();
}

//crearCartas();
