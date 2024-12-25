// Declaración de una clase
module.exports = class User {
  // Creamos el constructor
  constructor(id, email, firstname, lastname, age) {
    this._id = id;
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
    this._age = age;
  }
  // Definición de los métodos Getters
  get email() {
    return this._email;
  }
  get firstname() {
    return this._firstname;
  }
  get lastname() {
    return this._lastname;
  }

   // Método personalizado
 allUserData() {
    let data = [];
    data.push(this._id);
    data.push(this._email);
    data.push(this._firstname);
    data.push(this._lastname);
    data.push(this._age);
    return data;
    }

  // Definición de Métodos Setters
  set lastname(newLastname) {
    newLastname = newLastname.trim();
    if (newLastname === "") {
      console.log("El lastname no puede ser vacío");
    }
    this._lastname = newLastname;
  }
}

// Instanciación de la clase
//let user = new User("jose@test.com");
// Accediendo a algún atributo de la clase
//console.log(user._email);
// Muestra el tamaño de argumentos
//console.log(User.length);
// Nombre de la clase
//console.log(User.name);

// Accediendo como un método
// TypeError: user.email is not a function
//console.log(user.email())



// Inicializamos la clase
//let user = new User(1, "usuario@test.com", "José", "Perez", 25)
//
//// Obteniendo el atributo de email
//console.log(user.email)
//// Obteniendo el atributo de firstname
//console.log(user.firstname)
//
//// Obteniendo el atributo de lastname por medio del método getter
//console.log(user.lastname)
//
//// Obteniendo toda la información por el método
//let data = user.allUserData();
//console.log(data)
//
//// Cambiando el lastname por setter
//user.lastname = "Sánchez"
//// Verificando los cambios
//console.log(user.lastname)
//console.log(user.allUserData())