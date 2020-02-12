var express = require('express');
var router = express.Router();
var galeriaModel = require('./galeria.model');

//http://localhost:3000/api/fotografias/galeria/new
router.post('/galeria/new',(req,res)=>{
    var pictureData = req.body;
    var newPicture = galeriaModel.addNew(pictureData);
    return res.status(200).json(newPicture);
}); // Agrega un nuevo registro de una imagen

module.exports = router;