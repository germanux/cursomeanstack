var FiguraVistaV2 = function(padreDom, nombre) {
    if (padreDom) {
        // Añadimos el FORM al padreDom
        this.formCalc = document.createElement("form");
        this.formCalc.appendChild(document.createTextNode("¡ SUPER FORM V2!"));
        this.formCalc.appendChild(document.createElement("BR"));
        padreDom.appendChild(this.formCalc);
        // Las cajas de texto de entrada
        this.ancho = CreadorDOM_V2.addInput(this.formCalc, "ancho", "ancho");
        this.alto = CreadorDOM_V2.addInput(this.formCalc, "alto", "alto");
        // El botón de calcular y la etiqueta de área
        CreadorDOM_V2.addButton(this, " AVANTI " + nombre, this.pulsarCalcularArea);
        this.resultado = document.createElement("span");
        this.resultado.innerHTML = "Aquí irá el resultado";
        this.formCalc.appendChild(this.resultado);
        this.formCalc.appendChild(document.createElement("BR"));
        // El botón de calcular y la etiqueta de perimetro
        CreadorDOM_V2.addButton(this, " PERIMETRO " + nombre, this.pulsarCalcularPerimetro);
        this.perimetro = document.createElement("span");
        this.perimetro.innerHTML = "Aquí irá el perimetro";
        this.formCalc.appendChild(this.perimetro);
        this.formCalc.appendChild(document.createElement("BR"));
        this.formCalc.appendChild(document.createElement("BR"));
    }
}
FiguraVistaV2.prototype.pulsarCalcularArea = FiguraVista.prototype.pulsarCalcularArea;
FiguraVistaV2.prototype.pulsarCalcularPerimetro = FiguraVista.prototype.pulsarCalcularPerimetro;

FiguraVistaV2.prototype.mostrarArea = function(area) {
    this.resultado.innerHTML = "El área es " + area;
}
FiguraVistaV2.prototype.mostrarPerimetro = function(perimetro) {
    this.perimetro.innerHTML = "El perimetro es " + perimetro;
}