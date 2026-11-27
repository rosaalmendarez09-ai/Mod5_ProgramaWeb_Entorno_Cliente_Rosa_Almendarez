//recorrer.js - Recorrer un vector con for y con for... of
const precios = [45000, 75000, 38000]; //Tarifas de luz clara
let total = 0; // acumulador
for (let i = 0; i < precios.length; i++) {
  //indices 1, 2, 3
  total += precios[i]; //suma cada precio
}
console.log("Total:", total);

for (const precio of precios) {
  // llama cada elemento sin indice
  console.log("Precio:", precio);
}
