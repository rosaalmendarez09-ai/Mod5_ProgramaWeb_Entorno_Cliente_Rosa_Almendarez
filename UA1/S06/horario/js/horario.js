// horario.js - ¿Abre ese día?
try {
  let dia = trim().toLowerCase().prompt("¿Que día deseas visitarnos?");

  switch (dia) {
    case domingo:
    case lunes:
      console.log("Cerrado");
      break;

    default:
      break;
  }
} catch (error) {}
