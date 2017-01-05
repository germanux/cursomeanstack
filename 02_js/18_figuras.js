var Figura = function(padreDom, nombre, callBackAlCrearse) {
        if (padreDom) {
            // Añadimos el FORM al padreDom
            this.formCalc = document.createElement("form");
            padreDom.appendChild(this.formCalc);
            // Las cajas de texto de entrada
            this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
            this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
            // La caja con el resultado
            this.resultado = CreadorDOM.addInput(this.formCalc, "Área", "resultado");
            // El botón de calcular
            CreadorDOM.addButton(this, " Calcular Área " + nombre, this.calculaArea);
            callBackAlCrearse();
        }
    }
    // Función para heredar de figura
Figura.Heredar = function(funCalculaArea, nombre, callBackAlCrearse) {
    var nombreFun = nombre;
    var callBackAlCrearseFuncion = callBackAlCrearse;
    var functionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun, callBackAlCrearseFuncion);
    }
    functionConstructora.prototype = new Figura;
    functionConstructora.prototype.calculaArea = funCalculaArea;
    return functionConstructora;
}

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

var Rectangulo = Figura.Heredar(calcularAreaRectangulo, "Rectangulo", MiFuncionCallBackGenerica);
var Triangulo = Figura.Heredar(calcularAreaTriangulo, "Triangulo", MiFuncionCallBackGenerica);
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", MiFuncionCallBackGenerica);

function MiFuncionCallBackGenerica() {
    alert("Yeeeeeepaaaaah, se ha creado!!");
}