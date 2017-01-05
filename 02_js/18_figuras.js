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

function calcularPerimetroRectangulo() {
    this.perimetro.value = parseInt(this.alto.value) * 2 +
        parseInt(this.ancho.value) * 2;
};

function calcularPerimetroTrianguloIsosceles() {
    this.perimetro.value = parseInt(this.alto.value) * 2 +
        parseInt(this.ancho.value);
}

function calcularPerimetroElipse() {
    // Muy chungo de calcular: https://www.disfrutalasmatematicas.com/geometria/elipse-perimetro.html
    this.perimetro.value = Math.PI * 2 * Math.sqrt(parseInt(this.alto.value) * parseInt(this.alto.value) +
        (parseInt(this.ancho.value) * parseInt(this.ancho.value)) / 2);
}
var Rectangulo = Figura.Heredar(calcularAreaRectangulo, calcularPerimetroRectangulo, "Rectangulo");
var Triangulo = Figura.Heredar(calcularAreaTriangulo, calcularPerimetroTrianguloIsosceles, "Triangulo");
var Elipse = Figura.Heredar(calculaAreaElipse, calcularPerimetroElipse, "Elipse");