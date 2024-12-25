class Curso {
    constructor(id, titulo, descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    // Getters
    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    // Método para obtener todos los registros
    obtenerCurso() {
        return {
            id: this.id,
            titulo: this.titulo,
            descripcion: this.descripcion,
        };
    }
}

module.exports = Curso;
