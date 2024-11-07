console.log("hola mundo");  

var number1 = 5;

var number2 = 10;
var result = number1 + number2;

console.log("La suma es: " + result);

numero1 = prompt("ingrese el primer numero");

console.log(numero1);
numero2 = prompt("ingrese el segundo numero");

result = parseFloat(numero1) + parseFloat(numero2);

console.log("La suma es: " + result);

alert("La suma de " + numero1 +"+"+ numero2 + " es: " + result);

//funciones
function suma (numero1, numero2) {
    return parseFloat(numero1) + parseFloat(numero2);
}
function resta (numero1, numero2) { return  parseFloat(numero1) - parseFloat(numero2);
    }
function multiplicacion (numero1, numero2) { return parseFloat(numero1) * parseFloat(numero2);
    }
function division (numero1, numero2) {
    if (numero2 != 0) {
        return parseFloat(numero1) / parseFloat(numero2);
    } else {
        return "Error: division por cero";
    }
}

var numero1 = prompt("ingrese el primer numero");

var numero2 = prompt("ingrese el segundo numero");
result = resta(numero1, numero2);
alert("La resta de " + numero1 + "-" + numero2 + " es " + result);   

// switch case

var numero = prompt("ingrese un numero entre 1 y 5");

switch (parseInt(numero)) {
    case 1:
        alert("Uno");
        break;
    case 2:
        alert("Dos");
        break;
    case 3:
        alert("Tres");
        break;
    case 4:
        alert("Cuatro");
        break;
    case 5:
        alert("Cinco");
        break;
    default:
        alert("El numero ingresado no es valido");
}

// else if

var numero = 15;

if (numero < 2) {
    console.log("el numero menor a 2 ");
    
} else if (numero > 10) {
    console.log("el numero mayor a 10 ");
    
} else {
    console.log("el numero esta entre 2 y 10 ");
}

//while

var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
