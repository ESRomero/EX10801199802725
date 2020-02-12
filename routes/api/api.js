var express = require('express');
var router = express.Router();

var fotografiasGaleria = require('./fotografias/galeria');

router.use('/fotografias',fotografiasGaleria);

module.exports = router;