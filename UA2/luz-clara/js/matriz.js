// matriz.js - Una matriz es un vector de vectores (filas y columnas)
const dias = ["Lunes", "Martes"]; // Filas
const agenda = [
  ["Retrato", "Libre", "Perfil"], // fila 0: lunes
  ["Libre", "Familiar", "Libre"], // fila 1: martes
];
console.log(agenda[1][1]); // fila 1, columna 1 : Familiar

for (let f = 0; f < agenda.length; f++) {
  // recorre las filas

  console.log(`${dias[f]}: ${agenda[f].join(" | ")}`); //posicion de f
  // Lunes: Retrato | Libre | Perfil
  //  Martes: Libre | Familiar | Libre
}
