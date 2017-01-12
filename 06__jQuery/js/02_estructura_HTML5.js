$(document).ready(function() {
    // $("#relleno").html();
    var $headers = $("header");
    var $verdes = $(".verde");

    var opciones = {
        html: "<li>VVVVVVVV</li>",
        class: "verde",
        href: "http://google.es"
    }
    var $a = $("<a/>", opciones);
    $li = $("#myList").append($a);





    // $headers.not($verdes).first().html("<H1>NUEVO CONTENIDO</H1><H2>NUEVO CONTENIDO H2</H2>");
    //$("p").parent().html("QUITANDO CONTENIDO");
    // $("article").eq(1).children().css("color", "brown");
    //var texto = document.createTextNode("Nuevo nodo texto");
    //$("article").eq(1).contents().get(1).appendChild(texto);
    //$li = $("#myList li:first").appendTo("#myList");
    var nuevoNodoLi = $("<li>Nuevo nodo lista</li>");
    /*$("#myList").append($("#myList li:first"))
.append(nuevoNodoLi);*/
    /* var contador = 0;
    $headers.first().each(function() {
        $(this).append("¡ES PRIMERO HEADER! " + contador++);
    });
    $headers.last().each(function() {
        $(this).append("¡ES ULTIMO HEADER! " + contador++);
}); */


    // $li = $("#myList li:first").clone().appendTo("#myList");
    $("#myList li").eq(0).click(function() {
        $("input").attr("type", "text");
    });
    $("#myList li").eq(1).click(function() {
        $("input").attr("type", "button");
    });
    $("#myList li").eq(2).click(function() {
        $("input").attr("type", "number");
    });
    /*
        var li3 = $("#myList li").eq(2).detach();
        $("#myList").click(function() {
            $("footer").last().append(li3);
    })*/

});