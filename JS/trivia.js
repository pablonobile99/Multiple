const cantidadRespuestas = 3;

let preguntaActual;

let respuestasVoletadas = [];


const trivia = {
    "0": {
        "pregunta": "Cuál es el valor mas acercado a PI?",
        "correcta": "1",
        "0": "3.4115",
        "1": "3.1415",
        "2": "3.1541",
    },
    "1": {
        "pregunta": "Cuál es el mar mas grande del mundo?",
        "correcta": "0",
        "0": "Mar Arabigo",
        "1": "Mar Caribe",
        "2": "Mar mediterráneo"
    },
    "2": {
        "pregunta": "Qué pais tiene mayor poblacion?",
        "correcta": "2",
        "0": "China",
        "1": "Estados Unidos",
        "2": "India"
    }
}

let banderaTrivia = [];
for (let i = 0; i < cantidadRespuestas; i++) {
    banderaTrivia.push(i);    
}

let banderaTriviaActiva = recorrerobjeto(banderaTrivia);

function crearPreguntasAleatorias(){
    if(banderaTriviaActiva[0]>-1){
            let activo = banderaTriviaActiva.shift();
            preguntaActual = activo;
    }
    else{
        //banderaTriviaActiva = recorrerobjeto(banderaTrivia);
        alert("No hay mas preguntas.");
        preguntaActual=-1;
    }
}



let listaRespuestas = [];

function crearListaRespuestas(rAleatoria) {
    let respuestaAleatoria = rAleatoria;
    for (i = 0; i < cantidadRespuestas; i++) {
        listaRespuestas.push(trivia[respuestaAleatoria][i]);
    }
}

//PREGUNTA------------------------------------------------------

function mostrarPregunta(numeroDePregunta){
    let preguntaAleatoria = numeroDePregunta;
    const textoPregunta = document.createElement("p");
    textoPregunta.innerHTML = trivia[preguntaAleatoria]["pregunta"];
    textoPregunta.id = "pregunta";
    cuestionario.appendChild(textoPregunta);
}


//---------------------------------------------------------------

function accionRespuesta(numero) {
    intentos--;
    let respuestaAleatoria = numero;
    if (trivia[preguntaActual].correcta==numero) victorias++;
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

    respuestasVoletadas.push(false);

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


function crearTrivia(){
    crearPreguntasAleatorias();
    crearListaRespuestas(preguntaActual);
    mostrarPregunta(preguntaActual);
    crearCuestionario();
}

function borrarTrivia(){
    console.log(banderaTriviaActiva);
    if(document.getElementById("respuesta0")){
        respuestasVoletadas = [];
        listaRespuestas = [];
        let preg = document.getElementById("pregunta");
        cuestionario.removeChild(preg);
        for (let respuesta = 0; respuesta < cantidadRespuestas; respuesta++) {
            let res = document.getElementById("respuesta" + respuesta);
            cuestionario.removeChild(res);
        }
    }
}







