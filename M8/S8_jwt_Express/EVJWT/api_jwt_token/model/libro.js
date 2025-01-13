const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  isbn: {
    type: String,
    unique: true, // Asegura que el ISBN sea único en la colección
    required: true, // Campo obligatorio
  },
  titulo: {
    type: String,
    required: true, // Campo obligatorio
  },
  autor: {
    type: String,
    required: true, // Campo obligatorio
  },
});

module.exports = mongoose.model("Libro", libroSchema);
