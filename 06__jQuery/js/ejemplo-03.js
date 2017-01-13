$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("tr").click(presionFila);
}

function presionFila() {
    let filaActual = $(this);
    filaActual.addClass("rojo");
}