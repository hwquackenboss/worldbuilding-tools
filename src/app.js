// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/routes.js');
const expressLayouts = require('express-ejs-layouts');

// MIDDLEWARE
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.set('layout', 'default-layout');
app.use(bodyParser.urlencoded({extended: true}));
const cookieParser = require('cookie-parser');
const { log } = require('console');
app.use(cookieParser());

// MOUNT ROUTES
app.use('/', mainRoutes);

// EXECUTE
const port = 8080;
const server = app.listen(port, () => {
    console.log("Waiting for requests on port %s", port);
})