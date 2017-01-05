var FiguraVista = function(padreDom, nombre) {
    if (padreDom) {
        // Añadimos el FORM al padreDom
        this.formCalc = document.createElement("form");
        padreDom.appendChild(this.formCalc);
        // Las cajas de texto de entrada
        this.ancho = CreadorDOM.addInput(this.formCalc, "Ancho", "ancho");
        this.alto = CreadorDOM.addInput(this.formCalc, "Alto", "alto");
        // La caja con el resultado
        this.resultado = CreadorDOM.addInput(this.formCalc, "Área", "resultado");
        this.perimetro = CreadorDOM.addInput(this.formCalc, "Perimetro", "perimetro");
        this.pulsarCalcularArea = function() {
            this.calculaArea(parseInt(this.alto.value), parseInt(this.ancho.value));
        }
        this.pulsarCalcularPerimetro = function() {
            this.calculaPerimetro(parseInt(this.alto.value), parseInt(this.ancho.value));
        }
        this.mostrarArea = function(area) {
            this.resultado.value = area;
        }
        this.mostrarPerimetro = function(perimetro) {
            this.perimetro.value = perimetro;
        }
        CreadorDOM.addButton(this, " Calcular Área " + nombre, this.pulsarCalcularArea);
        CreadorDOM.addButton(this, " Perímetro     " + nombre, this.pulsarCalcularPerimetro);
    }
}