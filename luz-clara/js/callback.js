// callback.js - Una función que recibe otra función

function repetir(veces, accion) {
  // accion es una función
  for (let i = 1; i <= veces; i++) {
    accion(i); // la llama en cada vuelta
  }
}
repetir(3, (n) => console.log(`Foto ${n}`)); // callback(funcion flecha anonima porque no tiene nombre)
