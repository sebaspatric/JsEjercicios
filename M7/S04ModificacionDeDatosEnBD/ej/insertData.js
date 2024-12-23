//node insertUser.js jose@test.com Jose Perez 25
const {
    pool
   } = require("./dataBase.js");
   async function insertUser() {
    const [email, firstname, lastname, age] = process.argv.slice(2);
    try {
        const res = await pool.query(
            "INSERT INTO users (email, firstname, lastname, age) VALUES($1, $2, $3, $4)",
            [email, firstname, lastname, age]
            );
            console.log(`Se ha agregado el usuario ${firstname}`);

    } catch (e) {
        console.error("Error al insertar el usuario", e);
    }
    // cerrar el pool
    pool.end();


}
insertUser();
