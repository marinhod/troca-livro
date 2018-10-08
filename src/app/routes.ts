import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

export const appRoutes: Routes = [
    { path: 'usuario/:slug', component: UsuarioComponent }
];
