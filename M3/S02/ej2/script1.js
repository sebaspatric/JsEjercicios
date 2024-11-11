function ancho() {
  var x = window.innerWidth;
  return x;
 }
 function altura() {
  var y = window.innerHeight;
  return y;
 }
 function area() {
  console.log(`El area de esta ventana es de ${ancho() * altura()}
 pixeles cuadrados.`)
  var a = `El area de esta ventana es de ${ancho() * altura()} pixeles
 cuadrados.`
  return a;
 }
 function mostrarArea(){
  document.getElementById('area').innerHTML = area();

}