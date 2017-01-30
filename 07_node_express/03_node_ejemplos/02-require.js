let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
//console.log("Contenido del fichero:\n" + contenido.toString());
console.log("Numero de lineas del fichero:\n" +
    contenido.toString().split('\n').length);