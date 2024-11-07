$(document).ready(function () {
  // Get the input fields
  var miTexto = $("#contenido").text();
  alert(miTexto);

  mitexto = $("#contenido").html();
  alert(mitexto);

  var miAtributo = $("#nombre").attr("type");
  alert(miAtributo);

  //$("#caja1").mouseenter(function() {
  // $("#caja2").show();
  //});
  //$("#caja1").mouseout(function() {
  //  $("#caja2").hide();
  //});
  $("#caja1").mouseenter(function () {
    $("#caja2").toggle();
  });

  $("#boton").click(function () {
    var nombre = $("#nombre").val();
    var correo = $("#email").val();

    alert("su nombre es: " + nombre + " y su correo es: " + correo);
  });

  $("#boton1").click(function () {
    $("#contenido").css("background-color", "greenyellow");
  });

  $("#boton2").click(function () {
    $("#texto").text("Texto escrto usando JQuery");
  });

  $("#boton1").dblclick(function () {
    $("#contenido").css("background-color", "white");
    $("#texto").text("lorem ipsum dolor sit amet");
  });
});
