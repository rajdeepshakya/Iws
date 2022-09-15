import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './constants/interceptor';
import { CreateSnippetComponent } from './Modules/Snipppet/create-snippet/create-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    //BrowserModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
