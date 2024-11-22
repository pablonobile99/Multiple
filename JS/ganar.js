const infoTexto =[
    "Listo ¡Ganaste un punto!",
    "Fue muy fácil  ¿no?",
    "¿Qué opinas? Está bueno retarse a uno mismo. No debería contar...",
    "Y de tu parte no está bueno que quieras ganar puntos sin jugartela.",
    "No es ético.",
    "Me siento un poco ofendido.",
    "Que hayas querido ganar mi juego así tan fácil.",
    "Lo siento, pero esta vida todo tiene consecuencias...",
    "Perdiste una vida. Volve al menú y ganá tus puntos como corresponde.",
    "Perdón. No quiero ser malo, pero alguien tiene que ser serio.",
    "Te quiero."
]
const largoTexto = infoTexto.length;

const retardo = 2100;

function crearTexto(textoNumero){
    let p = document.createElement("p");
    p.innerHTML = infoTexto[textoNumero]; 
    p.id = "texto" + textoNumero;
    return p;
}

let textoRetardo;
let tex = 0;

function crearSecuencia (){
    let textoBloque = document.getElementById("texto");
    tex = 0;
    textoRetardo = setInterval(function(){
        if(tex < largoTexto){
            let texto = crearTexto(tex);
            textoBloque.appendChild(texto);
            tex ++;
        }
        if(tex == 9){
            vidas--;
            puntajeGlobal();
        }
        if(tex == largoTexto)clearInterval(textoRetardo);
    }, retardo);
}

function borrarSecuencia(){
    if(document.getElementById("texto0")){
        tex = 0;
        clearInterval(textoRetardo);
        const textoBloque = document.getElementById("texto");
        for (let tex = 0; tex < largoTexto; tex++) {
            if(document.getElementById("texto" + tex)){
                let texto = document.getElementById("texto" + tex);
                textoBloque.removeChild(texto);
            }
        }
    }
}

