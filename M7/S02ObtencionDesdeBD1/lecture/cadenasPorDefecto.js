const queryText = 'SELECT int_col::text, date_col::text, json_col::text FROM my_table'
const result = await client.query(queryText)
console.log(result.rows[0]) // will contain the unparsed string value of each column

