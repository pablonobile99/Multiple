let palabra;
let palabraSimple;
let palabraCadena = [];

function guardarPalabra(palabraApi) {
    palabra = palabraApi;
    palabraSimple = palabraApi.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i = 0; i < palabra.length; i++) {
        palabraCadena.push(palabraSimple.substr(i, 1))
    }
    console.log(palabra);
    console.log(palabraCadena);
}


function crearAhorcado(){
    fetch("https://clientes.api.greenborn.com.ar/public-random-word")
    .then(response => response.json())
    .then(data => {
        const block = document.getElementById("ahorcadoBlock");
        let palabra = document.createElement("p");
        palabra.innerHTML = data[0];
        palabra.id = "palabra";
        block.appendChild(palabra);

        guardarPalabra(data[0]);
    })
    .catch(err => {
        console.log(err);    
    });
}

function borrarAhorcado(){
    if (document.getElementById("palabra")) {
        const block = document.getElementById("ahorcadoBlock");
        let palabra = document.getElementById("palabra");
        block.removeChild(palabra);
    }
}

document.addEventListener("keydown", (ev) => {
    console.log("Has pulsado la tecla ", ev.key);
  });