var express = require("express");
var app = express();
var modPassport = require("./modPassport")(app, "/login");


app.get(
    "/admin",
    (request, response) => {
        if (modPassport.autenticado) {
            console.log("NODE HOTELES ADMINISTRACION");
            response.send("NODE HOTELES ADMINISTRACION");
        } else {
            console.log("NO PUEDES PASAR");
            response.send("NO PUEDES PASAR");
        }
    });

console.log("Servidor iniciado");
app.listen(8080);