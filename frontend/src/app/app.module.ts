import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { LivrosCrudComponent } from './views/livros-crud/livros-crud.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LivroReadComponent } from './components/livro/livro-read/livro-read.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { LivroDeleteComponent } from './components/livro/livro-delete/livro-delete.component'; // Componente para o Filtro

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LivrosCrudComponent,
    LivroCreateComponent,
    LivroReadComponent,
    LivroUpdateComponent,
    LivroDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule, // Componente para copiar valores via botão
    Ng2SearchPipeModule // Componente para o Filtro
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
