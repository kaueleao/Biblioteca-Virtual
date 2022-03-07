import { LivroDeleteComponent } from './components/livro/livro-delete/livro-delete.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LivrosCrudComponent} from './views/livros-crud/livros-crud.component';
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "livros",
  component: LivrosCrudComponent
},
{
  path: "livros/create",
  component: LivroCreateComponent
},
{
  path: "livros/update/:id",
  component: LivroUpdateComponent
},
{
  path: "livros/delete/:id",
  component: LivroDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
