$(document).ready(initializeEvents);

function initializeEvents() {
    $("input[type='text']").each(setAzul);
	
    $("input[type='text']").focus(setfocus);
    $("input[type='text']").blur(setBlur);
	
}

function setfocus() {
    $(this).css("color", "#f00");
}

function setBlur() {
    setAzul(0, this);
}

function setAzul(index, input) {
	// input.id.substring(4) = quinta del id del input
    var numBoton = parseInt(input.id.substring(4)) - 1;
    var tonalidad_azul = (numBoton * 4 + 2).toString(16);
    $(input).css("color", "#00" + tonalidad_azul);

}