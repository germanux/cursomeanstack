"use strict";
let vari = 3434;
console.log("Var " + vari);
listar();

function listar() {
    for (let i = 0; i < process.argv.length; i++) {
        console.log("Parámetro: " + i + " - " + process.argv[i]);
    }
}