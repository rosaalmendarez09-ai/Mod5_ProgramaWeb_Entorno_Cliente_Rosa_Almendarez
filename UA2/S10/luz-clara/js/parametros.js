// parametros.js - Lo que entra (parámetro) y lo que sale (return)

function conIva(precio) {
  // precio: parámetro
  return Math.round(precio * 1.13); // devuelve el resultado
}

const individual = conIva(45000); // 45000: argumento
console.log(individual); // 50850
console.log(conIva(75000)); // 84750
console.log(conIva()); // sin argumento: NaN
