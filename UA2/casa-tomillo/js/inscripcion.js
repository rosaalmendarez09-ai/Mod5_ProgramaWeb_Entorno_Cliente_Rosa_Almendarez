// inscripcion.js - Inscripcion a un taller
const nombre = "Panadería: masa madre"; //nombre taller
const precio = 95000; //precio taller
const matricula = 10000; //matricula x persona
const numPersonas = 2; //personas a inscribir
let cupos = 8; //valor que cambia

// OPERACIONES
precioPersona = precio + matricula; //calculo precio por cada persona
total = precioPersona * numPersonas; //Total para dos personas
cupos -= numPersonas; //Resto los que se van a inscribir (2-8)
const hayCupos = cupos > 0; //Verifico si hay cupos disponibles

//MOSTRAR EN CONSOLA===========================================
console.log("Taller:", nombre);
console.log("Precio por persona: ₡", precioPersona);
console.log("Total para", numPersonas, "personas: ₡", total);
console.log("Cupos libres:", cupos);
console.log("¿Hay cupos?", hayCupos);

//True si ambas opciones son verdaderas(cuesta menos de 25000 y  si hay cupos)
console.log(
  "¿Menos de ₡250 000 y con cupos?",
  total < 250000 && hayCupos <= cupos,
);
