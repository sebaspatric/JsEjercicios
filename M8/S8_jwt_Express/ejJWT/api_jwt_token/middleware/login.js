app.post("/login", async (req, res) => {
  // logica del inicio de sesión
  try {
    // obteniendo los datos de entrada
    const { email, password } = req.body;
    // Validar los datos de entrada
    if (!(email && password)) {
      res.status(400).send("Todos los datos son requeridos, email y password");
    }
    // Validando la existencia del usuario en la base de datos
    const user = await User.findOne({
      email,
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Se genera el Token
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      // Impresion por el terminal del Token generado para el usuario
      console.log("Usuario: " + email + "\nToken: " + token);
      // Retornando los datos del usuario
      return res.status(200).json(user);
    }
    return res.status(400).send("Credenciales invalidas");
  } catch (err) {
    console.log(err);
  }
});
