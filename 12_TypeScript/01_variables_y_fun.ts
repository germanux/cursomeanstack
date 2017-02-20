let variable: number;
// string, 
let bool: boolean;
// variable = "una cadena";
bool = true;
let cadena = "una cadena que si";
console.log(cadena);

let miUnion : number | string | boolean;
miUnion = "Puede ser cadena";
// o numero
miUnion = 3434;
miUnion = false; // No puede ser

interface Tiempo {
    dia: number,
    mes: number,
    anio: number
}
var miCumple : Tiempo = {dia: 7, mes: 10, anio: 1982};
console.log("El año de mi cumple: " + miCumple.anio);
let variableASaberQueContiene : any;
variableASaberQueContiene = 34;
variableASaberQueContiene = "kjkj";

// VER RANGOS
function concatenar(texto1: string, texto2) {
    let resultado: string = texto1 +texto2;
    return resultado;    
}
console.log(concatenar("3434", "bbbbb"));
function cumplirAnio(tiempo:Tiempo) {
    tiempo.anio++;
}
cumplirAnio(miCumple);
console.log("El año de mi cumple: " + miCumple.anio);

function recibeEnumerado(param : "cadena 1" | "cadena 2" | "cadena 3") {
    console.log(param);
}
recibeEnumerado("cadena 2");
//recibeEnumerado("cadena 4"); // este no deja
