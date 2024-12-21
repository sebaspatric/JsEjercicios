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
   pool.connect()
    .then((pool) => {
        pool.query('SELECT * FROM users')
 .then(res => {
 for (let row of res.rows) {
 console.log(row);
 }
 })
 .catch(err => {
 console.error(err);
 })
 .finally(() => {
    pool.end().then(() => {
        console.log('PostgreSQL connection pool closed.')
    }); // Release the database connection when done
  });
 });