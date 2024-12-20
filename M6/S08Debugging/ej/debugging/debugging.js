
const ladoUno = 3;
const ladoDos = 3;
const ladoTres = 3;
let base = 2
let altura = 3
let divisor = 2

// Calculando el área del triángulo
const calculaArea = (base, altura, divisor) => {
//const calculaArea = () => {
        return (base * altura) /divisor;
}
//calcula perimetro

const calculaPerimetro = (ladoUno, ladoDos, ladoTres) => {
//const calculaPerimetro = () => {
    //base++;
    return ladoUno + ladoDos + ladoTres;
}

// Calcula hipotenusa

const calculaHipotenusa = (ladoUno, ladoDos) => {
//const calculaHipotenusa = () => {

    return Math.sqrt(Math.pow(ladoUno, 2) + Math.pow(ladoDos, 2));
}

console.log("");
console.log("Valores iniciales");
console.log("");
console.log(` Lado 1 es igual a: ${ladoUno}`);
console.log(` Lado 2 es igual a: ${ladoDos}`);
console.log(` Lado 3 es igual a: ${ladoTres}`); 
console.log(`Altura es igual a: ${altura}`);
console.log(`Base es igual a: ${base}`); 
console.log(``);
console.log(`Resultados:`);
console.log(``);
console.log(`La hipotenusa del triangulo es igual a: ${calculaHipotenusa( ladoUno, ladoDos)}`);
console.log(`El perimetro del triangulo es igual a: ${calculaPerimetro(ladoUno, ladoDos, ladoTres)}`);
console.log(`El area del triangulo es igual a: ${calculaArea(base, altura, divisor)}`);
// Genera número aleatorio