$(document).ready(initializeEvents);
function initializeEvents(){
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}
function downEvent(){
    $(this).css("background-color","#ff0");
}
function upEvent(){
    $(this).css("background-color","#fff");
}