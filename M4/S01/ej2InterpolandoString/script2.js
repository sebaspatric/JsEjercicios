// ES5

    
// ES6
//const multiplica = (x, y) => x * y;
const multiplica = (x, y) => { return x * y };

console.log(multiplica(10, 10));


function miFuncion() {
    console.log(this);
    }
    // Invocación Simple:
    miFuncion(); // Hace un l


const miObjeto = {
    method() {
        console.log(this);
        }
        };
        // Invocación del método:
        miObjeto.method(); // hace un log de miObjeto