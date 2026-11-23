//catalogo.js - Tabla de cursos con nombre y precio
const formatoCR = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
});

const tarifas = [
  { nombre: "Cocina de la casa", nivel: "Inicial", precio: 68000 },
  { nombre: "Cocina de la casa", nivel: "Intermedio", precio: 72000 },
  { nombre: "Panadería", nivel: "Masa madre", precio: 95000 },
  { nombre: "Panadería", nivel: "Pan de campo", precio: 70000 },
  { nombre: "Panadería", nivel: "Bollería", precio: 88000 },
  { nombre: "Repostería", nivel: "Tartas", precio: 82000 },
  { nombre: "Repostería", nivel: "Decoración", precio: 58000 },
];

let suma = 0; //acumulador
let caros = 0; //contador
let masCaro;
