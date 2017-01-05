var Figura = function(padreDom, nombreFigura) {

    if (typeof padreDom == "undefined")
        return;
    // Añadimos el FORM al padreDom
    this.formCalc = document.createElement("form");
    padreDom.appendChild(this.formCalc);
    // Y los botones
    this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
    this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
    this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
    // El botón de calcular
    CreadorDOM.addButton(this, " Calcular Área " + nombreFigura, this.calculaArea);
    // Y la caja con el resultado

}
Figura.prototype.metodoCompartido = function(loquesea) {
    alert("METODO COMPARTIDO " + loquesea);
}

function HeredarFigurar(funCalculaArea, nombre) {
    var nombreFun = nombre;
    var funcionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun); // super
    }
    funcionConstructora.prototype = new Figura();
    funcionConstructora.prototype.calculaArea = funCalculaArea;

    return funcionConstructora;
}
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
var Rectangulo = HeredarFigurar(calculaAreaRectangulo, "Rectangulo");
// Triangulo
var Triangulo = HeredarFigurar(calculaAreaTriangulo, "Triangulo");

var Elipse = HeredarFigurar(calculaAreaElipse, "Elipse");