var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chloe' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Chloe' }); // Change 'index' to name of ejs applied
});

/* GET about page. */
router.get('#about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET product page. */
router.get('#project', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET contact page. */
router.get('#contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
