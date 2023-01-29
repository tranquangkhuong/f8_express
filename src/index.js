const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

// Set directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Http logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  'hbs', handlebars.engine({
    extname: '.hbs',
  })
);
      app.set('view engine', 'hbs');
app.set('views',      path.join(__dirname, 'resources/views'));

// Route
route(    app);

// Port
app.listen(port, (err, res) => {console.log(`Server listening on ${port}`);
});
