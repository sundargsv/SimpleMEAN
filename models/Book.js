/*
 * @Author: Sundar Gsv
 * @Date: 2017-12-20 15:48:34
 * @Last Modified by: Sundar Gsv
 * @Last Modified time: 2017-12-20 15:52:46
 */

// MARK : Including all lib dependencies
var mongoose = require('mongoose');

// MARK : My book model here
var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

// MARK : Export this model to expose the schema
module.exports = mongoose.model('Book', BookSchema);
