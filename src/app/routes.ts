import { Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LivroComponent } from './pages/livro/livro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario/:slug', component: UsuarioComponent },
    { path: 'livro/:slug', component: LivroComponent }
];
