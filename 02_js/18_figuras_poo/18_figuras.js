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
    // Rectangulo
var Rectangulo = Figurar.Heredar(calculaAreaRectangulo, "Rectangulo");
// Triangulo
var Triangulo = Figurar.HeredarFigurar(calculaAreaTriangulo, "Triangulo");

var Elipse = Figurar.HeredarFigurar(calculaAreaElipse, "Elipse");