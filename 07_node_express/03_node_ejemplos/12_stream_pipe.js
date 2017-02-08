"use strict";

let fs = require("fs");

Creamos los string de lectura y escritura
let streamLectura = fs.createReadStream("fich (1).wt");
let streamEscritura = fs.createWriteStream("fich_write_2.txt");

streamLectura.setEncoding("utf8");

streamLectura.pipe(streamEscritura);


let fs2 = require("fs");
let zlib = require("zlib");

fs2.createReadStream("fichero.txt.gz")
		.pipe(zlib.createGunzip())
		.pipe(fs2.createWriteStream("fich_salida.txt"));

