const valorUno = 1;
const valorDos = 5;
let array = [];
let suma;
let resta;
const sumar = (numeroUno, numeroDos ) => {
 suma = numeroUno + numeroDos;
 return suma;
}
const restar = () => {
	resta = suma - valorUno;
	return resta
}

sumar(valorUno, valorDos);
restar();
array.push(valorUno);
array.push(valorDos);
array.push(suma);
console.log(array)
