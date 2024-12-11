const persona = {
  nombre: "Fernanda",
  direccion: "Avenida Central",
  edad: 43,
  hobby: "pintar",
  oficio: "desarrolladora Front End",
};
//let nombre = persona.nombre;
//let edad = persona.edad;
//console.log(nombre, edad);

// Destructuring assignment
const { nombre, edad } = persona;
console.log(nombre, edad);

//let direccion;
//({ direccion } = persona);

//console.log(direccion);

const { nombreCompleto = `${persona.nombre} Lagos` } = persona;
console.log(nombreCompleto);

const { direccion: domicilioLaboral } = persona;
console.log(domicilioLaboral);

// destructuring objetos anidados
const empleado = {
  nombre: "Rodrigo",
  direccion: "Pasaje Alba 324",
  edad: 32,
  departamento: {
    nombre: "Ventas",
    turno: "Mañana",
    direccion: {
      ciudad: "Punta Arenas",
      calle: "Calle Insdustrial 1020",
    },
  },
};

const {
  departamento,
  departamento: { direccion },
} = empleado;
console.log(departamento);
console.log(direccion);


// como funcion
const infoSobrePersona = ({
    nombre,
    edad,
    hobby
    }) => {
    console.log(`${nombre} tiene ${edad} años y su hobby favorito es
    ${hobby}.`)
    }
    // Pasamos un objeto como parámetro:
    infoSobrePersona(persona);
    

// function
// método:
const obtenerUsuario = () => {
    return {
    'usuario': 'Alex1',
    'correo': 'a23@correo.uk',
    'edad': 22}
}
// Desestructuramos el objeto retornado por el método:
const {
usuario,
correo
} = obtenerUsuario();
console.log(usuario, correo);


//Spread

const suma = (x, y, z) => x + y + z;
let numeros = [7, 8, 9]
// Manera ES5:
console.log(suma.apply(null, numeros)); //24
// Manera ES6 con Spread:
console.log(suma(...numeros)); //24

1
2
3
4
var a = [1, 2, 3, 4, 5]
var b = [6, 7, 8, 9, 10]
a = [...b]
console.log(a) // [6,7,8,9,10]

// Manera ES5:
console.log(a.concat(b)) // [1,2,3,4,5,6,7,8,9,10]
// Manera ES6 con Spread:
console.log([...a, ...b]) // [1,2,3,4,5,6,7,8,9,10]