/*
let name = "Pepito";

console.log(name);
console.warn("cargando...");

const valorrandom = 25;

console.log(valorrandom);

name = prompt("Ingresa el nombre:")

console.log(name);

alert("Has sido hackeado");

let confirmar = confirm("Aceptas?");

console.log(confirmar);

alert(name + " has sido hackeado igualmente, gracias");
*/

/*
let numero = prompt("igresa un numero:");

if(numero<10){
    console.log("menor");
}
else if(numero>10){
    console.log("mayor");
}
else if(numero==10){
    console.log("igual");
}

if ((numero<10)||(numero>10)){
    console.log("diablos no es diez");
}
*/

/*
for(let p=0;p<10;p++){
    if(p==7){
        break;
    }
    if(p==4){
        continue;
    }
    console.log(p)
}
*/

/*
let i=0;

while(i<5){
    console.log(i);
    i++;
}

do{
    i = prompt("ingresa un valor");
    console.log(i);
}while(parseInt(i));
*/

/*
let i;

i=prompt("Ingresa un numero");
console.log(i);

switch(i){
    case "1":
        alert("pusiste " + i);
        break;
    default:
        alert("pompompom");
        break;
}
*/

//VARIABLES---------------------------
let pos=[0,0]
let tecla

let jugadores = [
    {nombre:"jugador1", id:0, score:5}
]
let id = 0;

//FUNCIONES---------------------------

function puntero(tecla){
    switch(tecla){
        case "a":
            if(pos[0]>0){
                pos[0]--
            }
            break
        case "d":
            if(pos[0]<100){
                pos[0]++
            }
            break
        case "w":
            if(pos[1]>0){
                pos[1]--
            }
            break;
        case "s":
            if(pos[1]<100){
                pos[1]++
            }
            break
    }
    console.clear()
    console.log("[x,y] : " + pos)
}

const reg = () => {
    const nombre = prompt("ingresa tu nombre")
    id++
    const jugador = {nombre, id, score:0}
    alert("Hola " + nombre + ", eres el jugador numero: " + id)
    jugadores.push(jugador)
}

//MAIN---------------------------

reg()
reg()

console.log(jugadores);


while(tecla!="m"){
    tecla = prompt("ASDW para moverte M para salir")
    puntero(tecla)
}


console.log(pos.indexOf(0))

console.log("x: " + pos.shift())
console.log("y: " + pos)



