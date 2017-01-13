$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(toggleBox);
}
function toggleBox(){
    $("#descripcion").toggle("slow");
}
