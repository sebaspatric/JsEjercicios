//const {
 //   Pool
 //  } = require("pg");
// import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;


 const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'db_node',
    password: 'node_password',
    port: 5432,
   });
   //module.exports = {
   // pool
   //};
   export { pool };
