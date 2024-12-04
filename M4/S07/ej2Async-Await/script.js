// Primera Promesa tarda 3 segundos.
function a() {
  return new Promise(resolve => {
  setTimeout(() => {
  resolve('Esto tarda 3 segundos');
  }, 3000);
  });
 }
 // Segunda Promesa tarda 1 segundo.
 function b() {
  return new Promise(resolve => {
  setTimeout(() => {
  resolve('Esto tarda 1 segundo');
  }, 1000);
  });
 }
 // Definimos funcion async.
 async function llamadaAsync() {
  console.log('INICIANDO...');
  // Primer await:
  const resultado2 = await b();
 console.log(resultado2);
 console.log('...FIN');
}
llamadaAsync();