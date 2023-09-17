'use strict';

const express = require('express');
require('dotenv').config();
const axios = require('axios');
// cross origin resource sharing
const cors = require('cors');

// start new express app.
const app = express();
// use cors - development only
app.use(cors());
// specify a port number to listen on
const PORT = process.env.PORT || 3051;
// get the server listening to a port
app.listen(PORT, () => {
  console.log('I am listening... :-)');
});

/***
 * A Digimon class
 *
 * A Digimon is a cartoon thing, a bit like a pokemon.
 * Each property is a string.
 */ class Digimon {
  constructor(oneDigimon) {
    const { name, img, level } = oneDigimon;
    this.name = name;
    this.image = img;
    this.level = level;
  }
}

/***
 * Express routing for URL paths.
 *
 */
app.get('/alldigimon', digimonHandler);
app.get('/ultimatedigimon', ultimateDigimons);
app.get('*', notFoundHandler);

// get all the digimon... url:3050/alldigimon
async function digimonHandler(request, response) {
  const url = 'https://digimon-api.vercel.app/api/digimon';
  await axios
    .get(url)
    .then((digimonData) => {
      const allDigimons = digimonData.data.map(
        (creature) => new Digimon(creature)
      );
      response.status(200).send(allDigimons);
    })
    .catch((err) => response.status(501).send('Network (digimon) error'));
}

// ultimate digimon route url:3050/UltimateDigimon
async function ultimateDigimons(request, response) {
  const url = 'https://digimon-api.vercel.app/api/digimon';
  await axios
    .get(url)
    .then((data) => {
      const ultimateOnes = data.data.filter((digi) => {
        return digi.level === 'Ultimate';
      });
      response.status(200).send(ultimateOnes);
    })
    .catch((err) =>
      response.status(501).send('Network error- getting ultimate digimons')
    );
}

// A wildcard for if the user misstypes an endpoint
function notFoundHandler(request, response) {
  response
    .status(404)
    .send(
      'Possible urls are /alldigimon and /ultimatedigimon\n Please check your spelling'
    );
}
