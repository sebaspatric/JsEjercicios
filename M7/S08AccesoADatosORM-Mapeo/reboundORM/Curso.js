import { pool } from "./dataBase.js";

class Curso {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }

  // Crear la tabla cursos
  static async CreateTable() {
    const sql = `CREATE TABLE IF NOT EXISTS cursos (
      id SERIAL PRIMARY KEY,
      titulo TEXT NOT NULL,
      descripcion TEXT
    )`;
    await pool.query(sql);
    console.log("Tabla 'cursos' creada correctamente.");
  }

  // Insertar un curso
  async insert() {
    const sql = `INSERT INTO cursos (titulo, descripcion) VALUES ($1, $2) RETURNING id`;
    const result = await pool.query(sql, [this.titulo, this.descripcion]);
    this.id = result.rows[0].id;
    console.log(`Curso '${this.titulo}' insertado con ID: ${this.id}`);
  }
}

export default Curso;
