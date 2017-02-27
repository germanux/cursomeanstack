var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);
let contador = 0;

var messages = [{
    id: 1,
    text: "Primer mensaje del serv.",
    author: "Servidor"
}, {
    id: 2,
    text: "Otro mensaje",
    author: "Servidor"
}];

app.use(express.static('public'));

io.on("connection", alConectarseAlguien);
// disconnect
function alConectarseAlguien(socket) {
    contador++;
    mensajeServidor("Alguien se ha conectado. (" + contador + " usuarios).");
    console.log("Alguien se ha conectado, número " + contador);

    socket.emit("mensajes", messages);

    socket.on("nuevo-mensaje", function(data) {
        messages.push(data);
        io.sockets.emit("mensajes", messages);
    });
    socket.on("disconnect", function() {
        contador--;
        mensajeServidor("Se ha desconectado alguien. (" + contador + " usuarios).");
    })
}

function mensajeServidor(mensaje) {
    messages.push({
        author: "Servidor",
        text: mensaje
    });
    io.sockets.emit("mensajes", messages);
}

server.listen(8080, function() {
    console.log("Servidor escuchando en http://localhost:8080");
})