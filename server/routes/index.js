/**
 * File: index.js
 * Author name: Omar Omar
 * StudentID: 301321736
 * Web App name: the Favourite Book List App
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
    console.log("mongoose connect uri: " + process.env.URI);
console.log("db URI: " + DB.URI);
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
});

router.get('/details', (req, res, next) => {
    res.render('books/details', {
        title: 'Details',
        books: ''
    });
});

router.get('/details/:id', (req, res, next) => {
    res.render('books/details', {
        title: 'Details',
        books: ''
    });
});
module.exports = router;
