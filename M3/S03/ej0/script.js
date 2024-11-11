
var resultado = "esta variable indica si es positivo, cero o negativo.";
function eval(valor) {
 // si el valor es igual a 0, entonces la variable resultado será "cero".
 if (valor == 0) { resultado = "cero" }
 // si el valor es mayor a cero, entonces la variable resultado será "positivo".
 if (valor > 0) { resultado = "positivo" }

 // si el valor es menor a cero, entonces la variable resultado será "negativo".
 if (valor < 0) { resultado = "negativo" }
 document.getElementById("result").innerHTML = `El input '${valor}' es
${resultado}.`;
}
