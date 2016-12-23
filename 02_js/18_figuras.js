var Rectangulo = function (padreDom) {
	
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	CreadorDOM.addButton(this, " AREA ", this.calculaArea);
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
}
Rectangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value);
}

var Triangulo = function (padreDom) {
	
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	CreadorDOM.addButton(this, " AREA ", this.calculaArea);
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
}
Triangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value) / 2;
}