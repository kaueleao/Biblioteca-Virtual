import { Livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = "http://localhost:3001/livros"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(this.baseUrl, livro)
  }

  read(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl)
  }
}
