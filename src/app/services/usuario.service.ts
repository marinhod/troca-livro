import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = 'http://localhost:3000/api/v1/usuario';

  constructor(private http: HttpClient) {}

  get(slug: string): Observable<Usuario> {
    let url: string = `${this.URL}/${slug}`;
    return this.http.get<Usuario>(url);
  }

}
