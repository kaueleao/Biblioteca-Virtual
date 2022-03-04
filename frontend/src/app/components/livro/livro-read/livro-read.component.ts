import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livros: Livro[] | undefined

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    
    this.livroService.read().subscribe(livros => {
      this.livros = livros
      console.log(livros)
    })

  }

}
