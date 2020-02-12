var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jorge Eduardo Salgado Romero 0801-1998-02725' });
});

module.exports = router;
