import {Customer} from "../models/customer.model";
import {Injectable} from "@angular/core";
declare var jQuery:any;

@Injectable()
export class CustomerService {
    public enviar(customer: Customer) {
        jQuery.post("http://localhost:3000/api/customers/",
            customer,
            function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
    }
    public recibir(name: string, callBK) {
        
    }
}