// formas.js - Tres formas de escribir la misma función

// 1. declaración
function enMinutos(horas) {
  return horas * 60;
}

// 2. expresión
const enMinutos2 = function (horas) {
  //se guarda la funcion en una constante
  return horas * 60;
};

// 3. flecha no necesita function ni return, se hace en una solo linea
const enMinutos3 = (horas) => horas * 60;

// La llamada para todas es igual
console.log(enMinutos(2), enMinutos2(2), enMinutos3(2));
