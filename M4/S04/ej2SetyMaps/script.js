//let objetoSet = new Set(objetoIterable);
let caracteres = new Set(["x", "x", "y", "z", "z"]);
console.log(caracteres);
console.log(caracteres.size);
//caracteres.delete('y')

console.log(caracteres);
caracteres.add(1).add(2).add(3);
console.log(caracteres);
console.log(caracteres.entries());

//let caracteres = new Set(['x', 'x', 'y', 'z', 'z']);
console.log(caracteres.has("z")); //verdadero
console.log(caracteres.has("w")); //falso

let computador = {
  tipo: "laptop",
};
let servidor = {
  tipo: "servidor",
};
let equipment = new WeakSet([computador, servidor]);
if (equipment.has(servidor)) {
  console.log("Tenemos un servidor");
}

//let mapa = new Map([iterable]);

//lista de objetos usuarios:
let juan = {
  nombre: 'Juan Diaz'
  },
  lily = {
  nombre: 'Lily Silva'
  },
  pedro = {
  nombre: 'Pedro Salamanca'
  };
  let rolesUsuario = new Map(); //Nuevo Map,
 // rolesUsuario.set(juan, 'Administrador'); //asigna al usuario Juan el rol de Administrador
  rolesUsuario.set(juan, 'Administrador') //asigna al usuario Juan el rol de  Administrador
  .set(lily, 'Jefa de Area').set(pedro, 'Técnico');

  let rolesUsuario2 = new Map([
    [juan, 'Administrador'],
    [lily, 'Jefa de Area'],
    [pedro, 'Técnico']
    ]);

  // Usando get() para obtener el rol
console.log(rolesUsuario.get(juan));
// Usando get() para obtener un valor no existente:
let noExiste = {
  nombre: 'abc'
  }
  console.log(rolesUsuario.get(noExiste));

console.log(rolesUsuario.has(lily));
console.log(rolesUsuario.has(noExiste));
console.log(rolesUsuario.size);

for(let usuario of rolesUsuario.keys()) {
  console.log(usuario.nombre);
  }

console.log(rolesUsuario);

for(let rol of rolesUsuario.values()) {
  console.log(rol);
  }

for(let elementos of rolesUsuario.entries()) {
console.log(`${elementos[0].nombre}: ${elementos[1]}`);
}

