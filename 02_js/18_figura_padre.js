var Figura = function(padreDom, nombre) {
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
                this.resultado.value = this.calculaArea(parseInt(this.alto.value), parseInt(this.ancho.value));
            }
            this.pulsarCalcularPerimetro = function() {
                this.perimetro.value = this.calculaPerimetro(parseInt(this.alto.value), parseInt(this.ancho.value));
            }
            CreadorDOM.addButton(this, " Calcular Área " + nombre, this.pulsarCalcularArea);
            CreadorDOM.addButton(this, " Perímetro     " + nombre, this.pulsarCalcularPerimetro);
        }
    }
    // Función para heredar de figura
Figura.Heredar = function(funCalculaArea, funCalculaPerimetro, nombre) {
    var nombreFun = nombre;

    var functionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun);
    }
    functionConstructora.prototype = new Figura;
    functionConstructora.prototype.calculaArea = funCalculaArea;
    functionConstructora.prototype.calculaPerimetro = funCalculaPerimetro;
    return functionConstructora;
}