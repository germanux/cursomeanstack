var Figura = function (padreDom, nombre) {	
	if (padreDom) {
		// Añadimos el FORM al padreDom
		this.formCalc = document.createElement("form");
		padreDom.appendChild(this.formCalc);
		// Las cajas de texto de entrada
		this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
		this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
		// La caja con el resultado
		this.resultado = CreadorDOM.addInput(this.formCalc, "Área", "resultado");
		// El botón de calcular
		CreadorDOM.addButton(this, " Calcular Área " + nombre, this.calculaArea);		
	}	
}
// Función para heredar de figura
Figura.Heredar = function (funCalculaArea, nombre) {
	var nombreFun = nombre;
	var functionConstructora = function (padreDom) {
		Figura.call(this, padreDom, nombreFun);
	}
	functionConstructora.prototype = new Figura;
	functionConstructora.prototype.calculaArea = funCalculaArea;
	return functionConstructora;
}
function calcularAreaRectangulo () {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value);
};
var Rectangulo = Figura.Heredar(calcularAreaRectangulo, "Rectangulo");

function calcularAreaTriangulo() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value) / 2;
}
var Triangulo = Figura.Heredar(calcularAreaTriangulo, "Triangulo");

function calculaAreaElipse() {
	this.resultado.value =   (parseInt(this.alto.value) / 2)
						   * (parseInt(this.ancho.value) / 2)
						   * Math.PI;
}
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse");
