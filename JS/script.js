//VARIABLES GLOBALES---------

let vidas = 3;
let victorias = 0;

//CATEGORIAS-----------------




const triviaMatematica = {
    "P0": {
        "pregunta": "PPREGUNTA 1",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2",
    },
    "P1": {
        "pregunta": "PPREGUNTA 2",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2"
    },
    "P2": {
        "pregunta": "PPREGUNTA 3",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2"
    }
}
const triviaCultural = {
    "P0": {
        "pregunta": "PPREGUNTA 1",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2",
    },
    "P1": {
        "pregunta": "PPREGUNTA 2",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2"
    },
    "P2": {
        "pregunta": "PPREGUNTA 3",
        "0": "RESPUESTA 0",
        "1": "RESPUESTA 1",
        "2": "RESPUESTA 2"
    }
}

const ahorcadoCine = ["palabra1", "palabra2", "palabra3"];
const ahorcadoFamosos = ["palabra1", "palabra2", "palabra3"];

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


//CARTAS----------------------


