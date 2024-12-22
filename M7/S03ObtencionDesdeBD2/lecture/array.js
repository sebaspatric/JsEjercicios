const { Pool } = require('pg')
const pool = new Pool()
const client = await pool.connect()
const result = await client.query({
 rowMode: 'array',
 text: 'SELECT 1 as one, 2 as two;',
})
console.log(result.fields[0].name) // one
console.log(result.fields[1].name) // two
console.log(result.rows) // [ [ 1, 2 ] ]
await client.end()