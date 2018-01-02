var mongoose = require("mongoose");



// connecting to monggo DB
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require ("./book.js");