var express = require("express");
var app = express();
var aResponder = (request, response) => {
    console.log("Acceso a la petición, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
}

function funcionIntermedia(request, response, next) {
    console.log("Inter ejecutando a las: " + new Date());
    next();
};

function funcionInterFin(request, response, next) {

    console.log("FIN ejecutando a las: " + new Date());
    // response.send("fin");
    next();
}
app.get("/concatenando", [funcionIntermedia, funcionInterFin, funcionIntermedia, (request, response) => { response.send("Enviado"); }]);

app.route("/conroute")
    .get(aResponder)
    .put(aResponder)
    .delete(aResponder)
    .post(aResponder);

app.listen(9000);


console.log("Servidor iniciado");