console.log("scrpt2: " );

let juan2 = {
  nombre: 'Juan Diaz'
  },
  lily2 = {
  nombre: 'Lily Silva'
  },
  pedro2 = {
  nombre: 'Pedro Salamanca'
  };
  const mapaDebil = new WeakMap();
  mapaDebil.set(juan2, 'primero').set(lily2, 'segunda').set(pedro2,
 'tercero');
  console.log(mapaDebil)