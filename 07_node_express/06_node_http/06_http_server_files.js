var http = require("http");
var fs = require("fs");

function enviarImagen(request, response) {

    response.writeHead(200, { "content-type": "image/png" });
    fs.createReadStream("baner_web.jpg").pipe(response);
    console.log("Imagen servida");
}
var server = http.createServer(enviarImagen);
server.listen(8888);
console.log("Servidor imagen escuchando");