import { Component } from '@angular/core';
import { CustomerCompComponent } from './customer-comp/customer-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* directives: [CustomerCompComponent]*/  
})
export class AppComponent {
  title = 'Node Hoteles';
}
