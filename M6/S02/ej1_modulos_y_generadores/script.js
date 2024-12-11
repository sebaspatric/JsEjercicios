
// Arreglo de frutas
let frutas = ['manzana', 'naranja', 'pera', 'frutilla', 'kiwi']
//Declaración de un generador con function*
function* generador() {
let i = 0
yield frutas[i]; //Palabra clave yield: pone la función en pausa.
i++
yield frutas[i];
i++
yield frutas[i];
i++
yield frutas[i];
i++
yield frutas[i];
i++
return 'terminado...';
}

let gen1 = generador(); //Instanciamos el generador

//Utilizamos el métood next() para "iterar" en el generador
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next().value) //Undefined porque ahora no hay más instrucciones en el generador
console.log(gen1.next().value)