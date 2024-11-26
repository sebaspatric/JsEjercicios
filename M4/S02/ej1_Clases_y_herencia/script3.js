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
    //Metodo Estático
 static especie() {
    return 'humano'
    }
   
    }

    class Programador extends Persona {
        //Metodo propio de Programador usa atributo heredado de Persona
        saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy un
        programador.`)
        }
        }

        
    const isabel = new Persona("Isabel", 1985, 'Español');
    console.log(isabel)

    console.log(isabel.edad)
    isabel.saludar();
    console.log(Persona.especie())
    console.log(isabel.especie())