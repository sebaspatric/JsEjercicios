const express = require('express');

const app = express();
const port = 3000;
const hbs = require('hbs');

// registro de partials

hbs.registerPartials(__dirname + '/views/partials', function(err) { });

// declarar motor de plantillas

app.set('view engine', 'hbs');

// en la carpetaa views
app.set('views', __dirname + '/views');

//public 
app.use(express.static(__dirname + '/public'));

// rutas

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio'//,
    //message: 'Hello from the home page!'
  });
});

app.get('/soporte', (req, res) => {
    res.render('soporte', {
      title: '¿cómo podemos ayudarte?',
      estado: false,
      soporte: 'Recupercion de la cuenta'
    });
});

//ruta paraa games

app.get('/games', (req, res) => {
  res.render('games', {
    title: 'Juegos',
    games: [
      { id: '1', name: 'Minecraft', description: 'Juego de mundo abierto', genero: 'Moba' },
      { id: '2', name: 'Fortnite', description: 'Juego de batalla en primera persona', genero: 'furnished'},
      { id: '3', name: 'Call of Duty', description: 'Juego de guerra', genero: 'furnished'},
      { id: '4', name: 'Cyberpunk', description: 'Juego de acción y aventura', genero: 'action'}
    ]
  });
});

// listen

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
