// presupuesto.js - Presupuesto con Prompt
const precioPersona = 105000; //Precio por persona

// Solicito nombre y cantidad de personas con prompt
const nombre = prompt("¿Cual es su nombre?");
const cantidad = Number(prompt("¿Cantidad de personas?")); //Convertimos la cantidad a numero desde el principio.

// Mostrar en consola
console.log("Hola," + nombre + "."); //muestra saludo y nombre
console.log("Personas:", cantidad); // Convierto cantidad en numero

// Calculos
console.log("Total: ₡", precioPersona * cantidad);
console.log("¿Es grupo(3 o más)", cantidad >= 3);
