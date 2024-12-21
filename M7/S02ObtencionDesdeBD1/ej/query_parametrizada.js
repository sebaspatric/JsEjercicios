const {
    Pool
   } = require("pg");
   const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'db_node',
    password: 'node_password',
    port: 5432,
   })
   // callback
   console.log('Consulta parametrizada con callback')
   const text = 'SELECT * FROM users WHERE age > $1'
   const values = [30] // Array de valores, seleccionamos los mayores de
   30
   pool.query(text, values, (err, res) => {
    if (err) {
    console.log(err.stack)
    } else {
    console.log(res.rows)
    }
   })
   // Promise
   console.log('Consulta parametrizada con promesa')