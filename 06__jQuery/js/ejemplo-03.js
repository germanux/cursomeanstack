$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("tr").click(presionFila);
}
function presionFila(){
    let filaActual = $(this);
    filaActual.css("background-color","#ff0000");
}