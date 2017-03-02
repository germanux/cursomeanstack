var passport = require("passport");
var EstrategiaHTTP = require("passport-http").BasicStrategy;

var iniciarModulo = function(app, urlLogin) {
    passport.use(new EstrategiaHTTP(callbackAutorizar));
    app.use(module.exports.agregarCabeceras);

    app.get(
        urlLogin,
        autenticar(),
        (request, response) => {
            console.log("Acceso permitido");
            response.send("Acceso concedido");
        });

    return module.exports;
}
var agregarCabeceras = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header.origin);
    res.header("Access-Control-Allow-Headers", "Authorization");
    next();
}
var autenticar = function() {
    return passport.authenticate("basic", { session: false });
}
var callbackAutorizar = function(nombreUsuario, password, done) {
    console.log("nombre de usario: " + nombreUsuario + ", password: " + password);
    if (nombreUsuario == "edgar" && password == "edgar") {
        module.exports.autenticado = true;
        done(null, true);
    } else {
        done(null, false);
    }
}
module.exports = iniciarModulo;
iniciarModulo.agregarCabeceras = agregarCabeceras;
module.exports.autenticado = false;