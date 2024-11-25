const miObjeto = {
  method() {
    console.log(this);
  },
};
// Invocación del método:
miObjeto.method(); // hace un log de miObjeto

function miFuncion() {
    console.log(this);
    }
    new miFuncion(); // Hace un log de una instancia de miFuncion