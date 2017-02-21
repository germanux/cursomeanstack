function invertir<T> (elementos: T[]): T[] {
    let invertido: T[] = [];
    for(let posicion = 0, posicionInvertido = elementos.length -1 ; 
        posicion < elementos.length;
        posicion++,posicionInvertido-- ){
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}

let arrayOriginal = ["clientes","clientes2"];

let textosInvertidos :string[] = invertir<string>(arrayOriginal);

console.log("arrayOriginal: " + arrayOriginal+ "\ntextosInvertidos: " + textosInvertidos);


let arrayOriginal2 = [11, 22, 33, 44, 55];

let arrayInvertido :number[] = invertir<number>(arrayOriginal2);

console.log("arrayOriginal: " + arrayOriginal2+ "\ntextosInvertidos: " + arrayInvertido);

let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    stringify(objeto :T){
        return objeto+"";    
    }
}
var dao1: DAOGenerico<Persona> = null;

class ArrayGenericDAO <T> extends DAOGenerico<T>{
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

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));