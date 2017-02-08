"use strict";

let fs = require("fs");
let streamLectura = fs.createReadStream("fich (1).wt");

let data = "";

streamLectura.on("data", cuandoLee);
streamLectura.on("end", cuandoAcaba);

function cuandoLee (chunk) {
	data += chunk;
	console.log("Longitud buffer: " + chunk.length);
}
function cuandoAcaba() {
	console.log(data);
}

// node --inspect --debug-brk 10_stream_read.js

let fs2 = require("fs");
let streamLectura2 =  fs2.createReadStream("fichero.txt");
let data2 = "";
let buffer;

streamLectura2.setEncoding("utf8");

streamLectura2.on("readable", alCrearseStreamLectura);

function alCrearseStreamLectura() {
	while ((buffer = streamLectura2.read()) != null) {
		data2 += buffer;
	}
}
streamLectura2.on("end", function() {
	console.log(data2);
});












