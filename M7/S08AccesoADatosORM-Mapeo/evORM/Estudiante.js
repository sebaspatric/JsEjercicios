import { pool } from "./dataBase.js";

class Estudiante {
  constructor(nombres, apellidos, edad, nroIdentificacion) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edad = edad;
    this.nroIdentificacion = nroIdentificacion;
  }

  // Crear la tabla estudiantes
  static async CreateTable() {
    const sql = `CREATE TABLE IF NOT EXISTS estudiantes (
      id SERIAL PRIMARY KEY,
      nombres TEXT NOT NULL,
      apellidos TEXT NOT NULL,
      edad INTEGER,
      nro_identificacion INTEGER UNIQUE NOT NULL
    )`;
    await pool.query(sql);
    console.log("Tabla 'estudiantes' creada correctamente.");
  }

  // Insertar un estudiante
  async insert() {
    const sql = `INSERT INTO estudiantes (nombres, apellidos, edad, nro_identificacion)
                 VALUES ($1, $2, $3, $4) RETURNING id`;
    const result = await pool.query(sql, [this.nombres, this.apellidos, this.edad, this.nroIdentificacion]);
    this.id = result.rows[0].id;
    console.log(`Estudiante '${this.nombres} ${this.apellidos}' insertado con ID: ${this.id}`);
  }


   // Método para buscar un estudiante por su ID
   static async findById(id) {
    const sql = `SELECT * FROM estudiantes WHERE id = $1`;
    const result = await pool.query(sql, [id]);
    if (result.rows.length === 0) {
      console.log(`Estudiante con ID ${id} no encontrado.`);
      return null;
    }
    const row = result.rows[0];
    //console.log(`Estudiante encontrado: ${JSON.stringify(row)}`);
    return new Estudiante(row.nombres, row.apellidos, row.edad, row.nro_identificacion);
  }

 // Método FindAll para obtener todos los estudiantes
 static async findAll() {
  const sql = `SELECT * FROM estudiantes`;
  try {
    const result = await pool.query(sql);
    console.log(`Estudiantes encontrados: ${result.rowCount}`);
    return result.rows.map(row => {
      const estudiante = new Estudiante(row.nombres, row.apellidos, row.edad, row.nro_identificacion);
      estudiante.id = row.id;
      return estudiante;
    });
  } catch (err) {
    console.error("Error al obtener los estudiantes:", err.message);
    throw err;
  }
}

 // Método para actualizar un estudiante por ID
 static async updateById(id, nombres, apellidos, edad, nroIdentificacion) {
  
  const sql = `UPDATE estudiantes 
               SET nombres = $1, apellidos = $2, edad = $3, nro_identificacion = $4
               WHERE id = $5`; // Asegúrate de usar el campo 'id' aquí, no 'nro_identificacion'

  try {
    // Aquí estamos buscando por 'id' y no por 'nro_identificacion'.
    const result = await pool.query(sql, [nombres, apellidos, edad, nroIdentificacion, id]);

    if (result.rowCount === 0) {
      console.log(`Estudiante con ID ${id} no encontrado para actualizar.`);
      return false;
    }

    console.log(`Estudiante con ID ${id} actualizado exitosamente.`);
    return true;
  } catch (err) {
    console.error("Error actualizando estudiante:", err.message);
    throw err;
  }
}


  // Método para eliminar un estudiante
  static async deleteById(id) {
    const sql = `DELETE FROM estudiantes WHERE id = $1`;
    try {
      const result = await pool.query(sql, [id]);
      if (result.rowCount === 0) {
        console.log(`Estudiante con ID ${id} no encontrado para eliminar.`);
        return false;
      }
      console.log(`Estudiante con ID ${id} eliminado exitosamente.`);
      return true;
    } catch (err) {
      console.error("Error eliminando estudiante:", err.message);
      throw err;
    }
  }


}

export default Estudiante;
