//1 $ npm install pg pg-cursor
//new Cursor(text: String, values: Any[][, config: CursorQueryConfig])
const { Pool } = require('pg')
const Cursor = require('pg-cursor')
const pool = new Pool()
const client = await pool.connect()
const text = 'SELECT * FROM my_large_table WHERE something > $1'
const values = [10]
const cursor = client.query(new Cursor(text, values))
cursor.read(100, (err, rows) => {
 cursor.close(() => {
 client.release()
 })
})

//interface CursorQueryConfig {
    // por defecto, las filas aparecen como un par clave/valor para   cada fila
    // pase la cadena 'matriz' aquí para recibir filas como una matriz de valores
//    rowMode?: string;
    // analizadores de tipos personalizados solo para este resultado de
//   consulta
//    types?: Types;
//   }


//cursor.read(rowCount: Number, callback: (err: Error, rows: Row[],
//    result: pg.Result) => void) => void
    