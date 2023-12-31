'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// import my library functions
const { photoHandler, randomPicHandler } = require('./libraries/photos');
// import middlewares
const loggerMiddleWare = require('./middlewares/logger');
const validateMiddleWare = require('./middlewares/validate');
const notFound = require('./handlers/404');
const serverError = require('./handlers/500');

// start new express server
const app = express();
// use cors
app.use(cors());

// use the logger middleware at the application level
app.use(loggerMiddleWare);

const PORT = process.env.PORT || 3058;
app.listen(PORT, () => {
  console.log('I am listening... :-)  ', PORT);
});

/***
 * ROUTES
 * 
 */
// A default message for the home route
app.get('/', (req, res) => res.status(200).send('Home route'));
// Get 10 images with the title query, e.g: url/searchImage?title=river
app.get('/searchImage', validateMiddleWare, photoHandler);
// Get 1 random image, e.g: url/randomImage 
app.get('/randomImage', randomPicHandler);
// a misstyped path.
app.get('*', notFound);

app.use(serverError);

module.exports = {
  app:app
};
