// validar.js - Revisar los datos antes de calcular
function costoSesion(precio, horas) {
  // dos parámetros
  if (isNaN(horas) || horas <= 0) {
    // dato inválido
    return "Horas inválidas"; // sale aquí
  }
  return precio * horas; // dato válido
}
console.log(costoSesion(30000, 2)); // 60000
console.log(costoSesion(30000, 0)); // Horas inválidas
console.log(costoSesion(30000, "dos")); // Horas inválidas
