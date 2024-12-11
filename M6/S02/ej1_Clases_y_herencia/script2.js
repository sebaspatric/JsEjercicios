class Persona {
    constructor(nombre, cumpleanos, idioma) {
    this.nombre = nombre;
    this.cumpleanos = cumpleanos;
    this.idioma = idioma;
    }
    //Metodo de generacion
    get edad() {
    return this.calcularEdad();
    }
    calcularEdad() {
    return new Date().getFullYear() - this.cumpleanos;
    }
    saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}, así saludo
    en ${this.idioma}.`)
    }
    }
    const isabel = new Persona("Isabel", 1985, 'Español');
console.log(isabel)

    console.log(isabel.edad)
    isabel.saludar();
    