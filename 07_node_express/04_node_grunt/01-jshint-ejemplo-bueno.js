/* dfgsdfgdg
*/ 
/*jshint strict:false */
/* jshint node: true */
"use strict";
// Pedimos la memoria usada
var mem = process.memoryUsage();
// Calcularlo en Kb
var memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
};
primeraFuncion(asdf);
function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}
 
function segundaFuncion() {
    console.log(process.cwd());
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    var startUsage = process.cpuUsage();

    var now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage));
}
terceraFuncion();