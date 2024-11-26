class Persona {
  constructor(nombre, cumpleanos, idioma) {
    this.nombre = nombre;
    this.cumpleanos = cumpleanos;
    this.idioma = idioma;
  }
}

var persona2 = class {
  constructor(nombre, cumpleanos, idioma) {
    this.nombre = nombre;
    this.cumpleanos = cumpleanos;
    this.idioma = idioma;
  }
};
const isabel = new Persona("Isabel", 1985, "Español");
console.log(isabel);
