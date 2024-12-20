(async () => {
  try {
    const client = await pool.connect();
    const res = await client.query(query);
    for (let row of res.rows) {
      console.log(row);
    }
  } catch (err) {
    console.error(err);
  }
})();
