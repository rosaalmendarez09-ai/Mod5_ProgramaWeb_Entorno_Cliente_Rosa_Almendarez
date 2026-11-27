// modelo.js - MODELO: Los datos de las reservas y sus reglas
class Reseva {
  //CLASE CON SU NOMBRE
  constructor(cliente, servicio, precio) {
    //Constructor con sus metodos y parámetros
    this.cliente = cliente; //this. el objeto se está creando .cliente Propiedad del objeto
    this.servicio = servicio; // = cliente: es el parámetro copia del dato dentro del objeto
    this.precio = precio;
  }
}

class Reservas {
  //segunda clase del modelo.Es el conjunto de todas las reservas en plural
  constructor() {
    this.lista = []; //Todas las reservas.Propiedad vector empieza vacia y guarda objetos de Reserva
  }
  agregar(reserva) {
    //Metodo con parámetro.En una clase, se escriben sin la palabra funtion
    if (reserva.precio <= 0) {
      // REGLA DEL NEGOCIO. reserva.precio es Propiedaad de otro objeto. Reserva es el objeto Reserva que llegó como argumento
      return false; //no se guarda
    }
    this.lista.push(reserva); //push sobre la propiedad.Guarda la reserva en la lista de este objeto
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      //forEach con callback. r es cada reserva; se suma a su precio
      suma += r.precio;
    });
    return suma;
  }
}
