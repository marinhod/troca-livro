import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { BASE_URL } from '../../../env-config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = `${BASE_URL}/usuario`;

  constructor(private http: HttpClient) {}

  getUsuario(slug: string): Observable<Usuario> {
    let url: string = `${this.URL}/${slug}`;
    return this.http.get<Usuario>(url);
  }

}
