import { Customer } from "../models/customer.model";
import { Injectable } from "@angular/core";
declare var jQuery:any;

@Injectable() //Para poder usarla como servicio, es decir un objeto de solo una instancia
export class CustomerService {

    public enviar(customer: Customer) {
        console.log("funciona");
        jQuery.post("http://localhost:3000/api/customers/", customer,
        function(data, status){
            alert("Data: "+data+"\nStatus"+status);
        });
    }

    public recibir(name: string, callBK: Function){

    }

}