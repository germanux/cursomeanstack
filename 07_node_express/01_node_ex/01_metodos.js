var miExpress = require("express");
// Instanciar
var app = miExpress();

var aResponder = (request, response) => {
    console.log("Acceso a la petición, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
}

app.get("/", aResponder);
app.post("/", aResponder);
app.delete("/", aResponder);
app.all("/paratodos", aResponder);
app.all("/enotrolado", aResponder);

app.listen(9000);

console.log("Servidor express lanzado");