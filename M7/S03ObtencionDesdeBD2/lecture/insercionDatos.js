function createPerson(body, callBack){
    // Esta función agrega una persona que se registra en la base de datos.
   var id;
   var sql = 'INSERT INTO member (name, phone, email ) VALUES ($1, $2, $3) RETURNING id;';
   db.query(sql, [body.name, body.phone, body.email]).then(res => {
    id = res.rows[0].id;
    if (id) {
    callBack(body);
    console.log("Nuevo miembro con id: " + id);
    }
    }).catch(e => {
    if (e.code == '23505'){
    console.log("\n ERROR! \n persona con nombre: " + body.name + " " + " y telefono #: " + body.phone + " es un miembro duplicado.\n");
    }
    })
}

//1 $ npm install pg pg-cursor
