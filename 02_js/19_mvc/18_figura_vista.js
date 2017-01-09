var FiguraVista = function(padreDom, nombre) {
    if (padreDom) {
        // Añadimos el FORM al padreDom
        this.formCalc = document.createElement("form");
        padreDom.appendChild(this.formCalc);
        // Las cajas de texto de entrada
        this.ancho = CreadorDOM.addInput(this.formCalc, "Ancho", "ancho");
        this.alto = CreadorDOM.addInput(this.formCalc, "Alto", "alto");
        this.profundidad = CreadorDOM.addInput(this.formCalc, "Profundidad", "profundidad");
        // La caja con el resultado
        this.formCalc.appendChild(document.createTextNode("Resultados:"));
        this.resultado = CreadorDOM.addInput(this.formCalc, "Área", "resultado");
        this.perimetro = CreadorDOM.addInput(this.formCalc, "Perimetro", "perimetro");
        this.volumen = CreadorDOM.addInput(this.formCalc, "Volumen", "volumen");

        CreadorDOM.addButton(this, " Calcular Área " + nombre, this.pulsarCalcularArea);
        CreadorDOM.addButton(this, " Perímetro     " + nombre, this.pulsarCalcularPerimetro);
        CreadorDOM.addButton(this, " Volumen     " + nombre, this.pulsarCalcularVolumen);
    }
}
FiguraVista.prototype.pulsarCalcularArea = function() {
    this.controlador.calculaArea(parseInt(this.alto.value), parseInt(this.ancho.value));
}
FiguraVista.prototype.pulsarCalcularPerimetro = function() {
    this.controlador.calculaPerimetro(parseInt(this.alto.value), parseInt(this.ancho.value));
}
FiguraVista.prototype.pulsarCalcularVolumen = function() {
    this.controlador.calculaVolumen(parseInt(this.alto.value), parseInt(this.ancho.value), parseInt(this.profundidad.value));
}
FiguraVista.prototype.mostrarArea = function(area) {
    this.resultado.value = area;
}
FiguraVista.prototype.mostrarPerimetro = function(perimetro) {
    this.perimetro.value = perimetro;
}
FiguraVista.prototype.mostrarVolumen = function(volumen) {
    this.volumen.value = volumen;
}