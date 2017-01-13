$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}
function hideBox(){
    $("#descripcion").fadeTo("slow",0.5).hide("slow");
}
function showBox(){
     $("#descripcion").show("slow").fadeTo("slow",1);
}