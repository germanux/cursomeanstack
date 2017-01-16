$(document).ready(inicializarEventos);
function inicializarEventos(){
	$("#peticion_ajax").click(peticionAjaxGenerica);
}

function peticionAjaxGenerica() {
	var opcionesAjax = {
		data: {
			nombre: "Ruben", nivel: "medio"
			},
		// type: 		"GET",
		dataType: 	"json",
		url: 		"https://jsonplaceholder.typicode.com/users"
	};
	$.ajax(opcionesAjax)
		.done(peticionCompletada)
		.fail(peticionFallida);
}
function peticionCompletada(datosRecibidos, status, jqXHR) {
	alert ("Peticion completada. Estado: " + status + " : " + datosRecibidos);
	$("#contenido_de_ajax").html(datosRecibidos[1].username);
}
function peticionFallida(jqXHR, status, error) {
	alert("Error al procesar");
	console.log("Estado: " + status);
	console("Error! " + error);
}