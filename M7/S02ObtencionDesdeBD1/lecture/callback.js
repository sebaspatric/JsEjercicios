pool
  .connect()
  .then((client) => {
    client
      .query(query)
      .then((res) => {
        for (let row of res.rows) {
          console.log(row);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
