var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");

var nuevaFactoria = new FactoriaFiguras();

var opTrianguloV2 = { padreDOM: padreCalcTriangulo, tipoVista: "v2", tipoFigura: "triangulo" };
var opElipseNormal = { padreDOM: padreCalcTriangulo, tipoFigura: "elipse" };
var opElipseV2 = { padreDOM: padreCalcTriangulo, tipoVista: "v2", tipoFigura: "elipse" };

nuevaFactoria.crearControlFigura({ padreDOM: padreCalcRectangulo }); // Controlador Rectangulo con vista normal
nuevaFactoria.crearControlFigura({ padreDOM: padreCalcRectangulo, tipoVista: "v2" }); // Controlador Rectangulo con vista normal
nuevaFactoria.crearControlFigura({ padreDOM: padreCalcTriangulo, tipoFigura: "triangulo" }); // Controlador Rectangulo con vista normal
nuevaFactoria.crearControlFigura(opElipseNormal); // Controlador Rectangulo con vista normal
nuevaFactoria.crearControlFigura(opElipseNormal); // Controlador Rectangulo con vista normal
nuevaFactoria.crearControlFigura(opElipseV2); // Controlador Rectangulo con vista normal
// Nuevo Rectangulo: