$(document).ready(initializeEvents);

function initializeEvents() {
    // $("#boton1").click(hideBox);
    $("div div").click(hideBox);

    $("#boton2").click(showBox);
}

function hideBox() {
    // $("#descripcion").hide("slow");
    $(this).hide("slow");
}

function showBox() {
    // $("#descripcion").show("fast");
    $("div").show("fast");
}