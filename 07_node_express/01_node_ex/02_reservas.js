var miExpress = require("express");
// Instanciar
var app = miExpress();
/* Modulo */
var reservas = {
        GET: function() {
            return "{ todas las reservas }";
        },
        POST: function(reserva) {
            console.log("Añadir reserva " + reserva.id + " " + reserva.nombre);
        }
    } // fin Modulo

var aResponder = (request, response) => {
    console.log("Acceso a la petición, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
    eval("reservas." + request.method);
    var metodo = reservas[request.method];
    //metodo()
}
app.all("/reservas", aResponder);

app.listen(9000);

console.log("Servidor express lanzado");