var express = require("express");
var app = express();

var clientes = [
    { nombre: "Pepito", pedidos: 12 },
    { nombre: "Juanito", pedidos: 23 },
    { nombre: "Felipito", pedidos: 34 },
    { nombre: "Otro", pedidos: 45 },
];
app.get("/clientes/:idCliente",
    (request, response) => {
        var idCliente = request.params.idCliente;
        response.send(JSON.stringify(
            clientes[parseInt(idCliente)]));
    }
);
app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
});
app.listen(9000);

console.log("Servidor iniciado");