
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from '../pages-routing.module';
import { CreateSnippetComponent } from './create-snippet/create-snippet.component';
import { SnippetRoutingModule } from './snippet.routing.module';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        CreateSnippetComponent
    ],
    imports: [
        SnippetRoutingModule,CommonModule
    ],
    exports: [CreateSnippetComponent]
})
export class SnippetModule { }