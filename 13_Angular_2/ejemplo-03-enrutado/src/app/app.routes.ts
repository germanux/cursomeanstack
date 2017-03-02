import { Routes } from '@angular/router'
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch:"full"},
    { path: 'listar', component: ListaLibrosComponent},
    { path: 'consultar/:id', component: ConsultaLibroComponent},
    { path: 'formulario', component: FormularioLibroComponent}
]
