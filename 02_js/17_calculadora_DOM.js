var Calculadora = function (padreDom) {
	
	var creaDOM = new CreadorDOM();
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.operadorA = creaDOM.addInput(this.formCalc, "Operando A", "operadorA");
	this.operadorB = creaDOM.addInput(this.formCalc, "Operando B", "operadorB");
	this.addButton(" + ", this.suma);
	this.addButton(" - ", this.resta);
	this.addButton(" * ", this.multiplica);
	this.addButton(" / ", this.division);
	this.resultado = creaDOM.addInput(this.formCalc, "Resultado", "resultado");
}
Calculadora.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
Calculadora.prototype.suma = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   + parseInt(this.operadorB.value);
}
Calculadora.prototype.resta = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   - parseInt(this.operadorB.value);
}
Calculadora.prototype.multiplica = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   * parseInt(this.operadorB.value);
}
Calculadora.prototype.division = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   / parseInt(this.operadorB.value);
}