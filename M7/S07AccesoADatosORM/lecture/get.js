class UserInfo {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    nuevoNombre = nuevoNombre.trim();
    if ((nuevoNombre = "")) {
      throw "nuevoNombre no puede estar vacía";
    }
    this._nombre = nuevoNombre;
  }
}

