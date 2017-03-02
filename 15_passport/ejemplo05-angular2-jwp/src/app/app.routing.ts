import { Routes, RouterModule } from '@angular/router'

import { PermisoAccesoService } from './permiso-acceso.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: 'login',component: LoginComponent/*componente de login */},
    {path: '', 
        component:HomeComponent/* componente con info privada*/,
        canActivate: [PermisoAccesoService] },
    {path: '**', redirectTo: ''}

];


export const routing = RouterModule.forRoot(appRoutes)