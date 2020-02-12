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

//http://localhost:3000/api/fotografias/galeria/del/:id
router.delete('/galeria/del/:id',(req,res)=>{
    var id= parseInt(req.params.id);
    galeriaModel.deletePicture(id,req.body);
    return res.status(200).json({"Picture was deleted successfully":true});
});//Permite borrar una imagen en especifico segun el id que le mandamos

//http://localhost:3000/api/fotografias/galeria/upd/:id
router.put('/galeria/upd/:id',(req,res)=>{
    var id= parseInt(req.params.id);
    var updPicture = galeriaModel.updatePicture(id,req.body);
    return res.status(200).json(updPicture);
}); //upadte name and password of a user

module.exports = router;