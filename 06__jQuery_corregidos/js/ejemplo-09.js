$(document).ready(initializeEvents);

function initializeEvents() {
    $("#buscar").focus(clearValue);
    $("#buscar").blur(resetValue);
}

function clearValue() {
    $("#buscar").attr("value", "");
}

function resetValue() {
    $("#buscar").attr("value", "Buscar ...");
}