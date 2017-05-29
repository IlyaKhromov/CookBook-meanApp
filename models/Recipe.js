var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', RecipeSchema);