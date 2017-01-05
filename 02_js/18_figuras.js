var Figura = function(padreDom, nombre, callBackAlCrearse, callBKAlCalcularse) {
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
            this.callBKAlCalcularse = callBKAlCalcularse;
            callBackAlCrearse("Todo correcto", "Que sí coño, que todo correcto!");
        }
    }
    // Función para heredar de figura
Figura.Heredar = function(funCalculaArea, nombre, callBackAlCrearse, callBKAlCalcularse) {
    var nombreFun = nombre;
    var callBackAlCrearseFuncion = callBackAlCrearse;
    var callBKAlCalcularseFuncion = callBKAlCalcularse;

    var functionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun, callBackAlCrearseFuncion, callBKAlCalcularseFuncion);
    }
    functionConstructora.prototype = new Figura;
    functionConstructora.prototype.calculaArea = funCalculaArea;
    return functionConstructora;
}

function calcularAreaRectangulo() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.callBKAlCalcularse("calcularAreaRectangulo!");
};

function calcularAreaTriangulo() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.callBKAlCalcularse("calcularAreaTriangulo PRIMERA VEZ!");
    this.callBKAlCalcularse("calcularAreaTriangulo Y OTRA!");
}

function calculaAreaElipse() {
    this.resultado.value = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) *
        Math.PI;
}

function callBKAlCalcularseRectangulo(mensaje) {
    alert("AIBA! Se ha calculado el Rectangulo con " + mensaje);
}
var Rectangulo = Figura.Heredar(calcularAreaRectangulo, "Rectangulo", MiFuncionCallBackGenerica, callBKAlCalcularseRectangulo);
var Triangulo = Figura.Heredar(calcularAreaTriangulo, "Triangulo", MiFuncionCallBackGenerica,
    function(mensaje) { alert("AIIIIBA! Pues también el Triangulo con " + mensaje); });
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", MiFuncionCallBackElipse);

function MiFuncionCallBackGenerica(mensaje_1, mensaje_2) {
    alert("Yeeeeeepaaaaah, se ha creado!! \n" + mensaje_1 + "\n" + mensaje_2);
}

function MiFuncionCallBackElipse(mensaje_1, mensaje_2) {
    alert("Mi puta elipse, con perdón, se ha creado!! \n" + mensaje_1 + "\n" + mensaje_2);
}