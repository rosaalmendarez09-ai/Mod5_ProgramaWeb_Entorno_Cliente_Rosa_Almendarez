//agenda.js - Mensaje segun el dia(final del index.html)

const dia = "martes"; //se prueba con domingo y martes

switch (dia) {
  case "sábado":
    console.log("Sábado: foto impresa de regalo");
    break;

  case "domingo":
    console.log("Domingo: el estudio está cerrado");
    break;

  default:
    console.log(`El día ${dia} abre de 9 a.m. a 6 p.m. `);
}
