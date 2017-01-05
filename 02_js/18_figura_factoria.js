function FactoriaFiguras() {}

FactoriaFiguras.prototype.vistaFigura = FiguraVista;
FactoriaFiguras.prototype.modeloFigura = Modelo.Rectangulo;

FactoriaFiguras.prototype.crearControlFigura = function(opciones) {

    switch (opciones.tipoVista) {
        case "v2":
            this.vistaFigura = FiguraVistaV2;
            break;
        default:
            this.vistaFigura = FiguraVista;
            break;
    }
    var nuevaVista = new this.vistaFigura(opciones.padreDOM, opciones.tipoFigura);

    switch (opciones.tipoFigura) {
        case "rectangulo":
            this.modeloFigura = Modelo.Rectangulo;
            break;
        case "triangulo":
            this.modeloFigura = Modelo.Rectangulo;
            break;
        case "elipse":
            this.modeloFigura = Modelo.Elipse;
            break;
            // por defecto es de tipo Rectangulo
    }
    return new FiguraControlador(nuevaVista, this.modeloFigura);
}