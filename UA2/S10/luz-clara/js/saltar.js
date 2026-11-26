//saltar.js - continue salta una vuelta; break termina el ciclo
const servicios = ["Retrato", "Familiar", "Eventos", "Perfil"];
for (const s of servicios) {
  if (s === "Familiar") continue; //salta al siguiente elemento
  if (s === "Perfil") break; // termina el ciclo
  console.log(s);
}
console.log("Fuera del ciclo");
