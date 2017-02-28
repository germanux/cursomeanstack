import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService] //Lo inyectamos
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  customers: Customer[];
  customerServ: CustomerService;

  //Cuando lo inyecto lo pasa como parametro en el constructor
  constructor(customerServ: CustomerService) {
    this.customerServ = customerServ;
  }

  ngOnInit() {
    this.customer = new Customer();
  }

  enviar() {
    this.customerServ.enviar(this.customer);
  }

  enviarHttp() {
    this.customerServ.enviar(this.customer);
  }

  /*recibir() {
    this.customerServ.recibir(this.customer.name, function(datos){
      alert("Ha fubncionado"+datos);
    });
  }*/

  recibirHttp() {
    console.log("ejecuto");
    this.customerServ.recibir(this.customer.name).subscribe(
      customers => {
        this.customers = customers;
        console.log(customers);
      },
      error => console.error(`Error: ${error}`)
    );
  }

  /*recibir() {
    this.customerServ.recibir().subscribe(
      data => console.log(JSON.stringify(data)),
      error => alert(error),
      () => console.log("Finished")
    );
  }*/
}
