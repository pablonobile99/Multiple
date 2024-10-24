const cantidadRespuestas = 3;

let preguntaActual = 1;

let respuestasVoletadas = [];

for (i = 0; i < cantidadRespuestas; i++) {
    respuestasVoletadas.push(false);
}



const trivia = {
    "P0": {
        "pregunta": "PPREGUNTA 1",
        "correcta": "1",
        "0": "RESPUESTA 0.0",
        "1": "RESPUESTA 0.1",
        "2": "RESPUESTA 0.2",
    },
    "P1": {
        "pregunta": "PPREGUNTA 2",
        "correcta": "1",
        "0": "RESPUESTA 1.0",
        "1": "RESPUESTA 1.1",
        "2": "RESPUESTA 1.2"
    },
    "P2": {
        "pregunta": "PPREGUNTA 3",
        "correcta": "1",
        "0": "RESPUESTA 2.0",
        "1": "RESPUESTA 2.1",
        "2": "RESPUESTA 2.2"
    }
}


let listaRespuestas = [];

function crearListaRespuestas(rAleatoria) {
    let respuestaAleatoria = "P" + rAleatoria;
    for (i = 0; i < cantidadRespuestas; i++) {
        listaRespuestas.push(trivia[respuestaAleatoria][i]);
    }
}


crearListaRespuestas(preguntaActual);


//PREGUNTA------------------------------------------------------

function mostrarPregunta(numeroDePregunta){ 
    let preguntaAleatoria = "P" + numeroDePregunta;
    const textoPregunta = document.createElement("p");
    textoPregunta.innerHTML = trivia[preguntaAleatoria]["pregunta"];
    cuestionario.appendChild(textoPregunta);
}

mostrarPregunta(preguntaActual);

//---------------------------------------------------------------

function accionRespuesta(numero) {
    intentos--;
    let respuestaAleatoria = "P" + numero;
    if (trivia[respuestaAleatoria].correcta==numero) victorias++;
    else vidas--;
}

function revelarPregunta(i) {
    if (intentos > 0) {
        if (respuestasVoletadas[i] == true) {
            document.getElementById("respuesta" + i).setAttribute("style", "display: block; color:blue");
            accionRespuesta(i);
            mostrarPuntaje();
            mostrarIntentos();
        }
    }
}

const crearRespuesta = (numeroDePregunta) => {
    const button = document.createElement("button");
    button.innerHTML = listaRespuestas[numeroDePregunta];
    button.style = "display: block"
    button.id = "respuesta" + numeroDePregunta;
    button.orden = numeroDePregunta;
    button.addEventListener("click",
        function () {
            respuestasVoletadas[button.orden] = true;
            revelarPregunta(button.orden);
        }
    );
    return button;
}


const crearCuestionario = () => {
    const cuestionario = document.getElementById("cuestionario");
    for (let preguntaNumero = 0; preguntaNumero < cantidadRespuestas; preguntaNumero++) {
        const preg = crearRespuesta(preguntaNumero);
        cuestionario.appendChild(preg);
    }
};

crearCuestionario();
