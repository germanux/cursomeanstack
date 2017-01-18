// NOTA: Para instalar el módulo express indicado en package.json, ejecutar npm install sobre el directorio actual

// Importamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();
var rutas = [
	{	url: "/",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/index.html"); } },
	{	url: "/expresiones",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/01_NG1_expresiones.html"); } },
	{	url: "/directivas",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/02_NG1_directivas.html"); } },
	{	url: "/filtros",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/03_NG1_filtros.html"); } },
	{	url: "/ordenamiento",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/04_NG1_ordenamiento.html"); } },
	{	url: "/controlador",
		funcion:  function (pet, res) {
			res.sendfile(__dirname + "/angular/05_NG1_controlador.html"); } }
];

// Ruteo
for (var i = 0; i < rutas.length; i++) {
	app.get(rutas[i].url, rutas[i].funcion);
}
app.listen(9000);

console.log("Servidor AngularJS lanzado...");