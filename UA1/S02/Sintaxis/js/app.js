// app.js - error de sintaxis(falta comilla)
console.log("Inicio del programa");
console.log("Hola, Mundo");
console.log("Fin de Programa");

// =================================

// Error semantica(calcula otra cosa)
console.log("Promedio de 8 y 9:");
console.log(8 + 9 / 2); //Primero divide y luego suma: 9/2 = 4.5 + 8 =12.5
console.log((8 + 9) / 2); // Primero suma 8+9 =17 y luego divide 17/2 = 8.5
