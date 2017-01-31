"use strict";
let fs = require("fs");
let path = require("path");
var moduloEventos = require("events");

var EmisorEventos = moduloEventos.EventEmitter;
var miEmisor = new EmisorEventos();

module.exports = function(directorio, extension) {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            //console.error("Que habrá pasado!",error);
            miEmisor.emit("onerror", error);
        } else {
            //console.log("Expresiones Lambda");
            // filtro el contenido de ficheros
            ficheros = ficheros.filter((fichero) => {
                return path.extname(fichero) === extension;
            });
            miEmisor.emit("alfiltrar", ficheros);
        }
    })
}
module.exports.on = function(nombreEvento, funcCallback) {
    miEmisor.on(nombreEvento, funcCallback);
}