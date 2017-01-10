var FiguraControlador = function(vistaFigura, modeloCalculador) {
    vistaFigura.controlador = this;
    this.vista = vistaFigura;
    this.modelo = modeloCalculador;
    this.modelo.registrar(this);
}
FiguraControlador.prototype.calculaArea = function(ancho, alto) {
    this.modelo.calcularDeVerdadArea(ancho, alto);
}
FiguraControlador.prototype.calculaPerimetro = function(ancho, alto) {
    this.modelo.calcularDeVerdadPerimetro(ancho, alto);
}
FiguraControlador.prototype.calculaVolumen = function(ancho, alto, profundidad) {
    this.modelo.calcularDeVerdadVolumen(ancho, alto, profundidad);
}
FiguraControlador.prototype.notificar = function(figura, propiedad, valAntiguo, valNuevo) {
    switch (propiedad) {
        case "area":
            this.vista.mostrarArea(valNuevo);
            break;
        case "perimetro":
            this.vista.mostrarPerimetro(valNuevo);
            break;
        case "volumen":
            this.vista.mostrarVolumen(valNuevo);
            break;
    }
    alert("Antes el " + propiedad + " de " + figura + " era " + valAntiguo + " y ahora es " + valNuevo);
}