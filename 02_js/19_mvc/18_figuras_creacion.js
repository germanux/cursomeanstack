var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");

var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
var vistaTriangulo = new FiguraVistaV2(padreCalcTriangulo, "Triangulo");
var vistaElipse = new FiguraVistaV2(padreCalcElipse, "Elipse");
var vistaHuevo = new FiguraVistaV2(padreCalcHuevo, "Huevo");

var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
var controlTriangulo = new FiguraControlador(vistaTriangulo, Modelo.TrianguloEquilatero);
var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlHuevo = new FiguraControlador(vistaHuevo, Modelo.Huevo);