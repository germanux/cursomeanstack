// Definiciones de clases

class Persona {
    // Definicion de atributos
    nombre :string;
    apellido1 :string;
    apellido2 :string;
    // Metodo constructor
    constructor(nombre :string, apellido1 :string, apellido2 :string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }    
}
// Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre = "Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/
// Con metodo constructor
let ruben = new Persona( "Ruben","Gomez","Garcia");
console.log(ruben.stringify());

// EJERCICIO: Crea dos objetos Persona más, cada uno con las maneras anteriores, e imprimelos
let luis = new Persona("Luis","Perez","Garcia");
let alberto = new Persona("Alberto","Gomez","Gonzalez");
console.log(luis.stringify());
console.log(alberto.stringify());

// Herencia!
class Ciudadano extends Persona {
    identidad: string;
    constructor(nombre :string,apellido1 :string, apellido2 :string, identidad :string){
        super(nombre,apellido1,apellido2);
        this.identidad = identidad;
    }
    /*constructor(identidad :string){
        super(null,null,null);
        this.identidad = identidad;
    }*/
    // EJERCICIO: Crea un metodo que devuelva el stringify del padre e identidad, y usalo en un objeto ciudadanoKane
    stringify(): string{
        return super.stringify() + " " + this.identidad;
    }    
}
var ciudadanoKane = new Ciudadano("Ruben","Gomez","Garcia","1");
console.log(ciudadanoKane.stringify());
var otraPersona: Persona = ciudadanoKane;
console.log(otraPersona.stringify());
