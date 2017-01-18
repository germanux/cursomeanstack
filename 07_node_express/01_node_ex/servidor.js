// NOTA: Para instalar el módulo express indicado en package.json, ejecutar npm install sobre el directorio actual

// Importamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// Ruteo
app.get("/", peticionPrincipal);

function peticionPrincipal(peticion, respuesta) {
	respuesta.sendfile(__dirname + "/publico/index.html");
}

app.listen(9000);

console.log("Servidor lanzado");