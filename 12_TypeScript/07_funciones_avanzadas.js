var funcionAnonimaClasica = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonimaClasica(4, 6));
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonimaClasica(4, 6));
console.log(funcionLambda(4, 6));
var PI = 3.1415927;
// PI = 3434; // No vale
var _a = { variable2: "valor 2", variable1: "valor 1" }, variable1 = _a.variable1, variable2 = _a.variable2;
var obj = { variable_3: "valor 3", variable_4: "valor 4" };
var variable_3 = obj.variable_3, variable_4 = obj.variable_4;
console.log(variable_3);
function dameLosCamposPorConsola(campo1, campo2) {
    var elRestoDeCampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDeCampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("Y ahora mostramos todo:");
    for (var posicion in elRestoDeCampos) {
        console.log("El campo en la pos " + posicion + "\n\t es " + elRestoDeCampos[posicion]);
    }
    for (var _a = 0, elRestoDeCampos_1 = elRestoDeCampos; _a < elRestoDeCampos_1.length; _a++) {
        var campo = elRestoDeCampos_1[_a];
        console.log("El campo " + campo);
    }
}
dameLosCamposPorConsola("Una cadena", 100, "aaaa", 32, 12, true, "otra cadena", "eooo");
