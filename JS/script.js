let vidas = 3;
let victorias = 0;
let intentos = 0;

const intentosSuerte = 1;
const intentosTrivia = 1;
const intentosGanar = 0;
const intentosAhorcado = 0;


//PUNTAJE------------------------------------------------------
const puntaje = document.getElementById("puntaje");
const textoVidas = document.createElement("p");
const textoVictorias = document.createElement("p");
textoVidas.innerHTML = "vidas: " + vidas;
textoVictorias.innerHTML = "victorias: " + victorias;
textoVidas.style = "display: inline-block; margin: 1%"
textoVictorias.style = "display: inline-block; margin: 1%"
puntaje.appendChild(textoVidas);
puntaje.appendChild(textoVictorias);


function mostrarPuntaje() {
    textoVidas.innerHTML = "vidas: " + vidas;
    textoVictorias.innerHTML = "victorias: " + victorias;
}

mostrarPuntaje();


const textoIntentos = document.createElement("p");
textoIntentos.innerHTML = "Intentos: " + intentos;
textoIntentos.style = "display: inline-block; margin: 1%"
puntaje.appendChild(textoIntentos);

function mostrarIntentos() {
    textoIntentos.innerHTML = "Intentos: " + intentos;
}

mostrarIntentos();

//---------------------------------------------------------------



//FUNCION ALEATORIA

function aleatorio(max) {
    let numero;
    numero = Math.floor(Math.random() * max);
    return numero
}

function cadenaaleatoria(largo) {
    let cadena = [];
    let valor = -1;
    let filtro;

    while (cadena.length < largo) {
        valor = aleatorio(largo);
        filtro = cadena.find((repetido) => repetido == valor);
        if (filtro != valor) {
            cadena.push(valor);
        }
    }
    return cadena;
}

function recorrerobjeto(objeto) {
    const largo = Object.keys(objeto).length;
    let prueba = cadenaaleatoria(largo);
    let objetoRecorrido = [];
    for (i = 0; i < largo; i++) {
        objetoRecorrido.push(objeto[prueba[i]])
    }
    return objetoRecorrido;
}


//BOTONES-y-MENU-------------------------------------------------------------




const listaJuegos = ["Trivia","Ahorcado","Suerte","Ganar"];
let juegoActivo = [false,false,false,false];

const menu = document.getElementById("menu");
const h1 = document.createElement("h1");
h1.innerHTML = "Bienvenidos a MULTIPLE";
menu.appendChild(h1);

const h4 = document.createElement("h4");
h4.innerHTML = "Elige tu categoria y comienza a jugar. Por cada victoria sumas un punto, al llegar a 5 ganas. Por cada derrota perdes una vida, al perder las 3 se acabó el juego.";
menu.appendChild(h4);

const h3 = document.createElement("h3");
h3.innerHTML = "Elije un juego";
menu.appendChild(h3);

const propiedadBase = "display: none";
const propiedadActiva = "display:";

const Suerte = document.getElementById("suerteBlock");
Suerte.setAttribute("style", propiedadBase);
const Trivia = document.getElementById("triviaBlock");
Trivia.setAttribute("style", propiedadBase);
const Ahorcado = document.getElementById("ahorcadoBlock");
Ahorcado.setAttribute("style", propiedadBase);
const Ganar = document.getElementById("ganarBlock");
Ganar.setAttribute("style", propiedadBase);


function ejecutarMenu(juego){
    borrarTrivia();
    Ahorcado.setAttribute("style", propiedadBase);
    Ganar.setAttribute("style", propiedadBase);
    borrarCartas();

    if (juego==listaJuegos[0]) {
        Trivia.setAttribute("style", propiedadActiva);
        intentos = intentosTrivia;
        h3.innerHTML = "Has elegido " + listaJuegos[0];
        crearTrivia();
    }
    if (juego==listaJuegos[1]) {
        Ahorcado.setAttribute("style", propiedadActiva);
        intentos = intentosAhorcado;
        h3.innerHTML = "Has elegido " + listaJuegos[1];
    }
    if (juego==listaJuegos[2]) {
        intentos = intentosSuerte;
        Suerte.setAttribute("style", propiedadActiva);
        h3.innerHTML = "Has elegido " + listaJuegos[2];
        crearCartas();
    }
    if (juego==listaJuegos[3]) {
        Ganar.setAttribute("style", propiedadActiva);
        intentos = intentosGanar;
        h3.innerHTML = "Has elegido " + listaJuegos[3];
        vidas--;
    }
    mostrarPuntaje();
    mostrarIntentos();
}


for (let i = 0; i < 4; i++) {
    const button = document.createElement("button");
    button.innerHTML = listaJuegos[i];
    button.style = "display: inlineblock; margin: 1%"
    button.id = "buttonMenu" + i;
    button.addEventListener("click",
        function (){
            ejecutarMenu(listaJuegos[i]);
        }
    )
    menu.appendChild(button);
}
