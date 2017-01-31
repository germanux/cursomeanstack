let modSaberLineas = require('./04-async_modulo.js');

for (let i = 2; i < process.argv.length; i++) {
    let fichero = process.argv[i];
    modSaberLineas.saberLineasBind(fichero, miFuncionCallbackLineas.bind(fichero));
}

function miFuncionCallbackLineas(error, numFilas) {
    if (error) {
        console.error("Error al ejecutar la función asincrona", error);
    } else {
        console.log("Fichero: " + this + "\nNum líneas: " + numFilas);
    }
}