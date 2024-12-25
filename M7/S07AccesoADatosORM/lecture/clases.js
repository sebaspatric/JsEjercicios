//Clase Anonima
let UserInfo = class {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
};
//Salida de UserInfo
console.log(UserInfo.name);
//Clase Nombrada
let UserInfo2 = class UserInfo2 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
};
//Salida del UserInfo2
console.log(UserInfo2.name);
console.log(UserInfo2.edad);
