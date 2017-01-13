$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecond);

    $("#buscar").click(buscar);
}

function buscar() {
    $("#listaFiltro").empty();
	
    var textoABuscar = $("#textoFiltro").val();
	
    $("ul:first li:contains(" + textoABuscar + ")").clone().appendTo($("#listaFiltro"));
}

function deleteAll() {
    $("ul:first").empty();
}

function restoreAll() {
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("ul:first").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}

function addLastElement() {
    $("ul:first").append("<li>Agrego un item al final</li>");
}

function addFirstElement() {
    $("ul:first").prepend("<li>Agrego un item al principio</li>");
}

function deleteLastElement() {
    let position = $("ul:first li").length - 1;
    let liToDelete = $("ul:first li").eq(position);
    liToDelete.remove();
}

function deleteFirstElement() {
    $("ul:first li").eq(0).remove();
}

function deleteFirstAndSecond() {
    $("ul:first li:lt(2)").remove();
}

function deletePreAndLast() {
    let position = $("ul:first li").length - 3;
    let liToDelete = $("ul:first li:gt(" + position + ")");
    liToDelete.remove();
}