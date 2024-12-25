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


  
}

export default Estudiante;
