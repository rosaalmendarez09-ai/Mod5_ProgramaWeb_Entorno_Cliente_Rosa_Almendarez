// reservas.js - Arranque: une el modelo, la vista y el controlador
const modelo = new Reservas(); //instancia del modelo.Parentesis vacios porque el constructor no recibe datos
const vista = new VistaReservas();
const reservas = new ControladorReservas(modelo, vista); //instancia del controlador. Si recibe datos: dos objetos ya creados: modelo y vista

reservas.reservar("Ana Rodriguez", "Familiar", 75000); //metodo del controlador, es la accion del usuario.
reservas.reservar("Luis Mora", "Perfil profesional", 38000);
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();
