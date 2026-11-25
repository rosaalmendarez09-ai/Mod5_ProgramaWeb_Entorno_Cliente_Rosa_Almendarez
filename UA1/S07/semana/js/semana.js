//semana.js - Semana de talleres
console.log("====== matriz única con slice ======");

const talleresDias = [
  ["Martes", "Cocina inicial", "Tartas"],
  ["Miércoles", "Masa madre"],
  ["Jueves", "Cocina intermedia"],
  ["Viernes", "Pan de campo"],
  ["Sábado", "Bollería", "Decoración"],
];

for (const f of talleresDias) {
  const dia = f[0]; //Guardo el elemento 0 de cada vector
  const cantidad = f.length - 1; // Resta el dia y suma los que quedan dando la cantidad de talleres ["Martes", "Cocina inicial", "Tartas"] = f.length = 3 - 1 = 2
  const listaTalleres = f.slice(1).join(" , "); //Elimina elemento[0](dia) y crea arreglo apartir del elemento[1].
  console.log(`${dia} (${cantidad}): ${listaTalleres}`);
}

console.log("");
console.log("====== dos matrices recorrido for..of ======");

const dias = ["Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const talleres = [
  ["Cocina inicial", "Tartas"],
  ["Masa madre"],
  ["Cocina intermedia"],
  ["Pan de campo"],
  ["Bollería", "Decoración"],
];

let i = 0;

for (const f of talleres) {
  console.log(`${dias[i]} (${f.length}): ${f.join(" - ")}`);
  i++;
}
