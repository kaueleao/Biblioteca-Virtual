import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  constructor(private LivroService: LivroService,
    private router:Router ) { }

  ngOnInit(): void {
    
  }

  createLivro(): void {
    this.LivroService.showMenssage('Livro Cadastrado!')
  }

  cancel(): void{
    this.LivroService.showMenssage('Processo Cancelado!')
    this.router.navigate(['/livros'])
  }
}
