var CreadorDOM = {
	addInput :  function(formCalc,texto, nombre) {		
		var texto = document.createTextNode(texto);
		formCalc.appendChild(texto);
		var nuevoInput = document.createElement("input");
		formCalc.appendChild(nuevoInput);
		formCalc.appendChild(document.createElement("br"));
		nuevoInput.name = nombre;
		nuevoInput.value = "0";
		nuevoInput.setAttribute("size", "12");
		return nuevoInput;
	},
	addButton : function(objeto, valor, operacion) {		
		var nuevoInput = document.createElement("input");
		objeto.formCalc.appendChild(nuevoInput);
		nuevoInput.value = valor;
		nuevoInput.setAttribute("type", "button");
		nuevoInput.addEventListener("click", operacion.bind(objeto));
		return nuevoInput;
	}
}
