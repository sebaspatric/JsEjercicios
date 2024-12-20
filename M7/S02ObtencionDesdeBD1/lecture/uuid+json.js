const createTableText = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TEMP TABLE IF NOT EXISTS users (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
data JSONB
);
`
// Crea una tabla temporal
await client.query(createTableText)
const newUser = { email: 'brian.m.carlson@gmail.com' }
// Crea un nuevo usuario
await client.query('INSERT INTO users(data) VALUES($1)', [newUser])
const { rows } = await client.query('SELECT * FROM users')
console.log(rows)
/*
output:
[{
id: 'd70195fd-608e-42dc-b0f5-eee975a621e9',
data: { email: 'brian.m.carlson@gmail.com' }
}]
*/