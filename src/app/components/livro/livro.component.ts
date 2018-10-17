import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../../models/livro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { UsuarioService } from '../../services/usuario.service';
import { CURRENT_USER } from 'env-config';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  private livro: Livro;
  private error: any;
  private slug: string;
  private sub: any;
  private descricaoCompleta: boolean;
  private currentUser: string;
  private temLivro: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private livroService: LivroService,
    private usuarioService: UsuarioService) {
      this.descricaoCompleta = false;
      this.temLivro = false;
      this.currentUser = CURRENT_USER;
    }
  
  getLivro(slug: string): void {
    this.livroService
      .getLivro(slug)
      .subscribe(
        item => (this.livro = item),
        error => (this.error = error),
        () => this.verificaSeTemLivro()
      )
  }
  
  toggleDescricao(): void {
    this.descricaoCompleta = !this.descricaoCompleta;
  }

  addLivro(livroSlug): void {
    this.usuarioService.addLivro(this.currentUser, livroSlug)
      .subscribe(
        usuario => this.livro.usuarios.push(usuario),
        error => console.log(error),
        () => console.log("==")
      );
  }

  getSlug(): void {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }

  verificaSeTemLivro() {
    for (const key in this.livro.usuarios) {
      if (this.livro.usuarios[key].slug === this.currentUser) {
        this.temLivro = true;
      }
    }
  }

  removeLivro(livroSlug: string) {
    this.usuarioService.removeLivro(this.currentUser, livroSlug)
      .subscribe(
        usuario => this.livro.usuarios.splice(this.livro.usuarios.indexOf(usuario), 1),
        error => console.log(error),
        () => console.log("==")
      );
  }
  // list.splice( list.indexOf('foo'), 1 );
  ngOnInit() {
    this.getSlug();
    this.getLivro(this.slug);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
