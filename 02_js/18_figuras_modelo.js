var modeloRectangulo = {
    calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
    calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; }
};
var modeloElipse = {
    calcularDeVerdadArea: function(ancho, alto) {
        return (ancho / 2) * (alto / 2) * Math.PI;
    },
    calcularDeVerdadPerimetro: function(ancho, alto) {
        return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
    }
};
var calcularDeVerdadAreaTriangulo = function(ancho, alto) { return ancho * alto / 2; }

var modeloTrianguloEquilatero = {
    calcularDeVerdadArea: calcularDeVerdadAreaTriangulo,
    calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; }
};
var modeloTrianguloIsosceles = {
    calcularDeVerdadArea: calcularDeVerdadAreaTriangulo,
    calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; }
};