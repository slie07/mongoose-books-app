var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	release: String,
});

// define the Book model based on the schema
var Book = mongoose.model("Book", BookSchema);


// exporting it so it can be used in server.js
module.exports = Book;

