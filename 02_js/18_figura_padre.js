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
            CreadorDOM.addButton(this, " Calcular Área " + nombre, this.calculaArea);
        }
    }
    // Función para heredar de figura
Figura.Heredar = function(funCalculaArea, nombre) {
    var nombreFun = nombre;

    var functionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun);
    }
    functionConstructora.prototype = new Figura;
    functionConstructora.prototype.calculaArea = funCalculaArea;
    return functionConstructora;
}