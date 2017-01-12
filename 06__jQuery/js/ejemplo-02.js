$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#titulo1").click(presionTitulo1);
    $("#titulo2").click(presionTitulo2);
}

function presionTitulo1() {
    var mi_titulo = $(this);
    mi_titulo.css("color", "#ff0000");
    mi_titulo.css("background-color", "#ffff00");
    mi_titulo.css("font-family", "Courier");
}

function presionTitulo2() {
    var mi_titulo = $(this);
    mi_titulo.css("color", "#ffff00");
    mi_titulo.css("background-color", "#ff0000");
    mi_titulo.css("font-family", "Arial");
}