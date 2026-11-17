/* Que hace:
  -Pedir con cuánto paga la persona 
  -Cuántas personas se inscriben( en palabras ) 
  -Mostrar vuelto con decimales

  Como se hace:
   -Pedir datos con prompt
   -Convertir los pagos con parseFloat
   -Convertir personas con parseInt
   -Calcular: probar con 220000.50 y 2 personas

  Resultado:
    Personas: 2
    A pagar: 210 000
    Pagó: 220000.50
    Vuelto: 10000.50*/

// Funcion formato CR y colones: se usa para mostrar
const formatoCR = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
});

//Monto por persona
const TOTAL_PERSONA = 105000;

// Pedir datos
const pago = prompt("¿Con cuánto paga?");
const cuanto = Number(pago); //convertir entrada a número

const cuantas = prompt("¿Cuántas personas se inscriben?,(# personas)");
const personas = parseInt(cuantas, 10); //lee las personas y el 10 hace que sea en base decimal

// Calcular: 105000 * 2 = 210 000
const pagar = TOTAL_PERSONA * personas;

// Calcula: 220000.50 - 210000 = 10000.50
const vuelto = (cuanto - pagar).toFixed(2);

// Salidas
console.log(
  `Personas: ${personas} \nA pagar: ${formatoCR.format(pagar)} \nPagó con: ${formatoCR.format(cuanto)} \nVuelto: ${formatoCR.format(vuelto)}`,
);
