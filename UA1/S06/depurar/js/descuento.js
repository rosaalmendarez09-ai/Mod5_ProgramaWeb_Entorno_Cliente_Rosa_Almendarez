// descuento.js - Tiene un error de lógica: encuéntrelo con DevTools2
const monto = 120000; // una compra grande
let descuento = 0;
if (monto <= 50000) {
  // ¿compra mediana?
  descuento = 5;
} else if (monto >= 100000) {
  // ¿compra grande?
  descuento = 10;
}
console.log(`Descuento: ${descuento} %`); // debería ser 10 %
