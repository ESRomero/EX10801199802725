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

galeriaModel.deletePicture=(id)=>{
    var newGallery = [];
    newGallery = pictureCollection.filter(
        (o)=>{
            return o.pictureID !== id;
        }
    );
    pictureCollection = newGallery;
    writeToFile();
    return newGallery.length && true;
}

galeriaModel.updatePicture=(id,{pictureurl,picturethumbnailurl})=>{
    var updatingPicture = pictureCollection.filter(
        (o)=>{
            return o.pictureID === id;
        }
    );
    if(updatingPicture && updatingPicture.length>0){
        updatingPicture = updatingPicture[0];
    }else{
        return null;
    }
    var updPicture = {};
    var newPictureCollection = pictureCollection.map(
        (o)=>{
            if(o.pictureID === id){
                 updPicture = Object.assign(
                    {},
                    o,
                    {
                        pictureURL:pictureurl,
                        pictureThumbnailUrl:picturethumbnailurl
                    }
                );
                return updPicture;
            }else{
                return o;
            }
        }
    );
pictureCollection = newPictureCollection;
writeToFile();
return updPicture;
}

module.exports = galeriaModel;