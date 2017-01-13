$(document).ready(initializeEvents);
function initializeEvents(){
    $("#buscar").focus(clearValue);
}
function clearValue(){
    $("#buscar").attr("value","");
}