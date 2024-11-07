// solicitar el ingreso de 2 numeros y calcular cual es el mayor o si tienen el mismo valor

var numero1 = prompt("Ingrese un numero");

var numero2 = prompt("Ingrese otro numero");

var numeroMayor = Math.max(numero1, numero2);
var numeroMinor = Math.min(numero1, numero2 );


if (numero1 === numero2) {
    alert("Esta página dice \nLos numeros ingresados son iguales.");
} else {
    alert(`Esta página dice \n ${numeroMayor} es mayor que ${numeroMinor}`);
}
