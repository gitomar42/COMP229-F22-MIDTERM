/**
 * File: routes/books.js
 * Author name: Omar Omar
 * StudentID: 301321736
 * Web App name: the Favourite Book List App
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);