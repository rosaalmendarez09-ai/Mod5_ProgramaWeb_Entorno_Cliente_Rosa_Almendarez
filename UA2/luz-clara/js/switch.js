// switch.js - Elegir entre varios casos
const dia = "sábado"; //dia de la sesión

switch (
  dia //Compara dia con cada case
) {
  case "sábado":
    console.log("Tarifa de fin de semana");
    break; //Sale del switch

  case "domingo":
    console.log("Estudio cerrado");
    break;

  default: //Ningún caso coincidió
    console.log("Tarifa normal");
}
