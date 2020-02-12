var express = require('express');
var router = express.Router();
var galeriaModel = require('./galeria.model');

//http://localhost:3000/api/fotografias/galeria/new
router.post('/galeria/new',(req,res)=>{
    var pictureData = req.body;
    var newPicture = galeriaModel.addNew(pictureData);
    return res.status(200).json(newPicture);
}); // Agrega un nuevo registro de una imagen


//http://localhost:3000/api/fotografias/galeria/all
router.get('/galeria/all',(req,res)=>{
    return res.status(200).json(galeriaModel.getAll());

}); //Permite ver toda la informacion existente de las fotografia en galeria

module.exports = router;