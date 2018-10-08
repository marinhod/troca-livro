import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LivroComponent } from './components/livro/livro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario/:slug', component: UsuarioComponent },
    { path: 'livro/:slug', component: LivroComponent }
];
