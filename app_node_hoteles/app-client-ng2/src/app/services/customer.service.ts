import {Customer} from "../models/customer.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomerService {
    public enviar(customer: Customer) {
        alert(customer.name);
    }
}