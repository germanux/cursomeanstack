function invertir<T> (elementos: T[]): T[] {
    let invertido: T[] = [];
    for(let posicion = 0, posicionInvertido = elementos.length -1 ; 
        posicion < elementos.length;
        posicion++,posicionInvertido-- ){
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
let textosInvertidos :string[] = invertir<string>(["clientes","clientes2"]);

let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO <T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    list():T[] {
        return this.almacen;
    }
}

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));
