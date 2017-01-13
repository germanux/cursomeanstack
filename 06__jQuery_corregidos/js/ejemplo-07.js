$(document).ready(initializeEvents);

var $recuadro;

function initializeEvents() {
    $(document).mousemove(moveDetected);
    $recuadro = $("#recuadro");
}

function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);

    $recuadro.css({
        "top": event.clientY + "px",
        "left": event.clientX + "px",
        "position": "absolute"
    });
    /* $recuadro.css({
        "margin-top": event.clientY + "px",
        "margin-left": event.clientX + "px"
    }); */
}