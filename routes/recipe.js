var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/Recipe.js');

/* GET ALL RECIPES */
router.get('/', function(req, res, next) {
  Recipe.find().sort({created_at: -1}).exec(function (err, cursor) {
    if (err) return next(err);
    res.json(cursor);
  });
});

/* GET SINGLE RECIPE BY ID */
router.get('/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RECIPE */
router.post('/', function(req, res, next) {
  Recipe.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RECIPE */
router.put('/:id', function(req, res, next) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RECIPE */
router.delete('/:id', function(req, res, next) {
  	Recipe.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;