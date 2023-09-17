'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// import custom validation middleware
const { checkEngineData } = require('./middlewares/checkEngineData');
// not found handler
const notFound = require('./handlers/notFound');

const app = express();
app.use(cors());
// fetch post req.body fields as JSON
app.use(express.json());


mongoose.set('strictQuery', false); // suppress dep. warning
mongoose.connect('mongodb://localhost:27017/steamengines', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3051;
app.listen(PORT, () => {
  console.log('Express, Mongoose steam engine API listening port: ', PORT);
});

/***
 * Routes
 * 
 */

const engineRoutes = require('./routes/engine.routes');
app.use('/', engineRoutes);
