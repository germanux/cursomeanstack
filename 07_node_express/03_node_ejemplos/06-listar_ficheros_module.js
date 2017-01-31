"use strict";
let fs = require("fs");
let path = require("path");

module.exports = function (directorio,extension,callback){
    fs.readdir(directorio,(error,ficheros)=>{
        if(error){
            //console.error("Que habrá pasado!",error);
            callback(error);
        }else{
            //console.log("Expresiones Lambda");
            // filtro el contenido de ficheros
            ficheros = ficheros.filter((fichero)=>{
                return path.extname(fichero) === extension;
            });
            callback(null,ficheros);
        }
    })
}