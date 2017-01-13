$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(addElementClass);
    $("#boton2").click(removeElementClass);
}
function addElementClass(){
    $("#descripcion").addClass("recuadro");
}
function removeElementClass(){
    $("#descripcion").removeClass("recuadro");
}