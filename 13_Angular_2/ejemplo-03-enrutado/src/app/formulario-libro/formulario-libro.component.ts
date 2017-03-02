import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Libro } from '../libro';
import { BibliotecaService } from '../biblioteca.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css'],
  providers: [BibliotecaService]
})
export class FormularioLibroComponent implements OnInit {
  private libro: Libro;
  constructor(
      private service: BibliotecaService,
      private router: Router) { }

  ngOnInit() {
    this.libro = new Libro(null,"");
  }
  enviarFormulario(formulario: any){
    console.log(this.libro);
    this.service.addLibro(this.libro).subscribe(
      (datos)=>{
        console.log("Libro guardado " + datos.id)
        this.router.navigateByUrl("/listar")
      },
      (error)=>{
        console.error("Error");
      },
      ()=>{
        console.log("fin");
      })
      
  }
}
