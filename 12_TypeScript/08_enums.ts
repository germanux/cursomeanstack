enum TipoDeVia {
    Calle = 7,
    Plaza = 3,
    Camino, // Vale 4
    Avenida, // Vale 5
    Carretera // Vale  6
}

console.log("Calle " + TipoDeVia.Calle);
console.log("Avenida " + TipoDeVia.Avenida);

namespace TipoDeVia {
    export function esAvenida(texto: string): TipoDeVia {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
}

namespace TipoDeVia {
    export function esAvenida2(texto: string): TipoDeVia {
        if (texto == "Avenida") {
            return TipoDeVia.Avenida;
        }
    }
}
var miTipoVia: TipoDeVia = TipoDeVia.Calle;

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