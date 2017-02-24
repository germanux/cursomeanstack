import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-comp',
  templateUrl: './customer-comp.component.html',
  styleUrls: ['./customer-comp.component.css'],
  providers: [CustomerService]
})
export class CustomerCompComponent implements OnInit {

  customer:   Customer;  
  customServ: CustomerService;

  constructor(customerServ : CustomerService) {
    this.customServ = customerServ;
   }

  ngOnInit() {
    this.customer = new Customer();
  }
  enviar() {
    this.customServ.enviar(this.customer);
  }
}
