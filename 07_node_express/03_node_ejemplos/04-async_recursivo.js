let fs = require('fs');
// EJERCICIO: Cambiar el código 04-async.js para que el programa soporte una cantidad indeterminada de ficheros, pero lea de manera secuencial los ficheros usando llamadas asincronas.


let i = 2;
// for (let i = 2; i < process.argv.length; i++) {
// let fichero = process.argv[i];
fs.readFile(process.argv[i], miFuncionAsincrona.bind(process.argv[i]));
// }

function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la función asincrona", error);
    } else {
        // let numFilas = contenido.toString().split('\n').length;
        let numFilas = contenido.toString().match(/\n/g).length;
        console.log("Fichero: " + this + "\nNum líneas: " + numFilas);
    }
    i++;
    if (i < process.argv.length) {
        fs.readFile(process.argv[i], miFuncionAsincrona.bind(process.argv[i]));
    }
}