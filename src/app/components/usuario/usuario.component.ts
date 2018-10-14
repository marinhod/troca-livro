import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  private usuario: Usuario;
  private error: any;
  private slug: string;
  private sub: any;
  private fotoDefault: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService) {
      this.fotoDefault = '/assets/perfil-default.png';
    }

  getUsuario(slug: string): void {
    this.usuarioService
      .getUsuario(slug)
      .subscribe(
        item => (this.usuario = item),
        error => (this.error = error)
      );
  }

  getSlug(): void {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }

  ngOnInit() {
    this.getSlug();
    this.getUsuario(this.slug);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
