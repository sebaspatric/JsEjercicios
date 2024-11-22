//implementar funciones que permitan gestionar y visualizar la información de los libros.

// utiliza una funcion constructora "libro" para creaae objetos de tipo libro

function Libro(id, titulo, autor, anio, editorial, genero) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor ?? 'N/N';
    this.anio = anio ?? 'N/N';
    this.editorial = editorial ?? 'Desconocida';
    this.genero = genero;
}

// metodos para mostrar y manipular laa informacion detallada del libro

Libro.prototype.mostrarInfo = function () {
  //formatear título y autor para eliminr espacios adicionales
  const tituloFormateado = this.titulo
      .trimStart()
      .trimEnd()
      .replaceAll(/\s+/g, '_'); // Reemplaza los espacios entre palabras con guiones bajos  
  const autorFormateado = this.autor.trimStart(/\s+/g, '_'); // Reemplaza los espacios entre palabras con guiones

  return `----------------------------------
  \nID: ${this.id} \nTítulo: ${tituloFormateado} \nAutor: ${autorFormateado} \nAño: ${this.anio} \nEditorial: ${this.editorial} \nGénero: ${this.genero}`;
};

// arreglo de libros

const libros = [
  new Libro(1, 'El Quijote de la Mancha', 'J.D. Salinger', 1825, 'Paulista', 'Fantasía'),
  new Libro(2, 'El Señor de los Anillos', 'J.R.R. Tolkien', 1954, 'HarperCollins', 'Fantasía'),
  new Libro(3, 'La Divina Comedia', 'Miguel de Cervantes', 1605, 'Ediciones Cervantes', 'Religión'),
  new Libro( 4, ' La Divina Comedia 2', null, null, 'Ediciones Urano', 'Religión'),
  //libros de jrr tolken
  new Libro(5, 'El Hobbit', 'J.R.R. Tolkien', 1937, 'HarperCollins', 'Fantasía'),
  new Libro(6, 'El Señor de los Anillos: La Comunidad del Anillo', 'J.R.R. Tolkien', 1954, 'HarperCollins', 'Fantasía'),
  new Libro(7, 'El Señor de los Anillos: El Retorno del Rey', 'J.R.R. Tolkien', 1955, 'HarperCollins', 'Fantasía'),
  //libros de martin luther king jr.
];

//mostrar todos los libros

function mostrarLibros() {
  console.log(`\n-----------------------------------------
    \nTodos los libros:`);
  libros.forEach((libro, index) => {
    console.log(`Libro ${index + 1}:\n${libro.mostrarInfo()}`);
  });
}

// buscar un libro por ID

function buscarLibroPorID(id) {
  const libroEncontrado = libros.find((libro) => libro.id === id);

  if (libroEncontrado) {
    console.log(libroEncontrado.mostrarInfo());
  } else {
    console.log(`No se encontró un libro con el ID ${id}`);
  }
}

//buscar libro por autor

function buscarLibroPorAutor(autor) {
  const librosEncontrados = libros.filter((libro) =>
    libro.autor.toLowerCase().includes(autor.toLowerCase())
  );

  if (librosEncontrados.length > 0) {
    console.log(`\n-----------------------------------------------
      \nLibros encontrados por el autor "${autor}":`);
    librosEncontrados.forEach((libro) => {
      console.log(`${libro.mostrarInfo()}`);
    });
  } else {
    console.log(`No se encontraron libros con el autor "${autor}"`);
  }
}

//probar la funcion

mostrarLibros();

buscarLibroPorID(1); // mostrar información del libro con ID 1

buscarLibroPorAutor('J.R.R. Tolkien'); // mostrar información de libros del autor J.R.R. Tolkien

