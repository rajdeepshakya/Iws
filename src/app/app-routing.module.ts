import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstant } from './constants/route.constant';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./Modules/Snipppet/snippet.module`).then((m) => m.SnippetModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
