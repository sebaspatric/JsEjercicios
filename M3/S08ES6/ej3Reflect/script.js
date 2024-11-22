const perrito = {
  nombre: "Chippy",
  color: "cafe",
  collar: function () {
    console.log(`Mi nombre es ${this.nombre}`);
  },
};
console.log(perrito);


//Usamos has para ver si el objeto tiene las propiedades:
console.log(Reflect.has(perrito, 'color')); // si la tiene
console.log(Reflect.has(perrito, 'edad')); // no la tiene

console.log(Reflect.ownKeys(perrito));

console.log(Reflect.set(perrito, 'raza', 'pastor alemán'));
console.log(perrito)


let sym1 = Symbol('foo') ;                  

let sym2 = Symbol('foo'); 

sym1 === sym2  ;
console.log(sym1 === sym2 );