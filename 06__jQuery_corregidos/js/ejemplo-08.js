$(document).ready(initializeEvents);

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}
var levantado = false;
var contador = 0;

function downEvent() {
    levantado = true;
    timeID = setInterval(cadaDecima, 100);
    $(this).css("background-color", "#ff0");
}

function upEvent() {
    contador = 0;
    levantado = false;
    clearTimeout(timeID);
    $(this).css("background-color", "#fff");
}

function cadaDecima() {
    contador++;
    if (levantado && contador > 20) {
        alert("¿Necesitas algo?");
    }
}