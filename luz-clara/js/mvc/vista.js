// vistas.js - VISTA: Muestra los datos (por ahora en consola)
class VsitaReservas {
  //la clase de la vista. No tiene constructor porque no necesita guardar datos propiois. js le pone uno vacio
  mostrar(lista) {
    lista.forEach((r, i) => {
      //i es la posicion (r, i) dos parametros del callback
      //forEach entrega el elemneto (r) y su posicion (i) que empieza en cero
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente . r.servicio son propiedades de cada reserva. La vista solo lee datos, no los cambia.
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ₡${monto.toLocaleString("es-CR")}`);
  }
  error(texto) {
    console.error(texto); //mensaje en rojo
  }
}
