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

  static async findAll() {
    const sql = `SELECT * FROM cursos`;
    try {
      const result = await pool.query(sql);
      console.log(`Cursos encontrados: ${result.rowCount}`);
      return result.rows.map(row => {
        const curso = new Curso(row.titulo, row.descripcion);
        curso.id = row.id;
        return curso;
      });
    } catch (err) {
      console.error("Error buscando todos los cursos:", err.message);
      throw err;
    }
  }

  static async findById(id) {
    const sql = `SELECT * FROM cursos WHERE id = $1`;
    try {
      const result = await pool.query(sql, [id]);
      if (result.rows.length === 0) {
        console.log(`Curso con ID ${id} no encontrado.`);
        return null;
      }
      const row = result.rows[0];
      //console.log(`Curso encontrado: ${JSON.stringify(row)}`);
      const curso = new Curso(row.titulo, row.descripcion);
      curso.id = row.id;
      return curso;
    } catch (err) {
      console.error("Error buscando curso por ID:", err.message);
      throw err;
    }
  }

  static async deleteById(id) {
    const sql = `DELETE FROM cursos WHERE id = $1`;
    try {
      const result = await pool.query(sql, [id]);
      if (result.rowCount === 0) {
        console.log(`Curso con ID ${id} no encontrado para eliminar.`);
        return false;
      }
      console.log(`Curso con ID ${id} eliminado exitosamente.`);
      return true;
    } catch (err) {
      console.error("Error eliminando curso:", err.message);
      throw err;
    }
  }

  async update() {
    const sql = `UPDATE cursos 
                 SET titulo = $1, descripcion = $2 
                 WHERE id = $3`;
    try {
      const result = await pool.query(sql, [this.titulo, this.descripcion, this.id]);
      if (result.rowCount === 0) {
        console.log(`Curso con ID ${this.id} no encontrado para actualizar.`);
        return false;
      }
      console.log(`Curso con ID ${this.id} actualizado exitosamente.`);
      return true;
    } catch (err) {
      console.error("Error actualizando curso:", err.message);
      throw err;
    }
  }
}

export default Curso;
