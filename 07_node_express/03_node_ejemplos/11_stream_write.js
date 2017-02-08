"use strict";

let fs = require("fs");

// Creamos los string de lectura y escritura
let streamLectura = fs.createReadStream("fich (1).wt");
let streamEscritura = fs.createWriteStream("fich_write.txt");

streamLectura.setEncoding("utf8");

streamLectura.on ("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer) 
{
	streamEscritura.write(chunkBuffer.toString());
}