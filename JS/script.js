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
let x=0;
let y=0;
let tecla;

function puntero(tecla){
    switch(tecla){
        case "a":
            if(x>0){
                x--;
            }
            break;
        case "d":
            if(x<100){
                x++;
            }
            break;
        case "w":
            if(y>0){
                y--;
            }
            break;
        case "s":
            if(y<100){
                y++;
            }
            break;
    }
    console.clear();
    console.log("x: " + x);
    console.log("y: " + y);
}

while(tecla!="m"){
    tecla = prompt("ASDW para moverte M para salir");
    puntero(tecla);
}
