import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from './../livro.service';

@Component({
  selector: 'app-livro-login',
  templateUrl: './livro-login.component.html',
  styleUrls: ['./livro-login.component.css']
})
export class LivroLoginComponent implements OnInit {

  usuario: string | undefined;
  senha: string | undefined;

  constructor(private router:Router, private LivroService: LivroService) { }

  ngOnInit(): void {
  }


  fazerLogin(){
    
    if(this.usuario == "biblioteca" && this.senha == "admin123") // Usuário administrador
    {
      this.router.navigate(['/home'])
      this.LivroService.showMenssage('Login Efetuado!'); 
    }
    
    else if(this.usuario == "aluno" && this.senha == "aluno") // Usuário alunos
    {
      this.router.navigate(['/livros/consulta'])
      this.LivroService.showMenssage('Login Efetuado!');
    }
    
    else{
      this.LivroService.showMenssage('Usuário e/ou Senha Errados!');
    }
    
  }
  

}
