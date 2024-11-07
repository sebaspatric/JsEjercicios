//
//var selectorId = document.getElementById('parrafo');
//console.log(selectorId);
////alert(selectorId);
//var selectorId = document.getElementById('parrafo').innerHTML;
//
//console.log(selectorId);
//alert(selectorId);
//
//
//var selectorEtiqueta = document.getElementsByTagName("h1");
//
//console.log(selectorEtiqueta);
//
//var selectorClass = document.getElementsByClassName("contenedor");
//
//
//console.log(selectorClass);
//
//var selectorVarios = document.querySelector(".contenedor");
//
//console.log(selectorVarios);
//
//var selectorTodos = document.querySelectorAll(".contenedor");
//
//console.log(selectorTodos);
//
//
//var selectorClass = document.getElementsByClassName("contenedor");
//
//console.log(selectorClass);
//for (var i = 0; i < selectorClass.length; i++) {
//    console.log(selectorClass[i].innerHTML);
//}
//alert(selectorClass);
//
//for (let i = 0; i < selectorClass.length; i++) {
//    //selectorClass[i].style.backgroundColor = "red";
//    alert(selectorClass[i].innerHTML);
//}

//var creandoElemento = document.createElement("p");
//console.log(creandoElemento);

//creandoElemento.textContent = "Este nodo fue creado desde JavaScript";
//console.log(creandoElemento.textContent);   
//alert(creandoElemento.textContent);
//document.body.appendChild(creandoElemento);


var selectorVarios = document.querySelector(".contenedor");
var creandoElemento = document.createElement("p");

creandoElemento.textContent = "Este nodo fue creado desde JavaScript";
alert(creandoElemento.textContent);
//selectorVarios.append(creandoElemento);

1
2
3
4
var nodoPadre = document.querySelector(".contenedor");
var nodoHijo = document.querySelector("#parrafo");
//nodoPadre.removeChild(nodoHijo);