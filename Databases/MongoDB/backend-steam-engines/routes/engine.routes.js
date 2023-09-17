'use strict';

const express = require('express');
// import database functions
const { getAllEngines, addEngine, updateEngine, deleteEngine } = require('../controllers/steamEnginesController');

const router = express.Router();

// localhost:3050/allEngines endpoint
router.route('/allEngines').get(getAllEngines);
// localhost:3050/addEngine POST create endpoint
// checkEngineData is the validator, but one of the validations is incorrect
router.route('/addEngine').post(addEngine);
// localhost:3050/updateEngine PUT update endpoint
router.route('/updateEngine/:engineId').put(updateEngine);
// localhost:3050/deleteEngine DELETE endpoint
router.route('/deleteEngine/:engineId').delete(deleteEngine);

module.exports =  router;