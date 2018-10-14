import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../../models/livro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

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
  private capaDefault: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private livroService: LivroService) {
      this.capaDefault = '/assets/livro-default.png';
    }
  
  getLivro(slug: string): void {
    this.livroService
      .getLivro(slug)
      .subscribe(
        item => (this.livro = item),
        error => (this.error = error)
      )
  }

  getSlug(): void {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }

  ngOnInit() {
    this.getSlug();
    this.getLivro(this.slug);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
