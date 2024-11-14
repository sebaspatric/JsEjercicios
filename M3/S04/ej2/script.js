
var verdadero = 5 < 10;
var falso = 5 < -10;
// Se cumple al menos una condición:
if (falso || verdadero) {
 console.log("1) "+(falso || verdadero));
}
// No se cumple ninguna condición (Ningún argumento es verdadero):
if (falso || falso) {
 console.log("2) "+(falso || falso));
}


// Se cumplen ambas condiciones:
if (verdadero || verdadero) {
 console.log("3) "+(verdadero || verdadero));
}
//

var verdadero = 5 < 10;
var falso = 5 < -10;
// Se cumple al menos una condición:
if (falso && verdadero) {
 console.log("1) "+(falso && verdadero));
}
// No se cumple ninguna condición (Ningún argumento es verdadero):
if (falso && falso) {
 console.log("2) "+(falso && falso));
}
// Se cumple al menos una condición:
if (verdadero && verdadero) {
    console.log("3) "+(verdadero && verdadero));
   }
   //La condición solo se cumplirá si LOS DOS argumentos son verdaderos


   // OR: Siempre retornará valor Truthy
console.log("resultado OR 1: " + (false || 'Automóvil'))
console.log("resultado OR 2: " + (0 || 'Automóvil'))
console.log("resultado OR 3: " + (1 || 'Automóvil'))
console.log("resultado OR 4: " + ('Automóvil' || 1))
console.log("resultado OR 5: " + (true || 'Automóvil'))

// AND: Siempre retornará valor Falsy


// AND: Siempre retornará valor falsy
console.log("resultado AND 1: " + (false && 'Automóvil'))
console.log("resultado AND 2: " + (0 && 'Automóvil'))
console.log("resultado AND 3: " + (1 && 'Automóvil'))
console.log("resultado AND 4: " + ('Automóvil' && 1))
console.log("resultado AND 5: " + (true && 'Automóvil'))