let fs = require('fs');
// Usando Clousures
exports.saberLineas = function(fichero, callback) {

        fs.readFile(fichero, miFuncionAsincrona.bind(fichero));

        function miFuncionAsincrona(error, contenido) {
            if (error) {
                callback(error);
            } else {
                // let numFilas = contenido.toString().split('\n').length;
                let numFilas = contenido.toString().match(/\n/g).length;
                callback(null, numFilas);
            }
        }
    }
    // Usando funciones normales
function miFuncionAsincrona(error, contenido) {
    if (error) {
        miFuncionAsincrona.proFunCallback(error);
    } else {
        // let numFilas = contenido.toString().split('\n').length;
        let numFilas = contenido.toString().match(/\n/g).length;
        miFuncionAsincrona.proFunCallback(null, numFilas);
    }
}

exports.saberLineasBind = function(fichero, callback) {
    var objetoConInfo = {
        "proFunCallback": callback
    }
    miFuncionAsincrona.proFunCallback = callback;
    fs.readFile(fichero, miFuncionAsincrona);
}