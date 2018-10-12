import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private URL = 'http://localhost:3000/api/v1/livro';

  constructor(private http: HttpClient) {}

  get(slug: string): Observable<Livro> {
    let url: string = `${this.URL}/${slug}`;
    return this.http.get<Livro>(url);
  }

}
