var FiguraV2 = function(padreDom, nombre) {
        if (padreDom) {
            // Añadimos el FORM al padreDom
            this.formCalc = document.createElement("form");
            this.formCalc.appendChild(document.createTextNode("¡ SUPER FORM V2!"));
            this.formCalc.appendChild(document.createElement("BR"));
            padreDom.appendChild(this.formCalc);
            // Las cajas de texto de entrada
            this.ancho = CreadorDOM_V2.addInput(this.formCalc, "ancho", "ancho");
            this.alto = CreadorDOM_V2.addInput(this.formCalc, "alto", "alto");
            // El botón de calcular
            CreadorDOM_V2.addButton(this, " AVANTI " + nombre, this.calculaArea);
            this.formCalc.appendChild(document.createElement("BR"));
            // La caja con el resultado
            this.resultado = document.createElement("span");
            this.resultado.innerHTML = "Aquí irá el resultado"
            this.formCalc.appendChild(this.resultado);
            this.formCalc.appendChild(document.createElement("BR"));
            this.formCalc.appendChild(document.createElement("BR"));
        }
    }
    // Función para heredar de figura
FiguraV2.Heredar = function(funCalculaArea, nombre) {
    var nombreFun = nombre;
    var functionConstructora = function(padreDom) {
        FiguraV2.call(this, padreDom, nombreFun);
    }
    functionConstructora.prototype = new FiguraV2;
    functionConstructora.prototype.calculaArea = funCalculaArea;
    return functionConstructora;
}