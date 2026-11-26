// controlador.js - CONTROLADOR: recibe la accion y coorrdina

class ControladorReservas {
  constructor(modelo, vista) {
    //recibe los objetos
    this.modelo = modelo; //guarda las dos parte en una propiedad
    this.vista = vista;
  }
  reservar(cliente, servicio, precio) {
    const nueva = new Reseva(cliente, servicio, precio); //crea una instancia y usa la clase modelo
    if (!this.modelo.agregar(nueva)) {
      // ! no logico, invierte el boolean
      this.vista.error(`Precio inválido para ${cliente}`);
      return false;
    }
  }

  actualizar() {
    //usa las dos partes Toma los datos de modelo y los entraga a vista
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingresos());
  }
}
