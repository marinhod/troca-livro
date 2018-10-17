import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { BASE_URL } from '../../../env-config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = `${BASE_URL}/usuario`;
  private contentType = 'application/json';

  constructor(private http: HttpClient) {}

  getUsuario(slug: string): Observable<Usuario> {
    let url: string = `${this.URL}/${slug}`;
    return this.http.get<Usuario>(url);
  }

  addLivro(usuarioSlug: string, livroSlug: string): Observable<Usuario> {
    let url = `${this.URL}/edita-livros`;
    var json = JSON.stringify({
      usuario: usuarioSlug, 
      livro: livroSlug,
      opcao: 'insere'
    });
    var params = json;
    return this.http.post<Usuario>(
      url, 
      params, 
      { headers: new HttpHeaders({ 
        'Content-Type':  this.contentType 
      })}
    );
  }

  removeLivro(usuarioSlug: string, livroSlug: string): Observable<Usuario> {
    let url = `${this.URL}/edita-livros`;
    var json = JSON.stringify({
      usuario: usuarioSlug, 
      livro: livroSlug,
      opcao: 'remove'
    });
    var params = json;
    return this.http.post<Usuario>(
      url, 
      params, 
      { headers: new HttpHeaders({ 
        'Content-Type':  this.contentType 
      })}
    );
  }
  
}
