//fechas.js - Fechas con date
const hoy = new Date(); //fecha y hora actual = 16-11-2006
console.log(hoy.getFullYear()); //año = 2026
console.log(hoy.getMonth() + 1); //mes empieza en 0
console.log(hoy.getDate()); // dia del mes = lunes
console.log(hoy.toLocaleDateString("es-CR")); //Formato de CR
const sesion = new Date(2026, 11, 5); //5 diciembre 2026 porque cuanta desde 0 = Enero
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" })); //dia y fecha completa fija
