import { Component } from '@angular/core';
//Enlazamos el componente customer al componente raiz
//import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //directives: [CustomerComponent]
})
export class AppComponent {
  title = 'Node Hoteles';
}
