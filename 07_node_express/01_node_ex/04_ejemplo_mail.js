var miExpress = require("express");
// Instanciar
var app = miExpress();

app.get("/reservas/ere*pil", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method);
});
app.get("/*", (request, response) => {
    var codigoPostal = request.originalUrl.substring(10);
    if (expresionMail.test(codigoPostal)) {
        response.send("Reserva " + request.originalUrl + " Verbo: " + request.method);
    } else {
        response.send("Reservas: No es un email ");
    }
});
app.listen(9000);

console.log("Servidor express lanzado");