$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(addHtmlForm);
    $("#boton2").click(alertHtmlForm);
    $("#boton2").parent().append('<input type="button" id="boton3" value="Ocultar formulario"/>');
    $("#boton3").click(borrarHtmlForm);
}

function addHtmlForm() {
    $("#formulario").html('<form action="#">Ingrese nombre:<input type="text" name="nombre"/><br/>Contrase&ntilde;a:&nbsp;<input type="password" name="pass"/><br/><input type="submit" value="enviar"/></form>');
}

function alertHtmlForm() {
    alert($("#formulario").html());
}

function borrarHtmlForm() {
    $("#formulario").empty();
}