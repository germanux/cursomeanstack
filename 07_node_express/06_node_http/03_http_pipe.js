var http = require("http");
var bl = require("bl");
var fs = require("fs");
let streamEscritura = fs.createWriteStream("./google.html");

http.get("http://www.google.es", (res) => {

    // Al stream de escritura
    res.pipe(streamEscritura);
    // A la librería bl
    res.pipe(
        bl((error, datos) => {
            if (error) {
                return console.error("Error al procesar la peticion", error);
            } else {
                let datosStr = datos.toString();
                console.log("Número de caracteres: " + datosStr.length);
                console.log("Datos:\n" + datosStr);
            }
        }).pipe(streamEscritura)
    );
});