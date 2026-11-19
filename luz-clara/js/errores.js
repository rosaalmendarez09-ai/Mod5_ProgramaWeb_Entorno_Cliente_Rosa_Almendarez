// errores.js - try, catch y finally
try {
  // Intenta ejecutar
  console.log("Inicio");
  const nombre = "ana"; //como si fuera cancelar
  console.log(nombre.toUpperCase()); //falla, null no tiene metodos
  console.log("Esta linea no se muestra");
} catch (error) {
  //si algo falla se muestra acá
  console.log("Se atrapó", error.message);
  // } finally {
  //Siempre se ejecuta
  console.log("Fin del intento");
}
console.log("El programa sigue"); //no se detiene
