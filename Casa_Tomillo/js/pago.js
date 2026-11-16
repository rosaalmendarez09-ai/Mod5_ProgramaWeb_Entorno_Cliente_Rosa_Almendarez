//pago.js - Plan de pago
const nombre = "  panadería: masa madre ";

const servicio = nombre.trim().toUpperCase(); //quita espacios y texto a mayusculas
console.log(`taller: ${servicio}`);

const sesion = new Date((2026, 10, 21)); //fecha de inicio
const total = 105000; //Total del taller
const opciones = { style: "currency", currency: "CRC" }; // colones
const colones = new Intl.NumberFormat("es-CR", opciones); //muestra el monto con el formato de la moneda

console.log(`Inicia: ${sesion}`);

console.log(
  "Inicia:",
  sesion.toLocaleDateString("es-CR", { dateStyle: "full" }),
);
console.log("Total:", colones.format(total));
const cuotas = total / 4;

console.log("4 cuotas:", colones.format(cuotas));
console.log("¿Cuota exacta?", Number.isInteger(26250));

const tresCuotas = total / 3;
console.log("Con 3 cuotas:", Math.ceil(45000.0));
