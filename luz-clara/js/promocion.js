//promocion.js - Descuento segun el monto(final index.html)

const monto = 113000; //montos a pagar familiar + perfil
let descuento = 0; //inicia sin descuento

if (monto >= 100000) {
  //compra grande
  descuento = 10;
} else if (monto >= 50000) {
  //compra mediana
  descuento = 5;
} else {
  descuento = 0; //compra pequeña
}

const total = monto - (monto * descuento) / 100; //calcula el descuento segun el monto

console.log(`Descuento: ${descuento} %`); //muestra el descuento
console.log(`Total: ${total}`); //muestra el total a pagar
console.log(total > 90000 ? "Pago en dos tractos" : "Pago de contado"); //Indica si el monto a pagar es mayor a 90000 el pago es en dos tractos de lo contrario el pago seria de contado

// Practicando con plantilla para mostrar monto total y descuento
// let finalTotal = `
// Tiene un descuento de ${descuento}%
// Su monto a pagar con el descuento es de ₡${total}
// `;
// console.log(finalTotal);
