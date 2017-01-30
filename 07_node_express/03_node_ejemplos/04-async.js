let fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
    let fichero = process.argv[i];
    fs.readFile(process.argv[i], miFuncionAsincrona.bind(fichero));
}

function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la función asincrona", error);
    } else {
        // let numFilas = contenido.toString().split('\n').length;
        let numFilas = contenido.toString().match(/\n/g).length;
        console.log("Fichero: " + this + "\nNum líneas: " + numFilas);
    }
}

// EJERCICIO: Cambiar el código para que el programa soporte una cantidad indeterminada de ficheros.
"fich (1).wt"
"fich (2).wt"
"fich (3).wt"
"fich (4).wt"
"fich (5).wt"