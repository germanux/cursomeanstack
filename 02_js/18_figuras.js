function calcularAreaRectangulo() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
};

function calcularAreaTriangulo() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
}

function calculaAreaElipse() {
    this.resultado.value = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) *
        Math.PI;
}
var Rectangulo = Figura.Heredar(calcularAreaRectangulo, "Rectangulo");
var Triangulo = Figura.Heredar(calcularAreaTriangulo, "Triangulo");
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse");