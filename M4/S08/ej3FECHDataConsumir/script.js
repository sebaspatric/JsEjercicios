async function leerArchivo() {
  var x = await fetch('lorem.txt');
  var y = await x.text()
  console.log(y)
  }
  leerArchivo();

// aplicar funcion llerArchivo con el click ("button").click
  document.querySelector("button").addEventListener("click", leerArchivo);
  
