var express = require("express");
var app = express();

app.get("/clientes/:idCliente?/facturas/:idFactura",
    (request, response) => {
        response.send("Resultados : \n\tCliente: " +
            request.params.idCliente + " \n\tFactura: " +
            request.params.idFactura + "\n" +
            JSON.stringify(request.params));
    }
);
app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
});
app.listen(9000);

console.log("Servidor iniciado");