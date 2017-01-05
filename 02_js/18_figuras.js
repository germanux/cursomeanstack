var Figura = function (padreDom) {
	
	// Añadimos el FORM al padreDom
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	// Y los botones
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
	// El botón de calcular
	CreadorDOM.addButton(this, " Calcular Área " , this.calculaArea);
	// Y la caja con el resultado
}
var Rectangulo = function (padreDom) {
	Figura.call(this, padreDom);
}
Rectangulo.prototype = Figura;

Rectangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value);
}

var Triangulo = function (padreDom) {
	Figura.call(this, padreDom);
}
Triangulo.prototype = Figura;

Triangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value) / 2;
}