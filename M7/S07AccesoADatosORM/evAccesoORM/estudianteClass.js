class Estudiante {
    constructor(id, nombres, apellidos, edad, nroIdentificacion) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nroIdentificacion = nroIdentificacion;
    }

    // Getters
    getId() {
        return this.id;
    }

    getNombres() {
        return this.nombres;
    }

    getApellidos() {
        return this.apellidos;
    }

    getEdad() {
        return this.edad;
    }

    getNroIdentificacion() {
        return this.nroIdentificacion;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setNombres(nombres) {
        this.nombres = nombres;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setNroIdentificacion(nroIdentificacion) {
        this.nroIdentificacion = nroIdentificacion;
    }

    // Método para obtener todos los registros
    obtenerEstudiante() {
        return {
            id: this.id,
            nombres: this.nombres,
            apellidos: this.apellidos,
            edad: this.edad,
            nroIdentificacion: this.nroIdentificacion,
        };
    }
}

module.exports = Estudiante;
