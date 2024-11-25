const miObjeto = {
  name: this,
  metodo: () => console.log(this), //ES6
  metodo2() { //ES5
  console.log(this)
  }
  };
  console.log(miObjeto.name) //log del objeto Window
  miObjeto.metodo(); //log del objeto Windo
  miObjeto.metodo2(); //log de miObjeto