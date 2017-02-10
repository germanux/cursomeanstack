var http = require("http");
var bl = require("bl");

http.get("http://www.google.es", (res) => {
    res.pipe(
        bl((error, datos) => {
            if (error) {
                return console.error("Error al procesar la peticion", error);
            } else {
                let datosStr = datos.toString();
                console.log("Número de caracteres: " + datosStr.length);
                console.log("Datos:\n" + datosStr);
            }
        })
    );
});