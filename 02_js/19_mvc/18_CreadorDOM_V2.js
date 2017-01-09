var CreadorDOM_V2 = {
    addInput: function(formCalc, texto, nombre) {
        var texto = document.createTextNode("Modo v2!!!: " + texto + " ");
        formCalc.appendChild(texto);
        var nuevoInput = document.createElement("input");
        formCalc.appendChild(nuevoInput);
        formCalc.appendChild(document.createElement("br"));
        nuevoInput.name = nombre;
        nuevoInput.setAttribute("size", "6");
        nuevoInput.setAttribute("type", "number");
        nuevoInput.setAttribute("required", "required");
        return nuevoInput;
    },
    addButton: function(objeto, valor, operacion) {
        var nuevoInput = document.createElement("input");
        objeto.formCalc.appendChild(nuevoInput);
        nuevoInput.value = valor + " YEAH!";
        nuevoInput.setAttribute("type", "button");
        nuevoInput.addEventListener("click", operacion.bind(objeto));
        return nuevoInput;
    }
}