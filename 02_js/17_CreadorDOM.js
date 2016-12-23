function CreadorDOM () {
}
CreadorDOM.prototype.addInput = function(formCalc,texto, nombre) {		
	var texto = document.createTextNode(texto);
	formCalc.appendChild(texto);
	var nuevoInput = document.createElement("input");
	formCalc.appendChild(nuevoInput);
	formCalc.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}