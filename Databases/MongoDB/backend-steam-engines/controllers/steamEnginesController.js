'use strict';

const { engineModel } = require('../models/steamEnginesModel');

const mongoose = require('mongoose');

const getAllEngines = (req, res) => {
  engineModel.find({}, function (error, engineArray) {
    if (error) {
      console.error('DB error: ' + error);
    } else {
      res.status(200).send(engineArray);
    }
  });
};

const addEngine = async (req, res) => {
  // destructuring
  const {
    designer,
    railwayCompany,
    startYear,
    endYear,
    decade,
    wheelbase,
    wikiUrl,
    imageUrl,
    name,
    description,
  } = req.body;

  // create the model
  let newEngine = await engineModel.create({
    designer,
    railwayCompany,
    startYear,
    endYear,
    decade,
    wheelbase,
    wikiUrl,
    imageUrl,
    name,
    description,
  });

  // send a message to client informing them that the engine has
  // been saved
  if (newEngine) {
    res.status(200).json({
      message: 'A steam locomotive has been saved',
      newObject: newEngine,
    });
  } else {
    res.json({
      message: 'The new engine has not been entered into the database',
    });
  }
};

/**
 * Update one engine
 */
const updateEngine = async (req, res) => {
  // console.log params :engineId
  //console.log(req.params.engineId);
  // find the engine
  const newContent = {
    designer: req.body.designer,
    railwayCompany: req.body.railwayCompany,
    startYear: req.body.startYear,
    endYear: req.body.endYear,
    decade: req.body.decade,
    wheelbase: req.body.wheelbase,
    wikiUrl: req.body.wikiUrl,
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const loco = await engineModel.findByIdAndUpdate(
      req.params.engineId,
      newContent
    );

    const locoArray = await engineModel.find({});
    res.status(200).json({
      message: 'Successfully updated',
      locoArray
    });
  } catch (err) {
    res.json({
      message: `${err}: Database update error`,
    });
  }
};

/***
 * Delete one engine
 *
 * takes an id, deletes that id
 */
const deleteEngine = async (req, res) => {
  try {
    const loco = await engineModel.findByIdAndDelete(req.params.engineId);

    const locoArray = await engineModel.find({});

    res.status(200).json({
      message: 'Successfully deleted that locomotive',
      loco: loco,
      locoArray
    });
  } catch (err) {
    res.json({
      message: `${err}: Try/catch Database delete error`,
    });
  }
};

module.exports = { getAllEngines, addEngine, updateEngine, deleteEngine };
