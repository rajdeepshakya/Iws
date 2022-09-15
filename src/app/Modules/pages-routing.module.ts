import { NgModule } from '@angular/core';
import { RouterModule, RouterState, Routes } from '@angular/router';
import { RouteConstant } from '../constants/route.constant';


const routes: Routes = [
    {
        path:RouteConstant.home,
       // loadChildren: ()=> import(`./Snipppet/snippet.module`).then((m)=>m.CreateSnippetComponent),
      },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
