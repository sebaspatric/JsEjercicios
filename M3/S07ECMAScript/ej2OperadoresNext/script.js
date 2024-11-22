const presupuestoAnual = 1000000000;
const presupuestoAnual2 = 1_000_000_000;
console.log(presupuestoAnual);
console.log(presupuestoAnual2);

const nombre = null ?? 'Aquiles';
console.log(nombre);
const edad = undefined ?? 84;
console.log(edad);
const colorFav = 'azul' ?? 'rojo';
console.log(colorFav);

//Cuando saludo es falsy
let saludo;
saludo ||= 'Lorem ipsum dolor sit amet'
console.log(saludo)
//Cuando saludo es truthy
saludo = 'hola'
saludo ||= 'Lorem ipsum dolor sit amet'
console.log(saludo)


let persona = {
    nombre: 'Alejando',
    apellido: 'Minor',
   };
   persona.apellido &&= 'Magno';
   console.log(persona);

   
let dimensiones = {
 altura: 54.2
};
dimensiones.ancho ??= 33.7;
console.log(dimensiones);

const pacienteVeterinario1 = {
    amo: 'Amanda Salamanca',
    mascota: {
    tipo: 'gato',
    nombre: 'Chispas'
    }
   };

const nombreGato1 = pacienteVeterinario1.mascota?.nombre;
const pesoMascota1 = pacienteVeterinario1.mascota.peso?.enKilos;
console.log(nombreGato1)
console.log(pesoMascota1)
//const pesoKilos = pacienteVeterinario.mascota.peso.enKilos;
//console.log(pesoKilos)


const pacienteVeterinario = {
 amo: 'Amanda Salamanca',
 mascota: {
 tipo: 'gato',
 nombre: 'Chispas',
 mostrarVacunas: () => ['rabia', 'parvovirus', 'virus de la leucemia felina']
 }
};
// Éste método si existe
console.log(pacienteVeterinario.mascota.mostrarVacunas?.());
// Éste método NO existe
console.log(pacienteVeterinario.mascota.registrarVacunas?.());

const cadena1 = 'una cadena primitiva';
const cadena2 = `otra cadena primitiva`;
const cadena3 = new String("Un objeto cadena o String");

let nombre2 = "Aquiles"
const cadena4 = `Mi nombre es ${nombre}`;

let a = 0; 

let b = 1; 

console.log(a||=b) 
console.log(a)

a = 0;
b = 1; 
console.log(a)
console.log(a&&=b)