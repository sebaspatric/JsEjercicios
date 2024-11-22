// Symbols para propiedades privadas
const salario = Symbol("salario");
const datosPersonales = Symbol("datosPersonales");

// Clase DatosPersonales
class DatosPersonales {
  constructor(edad, direccion) {
    this.edad = edad;
    this.direccion = direccion;
  }
}

// Clase Role
class Role {
  constructor(tipo, permisos = []) {
    this.tipo = tipo; // Ejemplo: "ADMIN"
    this.permisos = new Set(permisos);
  }

  tienePermiso(permiso) {
    return this.permisos.has(permiso);
  }
}

// Clase Empleado
class Empleado {
  constructor(nombre, salarioInicial, datosPersonalesIniciales, rol) {
    this._nombre = nombre;
    this[salario] = salarioInicial;
    this[datosPersonales] = datosPersonalesIniciales;
    this._rol = rol;
  }

  // Métodos de acceso público
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

// Métodos seguros encapsulados en una clase
class SecureMethods {
  static verSalario(target) {
    if (target._rol.tienePermiso("acceso_privado")) {
      return target[salario];
    }
    console.log("Acceso denegado al salario");
    return undefined;
  }

  static actualizarSalario(target, nuevoSalario) {
    if (target._rol.tienePermiso("modificar_privado")) {
      target[salario] = nuevoSalario;
      console.log("Salario actualizado con éxito");
      return true;
    }
    console.log("No tienes permisos para actualizar el salario");
    return false;
  }

  static verDatosPersonales(target) {
    if (target._rol.tienePermiso("acceso_privado")) {
      return target[datosPersonales];
    }
    console.log("Acceso denegado a los datos personales");
    return undefined;
  }

  static actualizarDatosPersonales(target, nuevosDatos) {
    if (target._rol.tienePermiso("modificar_privado")) {
      target[datosPersonales] = nuevosDatos;
      console.log("Datos personales actualizados con éxito");
      return true;
    }
    console.log("No tienes permisos para actualizar los datos personales");
    return false;
  }
}

// Proxy para controlar acceso y agregar métodos seguros
const empleadoHandler = {
  get(target, prop) {
    // Retornar métodos seguros si el nombre coincide
    if (SecureMethods[prop]) {
      return SecureMethods[prop].bind(null, target);
    }

    // Acceso normal a propiedades
    if (Reflect.has(target, prop)) {
      return Reflect.get(target, prop);
    }

    console.log(`La propiedad ${String(prop)} no existe`);
    return undefined;
  },
};

// Crear roles con permisos específicos
const roles = new Map([
  ["ADMIN", new Role("ADMIN", ["acceso_privado", "modificar_privado"])],
  ["MANAGER", new Role("MANAGER", ["acceso_privado"])],
  ["EMPLOYEE", new Role("EMPLOYEE", [])],
]);

// Crear un empleado y envolverlo con un Proxy
const datosJuan = new DatosPersonales(30, "Calle Falsa 123");
const juan = new Empleado("Juan", 50000, datosJuan, roles.get("EMPLOYEE"));
const proxiedJuan = new Proxy(juan, empleadoHandler);

// Ejemplo de uso
console.log("Rol: EMPLOYEE");
console.log(proxiedJuan.nombre); // "Juan"
console.log(proxiedJuan.verSalario()); // Acceso denegado al salario
console.log(proxiedJuan.verDatosPersonales()); // Acceso denegado a los datos personales

console.log("\nCambiando rol de Juan a MANAGER");
juan._rol = roles.get("MANAGER");
console.log(proxiedJuan.verSalario()); // 50000
console.log(proxiedJuan.verDatosPersonales()); // DatosPersonales { edad: 30, direccion: 'Calle Falsa 123' }

console.log("\nCambiando rol de Juan a ADMIN");
juan._rol = roles.get("ADMIN");
proxiedJuan.actualizarSalario(60000); // Salario actualizado con éxito
proxiedJuan.actualizarDatosPersonales(31, "Nueva Dirección"); // Datos personales actualizados con éxito

console.log("\nDespués de la actualización de ADMIN:");
console.log(proxiedJuan.verSalario()); // 60000
console.log(proxiedJuan.verDatosPersonales()); // DatosPersonales { edad: 31, direccion: 'Nueva Dirección' }
