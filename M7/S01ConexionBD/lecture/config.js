const credenciales = {
    user: 'admin',
    database: 'ecamp7',
    password: 'admin',
    port: 5432,
    host: 'localhost',
    };

//host = localhost port=5432 dbname=nodedemo connect_timeout=10

//postgresql://username:password@host:port/dbname[?paramspec]
//postgresql://postgres:yourpassword@localhost:5432/nodedemo/postgres

// pool.end()

//client.end()

client
.connect()
.then(() => console.log('connected'))
.catch(err => console.error('connection error', err.message));