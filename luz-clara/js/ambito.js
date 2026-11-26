// ambito.js - Variable global (afuera) y local (adentro)

const estudio = "Luz Clara"; // GLOBAL: se ve en todo

function mostrarCita() {
  const hora = "10:00 a. m."; // LOCAL: solo aquí adentro
  console.log(`${estudio} · cita a las ${hora}`);
}
mostrarCita();
console.log(estudio); // sí existe afuera
console.log(hora); // no existe afuera,error: not defined
