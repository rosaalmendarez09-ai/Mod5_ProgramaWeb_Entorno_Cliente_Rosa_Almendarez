//cupos.js - Estado de los cupos
//  if, else if, else, ternario, switch.

const nivel = "Inicial";
const libres = 6;

if (libres === 0) {
  console.error("Taller lleno"); //sino quedan cupos
} else if (libres <= 2) {
  console.warn("¡Últimos cupos!"); //Si los cupos son 1 o igual a 2
} else {
  console.log("Hay cupos disponibles");
}

let mensaje = libres === 1 ? "Queda 1 libres" : `Quedan ${libres} cupos`;
console.log(mensaje); //guardamos el ternario en una variable y mostramos su resultado con el console.log invocando la variable

switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia");
    break;

  case "Intermedio":
    console.log("Requiere el nivel inicial");
    break;

  default:
    console.log("Consulte con la escuela");
    break;
}
