$(document).ready(initializeEvents);

function initializeEvents() {
    // $("#boton1").click(hideBox);
    $("div div:odd").click(hideBox);

    $("#boton2").click(showBox);
}

function hideBox() {
    // $("#descripcion").fadeOut("slow");
    $(this).fadeOut("slow");
}

function showBox() {
    // $("#descripcion").fadeIn("slow");
    $("div").fadeIn("slow");
}