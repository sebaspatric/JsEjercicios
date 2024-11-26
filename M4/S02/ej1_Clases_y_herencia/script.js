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

    const cony = new Programador("Constanza", 1994, 'Español');
isabel.saludar(); //Clase Persona
cony.saludar(); //Clase Programador
console.log(cony.edad); //Clase Programador con método heredado

var a = 123
console.log(a)
console.log(`typeof: ${typeof(a)}`)

var a = String(a); //Aquí transformamos el tipo de dato.
console.log(a)
console.log(`typeof: ${typeof(a)}`)

var a = "456"
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = Number(a); //Aquí transformamos el tipo de dato.
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = "true"
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = 9007199254740991
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = BigInt(a); //Aquí transformamos el tipo de dato.
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = Boolean(a); //Aquí transformamos el tipo de dato.
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = "hola"
console.log(a)
console.log(`typeof: ${typeof(a)}`)
var a = Symbol(a); //Aquí transformamos el tipo de dato.