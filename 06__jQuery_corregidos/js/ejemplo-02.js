var conjuntosCSS = {
    titulo1: {
        "color": "#ff0000",
        "background-color": "#ffff00",
        "font-family": "Courier"
    },
    titulo2: {
        "color": "#ffff00",
        "background-color": "#ff0000",
        "font-family": "Arial"
    }
}

$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("h1").click(presionTitulo);
}

function presionTitulo() {
    // Con this sin jQuery
    mi_titulo.css(conjuntosCSS[this.id]);

    // Con this con jQuery version array DOM
    let mi_titulo = $(this);
    mi_titulo.css(conjuntosCSS[mi_titulo[0].id]);

    // Con this con jQuery version attr()
    let mi_titulo = $(this);
    mi_titulo.css(conjuntosCSS[mi_titulo.attr("id")]);

    // Con evevent.target
    mi_titulo.css(conjuntosCSS[event.target.id]);
}