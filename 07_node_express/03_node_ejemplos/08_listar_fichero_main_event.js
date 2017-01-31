"use strict";
let moduloDeFiltrado = require("./08_listar_fichero_module_event.js")
let directorio = process.argv[2]; // path del directorio
let extension = process.argv[3]; // extension a buscar

/*function queHacerCuandoDevuelvaLosFicheros(error, arrayDeFicheros) {
    if (error) {
        console.error("Error al listar", error);
    } else {
        arrayDeFicheros.forEach((fichero) => {
            console.log("Fichero: " + fichero);
        })
    }
}*/
function queHacerCuandoDevuelvaLosFicheros(arrayDeFicheros) {
    arrayDeFicheros.forEach((fichero) => {
        console.log("Fichero: " + fichero);
    });
}

// moduloDeFiltrado.on("onerror", funcionCallbackError);
moduloDeFiltrado.on("alfiltrar", queHacerCuandoDevuelvaLosFicheros);