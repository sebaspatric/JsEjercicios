const {
    Sequelize
   } = require('sequelize');
   // Primera forma de autenticarnos
   // const path =
   'postgres://node_user:node_password@localhost:5432/db_node';
   // const sequelize = new Sequelize(path, {
   // operatorsAliases: 0
   // });
   // Segunda forma de autenticarnos
   const sequelize = new Sequelize('db_node', 'node_user',
   'node_password', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize