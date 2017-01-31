let fs = require("fs");
let path = require("path");

let directorio = process.argv[2];
let extension = process.argv[3];

if (process.argv.length < 4) {
    console.log("USO:   node 05-listar_ficheros.js [DIRECTORIO] [EXTENSION]");
}