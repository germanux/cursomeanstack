$(document).ready(inicializaEventosConJQuery);

function presionarBotonConJquery() {
    alert("Botón jQuery pulsado ");
}

function inicializaEventosConJQuery() {
    $(":button").click(presionarBotonConJquery);
}