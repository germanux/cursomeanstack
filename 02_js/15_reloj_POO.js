// Funcion que, por su estructura interna, es un constructor.
// Será sólo un constructor cuando se le llame con new. 
function NuestroReloj(cajaTexto) {
	// Mediante this, vamos creando los atributos y métodos propios a este objeto
	// Las funciones creadas aquí, se repetiran una vez por cada objeto
	this.timerID = null;
	// Valen las dos maneras de crear un atributo, con . o como diccionario clave valor
	this["timerFuncionando"] = false; // Como el anterior
	// Los parametros se pueden usar como en un constructor de otro lenguaje
	// O como queramos
	this.cajaTexto = cajaTexto;
	// Los atributos del protoype serían como atributos estáticos de otros lenguajes,
	// hay uno para todos los objetos de este tipo (NuestroReloj)
	if (typeof (NuestroReloj.prototype.listaRelojes) == "undefined") {
		// Hasta que no se inicializan, su valor es undefined
		NuestroReloj.prototype.listaRelojes = new Array();
	}	
	// La longitud del array se usa como id.
	this.idReloj = NuestroReloj.prototype.listaRelojes.length;
		
	// A los atributos del prototype se pueden acceder igual por cada objeto, 
	// pero referencian todos al mismo. 
	// NuestroReloj.prototype.listaRelojes === this.listaRelojes
	this.listaRelojes.push(this); // Añade al array común el objeto que estoy creando
	// Por defecto, cuando se llama con new, se devuelve el objeto creado.
	// return this; // Es indiferente
	
	
	// Si devolvemos otra cosa, ya no se devuelve el this, si no esa otra cosa
	// var otroObj = new Object();
	// return otroObj;
}	
NuestroReloj.prototype.pararReloj = function () {	
	if (this.timerFuncionando) {
		clearTimeout(this.timerID);
	}
	this.timerFuncionando = false;
}
NuestroReloj.prototype.comenzarReloj = function () {
	// Con this llamamos a otros métodos del objeto
	this.pararReloj();	
	this.mostrarFechaHora();			
}
NuestroReloj.prototype.mostrarFechaHora = function() {
	var ahora = new Date();			
	var valorHora 	 = "" + ahora.getHours() +":"+ahora.getMinutes()+":"+	ahora.getSeconds() + " (" + this.idReloj + ")";
	this.cajaTexto.value = valorHora;		
	// Llamamos al metodo mostrarFechaHora del elemento cuyo id es el mío,
	// por que el idReloj correspendo con el índice del array
	timerID = setTimeout("NuestroReloj.prototype.listaRelojes[" 
		+ this.idReloj + "].mostrarFechaHora()", 1000);	
	
	this.timerFuncionando = true;
}	