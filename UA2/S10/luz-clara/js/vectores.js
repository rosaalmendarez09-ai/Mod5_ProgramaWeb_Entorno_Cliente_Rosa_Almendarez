// vectores.js - Un vector(array) guarda varios valores en orden
const servicios = ["Retrato", "Familiar", "Eventos"]; //corchetes
console.log(servicios[0]); // El primero -> Retrato
console.log(servicios.length); //cantidad de elementos
servicios.push("Perfil"); //Agrega elemento al final del vector
console.log(servicios.join(" | ")); //une todo en un texto
const ultimo = servicios.pop(); //quita el ultimo elemento del vector: Perfil
console.log(ultimo, servicios.length); // muestra el que fue quitado y cantidad de elementos
