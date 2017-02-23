import { Component } from '@angular/core';


class Room {
  id: number;
  isDouble: boolean;

  constructor(id: number, isDouble: boolean) {
    this.id = id;
    this.isDouble = isDouble;
  }

  getType(): string {
    return this.isDouble ? "doble" : "simple";
  }
}

class Customer {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  clone():Customer{
    return new Customer(this.name, this.email);
  }

}


var arrayRooms = [new Room(102, false), new Room(101, true)];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '¡Aplicación funciona!';
  nombre: string = "Alfonsel";
  rooms: Room[] = arrayRooms;
  customers: Customer[] = [];
  customerSelected: Customer = new Customer("","");

  selectCustomer(customer: Customer):void{
    this.customerSelected = customer;
  }

  addCustomer(customer: Customer):void{
    this.customers.push(customer.clone());
    this.customerSelected = new Customer("","");
  }

}
