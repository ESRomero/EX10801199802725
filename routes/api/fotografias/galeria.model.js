var fs = require('fs');
var fileToSave= 'galeria.json';
var galeriaModel = {};
var pictureCollection = [];

function writeToFile(){
    var serializedJSON=JSON.stringify(pictureCollection);
    fs.writeFileSync(fileToSave,serializedJSON,{encoding:'utf8'});
    return true;
}

function openFile(){
    try{
    var serializedJSON= fs.readFileSync(fileToSave,{encoding:'utf8'});
    pictureCollection = JSON.parse(serializedJSON);
    }catch(e){
        console.log(e);
    }
}

var pictureTemplate= {
    pictureID:'',
    pictureTittle:"",
    pictureURL:"",
    pictureThumbnailUrl:"",
    pictureAlbum:""
};

openFile();

galeriaModel.addNew=({picturetittle,pictureurl,picturethumbnailurl,picturealbum})=>{
    var newPicture = Object.assign(
        {},
        pictureTemplate,
        {
            pictureTittle:picturetittle,
            pictureURL:pictureurl,
            pictureThumbnailUrl:picturethumbnailurl,
            pictureAlbum:picturealbum
        });

    newPicture.pictureID = pictureCollection.length +1;
    pictureCollection.push(newPicture);
    writeToFile();
    return newPicture;
}

galeriaModel.getAll = ()=>{
    return pictureCollection;
}

module.exports = galeriaModel;