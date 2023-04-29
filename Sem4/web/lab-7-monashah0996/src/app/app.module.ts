import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Tasklist } from './app.component';

@NgModule({
  declarations: [
    Tasklist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Tasklist]
})
export class AppModule { }
