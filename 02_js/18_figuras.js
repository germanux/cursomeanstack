function calcularAreaRectangulo(ancho, alto) { return ancho * alto; };

function calcularAreaTriangulo(ancho, alto) { return ancho * alto / 2; }

function calculaAreaElipse(ancho, alto) { return (ancho / 2) * (alto / 2) * Math.PI; }

function calcularPerimetroRectangulo(ancho, alto) { return alto * 2 + ancho * 2; };

function calcularPerimetroTrianguloIsosceles(ancho, alto) { return alto * 2 + ancho; }

function calcularPerimetroElipse(ancho, alto) {
    return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
}
var Rectangulo = Figura.Heredar(calcularAreaRectangulo, calcularPerimetroRectangulo, "Rectangulo");
var Triangulo = Figura.Heredar(calcularAreaTriangulo, calcularPerimetroTrianguloIsosceles, "Triangulo");
var Elipse = Figura.Heredar(calculaAreaElipse, calcularPerimetroElipse, "Elipse");