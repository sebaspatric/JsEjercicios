// esperar a que cargue la pagina

document.addEventListener("DOMContentLoaded", function () {
  // Funcion para sumar numeros
  function sumar(a, b) {
    var suma = parseInt(a) + parseInt(b);
    console.log("el resultado de la suma es: " + (a + b));
    //
    document.getElementById("insertarAqui").innerHTML = suma;
  }
  // agregar sumar al presionar el boton:
  document.getElementById("botonSumar").addEventListener("click", function () {
    var num1 = parseInt(document.getElementById("a").value);
    var num2 = parseInt(document.getElementById("b").value);
    sumar(num1, num2);
  });
  /**/

  function sumar1(a, b) {
    var suma = parseInt(a) + parseInt(b);
    // alert("la suma de " + a + " y " + b + "es: " + suma);
    alert(`la suma de ${a} y ${b} es: ${suma}`);
    return suma;
  }

  document.getElementById("sumar1").addEventListener("click", function(){
    sumar1(
        document.getElementById("a").value,
        document.getElementById("b").value
      );
  });
  console.log(`25 + 25 es: ${sumar1(25, 25)}`);
  
 
  function multiplicar(a, b) {
    return a*b;
  }

  //Aquí tenemos la misma función almacenada en una variable:
  var x = function(a, b) { return a + b; };
  console.log(x(3,3));

  // con nombre de function
  var km = function millas_a_km(millas) {
    return millas * 1.60934;;
  }
  console.log(km(75));

  //sin nombre de function
  var km = function (millas) { return millas * 1.60934};;
  console.log(km(75));
  
});
