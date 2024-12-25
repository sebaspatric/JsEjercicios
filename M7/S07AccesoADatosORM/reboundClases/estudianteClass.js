// estudianteClass.js
class Estudiante {
    constructor(id, nombres, apellidos, edad, nroIdentificacion) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nroIdentificacion = nroIdentificacion;
    }

    // Método para mostrar información del estudiante
    mostrarInformacion() {
        return `ID: ${this.id}, Nombre: ${this.nombres} ${this.apellidos}, Edad: ${this.edad}, Identificación: ${this.nroIdentificacion}`;
    }
}

// Exportar la clase
module.exports = Estudiante;
