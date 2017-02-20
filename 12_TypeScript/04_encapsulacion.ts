class Padre {
    private propPrivada: number = 0;
    public propPublica: number = 0;
    private static totalPersonas    :number = 0;
    protected propProtegida: number = 0;

    dameProPrivada() {
        return this.propPrivada;
    }
    setTotalPersonas(nuevaCantidad: number) : void {
        if (nuevaCantidad < Persona2.totalPersonas) {
            
        } else {
            Persona2.totalPersonas = nuevaCantidad;
        }
    }
    toString() : string {
        return this.propPrivada +" " + this.propPublica;
    }
}
let tuPadre: Padre = new Padre();

tuPadre.dameProPrivada();
tuPadre.propPublica = 34;

class HijoDePadre extends Padre {
    propValor: number;
    constructor(otroValor: number) {
        super();
        // this.propPrivada = 33;
        this.propPublica = 55;
        this.propProtegida = 66;
        this.propValor = otroValor;
    }
    toString() : string {
        return this.propPublica + " "+ this.propValor;
    }
}
let tuHijoSiTienes : HijoDePadre = new HijoDePadre(89);
// tuHijoSiTienes.propProtegida = 7;
// ¿¿Si creo un objeto de tipo Padre y le asigno un objeto de tipo hijo, ¿que pasa si llamamos al método toString()?????


let otroHijo : Padre = new HijoDePadre(89);
console.log(otroHijo.toString());
let miOtroHijo: HijoDePadre = otroHijo;

// Implementa tres clases, geometría, triangulo y rectangulo, en TS, con dos parametros: base y altura y un método calculaArea()
