$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}
function hideBox(){
    $("#descripcion").fadeOut("slow");
}
function showBox(){
     $("#descripcion").fadeIn("slow");
}