//catalogo.js - Tabla de cursos con nombre y precio
const formatoCR = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const talleres = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panadería · Masa madre", precio: 95000 },
  { nombre: "Panadería · Pan de campo", precio: 70000 },
  { nombre: "Panadería · Bollería", precio: 88000 },
  { nombre: "Repostería · Tartas", precio: 82000 },
  { nombre: "Repostería · Decoración", precio: 58000 },
];

let suma = 0; //acumulador
let caros = 0; //contador
let masCaro = talleres[0]; //Iniciamos la busqueda en el primer objeto del vector

// Muestra los talleres y sus respectivos precios
for (const t of talleres) {
  console.log(`${t.nombre}: ${formatoCR.format(t.precio)}`);

  suma += t.precio; //suma cada precio

  if (t.precio > 80000) {
    //verifica si es mayor a 80000 y si es, lo cuenta
    caros++;
  }

  if (t.precio > masCaro.precio) {
    //Verifica si es el mas caro y lo guarda
    masCaro = t;
  }
}
const promedio = suma / talleres.length; //saca el promedio
console.log(`Talleres: ${talleres.length}`); //Muestra cantidad de talleres
console.log(`Promedio: ${formatoCR.format(promedio)}`); //Muestra promedio
console.log(`Más de ${formatoCR.format(80000)}: ${caros}`); //cuantos cuestan mas de 80000
console.log(
  `El más caro: ${masCaro.nombre} ${formatoCR.format(masCaro.precio)}`, //El nombre del más caro y el precio
);
