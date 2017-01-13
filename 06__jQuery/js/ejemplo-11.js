$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(deleteAll);
   $("#boton2").click(restoreAll);
   $("#boton3").click(addLastElement);
   $("#boton4").click(addFirstElement);
   $("#boton5").click(deleteLastElement);
   $("#boton6").click(deleteFirstElement);
   $("#boton7").click(deleteFirstAndSecond);
}
function deleteAll(){
    $("ul").empty();
}
function restoreAll(){
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}
function addLastElement(){
    $("ul").append("<li>Agrego un item al final</li>");
}
function addFirstElement(){
    $("ul").prepend("<li>Agrego un item al principio</li>");
}
function deleteLastElement(){
    let position = $("li").length-1;
    let liToDelete = $("li").eq(position);
    liToDelete.remove();
}
function deleteFirstElement(){
    $("li").eq(0).remove();
}
function deleteFirstAndSecond(){
    $("li:lt(2)").remove();
}
function deletePreAndLast(){
   let position = $("li").length-3;
   let liToDelete = $("li:gt("+position+")");
   liToDelete.remove();
}