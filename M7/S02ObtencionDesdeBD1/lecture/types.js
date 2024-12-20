const query = {
  text: "SELECT * from some_table",
  types: {
    getTypeParser: () => (val) => val,
  },
};
    