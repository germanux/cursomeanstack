import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { AppRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    ConsultaLibroComponent,
    FormularioLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
