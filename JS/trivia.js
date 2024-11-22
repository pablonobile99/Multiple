const cantidadRespuestas = 3;
const cantidadPreguntas = 5;

let preguntaActual;

let respuestasVoletadas = [];


const trivia = {
    "0": {
        "pregunta": "¿Cuál es el valor más cercano a PI?",
        "correcta": "1",
        "0": "3.4115",
        "1": "3.1415",
        "2": "3.1541"
    },
    "1": {
        "pregunta": "¿Cuál es el mar mas grande del mundo?",
        "correcta": "0",
        "0": "Mar Arabigo",
        "1": "Mar Caribe",
        "2": "Mar mediterráneo"
    },
    "2": {
        "pregunta": "¿Qué país tiene mayor población?",
        "correcta": "2",
        "0": "China",
        "1": "Estados Unidos",
        "2": "India"
    },
    "3": {
        "pregunta": "¿Cuáles son los nombres de los barcos que navegó Cristóbal Colón?",
        "correcta": "0",
        "0": "La Niña, La Pinta y La Santa María",
        "1": "El Glorosio, Amricas y La Santa Venecita",
        "2": " La Victoria, La Real y La Santisima Trinidad"
    },
    "4": {
        "pregunta": "¿De qué película Argentina proviene la siguiente frase: 'Yo hago puchero, ella hace puchero...'?",
        "correcta": "2",
        "0": "Nueve Reinas",
        "1": "Un novio para mi mujer",
        "2": "Esperando la carroza"
    }
}

let banderaTrivia = [];
for (let i = 0; i < cantidadPreguntas; i++) {
    banderaTrivia.push(i);    
}

let banderaTriviaActiva = recorrerobjeto(banderaTrivia);

function crearPreguntasAleatorias(){
    if(banderaTriviaActiva[0]>-1){
            let activo = banderaTriviaActiva.shift();
            preguntaActual = activo;
    }
    else{
        //alert("No hay mas preguntas.");
        preguntaActual=-1;
        const error = document.createElement("p");
        error.innerHTML = "No hay más preguntas.";
        error.id = "preguntaError";
        error.style = "color: red;"
        cuestionario.appendChild(error);
    }
}



let listaRespuestas = [];

function crearListaRespuestas(rAleatoria) {
    let respuestaAleatoria = rAleatoria;
    for (i = 0; i < cantidadPreguntas; i++) {
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
    if(document.getElementById("preguntaError")){
        let errorP = document.getElementById("preguntaError");
        cuestionario.removeChild(errorP);
    }
}







