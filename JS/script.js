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

function guardarPuntosGlobal(){
    localStorage.setItem("Vidas",vidas);
    localStorage.setItem("Victorias",victorias);
    let vidasG = localStorage.getItem("Vidas");
    let victoriasG = localStorage.getItem("Victorias");
    console.log("vidas: " + vidasG + " Victorias: " + victoriasG);
}

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
h1.innerHTML = "Bienvenidos a MÚLTIPLE";
menu.appendChild(h1);

const h4 = document.createElement("h4");
h4.innerHTML = "Elige tu categoría y comienza a jugar. Por cada victoria sumas un punto, al llegar a 5 ganas. Por cada derrota pierdes una vida, si pierdes las 3 se acabó el juego.";
menu.appendChild(h4);

const h3 = document.createElement("h3");
h3.innerHTML = "Elige un juego";
menu.appendChild(h3);

function puntajeGlobal(){
    mostrarPuntaje();
    mostrarIntentos();
    guardarPuntosGlobal();
}

function ejecutarMenu(juego){
    borrarTrivia();
    borrarAhorcado();
    borrarSecuencia();
    borrarCartas();

    if (juego==listaJuegos[0]) {
        intentos = intentosTrivia;
        h3.innerHTML = "Has elegido " + listaJuegos[0];
        crearTrivia();
    }
    if (juego==listaJuegos[1]) {
        intentos = intentosAhorcado;
        h3.innerHTML = "Has elegido " + listaJuegos[1];
        crearAhorcado();
    }
    if (juego==listaJuegos[2]) {
        intentos = intentosSuerte;
        h3.innerHTML = "Has elegido " + listaJuegos[2];
        crearCartas();
    }
    if (juego==listaJuegos[3]) {
        intentos = intentosGanar;
        h3.innerHTML = "Has elegido " + listaJuegos[3];
        crearSecuencia();
        //vidas--;
    }
    puntajeGlobal();
}


for (let i = 0; i < 4; i++) {
    const button = document.createElement("button");
    button.innerHTML = listaJuegos[i];
    button.style = "display: inlineblock; margin: 1%"
    button.id = "buttonMenu" + i;
    button.addEventListener("click",
        function (){
            if(vidas>0)ejecutarMenu(listaJuegos[i]);
        }
    )
    menu.appendChild(button);
}
