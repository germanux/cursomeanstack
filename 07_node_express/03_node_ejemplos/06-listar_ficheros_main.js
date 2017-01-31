"use strict";
let moduloDeFiltrado = require("./06-listar_ficheros_module.js")
let directorio = process.argv[2]; // path del directorio
let extension = process.argv[3]; // extension a buscar

function queHacerCuandoDevuelvaLosFicheros(error, arrayDeFicheros) {
    if (error) {
        console.error("Error al listar", error);
    } else {
        arrayDeFicheros.forEach((fichero) => {
            console.log("Fichero: " + fichero);
        })
    }
}
moduloDeFiltrado(directorio, extension, queHacerCuandoDevuelvaLosFicheros)