$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}
function hideBox(){
    $("#descripcion").hide("slow");
}
function showBox(){
     $("#descripcion").show("fast");
}