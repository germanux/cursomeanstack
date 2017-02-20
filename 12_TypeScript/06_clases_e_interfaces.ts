interface Geometria{
    base: number;
    altura: number;
}
interface Calculo{

     calulaArea() : number;
}
/*abstract class Geometria{
    static totalGeometrias: number = 0;
    base: number;
    altura: number;

    constructor (b: number, a: number) {
        this.base = b;
        this.altura = a;
        Geometria.totalGeometrias++;
    }  
    abstract calulaArea() : number;
}*/
class Rectangulo implements Geometria, Calculo {
    base: number;
    altura: number;

    constructor (b: number, a: number) {
        this.base = b;
        this.altura = b;
    }  
    calulaArea() : number {
        return this.base *this.altura;
    }
}
class Triangulo implements Geometria, Calculo{
    base: number;
    altura: number;
    constructor (b: number, a: number) {
        this.base = b;
        this.altura = b;
    }  
    calulaArea() : number {
        return this.base *this.altura / 2;
    }
}
let rect : Calculo = new Rectangulo(10, 20);
let tri : Calculo = new Triangulo(10, 20);
// let geo : Geometria = new Geometria(10, 20);

console.log("Rectangulo area: " + rect.calulaArea());
console.log("Triangulo area: " + tri.calulaArea());