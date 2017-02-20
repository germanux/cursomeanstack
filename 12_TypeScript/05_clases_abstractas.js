var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Geometria = (function () {
    function Geometria(b, a) {
        this.base = b;
        this.altura = a;
        Geometria.totalGeometrias++;
    }
    return Geometria;
}());
Geometria.totalGeometrias = 0;
var Rectangulo = (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(b, a) {
        return _super.call(this, b, a) || this;
    }
    Rectangulo.prototype.calulaArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Geometria));
var Triangulo = (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangulo.prototype.calulaArea = function () {
        return this.base * this.altura / 2;
    };
    return Triangulo;
}(Geometria));
var rect = new Rectangulo(10, 20);
var tri = new Triangulo(10, 20);
// let geo : Geometria = new Geometria(10, 20);
console.log("Rectangulo area: " + rect.calulaArea());
console.log("Triangulo area: " + tri.calulaArea());
