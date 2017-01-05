var FiguraControlador = function(vistaFigura, modeloCalculador) {
    var vista = vistaFigura;
    var modelo = modeloCalculador;

    vistaFigura.calculaArea = function(ancho, alto) {
        var areaCalculada = modelo.calcularDeVerdadArea(ancho, alto);
        vista.mostrarArea(areaCalculada);
    }
    vistaFigura.calculaPerimetro = function(ancho, alto) {
        var perimetroCalculado = modelo.calcularDeVerdadPerimetro(ancho, alto);
        vista.mostrarPerimetro(perimetroCalculado);
    }
}