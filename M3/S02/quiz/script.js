// esperar a que cargue la pagina

//document.addEventListener("DOMContentLoaded", function () {
  // Funcion para sumar numeros
function functionReturn(){
  var a = 3;
  var b = 234;
  var x = a + b;
  return x;
}
console.log(`Con un return: ${functionReturn()}`);

function functionSinReturn() {
  var a = 3;
  var b = 234;
  var x = a + b;
}

console.log(`Sin un return: ${functionSinReturn()}`); // No imprime nada, porque la función no devuelve ningún valor

function ancho(){
  var x = window.innerWidth;
  return x ;
}

function altura(){
  var y = window.innerHeight;
  return y;
}
function area() {
  console.log(`El area de esta ventana es de ${ancho()*altura()} pixeles cuadrados`);
  var a = `El area de esta ventana es de ${ancho()*altura()} pixeles cuadrados.`;
  return a;
}

function mostrarArea(){
  document.getElementById('area').innerHTML = area();
}

function primero(valor){
  valor*2;

  valor +10;
  valor/4;
  alert(valor);
}
primero(7);

a = 3 
function func() { 
 return a * 3; 
} 

alert(func(a));
//});
