import Estudiante from './Estudiante.js'; // Asegúrate de que la clase Estudiante esté correctamente importada

(async function() {
  try {
    // Asegúrate de que la tabla esté creada
    //await Estudiante.CreateTable();

    // ID del estudiante a actualizar
    const idEstudiante = 1;
    const nuevosNombres = "Juan Carlos";
    const nuevosApellidos = "Pérez Gómez";
    const nuevaEdad = 30;
    const nuevoNroIdentificacion = 123456789;

    // Llamada al método updateById
    const updated = await Estudiante.updateById(idEstudiante, nuevosNombres, nuevosApellidos, nuevaEdad, nuevoNroIdentificacion);

    if (updated) {
      console.log(`Estudiante con ID ${idEstudiante} actualizado exitosamente.`);
    } else {
      console.log(`No se encontró un estudiante con ID ${idEstudiante} para actualizar.`);
    }

    // Verificar la actualización mostrando el estudiante actualizado
    const estudianteActualizado = await Estudiante.findById(idEstudiante);
    console.log("Estudiante actualizado:", estudianteActualizado);

  } catch (error) {
    console.error("Error en la prueba:", error.message);
  }
})();
