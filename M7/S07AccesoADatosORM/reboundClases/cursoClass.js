//1. Creación de las clases curso.

// cursoClass.js
class Curso {
    static idAutoIncrement = 1; // Simula el autoincremento para el ID

    constructor(titulo, descripcion) {
        this.id = Curso.idAutoIncrement++;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    // Método para mostrar información del curso
    mostrarInformacion() {
        return `ID: ${this.id}, Título: ${this.titulo}, Descripción: ${this.descripcion}`;
    }
}

// Exportar la clase
module.exports = Curso;


//2. Instanciar las clases.



//3. Acceder a los atributos de cada clase, y mostrar el resultado en la terminal