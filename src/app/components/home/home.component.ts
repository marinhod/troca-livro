import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../../models/livro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private livros: Livro[];
  private error: any;
  private sub: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private livroService: LivroService) {}
  
  getLivros(): void {
    this.livroService
      .getLista()
      .subscribe(
        livros => (this.livros = livros),
        error => (this.error = error)
      )
  }

  ngOnInit() {
    this.getLivros();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
