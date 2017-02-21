class Silla {
    nombre: string;
    constructor (nom : string) { this.nombre = nom; }
}
class Sofa {
    nombre: string;
    constructor (nom : string) { this.nombre = nom; }
}
abstract class DAOGenerico2 <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    abstract list():T[];
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO2 <T> extends DAOGenerico2<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    find (indice: number)  : T {
        return this.almacen[indice];
    }
    list():T[] {
        return this.almacen;
    }
}
var daoSilla: DAOGenerico2<Silla> = new ArrayGenericDAO2<Silla>();
var daoSofa: DAOGenerico2<Silla> = new ArrayGenericDAO2<Silla>();

daoSilla.add(new Silla("silla 1"));
daoSilla.add(new Silla("silla 2"));

daoSofa.add(new Sofa("sofa 1"));
daoSofa.add(new Sofa("sofa 2"));

console.log("daoSilla: " + daoSilla.list() + "\n" + daoSofa.list())