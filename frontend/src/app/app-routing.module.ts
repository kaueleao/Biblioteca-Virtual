import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LivrosCrudComponent} from './views/livros-crud/livros-crud.component';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
