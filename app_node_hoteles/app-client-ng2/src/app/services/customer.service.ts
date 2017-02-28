import { Customer } from "../models/customer.model";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() //Para poder usarla como servicio, es decir un objeto de solo una instancia
export class CustomerService {
    url: string = "http://localhost:3000/api/customers/";
    constructor(private http: Http) { }


    /*get products() {
      return this.http.get(this.url+"/customers")
        .map(response => response.json());
    }*/
    public enviar(customer: Customer) {
        console.log("post");
        //build header options
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //build POST body
        let body = JSON.stringify(customer);

        //send data to server
        this.http
            .post(this.url, body, options)
            .map(response => response.json())
            .subscribe(
            data => console.log('Success uploading the opinion ', data),
            error => console.error("Error: " + error)
            );
    }

    public recibir(name: string) {
        //private url:string = ""
        return this.http.get(this.url+"/name/"+name)
            .map(response => response.json());
    }

}