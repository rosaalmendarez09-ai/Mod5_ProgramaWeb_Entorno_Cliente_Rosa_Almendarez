// solicitud.js - Pedir datos con prompt
const nombre = prompt("¿Cuál es su nombre?"); //devolve texto
const fotos = prompt("¿Cuántas fotos impresas?"); //devolve texto
console.log("Hola, " + nombre + "."); //+ une cadenas
console.log("Fotos + 1:", fotos + 1); //+ une: no suma
console.log("Fotos + 1:", Number(fotos) + 1); //number: suma
console.log("¿Pidió fotos?", Number(fotos) > 0); //comparar
