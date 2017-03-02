import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Libro } from '../libro';

@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.css']
})
export class ConsultaLibroComponent implements OnInit {

  private libro: Libro;
  constructor(
    private route: ActivatedRoute
    ) {
      this.libro = new Libro(0,"");
     }

  ngOnInit() {
    // Aqui es perfecto para obtener informacion a mostrar
    this.libro.id = this.route.snapshot.params['id']
  }

}
