import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/pagina',
    pathMatch:'full'
  },
  {
    path:'pagina',
    component: PaginaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
