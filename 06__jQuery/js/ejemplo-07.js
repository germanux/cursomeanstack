$(document).ready(initializeEvents);
function initializeEvents(){
    $(document).mousemove(moveDetected);
}
function moveDetected(event){
    $("#coordx").text("Coordenada x="+event.clientX);
    $("#coordy").text("Coordenada y="+event.clientY);
}