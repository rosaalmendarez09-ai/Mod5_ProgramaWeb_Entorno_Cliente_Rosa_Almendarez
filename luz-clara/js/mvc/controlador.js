// controlador.js - CONTROLADOR: recibe la accion y coorrdina

class ControladorReservas {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  reservar(cliente, servicio, precio) {
    const nueva = new Reseva(cliente, servicio, precio);
    if (!this.modelo.agregar(nueva)) {
      this.vista.error(`Precio inválido para ${cliente}`);
      return false;
    }
  }

  actualizar() {
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingresos());
  }
}
