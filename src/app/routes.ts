import { Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LivroComponent } from './pages/livro/livro.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuario/:slug', component: UsuarioComponent },
    { path: 'livro/:slug', component: LivroComponent }
];
