// horario.js - ¿Abre ese día?
try {
  //Permite que se ejecute el codigo sin importar si tiene algun error
  let dia = prompt("¿Que día deseas visitarnos?");
  let correccionDia = dia.trim().toLowerCase(); //Se formatea para convertir el texto a minuscula y eliminar espacios vacios

  switch (correccionDia) {
    case "domingo":
    case "lunes":
      console.log(`El día ${correccionDia} está Cerrado`);
      break;

    default:
      console.log(`El ${correccionDia} abre de 10:00 a. m. a 7:00 p. m.`);
      break;
  }
} catch (error) {
  console.warn("No se indico un día"); //marca el error si se le da cancelar
} finally {
  console.log("Casa Tomillo · Barrio Amón");
}
