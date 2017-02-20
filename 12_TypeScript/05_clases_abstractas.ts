abstract class Geometria{
    static totalGeometrias: number = 0;
    base: number;
    altura: number;

    constructor (b: number, a: number) {
        this.base = b;
        this.altura = a;
        Geometria.totalGeometrias++;
    }  
    abstract calulaArea() : number;
}
class Rectangulo extends Geometria {
    constructor (b: number, a: number) {
        super(b, a);
    }  
    calulaArea() : number {
        return this.base *this.altura;
    }
}
class Triangulo extends Geometria {

    calulaArea() : number {
        return this.base *this.altura / 2;
    }
}
let rect : Geometria = new Rectangulo(10, 20);
let tri : Geometria = new Triangulo(10, 20);
// let geo : Geometria = new Geometria(10, 20);

console.log("Rectangulo area: " + rect.calulaArea());
console.log("Triangulo area: " + tri.calulaArea());