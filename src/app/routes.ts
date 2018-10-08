import { Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LivroComponent } from './pages/livro/livro.component';

export const appRoutes: Routes = [
    { path: 'usuario/:slug', component: UsuarioComponent },
    { path: 'livro/:slug', component: LivroComponent }
];
