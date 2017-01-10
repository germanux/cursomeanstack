function FactoriaFiguras() {}
FactoriaFiguras.prototype.vistaFigura = FiguraVista;
FactoriaFiguras.prototype.modeloFigura = Modelo.Rectangulo;
// opciones.tipoVista, tipoFigura
FactoriaFiguras.prototype.crearFigura = function(opciones) {
    switch (opciones.tipoVista) {
        case "v2":
            this.vistaFigura = FiguraVistaV2;
            break;
        default:
            this.vistaFigura = FiguraVista;
            break;
    }
    var padreDOM = document.getElementById(opciones.idPadreDom);
    var nuevaVista = new this.vistaFigura(padreDOM, opciones.tipoFigura);
    switch (opciones.tipoFigura) {
        case "rectangulo":
            this.modeloFigura = ConVolumen(Modelo.Rectangulo);
            break;
        case "triangulo":
            this.modeloFigura = Modelo.TrianguloEquilatero;
            break;
        case "elipse":
            this.modeloFigura = Modelo.Elipse;
            break;
        case "huevo":
            this.modeloFigura = Modelo.Huevo;
            break;
    }
    return new FiguraControlador(nuevaVista, this.modeloFigura);
}
ConVolumen = function(modeloFigura) {
    modeloFigura.calcularDeVerdadVolumen = function(ancho, alto, profundidad) {
        var volumenNuevo = modeloFigura.calcularDeVerdadArea(ancho, alto, true) * profundidad;
        Modelo.notificarCambio(modeloFigura.escuchadores, "rectangulo", "volumen", modeloFigura.volumen, volumenNuevo);
        modeloFigura.volumen = volumenNuevo;
    }
    return modeloFigura;
}