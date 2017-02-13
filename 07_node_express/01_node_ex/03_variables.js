var miExpress = require("express");
// Instanciar
var app = miExpress();

app.get("/reservas/ere*pil", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method);
});

app.listen(9000);

console.log("Servidor express lanzado");