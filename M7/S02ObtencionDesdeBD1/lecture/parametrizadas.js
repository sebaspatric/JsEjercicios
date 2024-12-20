const text = "INSERT INTO users(name, email) VALUES($1, $2) RETURNING*";
const values = ["Pedro", "pedro.perez@gmail.com"];
// callback
client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
    // { name: 'Pedro', email: 'pedro.perez@gmail.com' }
  }
});
// promise
client
  .query(text, values)
  .then((res) => {
    console.log(res.rows[0]);
    // { name: 'Pedro', email: 'pedro.perez@gmail.com' }
  })
  .catch((e) => console.error(e.stack));
// async/await
try {
  const res = await client.query(text, values);
  console.log(res.rows[0]);
  // { name: 'Pedro', email: 'pedro.perez@gmail.com' }
} catch (err) {
  console.log(err.stack);
}
