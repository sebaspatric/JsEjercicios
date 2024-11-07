window.onload = function () {
  var dataPoints1 = [], dataPoints2 = [];
  var stockChart = new CanvasJS.StockChart("chartContainer",{
    theme: "light2",
    charts: [{
      title: {
        text: "Bitcoin Price in USD"
      },
      axisY: {
        prefix: "$"
      },
      data: [{
        type: "candlestick",
        yValueFormatString: "$#,###.##",
        dataPoints : dataPoints1
      }]
    },{
      title: {
        text: "Bitcoin Volume"
      },
      data: [{
        dataPoints : dataPoints2
      }]
    }],
    navigator: {
      data: [{
        dataPoints: dataPoints2
      }],
      slider: {
        minimum: new Date(2018, 05, 01),
        maximum: new Date(2018, 09, 01)
      }
    }
  });
  $.getJSON("https://canvasjs.com/data/docs/btcusd2018.json", function(data) {
    for(var i = 0; i < data.length; i++){
      dataPoints1.push({x: new Date(data[i].date), y: [Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)]});
      dataPoints2.push({x: new Date(data[i].date), y: Number(data[i].volume_btc)});
    }
    stockChart.render();
  });
}

/*
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

*/
