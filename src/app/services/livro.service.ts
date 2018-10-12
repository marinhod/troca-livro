import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';
import { BASE_URL } from '../../../env-config';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private URL = `${BASE_URL}/livro`;

  constructor(private http: HttpClient) {}

  getLivro(slug: string): Observable<Livro> {
    let url: string = `${this.URL}/${slug}`;
    return this.http.get<Livro>(url);
  }

}
