$(document).ready(inicializaEventosConJQuery);

function inicializaEventosConJQuery() {
    $("#botonjquery1").click(presionarBotonConJquery);
    $("#botonjquery2").click(presionarBotonConJquery);
}

function presionarBotonConJquery() {
    alert("Botón jQuery pulsado " + this.id);
}