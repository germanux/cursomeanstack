calculaAreaRectangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.metodoCompartido("EEEEEAH!");
}
calculaAreaTriangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.metodoCompartido("OOOOOH!");
}
calculaAreaElipse = function() {
    this.resultado.value = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) * Math.PI;
    this.metodoCompartido("OOOOOH!");
}

function callbackGenerica(mensaje1, mensaje2) {
    alert("Ya estáaaaa!! \n" + mensaje1 + " - " + mensaje2);
}

function callbackErrorRe(mensaje1, mensaje2) {
    alert("¡¡callbackError Rectangulo!! \n" + mensaje1 + " - " + mensaje2);
    this.kjkj = ""
}

function callbackErrorTri(mensaje1, mensaje2) {
    alert("¡¡callbackError Triangulo!! \n" + mensaje1 + " - " + mensaje2);
    this.kjkj = ""
}
// Rectangulo
var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo", callbackGenerica, callbackErrorRe);
// Triangulo
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo", callbackGenerica, callbackErrorTri);
// Elipse
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", callbackGenerica);