import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSnippetComponent } from './create-snippet/create-snippet.component';
const routes: Routes = [
 
    {
      path:'',
      component:CreateSnippetComponent
    },
    
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SnippetRoutingModule { }