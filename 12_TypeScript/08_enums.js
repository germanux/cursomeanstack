var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 7] = "Calle";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 4] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 6] = "Carretera"; // Vale  6
})(TipoDeVia || (TipoDeVia = {}));
console.log("Calle " + TipoDeVia.Calle);
console.log("Avenida " + TipoDeVia.Avenida);
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
(function (TipoDeVia) {
    function esAvenida2(texto) {
        if (texto == "Avenida") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida2 = esAvenida2;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);
var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de via: " + avenida);
switch (avenida) {
    case TipoDeVia.Avenida:
        break;
    case TipoDeVia.Calle:
        break;
    default:
        break;
}
