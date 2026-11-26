//textos.js - Metodos de las cadenas y plantillas
const escrito = "  Retrato familiar  "; //con espacios de más
const servicio = escrito.trim(); //quita espacios
console.log(escrito.length, servicio.length); //cantidad de letras
console.log(servicio.toUpperCase()); //todo mayuscula
console.log(servicio.includes("familiar")); //¿Servicio contiene la palabra ....?
console.log(servicio.slice(0, 7)); //Letra 0-6
console.log(`Servicio: ${servicio}`); //plantilla con ${}
