//cupos.js - Estado de los cupos
//  if, else if, else, ternario, switch.

const nivel = "Inicial";
const cupo = 2;

if (cupo === 0) {
  console.error("Taller lleno"); //sino quedan cupos
} else if (cupo <= 2) {
  console.warn("¡Últimos cupos!"); //Si los cupos son 1 o igual a 2
} else {
  console.log("¡Hay cupos disponibles");
}

let mensaje = cupo === 1 ? "Queda 1 cupo" : `Quedan ${cupo} cupos`;
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
