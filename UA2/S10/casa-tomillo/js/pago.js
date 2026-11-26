//pago.js - Plan de pago

// Datos iniciales y limpieza del texto
const nombre = "  panadería: masa madre ";
const correccion = nombre.trim().toUpperCase(); //quita espacios y convierte texto a mayusculas

// Formatear fecha de inicio
const fechaInicio = new Date(2026, 10, 21); //fecha de inicio
const formatoFecha = { dateStyle: "full" }; //fecha con dia, mes y año

// Formatear monto
const total = 105000; //Total del taller
const moneda = { style: "currency", currency: "CRC" }; // moneda colones
const monto = new Intl.NumberFormat("es-CR", moneda); //muestra el monto con el formato de la moneda

// 4 CUOTAS
const cuotas = total / 4;
// 3 CUOTAS
const tresCuotas = total / 3;

/* ======= Mostrar     
Taller: PANADERÍA: MASA MADRE
Inicia: sábado, 21 de noviembre de 2026
Total: ₡105 000,00
4 cuotas de ₡26 250,00
¿Cuota exacta? true
Con 3 cuotas: 35000 cada una */
console.log(
  `Taller: ${correccion} \nInicia: ${fechaInicio.toLocaleDateString("es-CR", formatoFecha)} \nTotal: ${monto.format(total)} \n4 cuotas de: ${monto.format(cuotas)} \n¿Cuota exacta? ${Number.isInteger(cuotas)} \nCon 3 cuotas: ${Math.ceil(tresCuotas)} cada una`,
);
