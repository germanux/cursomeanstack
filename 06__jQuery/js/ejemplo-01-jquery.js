$(document).ready(inicializaEventosConJQuery);
function presionarBotonConJquery(){
    alert("Botón jQuery pulsado ");
}
function inicializaEventosConJQuery(){
    $("#botonjquery1").click(presionarBotonConJquery);
    $("#botonjquery2").click(presionarBotonConJquery);
}