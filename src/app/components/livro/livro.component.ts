import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../../models/livro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { UsuarioService } from '../../services/usuario.service';
import { CURRENT_USER } from 'env-config';
import { Usuario } from '../../models/usuario';

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
        usuario => this.addUsuario(usuario),
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

  addUsuario(usuario: Usuario) {
    let novoArray: Usuario[] = this.livro.usuarios;
    novoArray.push(usuario);
    this.livro.usuarios = novoArray;
    this.temLivro = true;
  }

  removeUsuario(usuario: Usuario) {
    let novoArray: Usuario[] = this.livro.usuarios;
    novoArray = novoArray.filter( el => el.slug !== usuario.slug );
    this.livro.usuarios = novoArray;
    this.temLivro = false;
  }

  removeLivro(livroSlug: string) {
    this.usuarioService.removeLivro(this.currentUser, livroSlug)
      .subscribe(
        usuario => this.removeUsuario(usuario),
        error => console.log(error),
        () => console.log("==")
      );
  }

  ngOnInit() {
    this.getSlug();
    this.getLivro(this.slug);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
