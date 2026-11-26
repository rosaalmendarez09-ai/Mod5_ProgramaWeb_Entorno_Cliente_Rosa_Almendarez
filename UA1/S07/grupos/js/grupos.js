//grupos.js - Grupos de inscripcion

let cupos = 8; //cantidad de cupos del taller
const personas = 3;
let ronda = 0;

while (cupos > 0) {
  ronda++;

  const inscritos = Math.min(personas, cupos);
  cupos -= inscritos;

  console.log(
    `Ronda ${ronda}: Se inscriben: ${inscritos} personas · Cupos restantes: ${cupos}`,
  );
}

console.warn("Taller lleno");
