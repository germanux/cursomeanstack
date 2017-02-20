
class Persona2 {
    nombre                  :string;
    apellido1               :string;
    apellido2               :string;
    static totalPersonas    :number = 0;
    static elUltimo: Persona2 = null;

    constructor(nombre: string = "", 
        apellido1: string = "",
        apellido2:string = "") 
        {
        this.nombre     = nombre;
        this.apellido1  = apellido1;
        this.apellido2 = apellido2;  
 
        Persona2.totalPersonas++;
        Persona2.elUltimo = this;
      }
}
Persona2.totalPersonas =5;
let germanMiDoble = new Persona2("Germán", "Caballero", "Rodríguez");
let germanMiDoble2 = new Persona2("Germán", "Caballero", "Rodríguez");
let germanMiDoble3 = new Persona2("Germán", "Caballero", "Rodríguez");

germanMiDoble.nombre = "Otro mini yo";

console.log(" totalPersonas " + Persona2.totalPersonas);
